import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { CLIENTS } from '../data/caseStudies.js'
import { SpotCard, item, Stagger } from './ui.jsx'

export function ClientLogo({ client, className = '' }) {
  return (
    <div
      className={`grid place-items-center rounded-2xl px-6 py-5 ${
        client.logoOn === 'light' ? 'bg-paper' : 'border border-white/10 bg-white/[.03]'
      } ${className}`}
    >
      <img
        src={client.logo}
        alt={`${client.client} logo`}
        loading="lazy"
        decoding="async"
        width="360"
        height="100"
        className="h-12 w-auto max-w-full object-contain md:h-14"
      />
    </div>
  )
}

/** Big before/after client cards */
export function ClientResults() {
  return (
    <Stagger className="grid gap-6 lg:grid-cols-2">
      {CLIENTS.map((c) => (
        <motion.div key={c.slug} variants={item}>
          <SpotCard className="group flex h-full flex-col p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <ClientLogo client={c} className="!py-4" />
              <span className="label text-ash">{c.industry}</span>
            </div>
            <h3 className="mt-8 text-2xl font-bold md:text-[1.7rem]">{c.short}</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="label text-ash">Before</p>
                <p className="mt-2 text-[15px] text-white/70">{c.before[0]} {c.before[1]}</p>
              </div>
              <div className="rounded-xl border border-electric/40 bg-electric/10 p-4">
                <p className="label text-ice">After</p>
                <p className="mt-2 text-[15px] text-white/85">{c.after[0]} {c.after[1]}</p>
              </div>
            </div>
            <div className="mt-8 flex items-end justify-between gap-6 border-t border-white/10 pt-6">
              <div>
                <p className="font-display text-5xl font-black text-electric md:text-6xl">{c.headline}</p>
                <p className="mt-1 text-white/60">{c.sub}</p>
              </div>
              <Link
                to={`/case-studies/${c.slug}`}
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 transition-all group-hover:border-electric group-hover:bg-electric"
                aria-label={`Read the ${c.client} case study`}
              >
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </SpotCard>
        </motion.div>
      ))}
    </Stagger>
  )
}

export function StudyCard({ s, index }) {
  return (
    <motion.div variants={item} className="h-full">
      <Link to={`/case-studies/${s.slug}`} className="block h-full">
        <SpotCard className="group flex h-full flex-col p-6 transition-colors hover:border-electric/40 md:p-7">
          <div className="flex items-center justify-between">
            <span className="label text-electric">Case {String(index).padStart(2, '0')}</span>
            <span className="flex items-center gap-1.5 text-sm text-white/50">
              <MapPin className="h-3.5 w-3.5" />
              {s.location}
            </span>
          </div>
          <p className="mt-8 font-display text-4xl font-black tracking-tight md:text-[2.6rem]">{s.headline}</p>
          <p className="mt-1 text-sm text-white/55">{s.sub}</p>
          <h3 className="mt-6 text-lg font-semibold leading-snug text-white/90 md:text-xl">{s.title}</h3>
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {s.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                {t}
              </span>
            ))}
          </div>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ice">
            Read case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </SpotCard>
      </Link>
    </motion.div>
  )
}
