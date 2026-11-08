import { PageHero, Reveal, SectionLabel, SplitHeading, Stagger } from '../components/ui.jsx'
import { ClientResults, StudyCard } from '../components/work.jsx'
import { CTABand } from '../components/Layout.jsx'
import { CASE_STUDIES } from '../data/caseStudies.js'

export default function CaseStudies() {
  return (
    <>
      <PageHero
        label="Case studies"
        title="We measure what changed."
        accent={[3]}
        intro="Response times, hours saved, onboarding speed, visibility. Every engagement starts with a baseline, so every result below is a before-and-after — not a promise."
      />

      <section className="container-x pb-24 md:pb-32">
        <SectionLabel index="01">Client work</SectionLabel>
        <h2 className="mt-6 text-3xl font-extrabold uppercase md:text-5xl">Featured clients</h2>
        <div className="mt-12">
          <ClientResults />
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-coal py-24 md:py-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-x relative">
          <SectionLabel index="02">Automation playbooks</SectionLabel>
          <SplitHeading
            text="Six systems for agencies that outgrew manual operations."
            accent={[0, 1]}
            className="mt-6 max-w-4xl text-4xl font-extrabold uppercase md:text-6xl"
          />
          <Reveal>
            <p className="mt-6 max-w-2xl text-lg text-white/60">
              Reporting, onboarding, lead qualification, meeting documentation, campaign monitoring and profitability analytics —
              how growing marketing agencies across India removed the work that shouldn’t require humans.
            </p>
          </Reveal>
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((s, i) => (
              <StudyCard key={s.slug} s={s} index={i + 1} />
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand title="Your process could be the next case study." />
    </>
  )
}
