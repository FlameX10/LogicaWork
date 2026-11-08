import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, IndianRupee, Gauge, TrendingDown, ArrowUpRight } from 'lucide-react'
import { CAP_ICONS } from '../components/icons.js'
import { Button, Fade, Reveal, SectionLabel, SplitHeading, SpotCard, Stagger, item, Marquee } from '../components/ui.jsx'
import WorkflowViz from '../components/WorkflowViz.jsx'
import { ClientLogo, ClientResults, StudyCard } from '../components/work.jsx'
import { CTABand } from '../components/Layout.jsx'
import { CAPABILITIES, PROCESS } from '../data/site.js'
import { CLIENTS, CASE_STUDIES } from '../data/caseStudies.js'


function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="grid-bg fade-mask pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-48 right-[-10%] h-[620px] w-[760px] rounded-full bg-electric/25 blur-[150px]" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Fade className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.04] px-3.5 py-1.5">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-electric" />
            <span className="label !tracking-[0.14em] text-white/75">Practical AI · Smarter workflows</span>
          </Fade>
          <SplitHeading
            as="h1"
            text="AI is not the product. Leverage is."
            accent={[5]}
            className="mt-7 text-[3rem] font-black uppercase leading-[0.95] sm:text-7xl lg:text-[5.6rem]"
          />
          <Fade delay={0.35}>
            <p className="mt-7 max-w-xl text-lg text-white/65 md:text-xl">
              LogicaWork turns operational friction into coordinated, measurable systems. We automate the lead follow-up, reporting
              and handoffs that quietly drain your team’s time, money and capacity.
            </p>
          </Fade>
          <Fade delay={0.5} className="mt-9 flex flex-wrap gap-3">
            <Button to="/contact">Book a discovery call</Button>
            <Button to="/case-studies" variant="ghost">See client results</Button>
          </Fade>
          <Fade delay={0.65} className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              ['< 1 min', 'lead response'],
              ['20+ hrs', 'saved monthly'],
              ['5d → 1d', 'onboarding'],
            ].map(([a, b]) => (
              <div key={b}>
                <p className="font-display text-2xl font-extrabold md:text-3xl">{a}</p>
                <p className="mt-1 text-sm text-white/50">{b}</p>
              </div>
            ))}
          </Fade>
        </div>
        <Fade zoom delay={0.2} className="relative">
          <div className="card noise p-3 md:p-5">
            <div className="mb-2 flex items-center justify-between px-2">
              <span className="label text-ash">live · workflow.run()</span>
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-electric" />
              </span>
            </div>
            <WorkflowViz className="h-auto w-full" />
          </div>
        </Fade>
      </div>

      <div className="container-x relative mt-20">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
          <p className="label shrink-0 text-ash">Trusted by teams at</p>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:max-w-2xl">
            {CLIENTS.map((c) => (
              <Link key={c.slug} to={`/case-studies/${c.slug}`} className="transition-transform hover:-translate-y-0.5">
                <ClientLogo client={c} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const PROBLEMS = [
  'Lead follow-up slows down or loses ownership.',
  'Sales promises get trapped in chats and never reach delivery.',
  'Research, reporting and admin work consume founder capacity.',
  'CRM, project tools, email and spreadsheets hold different versions of the truth.',
]
const COSTS = [
  { icon: Clock, label: 'Time' },
  { icon: IndianRupee, label: 'Money' },
  { icon: Gauge, label: 'Capacity' },
  { icon: TrendingDown, label: 'Revenue' },
]

function Problem() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel index="01">The operating problem</SectionLabel>
          <SplitHeading
            text="Growth gets harder when handoffs lose control."
            accent={[5, 6]}
            className="mt-6 text-4xl font-extrabold uppercase md:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-lg text-white/60">
              The gaps compound as the team grows. We focus on the places where wasted capacity, inconsistent execution and
              higher operating cost quietly accumulate.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <p className="label text-ash">What it costs you</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {COSTS.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-4 py-2">
                  <Icon className="h-4 w-4 text-electric" />
                  <span className="font-semibold">{label}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <Stagger className="grid gap-4">
          {PROBLEMS.map((p, i) => (
            <motion.div key={p} variants={item}>
              <SpotCard className="flex items-start gap-6 p-6 md:p-8">
                <span className="font-mono text-sm text-electric">0{i + 1}</span>
                <p className="font-display text-xl font-semibold leading-snug md:text-2xl">{p}</p>
              </SpotCard>
            </motion.div>
          ))}
          <motion.p variants={item} className="pl-2 pt-2 text-white/50">
            Leads that go unanswered. Reports that take days. Processes that eat hours every week.{' '}
            <span className="text-white">We exist to remove that waste.</span>
          </motion.p>
        </Stagger>
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section className="relative border-y border-white/10 bg-coal py-24 md:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel index="02">What we build</SectionLabel>
            <SplitHeading
              text="We build the systems behind better operations."
              accent={[5, 6]}
              className="mt-6 max-w-3xl text-4xl font-extrabold uppercase md:text-6xl"
            />
          </div>
          <Reveal>
            <Button to="/services" variant="ghost">Explore services</Button>
          </Reveal>
        </div>
        <Stagger className="mt-16 grid gap-5 md:grid-cols-2">
          {CAPABILITIES.map((c, i) => {
            const Icon = CAP_ICONS[c.key]
            return (
              <motion.div key={c.key} variants={item}>
                <SpotCard className="group h-full p-7 md:p-9">
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-electric/40 bg-electric/10 transition-colors group-hover:bg-electric">
                      <Icon className="h-6 w-6 text-ice group-hover:text-white" />
                    </span>
                    <span className="font-mono text-sm text-white/30">0{i + 1}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-bold md:text-3xl">{c.title}</h3>
                  <p className="mt-3 text-white/60">{c.line}</p>
                </SpotCard>
              </motion.div>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}

const MODEL = [
  'Collect the right data from the systems and people already involved.',
  'Apply deterministic rules where rules are enough.',
  'Use AI selectively for judgment-heavy work — classification, summarisation, risk surfacing.',
  'Route approvals and exceptions to the right human.',
  'Write the result back into the systems that keep the business moving.',
]

function BeforeAfter() {
  const [after, setAfter] = useState(true)
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionLabel index="03">The workflow model</SectionLabel>
          <SplitHeading
            text="From scattered tasks to an intelligent workflow."
            accent={[5, 6]}
            className="mt-6 text-4xl font-extrabold uppercase md:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-2xl font-display font-semibold">
              The goal is not maximum AI. <span className="text-electric">The goal is dependable flow.</span>
            </p>
          </Reveal>
          <Stagger className="mt-10 space-y-3">
            {MODEL.map((m, i) => (
              <motion.div key={m} variants={item} className="flex gap-4 border-b border-white/10 pb-3">
                <span className="mt-1 font-mono text-xs text-electric">0{i + 1}</span>
                <p className="text-white/75">{m}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>

        <Reveal>
          <div className="card noise p-6 md:p-8">
            <div role="tablist" aria-label="Before and after" className="inline-flex rounded-full border border-white/10 bg-black/40 p-1">
              {['Before', 'After'].map((t) => {
                const active = (t === 'After') === after
                return (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setAfter(t === 'After')}
                    className="relative rounded-full px-6 py-2 text-sm font-semibold"
                  >
                    {active && <motion.span layoutId="ba" className={`absolute inset-0 rounded-full ${after ? 'bg-electric' : 'bg-white/15'}`} />}
                    <span className="relative">{t === 'Before' ? 'Scattered tasks' : 'Coordinated workflow'}</span>
                  </button>
                )
              })}
            </div>
            <AnimatePresence mode="wait">
              {after ? (
                <motion.div key="a" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mt-8">
                  <div className="space-y-3">
                    {['Information gathered', 'Rules applied', 'Exceptions reach human review', 'Connected systems update', 'Result recorded'].map((s, i) => (
                      <motion.div
                        key={s}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.09 }}
                        className="flex items-center gap-4 rounded-xl border border-electric/30 bg-electric/[.08] px-4 py-3.5"
                      >
                        <span className="grid h-7 w-7 place-items-center rounded-lg bg-electric font-mono text-xs">{i + 1}</span>
                        <span className="font-semibold">{s}</span>
                        <span className="ml-auto h-1.5 w-1.5 animate-pulse-dot rounded-full bg-ice" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="mt-6 text-white/60">One flow. Clear ownership. Every step logged.</p>
                </motion.div>
              ) : (
                <motion.div key="b" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mt-8">
                  <div className="relative h-[290px]">
                    {[
                      ['Collect information', 4, 6, -4],
                      ['Move data by hand', 46, 18, 5],
                      ['Chase updates', 10, 40, 3],
                      ['Repeat tasks', 52, 52, -6],
                      ['Compile reports', 14, 74, 6],
                      ['Re-enter in CRM', 50, 84, -3],
                    ].map(([t, x, y, r], i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1, rotate: r }}
                        transition={{ delay: i * 0.06 }}
                        style={{ left: `${x}%`, top: `${y}%` }}
                        className="absolute rounded-xl border border-white/15 bg-white/[.04] px-4 py-2.5 text-sm text-white/70"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                  <p className="mt-2 text-white/60">People collect information, move data, chase updates, repeat tasks and compile reports.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Clients() {
  return (
    <section className="relative border-y border-white/10 bg-coal py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel index="04">Client results</SectionLabel>
            <SplitHeading text="Measured, not promised." accent={[0]} className="mt-6 text-4xl font-extrabold uppercase md:text-6xl" />
          </div>
          <Reveal>
            <p className="max-w-sm text-white/60">Two expensive problems. Two systems that now run without anyone chasing them.</p>
          </Reveal>
        </div>
        <div className="mt-14">
          <ClientResults />
        </div>
      </div>
    </section>
  )
}

function WhoFor() {
  return (
    <section className="container-x py-24 md:py-32">
      <SectionLabel index="05">Who we build for</SectionLabel>
      <SplitHeading
        text="Too big for manual work. Too small for a giant IT consultancy."
        accent={[0, 1, 5, 6]}
        className="mt-6 max-w-5xl text-4xl font-extrabold uppercase md:text-6xl"
      />
      <Reveal delay={0.2}>
        <div className="relative mt-16">
          <div className="h-px w-full bg-gradient-to-r from-white/10 via-electric to-white/10" />
          <div className="mt-6 grid grid-cols-3 text-center">
            <div>
              <p className="label text-ash">Manual work</p>
              <p className="mt-2 text-sm text-white/45">Spreadsheets, chasing, copy-paste</p>
            </div>
            <div className="relative">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 0.3 }}
                className="absolute -top-[34px] left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full bg-electric font-display text-sm font-black shadow-[0_0_40px_rgba(31,107,255,.7)]"
              >
                US
              </motion.span>
              <p className="label mt-8 text-white">LogicaWork</p>
              <p className="mt-2 text-sm text-white/60">Leverage without becoming a tech company</p>
            </div>
            <div>
              <p className="label text-ash">Giant IT consultancy</p>
              <p className="mt-2 text-sm text-white/45">Long timelines, big retainers</p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="mx-auto mt-16 max-w-3xl text-center text-lg text-white/65">
          Real customers. Real revenue. Real operational problems. We give businesses in the middle access to technology that lets
          them operate more efficiently — without having to hire an automation team.
        </p>
      </Reveal>
    </section>
  )
}

function ProcessStrip() {
  return (
    <section className="relative border-y border-white/10 bg-coal py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel index="06">How we de-risk the work</SectionLabel>
            <SplitHeading
              text="Measure the process before you promise the outcome."
              accent={[1, 2]}
              className="mt-6 max-w-4xl text-4xl font-extrabold uppercase md:text-6xl"
            />
          </div>
          <Reveal>
            <Button to="/approach" variant="ghost">Our approach</Button>
          </Reveal>
        </div>
        <Stagger className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p) => (
            <div key={p.n} className="group bg-coal p-7 transition-colors hover:bg-carbon md:p-9">
              <motion.div variants={item}>
                <p className="font-display text-6xl font-black text-white/[.08] transition-colors group-hover:text-electric">{p.n}</p>
                <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-white/60">{p.body}</p>
              </motion.div>
            </div>
          ))}
        </Stagger>
        <Reveal>
          <p className="label mt-8 text-center text-ice">No guaranteed ROI without a baseline.</p>
        </Reveal>
      </div>
    </section>
  )
}

function StudiesPreview() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <SectionLabel index="07">Case studies</SectionLabel>
          <SplitHeading text="Systems that run while your team works." accent={[0]} className="mt-6 max-w-3xl text-4xl font-extrabold uppercase md:text-6xl" />
        </div>
        <Reveal>
          <Button to="/case-studies" variant="ghost">All case studies</Button>
        </Reveal>
      </div>
      <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.slice(0, 3).map((s, i) => (
          <StudyCard key={s.slug} s={s} index={i + 1} />
        ))}
      </Stagger>
    </section>
  )
}

function ManifestoBand() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 text-coal md:py-32">
      <div className="grid-bg-light pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <SectionLabel index="08" light>
          Our promise
        </SectionLabel>
        <SplitHeading
          text="We own the problem until the result exists."
          accent={[5, 6, 7]}
          className="mt-6 max-w-5xl text-5xl font-black uppercase md:text-7xl lg:text-8xl"
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="text-xl text-graphite">
              Deployment is not the finish line. If the workflow breaks, we improve it. If the first approach doesn’t produce the
              expected result, we iterate. The work is done when the agreed outcome is demonstrated.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="flex items-end md:justify-end">
            <Link to="/manifesto" className="group inline-flex items-center gap-3 font-display text-2xl font-bold">
              Read the manifesto
              <span className="grid h-12 w-12 place-items-center rounded-full bg-coal text-white transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-y border-white/10 py-7">
        <Marquee items={['Leads that go unanswered', 'Reports that take days', 'Handoffs that lose control', 'Hours lost every week', 'Data in five places']} />
      </div>
      <Problem />
      <Capabilities />
      <BeforeAfter />
      <Clients />
      <WhoFor />
      <ProcessStrip />
      <StudiesPreview />
      <ManifestoBand />
      <CTABand />
    </>
  )
}
