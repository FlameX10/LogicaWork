import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { PageHero, Reveal, SectionLabel, SplitHeading, SpotCard, Stagger, item } from '../components/ui.jsx'
import { CTABand } from '../components/Layout.jsx'
import { CAPABILITIES, STARTING_POINTS, METRICS_TRACKED } from '../data/site.js'
import { CAP_ICONS } from '../components/icons.js'

const QUESTIONS = [
  'Where is the business losing time?',
  'Where is money being wasted?',
  'Where are opportunities being lost?',
  'Where is human effort spent on work that could be automated?',
]

export default function Services() {
  return (
    <>
      <PageHero
        label="Services"
        title="AI automation built around how your business actually runs."
        accent={[7, 8]}
        intro="We combine AI, automation, APIs and the software you already use — whatever it takes to solve the problem. We don’t care how impressive the technology sounds. We care whether it works."
      />

      <section className="container-x pb-24 md:pb-32">
        <div className="space-y-5">
          {CAPABILITIES.map((c, i) => {
            const Icon = CAP_ICONS[c.key]
            return (
              <Reveal key={c.key}>
                <SpotCard as="article" id={c.key} className="grid gap-8 p-7 md:grid-cols-[auto_1.2fr_1fr] md:gap-12 md:p-10">
                  <div className="flex items-start gap-5 md:block">
                    <span className="font-mono text-sm text-electric">0{i + 1}</span>
                    <span className="grid h-16 w-16 place-items-center rounded-2xl border border-electric/40 bg-electric/10 md:mt-6">
                      <Icon className="h-7 w-7 text-ice" />
                    </span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold md:text-4xl">{c.title}</h2>
                    <p className="mt-3 font-display text-lg text-ice">{c.line}</p>
                    <p className="mt-5 text-white/65">{c.body}</p>
                  </div>
                  <ul className="grid content-start gap-3">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                        <Check className="h-4 w-4 shrink-0 text-electric" />
                        <span className="text-white/85">{p}</span>
                      </li>
                    ))}
                  </ul>
                </SpotCard>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-coal py-24 md:py-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
        <div className="container-x relative">
          <SectionLabel index="02">A better starting point</SectionLabel>
          <SplitHeading
            text="Start with a costly process, not an AI wishlist."
            accent={[4, 5]}
            className="mt-6 max-w-4xl text-4xl font-extrabold uppercase md:text-6xl"
          />
          <Reveal>
            <p className="mt-6 max-w-xl text-lg text-white/60">Find the work where a lack of control is already expensive. These are the four places we usually start.</p>
          </Reveal>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STARTING_POINTS.map((s) => (
              <motion.div key={s.n} variants={item}>
                <SpotCard className="h-full p-7">
                  <p className="font-display text-5xl font-black text-electric">{s.n}</p>
                  <h3 className="mt-8 text-xl font-bold uppercase">{s.title}</h3>
                  <p className="mt-3 text-white/60">{s.body}</p>
                </SpotCard>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionLabel index="03">Where we look first</SectionLabel>
            <SplitHeading text="We start with the business, not the technology." accent={[4]} className="mt-6 text-4xl font-extrabold uppercase md:text-5xl" />
            <Reveal>
              <p className="mt-6 text-lg text-white/60">
                Sometimes the answer involves AI. Sometimes it doesn’t. We will never force technology into a problem just because
                technology is what we sell.
              </p>
            </Reveal>
          </div>
          <Stagger className="grid gap-3">
            {QUESTIONS.map((q, i) => (
              <motion.div key={q} variants={item} className="flex items-center gap-5 rounded-2xl border border-white/10 p-5 md:p-6">
                <span className="label text-electric">Q{i + 1}</span>
                <p className="font-display text-lg font-semibold md:text-xl">{q}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-24">
          <div className="card p-7 md:p-10">
            <p className="label text-ash">What we track on every project</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {METRICS_TRACKED.map((m) => (
                <span key={m} className="rounded-full border border-electric/30 bg-electric/10 px-4 py-2 font-semibold text-ice">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <CTABand />
    </>
  )
}
