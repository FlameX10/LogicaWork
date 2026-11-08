import { SITE } from './site.js'
import { ALL_STUDIES, findStudy } from './caseStudies.js'

const ORG = {
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo-256.png`,
  description: SITE.description,
  slogan: 'AI is not the product. Leverage is.',
  areaServed: 'Worldwide',
  address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  knowsAbout: [
    'AI automation',
    'Workflow automation',
    'AI agents',
    'AI calling agents',
    'Lead qualification automation',
    'CRM integration',
    'Report automation',
    'Business process automation',
  ],
}

const crumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: `${SITE.url}${path}`,
  })),
})

const STATIC = {
  '/': {
    title: 'LogicaWork — AI Automation & Workflow Systems for Growing Businesses',
    description:
      'Practical AI automation for businesses that have outgrown manual work. We fix slow lead follow-up, manual reporting and broken handoffs — then measure what changed.',
    schema: [
      ORG,
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { '@id': `${SITE.url}/#organization` },
        inLanguage: 'en',
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE.url}/#service`,
        name: 'LogicaWork AI Automation',
        url: SITE.url,
        image: `${SITE.url}/og-image.png`,
        provider: { '@id': `${SITE.url}/#organization` },
        serviceType: 'AI automation and workflow consulting',
        areaServed: 'Worldwide',
      },
    ],
  },
  '/services': {
    title: 'AI Automation Services — Workflows, AI Agents, Integrations | LogicaWork',
    description:
      'Workflow automation, AI agents and assistants, CRM and API integrations, and research-to-report automation — built around how your business actually operates.',
    schema: [
      crumbs([['Home', '/'], ['Services', '/services']]),
      {
        '@type': 'ItemList',
        name: 'LogicaWork services',
        itemListElement: [
          'Workflow Automation',
          'AI Agents & Assistants',
          'Integrations & Internal Tools',
          'Research & Reporting Automation',
        ].map((name, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: { '@type': 'Service', name, provider: { '@id': `${SITE.url}/#organization` } },
        })),
      },
    ],
  },
  '/approach': {
    title: 'Our Approach — Measure the Process Before Promising the Outcome | LogicaWork',
    description:
      'Discover, baseline, design, build, validate, deploy. How LogicaWork de-risks AI automation projects by measuring the process first and owning the result.',
    schema: [
      crumbs([['Home', '/'], ['Approach', '/approach']]),
      {
        '@type': 'HowTo',
        name: 'How LogicaWork delivers an automation project',
        step: ['Discover', 'Baseline', 'Design', 'Build', 'Validate', 'Deploy & measure'].map((name, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name,
        })),
      },
    ],
  },
  '/case-studies': {
    title: 'AI Automation Case Studies & Client Results | LogicaWork',
    description:
      'Real results from AI automation: lead response under 1 minute, 20+ hours saved monthly on reports, onboarding cut from 5 days to 24 hours, and more.',
    schema: [
      crumbs([['Home', '/'], ['Case Studies', '/case-studies']]),
      {
        '@type': 'ItemList',
        itemListElement: ALL_STUDIES.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE.url}/case-studies/${s.slug}`,
          name: s.title,
        })),
      },
    ],
  },
  '/manifesto': {
    title: 'Our Manifesto — AI Is Not the Product. Leverage Is. | LogicaWork',
    description:
      'Why LogicaWork exists: no AI hype, no empty promises. We solve expensive business problems, measure what changed and own the problem until the result exists.',
    schema: [crumbs([['Home', '/'], ['Manifesto', '/manifesto']])],
  },
  '/about': {
    title: 'About LogicaWork — Practical AI for Businesses in the Middle',
    description:
      'LogicaWork helps businesses too big for manual work and too small for a giant IT consultancy get real leverage from AI, automation and integrations.',
    schema: [crumbs([['Home', '/'], ['About', '/about']]), { ...ORG, '@type': 'Organization' }],
  },
  '/contact': {
    title: 'Contact LogicaWork — Start with One Business Problem',
    description:
      'Bring us a repetitive, expensive or operationally difficult process. We’ll map the workflow, test feasibility and identify a sensible first automation project.',
    schema: [crumbs([['Home', '/'], ['Contact', '/contact']]), { '@type': 'ContactPage', url: `${SITE.url}/contact` }],
  },
  '/privacy': {
    title: 'Privacy Policy | LogicaWork',
    description: 'How LogicaWork collects, uses and protects information submitted through this website.',
  },
  '/terms': {
    title: 'Terms of Service | LogicaWork',
    description: 'Terms governing the use of the LogicaWork website and services.',
  },
}

export const NOT_FOUND = {
  title: 'Page not found | LogicaWork',
  description: 'The page you are looking for does not exist.',
  noindex: true,
}

export function getMeta(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  let meta = STATIC[path]
  if (!meta) {
    const m = path.match(/^\/case-studies\/([^/]+)$/)
    const study = m && findStudy(m[1])
    if (study) {
      meta = {
        title: `${study.title} | LogicaWork`.slice(0, 120),
        description: `${study.short}: ${study.headline} ${study.sub}. ${study.client} — a LogicaWork AI automation case study.`,
        type: 'article',
        schema: [
          crumbs([['Home', '/'], ['Case Studies', '/case-studies'], [study.short, path]]),
          {
            '@type': 'Article',
            headline: study.title,
            about: study.tags,
            author: { '@id': `${SITE.url}/#organization` },
            publisher: { '@id': `${SITE.url}/#organization` },
            mainEntityOfPage: `${SITE.url}${path}`,
            image: `${SITE.url}/og-image.png`,
          },
        ],
      }
    }
  }
  if (!meta) return { ...NOT_FOUND, path }
  return { ...meta, path, canonical: `${SITE.url}${path === '/' ? '/' : path}` }
}

export const ROUTES = [...Object.keys(STATIC), ...ALL_STUDIES.map((s) => `/case-studies/${s.slug}`)]

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Head tags as an HTML string — used by the prerenderer
export function headHtml(meta) {
  const img = `${SITE.url}/og-image.png`
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex
      ? '<meta name="robots" content="noindex, follow" />'
      : '<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />',
  ]
  if (meta.canonical) {
    tags.push(
      `<link rel="canonical" href="${meta.canonical}" />`,
      `<meta property="og:url" content="${meta.canonical}" />`,
    )
  }
  tags.push(
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:type" content="${meta.type || 'website'}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:image" content="${img}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:locale" content="${SITE.locale}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
  )
  if (meta.schema?.length) {
    const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': meta.schema }).replace(/</g, '\\u003c')
    tags.push(`<script type="application/ld+json">${json}</script>`)
  }
  return tags.join('\n    ')
}
