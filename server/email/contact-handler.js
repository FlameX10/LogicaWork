// Contact-form endpoint logic. Runtime-agnostic: takes a Web `Request`, returns a Web `Response`.
// Used by the Netlify Function (production) and by the Vite dev server (local testing).
import nodemailer from 'nodemailer'
import { leadAcknowledgement, leadNotification } from './templates.js'

const LIMITS = { name: 100, email: 200, company: 150, phone: 40, area: 100, message: 5000 }
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i
const MIN_FILL_MS = 2500 // humans take longer than this to fill the form
const RATE = { windowMs: 10 * 60 * 1000, max: 5 }
const hits = new Map() // per-instance, best-effort rate limit

const json = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } })

const clean = (v, max) =>
  String(v ?? '')
    // eslint-disable-next-line no-control-regex -- stripping control characters is the point
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
    .trim()
    .slice(0, max)

function originAllowed(origin, env) {
  if (!origin) return false
  const allowed = (env.ALLOWED_ORIGINS || 'https://logicawork.com,https://www.logicawork.com').split(',').map((s) => s.trim())
  if (allowed.includes(origin)) return true
  try {
    const { hostname } = new URL(origin)
    return hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.netlify.app')
  } catch {
    return false
  }
}

function rateLimited(ip) {
  const now = Date.now()
  const list = (hits.get(ip) || []).filter((t) => now - t < RATE.windowMs)
  list.push(now)
  hits.set(ip, list)
  return list.length > RATE.max
}

let transporter
function getTransport(env) {
  if (!transporter) {
    const port = Number(env.SMTP_PORT || 465)
    transporter = nodemailer.createTransport({
      // Defaults: the company mailbox on GoDaddy Workspace Email (logicawork.com MX = secureserver.net)
      host: env.SMTP_HOST || 'smtpout.secureserver.net',
      port,
      secure: port === 465,
      auth: { user: env.SMTP_USER || 'ramankerzarkar@logicawork.com', pass: env.SMTP_PASS },
    })
  }
  return transporter
}

export async function handleContact(request, env, { ip = 'unknown', transport } = {}) {
  if (request.method === 'OPTIONS') return new Response(null, { status: 204 })
  if (request.method !== 'POST') return json(405, { ok: false, error: 'Method not allowed' })
  if (!originAllowed(request.headers.get('origin'), env)) return json(403, { ok: false, error: 'Forbidden' })
  if (rateLimited(ip)) return json(429, { ok: false, error: 'Too many requests. Please try again later.' })

  let data
  try {
    data = await request.json()
  } catch {
    return json(400, { ok: false, error: 'Invalid request' })
  }

  // Bots: hidden honeypot filled, or form submitted inhumanly fast → pretend success, send nothing.
  if (data.website || Number(data.elapsed) < MIN_FILL_MS) return json(200, { ok: true })

  const lead = Object.fromEntries(Object.entries(LIMITS).map(([k, max]) => [k, clean(data[k], max)]))
  lead.name = lead.name.replace(/[\r\n]+/g, ' ')
  lead.company = lead.company.replace(/[\r\n]+/g, ' ')

  const errors = {}
  if (lead.name.length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(lead.email)) errors.email = 'Please enter a valid email address.'
  if (lead.message.length < 10) errors.message = 'Please tell us a little more about the process.'
  if (Object.keys(errors).length) return json(422, { ok: false, errors })

  if (!transport && !env.SMTP_PASS) {
    console.error('[contact] SMTP_PASS is not configured')
    return json(500, { ok: false, error: 'Email is not configured yet.' })
  }

  const mailer = transport || getTransport(env)
  const siteUrl = (env.SITE_URL || 'https://logicawork.com').replace(/\/$/, '')
  const fromAddress = env.MAIL_FROM || env.SMTP_USER || 'ramankerzarkar@logicawork.com'
  const from = { name: env.MAIL_FROM_NAME || 'LogicaWork Website', address: fromAddress }
  const to = env.MAIL_TO || 'ramankerzarkar@logicawork.com'

  try {
    const n = leadNotification(lead, { siteUrl })
    await mailer.sendMail({ from, to, replyTo: { name: lead.name, address: lead.email }, subject: n.subject, html: n.html, text: n.text })
  } catch (err) {
    console.error('[contact] notification failed:', err.message)
    return json(502, { ok: false, error: 'Could not send your request. Please try again shortly.' })
  }

  if (String(env.SEND_ACK ?? 'true') !== 'false') {
    try {
      const a = leadAcknowledgement(lead, { siteUrl })
      await mailer.sendMail({ from: { name: 'LogicaWork', address: fromAddress }, to: lead.email, replyTo: to, subject: a.subject, html: a.html, text: a.text })
    } catch (err) {
      // The lead already reached the inbox; a failed confirmation shouldn't fail the request.
      console.error('[contact] acknowledgement failed:', err.message)
    }
  }

  return json(200, { ok: true })
}
