export const SITE = {
  name: 'LogicaWork',
  url: 'https://logicawork.com',
  tagline: 'Practical AI. Smarter workflows. Measurable business impact.',
  description:
    'LogicaWork builds practical AI automation, workflow systems and integrations for growing businesses — turning lead follow-up, reporting and handoffs into coordinated, measurable systems.',
  locale: 'en_IN',
  country: 'India',
}

export const NAV = [
  { label: 'Services', to: '/services' },
  { label: 'Approach', to: '/approach' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Manifesto', to: '/manifesto' },
  { label: 'About', to: '/about' },
]

export const CAPABILITIES = [
  {
    key: 'automation',
    title: 'Workflow Automation',
    line: 'Move work across people, rules, approvals and deadlines.',
    body: 'We turn the tasks people chase by hand — follow-ups, approvals, status updates, recurring reports — into workflows that run on schedule, route exceptions to the right person and leave an audit trail.',
    points: ['Trigger-based workflows', 'Approvals & exception routing', 'Scheduled reporting', 'Follow-up sequences'],
  },
  {
    key: 'agents',
    title: 'AI Agents & Assistants',
    line: 'Qualify, summarise, route and surface risk where judgment benefits from context.',
    body: 'AI is used selectively — for classification, summarisation, scoring and risk-surfacing — inside a workflow that a human still controls. No black boxes, no AI where a rule would do.',
    points: ['Lead qualification & scoring', 'AI voice / calling agents', 'Meeting & document summaries', 'Anomaly explanations'],
  },
  {
    key: 'integrations',
    title: 'Integrations & Internal Tools',
    line: 'Connect the systems your team already uses instead of creating another island.',
    body: 'CRM, project tools, email, ad platforms and spreadsheets each hold a different version of the truth. We connect them through APIs so data is entered once and stays in sync everywhere.',
    points: ['CRM & project tool sync', 'API integrations', 'Internal dashboards', 'Single source of truth'],
  },
  {
    key: 'research',
    title: 'Research & Reporting',
    line: 'Discover sources, extract data and turn recurring inputs into useful outputs.',
    body: 'Research, compilation and reporting quietly eat founder and analyst capacity. We automate source discovery, data extraction and report generation so deliverables arrive faster and more consistently.',
    points: ['Automated report generation', 'Data extraction pipelines', 'Market research workflows', 'Executive summaries'],
  },
]

export const STARTING_POINTS = [
  { n: '01', title: 'Inbound lead routing', body: 'Contact, qualify, enrich and assign new opportunities — in minutes, not days.' },
  { n: '02', title: 'Research-to-report', body: 'Find sources, extract evidence and prepare repeatable deliverables automatically.' },
  { n: '03', title: 'System handoffs', body: 'Sync CRM, project, email and reporting data without manual re-entry.' },
  { n: '04', title: 'Recurring operations', body: 'Trigger follow-ups, alerts, reports and exception handling on autopilot.' },
]

export const PROCESS = [
  { n: '01', title: 'Discover', body: 'Understand the business and the problem that actually costs money.' },
  { n: '02', title: 'Baseline', body: 'Map the current process and measure it before promising anything.' },
  { n: '03', title: 'Design', body: 'Design the solution and agree the success criteria up front.' },
  { n: '04', title: 'Build', body: 'Build and integrate with the tools your team already uses.' },
  { n: '05', title: 'Validate', body: 'Test against real cases and edge cases with your team in the loop.' },
  { n: '06', title: 'Deploy & measure', body: 'Roll out in stages, measure what changed and keep refining.' },
]

export const SCORECARD = [
  'Did response time improve?',
  'Did manual work decrease?',
  'Did the team save hours?',
  'Did operating costs decrease?',
  'Did the sales process become faster?',
  'Did the business handle more volume?',
]

export const PRINCIPLES = [
  'Solve the problem before choosing the technology.',
  'Target leverage, not novelty.',
  'Automate work that shouldn’t require humans.',
  'Build around the way the business actually operates.',
  'Measure outcomes, not features.',
  'Don’t sell AI hype.',
  'Don’t build useless complexity.',
  'Take responsibility for the result.',
  'Finish what we start.',
]

export const METRICS_TRACKED = [
  'Hours saved',
  'Processing time',
  'Error rates',
  'Follow-up rates',
  'Completion rates',
  'Visibility',
  'Cost per completed task',
]
