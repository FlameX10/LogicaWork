import { motion } from 'framer-motion'
import { Reveal, SectionLabel, SplitHeading, Stagger, item, Button } from '../components/ui.jsx'
import { PRINCIPLES, SCORECARD } from '../data/site.js'

function Chapter({ n, label, title, accent, children, dark = false }) {
  return (
    <section className={`relative py-24 md:py-32 ${dark ? 'bg-coal text-white' : 'bg-paper text-coal'}`}>
      <div className={`${dark ? 'grid-bg' : 'grid-bg-light'} pointer-events-none absolute inset-0 opacity-70`} />
      <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel index={n} light={!dark}>{label}</SectionLabel>
          <SplitHeading text={title} accent={accent} className="mt-6 text-4xl font-black uppercase md:text-6xl" />
        </div>
        <div className={`text-lg md:text-xl ${dark ? 'text-white/70' : 'text-graphite'}`}>{children}</div>
      </div>
    </section>
  )
}

const Big = ({ children, dark }) => (
  <p className={`font-display text-2xl font-extrabold uppercase md:text-3xl ${dark ? 'text-white' : 'text-coal'}`}>{children}</p>
)

export default function Manifesto() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="grid-bg fade-mask pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-electric/25 blur-[150px]" />
        <div className="container-x relative text-center">
          <p className="label text-ash">A founding document · LogicaWork</p>
          <SplitHeading as="h1" text="Our Manifesto" className="mt-6 text-6xl font-black uppercase md:text-8xl lg:text-9xl" />
          <SplitHeading as="p" instant text="AI is not the product. Leverage is." accent={[5]} className="mt-8 font-display text-2xl font-extrabold uppercase text-white/80 md:text-4xl" />
        </div>
      </section>

      <Chapter n="01" label="The belief" title="We don’t automate for the sake of automation." accent={[5, 6, 7]}>
        <Reveal>
          <p>We believe businesses are full of problems that shouldn’t require humans to solve manually.</p>
          <ul className="my-8 space-y-3 border-l-2 border-electric pl-6 font-display text-xl font-semibold text-coal md:text-2xl">
            <li>Leads that go unanswered.</li>
            <li>Reports that take days to produce.</li>
            <li>Processes that consume hours every week.</li>
            <li>Teams doing repetitive work instead of work that moves the business forward.</li>
          </ul>
          <p>These problems cost businesses something — time, money, capacity, and sometimes revenue.</p>
          <div className="mt-8"><Big>We exist to remove that waste.</Big></div>
        </Reveal>
      </Chapter>

      <Chapter dark n="02" label="Core philosophy" title="AI is not the product. Leverage is." accent={[5]}>
        <Reveal>
          <p>
            The world doesn’t need another company putting “AI-powered” on a product that didn’t need AI in the first place. We
            don’t want to build technology just because we can. We want to find problems where technology creates real leverage.
          </p>
          <p className="mt-5">That means starting with the business — not the technology.</p>
          <Stagger className="my-10 grid gap-3 sm:grid-cols-2">
            {['Where is the business losing time?', 'Where is money being wasted?', 'Where are opportunities being lost?', 'Where is human effort spent on work that could be automated?'].map((q, i) => (
              <motion.div key={q} variants={item} className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
                <span className="label text-electric">Q{i + 1}</span>
                <p className="mt-2 font-display text-lg font-semibold text-white">{q}</p>
              </motion.div>
            ))}
          </Stagger>
          <p>We combine AI, automation, APIs, existing software and whatever other tools are necessary. We don’t care how impressive the technology sounds.</p>
          <div className="mt-8"><Big dark>We care whether it works.</Big></div>
        </Reveal>
      </Chapter>

      <Chapter n="03" label="High-impact problems" title="We solve expensive problems." accent={[2, 3]}>
        <Reveal>
          <p>Not every problem deserves an AI solution. We look for the ones that cost the most to leave alone.</p>
          <div className="mt-10 grid gap-5">
            {[
              {
                t: 'Speed-to-lead',
                s: 'A business receives hundreds of online enquiries. Its team cannot respond to every one quickly enough, and opportunities disappear.',
                r: 'Automate rapid response, engagement, qualification and routing.',
                o: ['Revenue', 'Speed', 'Capacity'],
              },
              {
                t: 'Demo report research automation',
                s: 'A market intelligence agency needs customised demo reports for prospects. Researchers spend valuable hours creating them manually.',
                r: 'Automate the research and report-generation workflow.',
                o: ['Time', 'Cost', 'Sales enablement'],
              },
            ].map((e, i) => (
              <div key={e.t} className="rounded-2xl border border-coal/10 bg-white/60 p-6 md:p-8">
                <p className="label text-electric">Example 0{i + 1}</p>
                <h3 className="mt-3 text-2xl font-extrabold uppercase text-coal">{e.t}</h3>
                <p className="mt-4 text-base md:text-lg">{e.s}</p>
                <p className="mt-3 text-base font-semibold text-coal md:text-lg">Our role: {e.r}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.o.map((o) => (
                    <span key={o} className="rounded-full bg-coal px-3 py-1 text-sm font-semibold text-white">{o}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Chapter>

      <Chapter dark n="04" label="Our rejection of AI hype" title="No AI hype. No empty promises." accent={[1, 2]}>
        <Reveal>
          <p>
            AI is moving fast. The noise around it is moving even faster. Every week there is a new model, a new agent, a new buzzword.
            We’re not interested in the hype. We don’t want clients paying for technology they don’t need, or impressive demos that
            fall apart in the real world.
          </p>
          <p className="label mt-10 text-ash">The only scorecard</p>
          <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
            {SCORECARD.map((q) => (
              <li key={q} className="py-3 font-display text-lg font-semibold uppercase text-white md:text-xl">{q}</li>
            ))}
          </ul>
          <div className="mt-8"><Big dark>We measure what changed.</Big></div>
        </Reveal>
      </Chapter>

      <Chapter n="05" label="Who we build for" title="Businesses that have outgrown manual work." accent={[4, 5]}>
        <Reveal>
          <p>
            Our ideal clients are businesses in the middle. No longer small enough to run everything manually — but not large enough to
            maintain massive technology and automation teams. They have real customers, real revenue and real operational problems.
          </p>
          <p className="mt-5">
            We give these businesses access to technology that lets them operate more efficiently without having to become technology
            companies themselves.
          </p>
          <div className="mt-8"><Big>Too big for manual work. Too small for a giant IT consultancy.</Big></div>
        </Reveal>
      </Chapter>

      <Chapter dark n="06" label="Our promise" title="We own the problem until the result exists." accent={[5, 6, 7]}>
        <Reveal>
          <p>
            We don’t believe our responsibility ends when the system is deployed. Deployment is not the finish line. Every engagement
            starts with an agreed scope, a baseline and clear success criteria — and we stay accountable to them.
          </p>
          <div className="my-8 grid gap-3">
            {[
              ['If something doesn’t work as agreed,', 'we fix it.'],
              ['If the workflow breaks,', 'we improve it.'],
              ['If the first approach doesn’t produce the expected result,', 'we iterate.'],
              ['If the automation isn’t creating the value we agreed on,', 'we aren’t finished.'],
            ].map(([a, b]) => (
              <p key={a} className="rounded-xl border border-white/10 p-4">
                {a} <span className="font-bold text-electric">{b}</span>
              </p>
            ))}
          </div>
          <Big dark>The work is done when the agreed outcome is demonstrated.</Big>
        </Reveal>
      </Chapter>

      <Chapter n="07" label="Obsession" title="We are obsessed with finishing what we start." accent={[2, 3, 4]}>
        <Reveal>
          <p>We are building this company around one simple loop, repeated for every client:</p>
          <p className="my-8 font-display text-5xl font-black uppercase text-coal md:text-7xl">
            Solve it. Measure it. <span className="text-electric">Improve it.</span>
          </p>
          <ol className="grid gap-2">
            {['Solve the real problem.', 'Create measurable results.', 'Learn from every implementation.', 'Improve the system.', 'Then do it again.'].map((s, i) => (
              <li key={s} className="flex gap-4 border-b border-coal/10 py-2.5">
                <span className="font-mono text-sm text-electric">0{i + 1}</span>
                <span className="font-semibold text-coal">{s}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8">
            Our processes will evolve. Our technology will change. But one thing will not: when we
            take responsibility for a problem, we don’t stop until we’ve done everything we can to solve it.
          </p>
        </Reveal>
      </Chapter>

      <section className="relative bg-ink py-24 md:py-32">
        <div className="container-x">
          <SectionLabel index="08">Principles</SectionLabel>
          <h2 className="mt-6 text-4xl font-black uppercase md:text-6xl">What we stand for</h2>
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <div key={p} className="group bg-ink p-7 transition-colors hover:bg-carbon">
                <motion.div variants={item}>
                  <span className="font-mono text-sm text-electric">0{i + 1}</span>
                  <p className="mt-6 font-display text-xl font-bold uppercase leading-snug">{p}</p>
                </motion.div>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-electric py-24 md:py-32">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="container-x relative">
          <p className="label text-white/80">The short version</p>
          <ol className="mt-8 grid gap-2 font-display text-2xl font-extrabold uppercase md:text-4xl">
            {['Find the bottleneck.', 'Understand the business.', 'Build the leverage.', 'Measure the impact.', 'Keep improving until it works.'].map((s, i) => (
              <li key={s} className="flex gap-5">
                <span className="w-10 font-mono text-base text-white/60 md:pt-2">0{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
          <p className="mt-16 max-w-4xl font-display text-4xl font-black uppercase md:text-6xl">
            Not another AI company. <span className="text-coal">A company that uses AI to solve problems that actually matter.</span>
          </p>
          <div className="mt-10">
            <Button to="/contact" variant="dark">Bring us a problem</Button>
          </div>
        </div>
      </section>
    </>
  )
}
