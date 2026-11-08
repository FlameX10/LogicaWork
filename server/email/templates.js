// Branded, table-based HTML emails (inline styles so they render in Gmail / Outlook / Apple Mail).

const C = {
  ink: '#0a0a0a',
  coal: '#111111',
  card: '#161616',
  line: '#262626',
  electric: '#1f6bff',
  ice: '#ccddff',
  paper: '#f2efeb',
  ash: '#8c8a87',
  text: '#e8e8e8',
}
const FONT = "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
const MONO = "'SFMono-Regular', Consolas, 'Liberation Mono', monospace"

export const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

const nl2br = (s) => esc(s).replace(/\r?\n/g, '<br>')

function shell({ preheader, body, siteUrl }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark light">
<title>LogicaWork</title>
</head>
<body style="margin:0;padding:0;background:${C.ink};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.ink};">
  <tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
      <tr><td style="padding:0 4px 20px 4px;font-family:${FONT};">
        <span style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Logica<span style="color:${C.electric};">Work</span></span>
        <span style="float:right;font-family:${MONO};font-size:11px;letter-spacing:2px;color:${C.ash};line-height:30px;">PRACTICAL AI</span>
      </td></tr>
      <tr><td style="background:${C.coal};border:1px solid ${C.line};border-radius:18px;overflow:hidden;">
        <div style="height:4px;background:${C.electric};line-height:4px;font-size:0;">&nbsp;</div>
        ${body}
      </td></tr>
      <tr><td style="padding:22px 4px 0 4px;font-family:${FONT};font-size:12px;line-height:18px;color:${C.ash};">
        AI is not the product. Leverage is.<br>
        <a href="${siteUrl}" style="color:${C.ice};text-decoration:none;">${siteUrl.replace(/^https?:\/\//, '')}</a>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
}

const row = (label, value, href) =>
  value
    ? `<tr>
  <td style="padding:12px 0;border-bottom:1px solid ${C.line};font-family:${MONO};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${C.ash};width:120px;vertical-align:top;">${esc(label)}</td>
  <td style="padding:12px 0;border-bottom:1px solid ${C.line};font-family:${FONT};font-size:15px;color:#ffffff;vertical-align:top;">${
    href ? `<a href="${esc(href)}" style="color:${C.ice};text-decoration:none;">${esc(value)}</a>` : esc(value)
  }</td>
</tr>`
    : ''

/** Internal notification sent to the LogicaWork inbox. */
export function leadNotification(lead, { siteUrl }) {
  const when = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })
  const subject = `New discovery request — ${lead.name}${lead.company ? ` (${lead.company})` : ''}`
  const body = `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
  <tr><td style="padding:32px 32px 8px 32px;font-family:${FONT};">
    <div style="font-family:${MONO};font-size:11px;letter-spacing:2px;color:${C.electric};">[ NEW LEAD ] · ${esc(when)} IST</div>
    <h1 style="margin:14px 0 0 0;font-size:28px;line-height:32px;font-weight:800;color:#ffffff;text-transform:uppercase;">New discovery request</h1>
    <p style="margin:10px 0 0 0;font-size:15px;line-height:22px;color:${C.ash};">Someone filled in the contact form on the website. Reply to this email to answer them directly.</p>
  </td></tr>
  <tr><td style="padding:16px 32px 0 32px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row('Name', lead.name)}
      ${row('Email', lead.email, `mailto:${lead.email}`)}
      ${row('Company', lead.company)}
      ${row('Phone', lead.phone, lead.phone ? `tel:${lead.phone.replace(/[^\d+]/g, '')}` : '')}
      ${row('Focus area', lead.area)}
    </table>
  </td></tr>
  <tr><td style="padding:24px 32px 0 32px;font-family:${FONT};">
    <div style="font-family:${MONO};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${C.ash};">The process / problem</div>
    <div style="margin-top:10px;padding:18px 20px;background:${C.card};border:1px solid ${C.line};border-radius:12px;font-size:15px;line-height:24px;color:${C.text};">${nl2br(lead.message)}</div>
  </td></tr>
  <tr><td style="padding:28px 32px 34px 32px;">
    <a href="mailto:${esc(lead.email)}?subject=${encodeURIComponent('Re: your LogicaWork discovery request')}"
       style="display:inline-block;background:${C.electric};color:#ffffff;font-family:${FONT};font-size:15px;font-weight:700;text-decoration:none;padding:14px 26px;border-radius:999px;">Reply to ${esc(lead.name.split(' ')[0])} &rarr;</a>
  </td></tr>
</table>`
  const text = [
    'NEW DISCOVERY REQUEST',
    `Received: ${when} IST`,
    '',
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company || '-'}`,
    `Phone: ${lead.phone || '-'}`,
    `Focus area: ${lead.area || '-'}`,
    '',
    'The process / problem:',
    lead.message,
  ].join('\n')
  return { subject, html: shell({ preheader: `${lead.name}: ${lead.message.slice(0, 90)}`, body, siteUrl }), text }
}

/** Confirmation sent back to the person who submitted the form.
 *  Deliberately contains almost no user-supplied text so it can't be abused to relay spam. */
export function leadAcknowledgement(lead, { siteUrl }) {
  const first = lead.name.split(' ')[0].slice(0, 40)
  const subject = 'We received your request — LogicaWork'
  const steps = [
    ['01', 'We review the process you described.'],
    ['02', 'We get back to you within one business day to set up a discovery conversation.'],
    ['03', 'Together we define the baseline and success criteria before anything is built.'],
  ]
  const body = `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
  <tr><td style="padding:34px 32px 0 32px;font-family:${FONT};">
    <div style="font-family:${MONO};font-size:11px;letter-spacing:2px;color:${C.electric};">[ REQUEST RECEIVED ]</div>
    <h1 style="margin:14px 0 0 0;font-size:30px;line-height:34px;font-weight:800;color:#ffffff;text-transform:uppercase;">Thanks, ${esc(first)}.</h1>
    <p style="margin:14px 0 0 0;font-size:16px;line-height:25px;color:${C.text};">We’ve received your request. Here’s what happens next:</p>
  </td></tr>
  <tr><td style="padding:18px 32px 0 32px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${steps
        .map(
          ([n, t]) => `<tr><td style="padding:8px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.card};border:1px solid ${C.line};border-radius:12px;">
          <tr>
            <td style="padding:14px 0 14px 16px;width:44px;vertical-align:middle;">
              <div style="width:32px;height:32px;line-height:32px;text-align:center;background:${C.electric};border-radius:9px;font-family:${MONO};font-size:12px;color:#ffffff;">${n}</div>
            </td>
            <td style="padding:14px 16px;font-family:${FONT};font-size:15px;line-height:22px;color:#ffffff;">${t}</td>
          </tr>
        </table>
      </td></tr>`,
        )
        .join('')}
    </table>
  </td></tr>
  <tr><td style="padding:22px 32px 34px 32px;font-family:${FONT};">
    <p style="margin:0 0 22px 0;font-size:15px;line-height:23px;color:${C.ash};">In the meantime, see how other teams removed manual work from their operations.</p>
    <a href="${siteUrl}/case-studies" style="display:inline-block;background:${C.electric};color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 26px;border-radius:999px;">See case studies &rarr;</a>
  </td></tr>
</table>`
  const text = [
    `Thanks, ${first}.`,
    '',
    'We’ve received your request. Here’s what happens next:',
    ...steps.map(([n, t]) => `${n}. ${t}`),
    '',
    `Case studies: ${siteUrl}/case-studies`,
    '',
    '— LogicaWork',
  ].join('\n')
  return { subject, html: shell({ preheader: 'We’ll get back to you within one business day.', body, siteUrl }), text }
}
