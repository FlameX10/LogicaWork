import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </M>
  )
}

export function Stagger({ children, className = '', gap = 0.08 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

/** CSS-only entrance for above-the-fold content (no JS needed to become visible). */
export function Fade({ children, delay = 0, className = '', zoom = false }) {
  return (
    <div className={`${zoom ? 'lw-zoom' : 'lw-fade-up'} ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

/** Word-by-word headline reveal. Keeps the full text in the DOM for SEO.
 *  `instant` (default for h1) uses CSS so the headline paints before JS loads. */
export function SplitHeading({ text, as = 'h2', className = '', accent = [], instant = as === 'h1' }) {
  const words = text.split(' ')
  if (instant) {
    const Plain = as
    return (
      <Plain className={className} aria-label={text}>
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom" aria-hidden="true">
            <span className={`lw-rise inline-block ${accent.includes(i) ? 'text-electric' : ''}`} style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
              {w}
              {i < words.length - 1 ? ' ' : ''}
            </span>
          </span>
        ))}
      </Plain>
    )
  }
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom" aria-hidden="true">
          <motion.span
            className={`inline-block ${accent.includes(i) ? 'text-electric' : ''}`}
            variants={{ hidden: { y: '110%' }, show: { y: 0, transition: { duration: 0.8, ease } } }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

export function SectionLabel({ index, children, light = false }) {
  return (
    <div className={`label flex items-center gap-3 ${light ? 'text-graphite' : 'text-ash'}`}>
      {index && <span className="text-electric">[{index}]</span>}
      <span className={`h-px w-8 ${light ? 'bg-graphite/40' : 'bg-white/20'}`} />
      <span>{children}</span>
    </div>
  )
}

export function Button({ to, href, children, variant = 'primary', className = '', ...rest }) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 will-change-transform'
  const styles = {
    primary:
      'bg-electric text-white hover:bg-electric-600 shadow-[0_0_0_1px_rgba(31,107,255,.5),0_10px_40px_-10px_rgba(31,107,255,.7)] hover:shadow-[0_0_0_1px_rgba(31,107,255,.8),0_14px_50px_-8px_rgba(31,107,255,.9)]',
    ghost: 'border border-white/15 text-white hover:border-white/40 hover:bg-white/5',
    dark: 'bg-coal text-white hover:bg-black',
    light: 'bg-white text-coal hover:bg-paper',
  }
  const inner = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  )
  const cls = `${base} ${styles[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}

/** Card with cursor-follow glow */
export function SpotCard({ children, className = '', as: Tag = 'div', ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <Tag onMouseMove={onMove} className={`card spotlight ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

export function Counter({ to, suffix = '', prefix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(to)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration, ease, onUpdate: (x) => setV(Math.round(x)) })
    return () => c.stop()
  }, [inView, to, duration])
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {v}
      {suffix}
    </span>
  )
}

export function Marquee({ items, className = '' }) {
  const row = [...items, ...items]
  return (
    <div className={`relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] ${className}`}>
      <div className="flex w-max animate-marquee gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-2xl font-semibold text-white/80 md:text-4xl">
            {t}
            <span className="h-2 w-2 rotate-45 bg-electric" />
          </span>
        ))}
      </div>
    </div>
  )
}

export function PageHero({ label, title, intro, accent = [], children }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="grid-bg fade-mask pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-electric/20 blur-[140px]" />
      <div className="container-x relative">
        <Fade>
          <SectionLabel>{label}</SectionLabel>
        </Fade>
        <SplitHeading
          as="h1"
          text={title}
          accent={accent}
          className="mt-6 max-w-5xl text-[2.6rem] font-extrabold uppercase sm:text-6xl md:text-7xl lg:text-[5.4rem]"
        />
        {intro && (
          <Fade delay={0.35}>
            <p className="mt-8 max-w-2xl text-lg text-white/65 md:text-xl">{intro}</p>
          </Fade>
        )}
        {children}
      </div>
    </section>
  )
}
