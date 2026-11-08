import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NAV, SITE } from '../data/site.js'
import { getMeta } from '../data/seo.js'
import { Button } from './ui.jsx'

export function Logo({ className = '' }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="LogicaWork home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path d="M5 4v16h14" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="12" cy="10" r="2.4" fill="#1f6bff" />
          <path d="M12 10h7M12 10V4" stroke="#1f6bff" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 animate-pulse-dot rounded-full bg-electric" />
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight">
        Logica<span className="text-electric">Work</span>
      </span>
    </Link>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto mt-3 flex max-w-[1240px] items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 md:px-5 ${
          scrolled || open ? 'mx-3 border border-white/10 bg-ink/75 backdrop-blur-xl md:mx-auto' : 'border border-transparent'
        }`}
      >
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/[.07]" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
                  )}
                  <span className="relative">{n.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button to="/contact" className="!px-5 !py-2.5 !text-sm">Book a discovery call</Button>
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mx-3 mt-2 rounded-2xl border border-white/10 bg-ink/95 p-3 backdrop-blur-xl lg:hidden"
          >
            {[{ label: 'Home', to: '/' }, ...NAV, { label: 'Contact', to: '/contact' }].map((n, i) => (
              <motion.div key={n.to} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                <NavLink
                  to={n.to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-xl font-semibold ${isActive ? 'bg-white/5 text-white' : 'text-white/70'}`
                  }
                >
                  {n.label}
                  <ArrowUpRight className="h-4 w-4 text-electric" />
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  const cols = [
    {
      title: 'Company',
      links: [
        { label: 'About', to: '/about' },
        { label: 'Manifesto', to: '/manifesto' },
        { label: 'Approach', to: '/approach' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      title: 'Work',
      links: [
        { label: 'Services', to: '/services' },
        { label: 'Case studies', to: '/case-studies' },
        { label: 'NextGen Intelligence Stats', to: '/case-studies/nextgen-intelligence-stats-report-automation' },
        { label: 'Sankalp', to: '/case-studies/sankalp-speed-to-lead-ai-calling' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy policy', to: '/privacy' },
        { label: 'Terms of service', to: '/terms' },
      ],
    },
  ]
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink">
      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-white/55">{SITE.tagline}</p>
            <p className="label mt-6 text-ash">Not another AI company.</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="label text-ash">{c.title}</p>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-white/70 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <p className="translate-y-[18%] text-center font-display text-[19vw] font-black leading-none tracking-tighter text-white/[.035]">
          LOGICAWORK
        </p>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {year} LogicaWork. All rights reserved.</p>
          <p className="label !text-[0.65rem]">AI is not the product. Leverage is.</p>
        </div>
      </div>
    </footer>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-electric" />
}

/** Keeps <head> in sync on client-side navigation (prerender writes the initial tags). */
function HeadSync() {
  const { pathname } = useLocation()
  useEffect(() => {
    const m = getMeta(pathname)
    document.title = m.title
    const set = (sel, attr, val) => {
      let el = document.head.querySelector(sel)
      if (!el) {
        el = document.createElement(sel.startsWith('link') ? 'link' : 'meta')
        const [, k, v] = sel.match(/\[(\w+)="([^"]+)"\]/)
        el.setAttribute(k, v)
        document.head.appendChild(el)
      }
      el.setAttribute(attr, val)
    }
    set('meta[name="description"]', 'content', m.description)
    set('meta[property="og:title"]', 'content', m.title)
    set('meta[property="og:description"]', 'content', m.description)
    set('meta[name="twitter:title"]', 'content', m.title)
    set('meta[name="twitter:description"]', 'content', m.description)
    if (m.canonical) {
      set('link[rel="canonical"]', 'href', m.canonical)
      set('meta[property="og:url"]', 'content', m.canonical)
    }
    set('meta[name="robots"]', 'content', m.noindex ? 'noindex, follow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
    window.gtag?.('event', 'page_view', { page_path: pathname, page_title: m.title })
  }, [pathname])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function CTABand({ title = 'Let’s solve one business problem first.', text }) {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="noise relative overflow-hidden rounded-[2rem] border border-electric/30 bg-electric px-6 py-16 text-center md:px-16 md:py-24">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-white/30 blur-[120px]" />
        <div className="relative">
          <p className="label text-white/80">A sensible first project</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold uppercase md:text-6xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            {text ||
              'Bring us a repetitive, expensive or operationally difficult process. We’ll understand the current workflow, test feasibility and identify a sensible first project.'}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="light">Start a discovery conversation</Button>
            <Button to="/case-studies" variant="ghost" className="!border-white/40">See the results</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-electric focus:px-4 focus:py-2">
        Skip to content
      </a>
      <ScrollProgress />
      <HeadSync />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
