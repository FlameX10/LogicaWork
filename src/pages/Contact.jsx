import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui.jsx'
import { STARTING_POINTS } from '../data/site.js'

// Submissions go to our own endpoint (netlify/functions/contact.mjs), which emails the
// lead over SMTP. No third-party form service is involved.
const ENDPOINT = '/api/contact'

const STEPS = ['Start a discovery conversation.', 'Define the baseline and success criteria.', 'Build in stages, then measure what changed.']

const empty = { name: '', email: '', company: '', phone: '', area: '', message: '', website: '' }

function Field({ label, id, required, error, children }) {
  return (
    <label htmlFor={id} className="block">
      <span className="label text-ash">
        {label} {required && <span className="text-electric">*</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-sm text-red-300">{error}</span>}
    </label>
  )
}

const input =
  'mt-2 w-full rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition focus:border-electric focus:bg-electric/[.05] focus:ring-4 focus:ring-electric/15 aria-[invalid=true]:border-red-400/60'

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const startedAt = useRef(0)

  const on = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const onFocus = () => {
    if (!startedAt.current) startedAt.current = Date.now()
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')
    setFieldErrors({})
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...form, elapsed: startedAt.current ? Date.now() - startedAt.current : 0 }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) {
        setFieldErrors(data.errors || {})
        setError(data.error || (data.errors ? 'Please check the highlighted fields.' : 'Something went wrong. Please try again.'))
        setStatus('error')
        return
      }
      setStatus('sent')
      setForm(empty)
      startedAt.current = 0
      window.gtag?.('event', 'generate_lead', { method: 'contact_form' })
    } catch {
      setError('Network error — please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero
        label="Contact"
        title="Let’s solve one business problem first."
        accent={[2, 3, 4]}
        intro="Bring us a repetitive, expensive or operationally difficult process. We’ll understand the current workflow, test feasibility and identify a sensible first project."
      />

      <section className="container-x pb-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="label text-ash">What happens next</p>
            <ol className="mt-6 space-y-4">
              {STEPS.map((s, i) => (
                <li key={s} className="card flex items-center gap-5 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-electric font-mono text-sm">0{i + 1}</span>
                  <span className="font-display text-lg font-semibold">{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-10 rounded-2xl border border-white/10 p-6">
              <p className="font-display text-xl font-bold">Not sure what to automate?</p>
              <p className="mt-2 text-white/60">
                Tell us where work gets stuck, what takes the most time, or where leads are being lost. That’s enough to start.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card noise p-6 md:p-10">
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center" role="status">
                    <CheckCircle2 className="mx-auto h-14 w-14 text-electric" />
                    <h2 className="mt-6 text-3xl font-extrabold uppercase">Request received</h2>
                    <p className="mx-auto mt-3 max-w-md text-white/65">
                      Thanks — we’ve emailed you a confirmation and will get back to you within one business day.
                    </p>
                    <button onClick={() => setStatus('idle')} className="mt-8 text-sm font-semibold text-ice underline underline-offset-4">
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={submit} onFocus={onFocus} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-5">
                    <h2 className="text-2xl font-extrabold uppercase md:text-3xl">Book a discovery call</h2>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Your name" id="name" required error={fieldErrors.name}>
                        <input id="name" name="name" required maxLength={100} autoComplete="name" value={form.name} onChange={on} aria-invalid={!!fieldErrors.name} className={input} placeholder="Full name" />
                      </Field>
                      <Field label="Work email" id="email" required error={fieldErrors.email}>
                        <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" value={form.email} onChange={on} aria-invalid={!!fieldErrors.email} className={input} placeholder="you@company.com" />
                      </Field>
                      <Field label="Company" id="company">
                        <input id="company" name="company" maxLength={150} autoComplete="organization" value={form.company} onChange={on} className={input} placeholder="Company name" />
                      </Field>
                      <Field label="Phone" id="phone">
                        <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" value={form.phone} onChange={on} className={input} placeholder="Optional" />
                      </Field>
                    </div>
                    <Field label="Where does it hurt most?" id="area">
                      <select id="area" name="area" value={form.area} onChange={on} className={`${input} appearance-none`}>
                        <option value="" className="bg-coal">Choose one (optional)</option>
                        {STARTING_POINTS.map((s) => (
                          <option key={s.n} value={s.title} className="bg-coal">{s.title}</option>
                        ))}
                        <option value="Something else" className="bg-coal">Something else</option>
                      </select>
                    </Field>
                    <Field label="Describe the process" id="message" required error={fieldErrors.message}>
                      <textarea
                        id="message"
                        name="message"
                        required
                        minLength={10}
                        maxLength={5000}
                        rows={5}
                        value={form.message}
                        onChange={on}
                        aria-invalid={!!fieldErrors.message}
                        className={`${input} resize-y`}
                        placeholder="What’s repetitive, slow or expensive today? Which tools are involved?"
                      />
                    </Field>
                    {/* honeypot — hidden from people, bots fill it in */}
                    <input type="text" name="website" value={form.website} onChange={on} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                    {status === 'error' && error && (
                      <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-electric px-7 py-4 font-semibold transition hover:bg-electric-600 disabled:opacity-60 shadow-[0_10px_40px_-10px_rgba(31,107,255,.8)]"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          Send request <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-white/40">
                      By submitting you agree to our handling of your details as described in the privacy policy. We never share them.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
