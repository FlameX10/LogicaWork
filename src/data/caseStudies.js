import agency from './agencyCaseStudies.json'
import nextgenLogo from '../assets/clients/nextgen-intelligence-stats.png'
import sankalpLogo from '../assets/clients/sankalp.png'

// Client engagements (named clients, featured across the site)
export const CLIENTS = [
  {
    slug: 'nextgen-intelligence-stats-report-automation',
    client: 'NextGen Intelligence Stats',
    logo: nextgenLogo,
    logoOn: 'light',
    industry: 'Market intelligence & research',
    short: 'Research-to-report automation',
    title: 'How NextGen Intelligence Stats Saved 20+ Hours a Month on Report Creation',
    headline: '20+ hrs',
    sub: 'saved every month on report creation',
    tags: ['Research automation', 'Report generation', 'Sales enablement'],
    before: [
      'Report creation involved significant manual effort.',
      'Analysts spent 1–3 hours preparing each report.',
      'Customised demo reports for prospects pulled researchers away from billable work.',
    ],
    after: [
      'Automation now supports the research and report-creation workflow.',
      '20+ hours saved per month on report creation.',
      'Prospect-ready demo reports are produced faster and more consistently.',
    ],
    sections: [
      {
        heading: 'The situation',
        content:
          'NextGen Intelligence Stats is a market intelligence and research agency. To win new business it prepares customised demo reports for prospects — and every one of those reports was assembled by hand. Analysts spent between one and three hours per report finding sources, pulling data and formatting the deliverable.',
      },
      {
        heading: 'Why it mattered',
        content:
          'Every hour an analyst spent compiling a demo report was an hour not spent on paid research. As prospect volume grew, report creation became a direct drag on both sales speed and delivery capacity.',
      },
      {
        heading: 'What we built',
        content:
          'We mapped the existing report process step by step, then automated the repeatable parts of the research-to-report workflow: gathering the relevant inputs, extracting and structuring the data, and generating a consistent report draft that analysts review and finalise.',
      },
      {
        heading: 'The result',
        results: [
          { metric: 'Report preparation', before: '1–3 hours per report', after: 'Automated draft' },
          { metric: 'Time saved', value: '20+ hours every month' },
          { metric: 'Analyst capacity', value: 'Returned to higher-value research work' },
        ],
      },
    ],
  },
  {
    slug: 'sankalp-speed-to-lead-ai-calling',
    client: 'Sankalp Computer & Systems Pvt. Ltd.',
    logo: sankalpLogo,
    logoOn: 'dark',
    industry: 'IT products & services',
    short: 'Speed-to-lead AI calling workflow',
    title: 'How Sankalp Cut Inbound Lead Response Time to Under One Minute with AI Calling',
    headline: '< 1 min',
    sub: 'inbound lead response time',
    tags: ['Speed-to-lead', 'AI calling', 'Lead routing'],
    before: [
      'Inbound leads could wait roughly 30 minutes to 2 days for a response.',
      'Delayed responses meant enquiries were not contacted promptly.',
      'Opportunities went cold before the team could reach them.',
    ],
    after: [
      'An AI calling workflow responds to every inbound enquiry.',
      'Lead response time reduced to less than one minute.',
      'Leads are engaged, qualified and routed while intent is highest.',
    ],
    sections: [
      {
        heading: 'The situation',
        content:
          'Sankalp Computer & Systems receives a steady flow of online enquiries. The team could not respond to each one quickly enough — depending on workload, a new lead could wait anywhere from 30 minutes to two days before anyone made contact.',
      },
      {
        heading: 'Why it mattered',
        content:
          'Speed-to-lead is one of the most expensive problems a sales team can leave alone. The longer an enquiry waits, the more likely the buyer has already spoken to a competitor. Slow follow-up was quietly turning paid demand into lost revenue.',
      },
      {
        heading: 'What we built',
        content:
          'We built a speed-to-lead workflow around an AI calling agent. The moment an enquiry arrives, the agent calls the lead, engages them, captures qualification details and routes the conversation to the right person on the team — with the outcome logged back into their systems.',
      },
      {
        heading: 'The result',
        results: [
          { metric: 'Lead response time', before: '30 min – 2 days', after: 'Under 1 minute' },
          { metric: 'Coverage', value: 'Every inbound enquiry contacted' },
          { metric: 'Sales team', value: 'Spends time on qualified conversations' },
        ],
      },
    ],
  },
]

export const CASE_STUDIES = agency

export const ALL_STUDIES = [
  ...CLIENTS.map((c) => ({ ...c, kind: 'client' })),
  ...agency.map((c) => ({ ...c, kind: 'agency', client: `${c.industry} agency · ${c.location}` })),
]

export const findStudy = (slug) => ALL_STUDIES.find((s) => s.slug === slug)
