import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { PageHero, Reveal, SectionLabel, SplitHeading, Stagger, item } from '../components/ui.jsx'
import { CTABand } from '../components/Layout.jsx'
import { PROCESS, SCORECARD, METRICS_TRACKED } from '../data/site.js'

const THINK = [
  'How does the business operate today?',
  'Where does work get stuck?',
  'What takes the most time?',
  'What is repetitive?',
  'What happens when the team gets busy?',
  'Where are leads being lost?',
  'What would change if this problem disappeared?',
]

function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const h = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <div ref={ref} className="relative mt-16">
      <div className="absolute left-[19px] top-0 h-full w-px bg-white/10 md:left-1/2" />
      <motion.div style={{ height: h }} className="absolute left-[19px] top-0 w-px bg-electric shadow-[0_0_12px_#1f6bff] md:left-1/2" />
      <div className="space-y-12 md:space-y-20">
        {PROCESS.map((p, i) => (
          <Reveal key={p.n} className={`relative grid gap-4 pl-14 md:grid-cols-2 md:gap-16 md:pl-0`}>
            <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-electric bg-ink font-mono text-xs text-ice md:left-1/2 md:-translate-x-1/2">
              {p.n}
            </span>
            <div className={i % 2 ? 'md:col-start-2' : 'md:text-right'}>
              <h3 className="text-3xl font-extrabold uppercase md:text-4xl">{p.title}</h3>
              <p className="mt-3 text-lg text-white/60">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function Approach() {
  return (
    <>
      <PageHero
        label="Our approach"
        title="Measure the process before you promise the outcome."
        accent={[1, 2]}
        intro="We don’t walk into a business with a predetermined automation and try to convince you that you need it. We start with questions, establish a baseline, and only then decide what should be built."
      />

      <section className="container-x pb-24 md:pb-32">
        <SectionLabel index="01">Six stages</SectionLabel>
        <SplitHeading text="Discover. Baseline. Design. Build. Validate. Deploy." accent={[1]} className="mt-6 max-w-4xl text-4xl font-extrabold uppercase md:text-6xl" />
        <Timeline />
      </section>

      <section className="relative border-y border-white/10 bg-coal py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionLabel index="02">We start with understanding</SectionLabel>
            <SplitHeading text="The questions come before the code." accent={[1]} className="mt-6 text-4xl font-extrabold uppercase md:text-5xl" />
            <Reveal>
              <p className="mt-6 text-lg text-white/60">
                Only after understanding the operation do we decide what should be built. Sometimes the answer will involve AI.
                Sometimes it won’t.
              </p>
            </Reveal>
          </div>
          <Stagger className="grid gap-2">
            {THINK.map((q) => (
              <motion.p key={q} variants={item} className="border-b border-white/10 py-3 font-display text-xl font-semibold text-white/85">
                {q}
              </motion.p>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionLabel index="03">The only scorecard</SectionLabel>
            <SplitHeading text="No AI hype. No empty promises." accent={[1, 2]} className="mt-6 text-4xl font-extrabold uppercase md:text-6xl" />
            <Reveal>
              <p className="mt-6 text-lg text-white/60">
                We don’t measure success by how sophisticated our systems look. We measure what changed.
              </p>
            </Reveal>
          </div>
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {SCORECARD.map((q) => (
              <motion.div key={q} variants={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.02] p-5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-electric/50 text-electric">✓</span>
                <p className="font-semibold">{q}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
        <Reveal className="mt-16">
          <div className="card p-7 md:p-10">
            <p className="label text-ash">Tracked from the baseline</p>
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

      <CTABand title="Build in stages. Then measure what changed." />
    </>
  )
}
