import { motion } from 'framer-motion'
import { Briefcase, Cpu } from 'lucide-react'
import { PageHero, Reveal, SectionLabel, SplitHeading, SpotCard, Stagger, item } from '../components/ui.jsx'
import { ClientLogo } from '../components/work.jsx'
import { CTABand } from '../components/Layout.jsx'
import { PRINCIPLES } from '../data/site.js'
import { CLIENTS } from '../data/caseStudies.js'

export default function About() {
  return (
    <>
      <PageHero
        label="About LogicaWork"
        title="Not another AI company."
        accent={[2, 3]}
        intro="LogicaWork is a practical AI automation company. We help growing businesses remove the manual work that slows them down — lead follow-up, reporting, research and the handoffs between systems — and we measure what changed."
      />

      <section className="container-x pb-24 md:pb-32">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionLabel index="01">Why we exist</SectionLabel>
            <SplitHeading text="Businesses are full of problems that shouldn’t need humans." accent={[7, 8]} className="mt-6 text-4xl font-extrabold uppercase md:text-5xl" />
          </div>
          <Reveal className="space-y-5 text-lg text-white/65">
            <p>
              Leads go unanswered. Reports take days. Processes consume hours every week. Teams do repetitive work instead of the work
              that actually moves the business forward. Each of those costs time, money, capacity — and sometimes revenue.
            </p>
            <p>
              We find the places where technology creates real leverage, then build the workflow, AI and integrations needed to remove
              that waste. Sometimes the answer involves AI. Sometimes it doesn’t. Either way, we start with the business — not the
              technology.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-coal py-24 md:py-32">
        <div className="container-x">
          <SectionLabel index="02">How we’re built</SectionLabel>
          <SplitHeading text="Commercial clarity meets technical execution." accent={[3, 4]} className="mt-6 max-w-4xl text-4xl font-extrabold uppercase md:text-6xl" />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              {
                icon: Briefcase,
                t: 'Commercial clarity',
                b: 'Discovery, process mapping and solution scoping that start with where the business is losing time and money — so we build the right thing first.',
              },
              {
                icon: Cpu,
                t: 'Technical execution',
                b: 'Practical AI automation design and implementation: workflow tools, AI agents, APIs and integrations that work inside the systems you already use.',
              },
            ].map(({ icon: Icon, t, b }) => (
              <motion.div key={t} variants={item}>
                <SpotCard className="h-full p-8 md:p-10">
                  <Icon className="h-8 w-8 text-electric" />
                  <h3 className="mt-8 text-2xl font-bold uppercase md:text-3xl">{t}</h3>
                  <p className="mt-4 text-white/60">{b}</p>
                </SpotCard>
              </motion.div>
            ))}
          </Stagger>
          <Reveal>
            <p className="mt-10 text-center font-display text-xl text-white/70">Two perspectives. One operating problem.</p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionLabel index="03">How we work with you</SectionLabel>
            <SplitHeading text="Close to the work, end to end." accent={[3, 4]} className="mt-6 text-4xl font-extrabold uppercase md:text-6xl" />
            <Reveal>
              <p className="mt-6 text-lg text-white/65">
                We work directly with every client, from discovery to deployment. The people who scope your problem are the people who
                build the solution and measure what changed — so nothing gets lost in a handoff.
              </p>
            </Reveal>
          </div>
          <Reveal className="grid gap-4">
            <p className="label text-ash">Working with</p>
            {CLIENTS.map((c) => (
              <ClientLogo key={c.slug} client={c} className="!justify-items-start" />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-coal py-24 md:py-32">
        <div className="container-x">
          <SectionLabel index="04">Principles</SectionLabel>
          <h2 className="mt-6 text-4xl font-extrabold uppercase md:text-6xl">What we stand for</h2>
          <Stagger className="mt-14 grid gap-3 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <motion.div key={p} variants={item} className="rounded-2xl border border-white/10 p-6">
                <span className="font-mono text-sm text-electric">0{i + 1}</span>
                <p className="mt-4 font-display text-lg font-semibold">{p}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand />
    </>
  )
}
