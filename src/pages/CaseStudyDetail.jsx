import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { Fade, Reveal, SectionLabel, Stagger, item } from '../components/ui.jsx'
import { ClientLogo } from '../components/work.jsx'
import { CTABand } from '../components/Layout.jsx'
import { ALL_STUDIES, findStudy } from '../data/caseStudies.js'
import NotFound from './NotFound.jsx'

/** Turns the plain-text case study copy into paragraphs / bullet lists / numbered lists. */
function RichText({ text }) {
  const blocks = []
  let list = null
  for (const raw of text.split('\n')) {
    const line = raw.trim()
    if (!line) {
      list = null
      continue
    }
    const bullet = line.match(/^[•-]\s*(.*)$/)
    const num = line.match(/^\d+\.\s+(.*)$/)
    if (bullet || num) {
      const type = bullet ? 'ul' : 'ol'
      if (!list || list.type !== type) {
        list = { type, items: [] }
        blocks.push(list)
      }
      list.items.push((bullet || num)[1])
    } else {
      list = null
      blocks.push({ type: 'p', text: line })
    }
  }
  return (
    <div className="prose-lw">
      {blocks.map((b, i) => {
        if (b.type === 'p') return <p key={i}>{b.text}</p>
        const L = b.type
        return (
          <L key={i}>
            {b.items.map((t, j) => (
              <li key={j}>{t}</li>
            ))}
          </L>
        )
      })}
    </div>
  )
}

function Results({ results }) {
  return (
    <Stagger className="grid gap-4 md:grid-cols-3">
      {results.map((r) => (
        <motion.div key={r.metric} variants={item} className="card flex flex-col p-6">
          <p className="label text-ash">{r.metric}</p>
          {r.before ? (
            <div className="mt-5">
              <p className="text-white/45 line-through decoration-white/30">{r.before}</p>
              <p className="mt-1 font-display text-3xl font-extrabold text-electric">{r.after}</p>
            </div>
          ) : (
            <p className="mt-5 font-display text-xl font-bold text-white [overflow-wrap:anywhere]">{r.value}</p>
          )}
        </motion.div>
      ))}
    </Stagger>
  )
}

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = findStudy(slug)
  if (!study) return <NotFound />

  const idx = ALL_STUDIES.findIndex((s) => s.slug === slug)
  const prev = ALL_STUDIES[(idx - 1 + ALL_STUDIES.length) % ALL_STUDIES.length]
  const next = ALL_STUDIES[(idx + 1) % ALL_STUDIES.length]
  const isClient = study.kind === 'client'

  return (
    <>
      <article>
        <header className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="grid-bg fade-mask pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -top-40 left-1/3 h-[480px] w-[720px] rounded-full bg-electric/20 blur-[140px]" />
          <div className="container-x relative">
            <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-2 text-ash">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/case-studies" className="hover:text-white">Case studies</Link>
              <span>/</span>
              <span className="text-white/70">{study.short}</span>
            </nav>
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div>
                {isClient && <ClientLogo client={study} className="mb-8 inline-grid" />}
                <h1 className="lw-fade-up text-4xl font-extrabold md:text-6xl">{study.title}</h1>
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/70">{study.industry}</span>
                  {study.location && (
                    <span className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-sm text-white/70">
                      <MapPin className="h-3.5 w-3.5" /> {study.location}
                    </span>
                  )}
                  {study.tags.map((t) => (
                    <span key={t} className="rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-sm text-ice">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Fade delay={0.2}>
                <div className="card noise p-7">
                  <p className="label text-ash">Headline result</p>
                  <p className="mt-4 font-display text-6xl font-black text-electric">{study.headline}</p>
                  <p className="mt-2 text-white/65">{study.sub}</p>
                </div>
              </Fade>
            </div>
          </div>
        </header>

        {isClient && (
          <section className="container-x pb-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Reveal className="card p-7">
                <p className="label text-ash">Before</p>
                <ul className="mt-4 space-y-3">
                  {study.before.map((b) => (
                    <li key={b} className="flex gap-3 text-white/70"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />{b}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1} className="card border-electric/40 bg-electric/[.07] p-7">
                <p className="label text-ice">After</p>
                <ul className="mt-4 space-y-3">
                  {study.after.map((b) => (
                    <li key={b} className="flex gap-3 text-white/85"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />{b}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        )}

        <section className="container-x py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <p className="label text-ash">On this page</p>
                <ol className="mt-5 space-y-2.5 border-l border-white/10">
                  {study.sections.map((s, i) => (
                    <li key={s.heading}>
                      <a href={`#s-${i}`} className="-ml-px block border-l border-transparent pl-4 text-sm text-white/55 transition-colors hover:border-electric hover:text-white">
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
            <div className="max-w-3xl space-y-16">
              {study.sections.map((s, i) => (
                <Reveal as="section" key={s.heading} className="scroll-mt-32" >
                  <div id={`s-${i}`} className="scroll-mt-32">
                    <SectionLabel index={String(i + 1).padStart(2, '0')}>{s.heading}</SectionLabel>
                    <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">{s.heading}</h2>
                    <div className="mt-6 text-lg">
                      {s.results && <Results results={s.results} />}
                      {s.content && !s.results && <RichText text={s.content} />}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </article>

      <nav aria-label="More case studies" className="container-x grid gap-4 border-t border-white/10 pt-12 md:grid-cols-2">
        <Link to={`/case-studies/${prev.slug}`} className="card group p-6 transition-colors hover:border-electric/40">
          <span className="label flex items-center gap-2 text-ash"><ArrowLeft className="h-3.5 w-3.5" /> Previous</span>
          <p className="mt-3 font-display text-xl font-bold">{prev.short}</p>
          <p className="text-white/50">{prev.headline} · {prev.sub}</p>
        </Link>
        <Link to={`/case-studies/${next.slug}`} className="card group p-6 text-right transition-colors hover:border-electric/40">
          <span className="label flex items-center justify-end gap-2 text-ash">Next <ArrowRight className="h-3.5 w-3.5" /></span>
          <p className="mt-3 font-display text-xl font-bold">{next.short}</p>
          <p className="text-white/50">{next.headline} · {next.sub}</p>
        </Link>
      </nav>

      <CTABand title="Have a process that looks like this?" />
    </>
  )
}
