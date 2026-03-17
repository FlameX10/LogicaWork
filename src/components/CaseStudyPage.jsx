import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const CaseStudyPage = ({ onBack, initialCaseStudyId = null }) => {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState(initialCaseStudyId);

  const caseStudies = [
    {
      id: 1,
      title: "How a 65-Employee Indian Marketing Agency Eliminated 25+ Hours of Monthly Reporting Work",
      location: "Pune",
      industry: "Digital Marketing",
      sections: [
        {
          heading: "Agency Context",
          content: `A Pune-based digital marketing agency managing 42 active retainer clients across Google Ads, Meta Ads, and GA4.
          
Each month their account managers manually prepared performance reports.
The process looked like this:
1. Export data from Google Ads
2. Export Meta Ads insights
3. Pull GA4 metrics
4. Compile everything into Google Sheets
5. Write a performance summary
6. Send the report via email

This process required 45–60 minutes per client.
For 42 clients, the agency spent 30+ hours every month just preparing reports.`
        },
        {
          heading: "The Operational Problem",
          content: `The reporting workflow created three major operational issues:

1. Payroll waste
Senior account managers earning ₹70k–₹90k/month were spending hours copying data between dashboards.

2. Inconsistent reporting
Metrics were pulled manually, causing:
• Mismatched date ranges
• Incorrect conversions
• Inconsistent KPI definitions

3. Delayed client communication
Reports were sometimes sent 3–4 days late because the team had to prepare them manually.
This created unnecessary client follow-ups.`
        },
        {
          heading: "The Automation System Implemented",
          content: `We built an automated client reporting pipeline using workflow orchestration.
The system performs the following steps automatically:

1. A monthly trigger starts the workflow
2. The system retrieves the agency's active clients from CRM
3. The workflow runs a report generation sequence for each client

Data is automatically pulled from:
• Google Ads API
• Meta Ads Graph API
• GA4 Reporting API

The workflow then:
• Merges all platform data
• Normalizes KPIs
• Calculates key performance metrics

Examples:
• Total ad spend
• Blended CPA
• ROAS
• CTR`
        },
        {
          heading: "AI Report Commentary",
          content: `Once metrics are calculated, the system generates an executive performance summary.
The AI analyzes the normalized campaign metrics and produces:

1. Monthly performance overview
2. Key insights from the data
3. Recommended actions for next month

Each report contains three concise paragraphs explaining the campaign results.
This replaces the manual analysis previously written by account managers.`
        },
        {
          heading: "Account Manager Approval Layer",
          content: `Before the report is delivered to the client, the system sends a Slack notification to the account manager.
The message includes:
• The generated report
• Performance summary
• An edit option

The account manager has 30 minutes to approve or modify the commentary.
If approved, the report proceeds automatically.`
        },
        {
          heading: "Automated Report Delivery",
          content: `After approval, the workflow automatically:
1. Sends the report email to the client
2. Attaches a Looker Studio PDF dashboard
3. Logs the reporting activity in the CRM

This ensures every report has a recorded delivery history.`
        },
        {
          heading: "Results",
          results: [
            { metric: "Reporting preparation time per client", before: "45–60 minutes", after: "Under 3 minutes" },
            { metric: "Total monthly reporting hours saved", before: "30+ hours", after: "Under 2 hours" },
            { metric: "Payroll capacity recovered", value: "≈ ₹1,05,000/month of senior account manager time" }
          ],
          content: `After implementing the automation system:\n
Reporting preparation time per client: reduced from 45–60 minutes → under 3 minutes
Total monthly reporting hours saved: reduced from 30+ hours → under 2 hours
Payroll capacity recovered: ≈ ₹1,05,000/month of senior account manager time.`
        },
        {
          heading: "Strategic Impact",
          content: `Because reporting no longer required manual effort, account managers were able to:
• Manage more client accounts
• Focus on campaign optimization
• Improve response times to client requests

The agency increased delivery capacity without hiring additional staff.`
        }
      ]
    },
    {
      id: 2,
      title: "How a 70-Employee Indian Marketing Agency Reduced Client Onboarding Time from 5 Days to 1 Day",
      location: "Mumbai",
      industry: "Digital Marketing & SEO",
      sections: [
        {
          heading: "Agency Context",
          content: `A Mumbai-based digital marketing agency managing 55 active retainer clients across paid media and SEO.
Each time a new client signed a contract, onboarding required several manual steps:
• Sending welcome emails
• Collecting campaign information
• Requesting ad account access
• Creating project boards
• Setting up internal Slack channels

The onboarding process required 3–5 days of coordination between the sales team, account managers, and delivery team.`
        },
        {
          heading: "The Operational Problem",
          content: `After deals closed, the agency faced three recurring issues.

1. Delayed campaign launches
New clients sometimes waited a full week before campaign setup even started.
This created a poor first impression.

2. Account managers chasing clients
The onboarding form was often forgotten by clients, forcing account managers to send follow-up emails manually.
This created unnecessary back-and-forth.

3. Internal setup chaos
Once onboarding started, teams still needed to:
• Create a project board
• Create a Slack channel
• Request platform access
• Assign delivery teams

All of this was done manually.`
        },
        {
          heading: "The Automation System Implemented",
          content: `A fully automated client onboarding workflow was deployed.
The workflow activates the moment a deal is marked "Closed Won" in CRM.
Immediately after the trigger:

1. The system retrieves deal and client details.
2. A personalized welcome email is sent to the client.
3. A pre-filled onboarding form is generated automatically.

The client receives a simple onboarding questionnaire to capture key campaign details.`
        },
        {
          heading: "Automated Follow-Up System",
          content: `To prevent delays, the system automatically tracks form completion.
If the onboarding form is not submitted:
• A reminder email is sent after 48 hours
• Reminders continue until the form is completed

This eliminates manual follow-ups from account managers.`
        },
        {
          heading: "Internal Project Setup",
          content: `Once the onboarding form is completed, the workflow automatically:
• Creates a project board in the agency's project management tool
• Generates all standard onboarding tasks
• Creates a dedicated Slack channel for the client
• Invites delivery team members

A client brief containing campaign details is automatically posted inside the Slack channel.`
        },
        {
          heading: "Platform Access Automation",
          content: `The system also sends a structured access request sequence.
Clients receive guided instructions to grant access to:
• Google Ads
• Meta Business Manager
• GA4
• Google Search Console

Each step verifies whether access has already been granted before sending additional emails.`
        },
        {
          heading: "Completion Notification",
          content: `Once all required access permissions are confirmed:
• The onboarding is marked complete in CRM
• The account manager receives a Slack notification
• The project is automatically moved into delivery stage

The delivery team can immediately begin campaign setup.`
        },
        {
          heading: "Results",
          results: [
            { metric: "Client onboarding time", before: "3–5 days", after: "Under 24 hours" },
            { metric: "Account manager coordination work", value: "Reduced by 70%" },
            { metric: "Manual follow-up emails", value: "Reduced to near zero" }
          ],
          content: `After implementing the onboarding automation:

Client onboarding time: reduced from 3–5 days → under 24 hours
Account manager coordination work: reduced by 70%
Manual follow-up emails: reduced to near zero`
        },
        {
          heading: "Strategic Impact",
          content: `Because onboarding became automated:
• Campaigns started faster
• Clients experienced a smoother onboarding process
• Account managers could focus on campaign strategy instead of admin work

The agency increased operational efficiency without expanding the team.`
        }
      ]
    },
    {
      id: 3,
      title: "How a Performance Marketing Agency Increased Sales Team Efficiency by 3x with Automated Lead Qualification",
      location: "Bengaluru",
      industry: "Digital Marketing & Lead Generation",
      sections: [
        {
          heading: "Agency Context",
          content: `A Bengaluru-based digital marketing agency generating leads through:
• Website contact forms
• Paid ads
• LinkedIn inbound

The agency received 80–120 leads per month, but only a small portion were qualified buyers.
Most leads were:
• Small businesses with tiny budgets
• Freelancers looking for advice
• Students or job seekers

Despite this, every lead entered the CRM and required manual review by the sales team.`
        },
        {
          heading: "The Operational Problem",
          content: `The agency's sales workflow had three major issues.

1. Sales reps were wasting time on unqualified leads
Every lead submission required manual qualification:
• Reviewing company information
• Checking LinkedIn profiles
• Estimating company size
• Understanding marketing budget

This process took 5–10 minutes per lead.

2. High-value leads were not prioritized
Some enterprise leads sat unnoticed in the CRM for hours because they were buried among low-quality submissions.
This delayed response times.

3. CRM data was incomplete
Most leads entered the CRM with minimal information:
• Name
• Email
• Company name

Sales reps had to manually research each company before outreach.`
        },
        {
          heading: "The Automation System Implemented",
          content: `A fully automated lead qualification and CRM enrichment system was deployed.
The workflow activates immediately after a website form submission.
Within seconds, the system performs several automated steps.`
        },
        {
          heading: "Automatic Lead Enrichment",
          content: `The system enriches the lead using external data sources.
This automatically retrieves information such as:
• Company size
• Industry
• Estimated revenue
• LinkedIn profile
• Technology stack

This enrichment gives the sales team immediate context about the lead.`
        },
        {
          heading: "AI-Based Lead Scoring",
          content: `After enrichment, the lead is evaluated using an automated BANT qualification model.
The system analyzes:
• Estimated marketing budget
• Decision-making authority
• Business need for marketing services
• Expected timeline for engagement

Each lead receives a score from 0–100 representing fit with the agency's ideal client profile.`
        },
        {
          heading: "Intelligent Lead Routing",
          content: `Based on the score, leads are routed automatically.

High-Score Leads (75+)
Immediately sent to a senior account executive.
The AE receives a Slack notification containing:
• Company profile
• Estimated budget
• Lead qualification summary
• Recommended talking points

This allows the AE to respond quickly.

Mid-Score Leads (40–74)
Automatically converted into follow-up tasks for the SDR team.
An SDR receives a task to contact the lead within one business day.

Low-Score Leads (<40)
Automatically entered into a CRM nurture sequence.
These leads receive educational email content over several weeks.`
        },
        {
          heading: "CRM Data Enrichment",
          content: `The system also updates the CRM with enriched lead data including:
• Company size
• Estimated revenue
• Qualification score
• AI-generated qualification summary

This information becomes searchable inside the CRM.`
        },
        {
          heading: "Results",
          results: [
            { metric: "Sales team time spent reviewing leads", before: "10 minutes per lead", after: "Under 1 minute per lead" },
            { metric: "High-value lead response time", before: "Several hours", after: "Under 5 minutes" },
            { metric: "Sales productivity", value: "Increased significantly because reps focused only on qualified prospects" }
          ],
          content: `After implementing automated lead qualification:

Sales team time spent reviewing leads: reduced from 10 minutes → under 1 minute per lead
High-value lead response time: reduced from several hours → under 5 minutes
Sales productivity: increased significantly because reps focused only on qualified prospects.`
        },
        {
          heading: "Strategic Impact",
          content: `The agency's sales team could prioritize high-quality opportunities instead of manually filtering leads.
This allowed them to focus on closing deals rather than screening prospects.`
        }
      ]
    },
    {
      id: 4,
      title: "How a Performance Marketing Agency Automated Client Meeting Documentation",
      location: "Delhi",
      industry: "Digital Marketing",
      sections: [
        {
          heading: "Agency Context",
          content: `A Delhi-based performance marketing agency managing multiple client meetings every week.
Each client account typically required:
• Weekly campaign check-ins
• Monthly performance reviews
• Ad strategy discussions

These meetings generated large volumes of discussion and follow-up tasks.`
        },
        {
          heading: "The Documentation Problem",
          content: `Meeting notes were handled inconsistently across the team.
Some account managers documented meetings thoroughly, while others relied on memory.
This led to several issues:
• Tasks being forgotten
• Unclear ownership of action items
• Inconsistent client communication`
        },
        {
          heading: "The Automation Architecture",
          content: `The agency implemented a meeting intelligence system that integrates with meeting recording tools.
After each meeting ends, the system automatically receives the meeting transcript.
The workflow then processes the transcript to extract structured meeting insights.`
        },
        {
          heading: "Automated Meeting Intelligence",
          content: `The system identifies:
• Key discussion points
• Important decisions
• Unresolved questions
• Action items mentioned during the conversation

Each task is automatically linked to the relevant team member.`
        },
        {
          heading: "Automatic Task Creation",
          content: `Once action items are identified, tasks are created inside the project management system.
Each task includes:
• Description of the action item
• Responsible team member
• Due date
• Context from the meeting

This removes the need for manual note-taking.`
        },
        {
          heading: "Client Communication Automation",
          content: `The workflow also drafts a professional client recap email summarizing the meeting.
The recap includes:
• What was discussed
• Decisions made
• Next steps

Before sending, the email is sent to the account manager for review.`
        },
        {
          heading: "CRM Meeting History",
          content: `Every meeting recap and summary is automatically stored inside the CRM.
This creates a detailed history of all client interactions.
This information becomes useful for:
• Future strategy discussions
• Internal reviews
• Account management continuity`
        },
        {
          heading: "Results",
          results: [
            { metric: "Meeting documentation time", value: "Reduced by 80%" },
            { metric: "Task follow-through", value: "Improved because action items were captured automatically" },
            { metric: "Client communication", value: "Became more consistent across all account managers" }
          ],
          content: `After implementing the meeting automation system:

Meeting documentation time: reduced by 80%
Task follow-through: improved because action items were captured automatically.
Client communication: became more consistent across all account managers.`
        },
        {
          heading: "Strategic Outcome",
          content: `The agency improved internal accountability and reduced the administrative burden on account managers.
Client meetings became more structured and easier to follow up on.`
        }
      ]
    },
    {
      id: 5,
      title: "How a Performance Marketing Agency Prevented Campaign Failures with Automated Monitoring",
      location: "Mumbai",
      industry: "Digital Marketing & Ad Operations",
      sections: [
        {
          heading: "Agency Context",
          content: `A Mumbai-based performance marketing agency managing 70+ active ad campaigns across:
• Google Ads
• Meta Ads

Campaign performance was monitored manually by the paid media team.
Account managers typically checked performance dashboards once or twice per day.`
        },
        {
          heading: "The Operational Problem",
          content: `The agency frequently encountered situations where campaign performance dropped unexpectedly.
Examples included:
• Sudden spikes in cost-per-click
• Conversion rate drops
• Ad spend pacing issues
• Creative fatigue causing CTR decline

Because monitoring was manual, these problems were sometimes detected hours or even days later.`
        },
        {
          heading: "Client Risk",
          content: `When performance problems went unnoticed, the impact was significant.
Examples included:
• Overspending on inefficient campaigns
• Wasted ad budget
• Delayed optimization responses

In some cases, clients noticed the issue before the agency did.
This created serious trust issues.`
        },
        {
          heading: "The Automation System Implemented",
          content: `The agency implemented an automated campaign monitoring system that continuously checks campaign performance.
The system runs every four hours during business hours.
Each cycle performs several checks.`
        },
        {
          heading: "Automated Data Monitoring",
          content: `The system automatically pulls live campaign data including:
• Ad spend
• Impressions
• Clicks
• CTR
• CPC
• Conversion rate
• ROAS

This data is compared against the campaign's 7-day rolling performance average.`
        },
        {
          heading: "Anomaly Detection",
          content: `The system analyzes whether any metric deviates significantly from normal performance.
Examples of detected anomalies include:
• Sudden increase in CPC
• Abnormal drop in conversion rate
• Unexpected budget overspending
• Declining click-through rate

Each anomaly is classified by severity.`
        },
        {
          heading: "AI Explanation Layer",
          content: `When an anomaly is detected, the system generates a clear explanation of the issue.
The explanation includes:
• What metric changed
• How much it deviated from the baseline
• The most likely cause
• A recommended action

This helps the campaign manager respond quickly.`
        },
        {
          heading: "Instant Slack Alerts",
          content: `When a campaign issue is detected, the responsible paid media manager receives a Slack alert.
The alert includes:
• Campaign name
• Affected metric
• Deviation percentage
• AI explanation
• Recommended action

This ensures the issue is immediately visible.`
        },
        {
          heading: "Task Creation for Resolution",
          content: `Each alert also creates a task inside the CRM for issue resolution.
This provides a trackable record of:
• When the issue was detected
• When it was resolved`
        },
        {
          heading: "Results",
          results: [
            { metric: "Campaign performance issues", value: "Detected hours earlier than manual monitoring" },
            { metric: "Response time to campaign problems", value: "Improved significantly" },
            { metric: "Manual monitoring workload", value: "Decreased for paid media managers" }
          ],
          content: `After implementing the monitoring system:

Campaign performance issues were detected hours earlier.
Response time to campaign problems improved significantly.
Manual monitoring workload for paid media managers decreased.`
        },
        {
          heading: "Strategic Impact",
          content: `The agency could proactively detect and fix campaign issues before they significantly impacted performance.
This improved both operational efficiency and client trust.`
        }
      ]
    },
    {
      id: 6,
      title: "How a Digital Marketing Agency Identified Unprofitable Clients Using Automated Utilization Analytics",
      location: "Gurgaon",
      industry: "Digital Marketing & Operations",
      sections: [
        {
          heading: "Agency Context",
          content: `A Gurgaon-based digital marketing agency with 60 employees managing multiple retainer clients across:
• Paid media
• SEO
• Content marketing

The agency used time tracking tools internally, but the data was rarely analyzed.
Leadership had limited visibility into:
• How much time teams were spending on each client
• Whether clients were profitable
• Which accounts were over-serviced`
        },
        {
          heading: "The Operational Problem",
          content: `The agency faced a common challenge.
Client retainers were priced based on estimated workload, but actual work often exceeded the original scope.
Because this was not tracked systematically, the agency frequently:
• Spent too many hours servicing certain clients
• Delivered work beyond contracted scope
• Absorbed the extra cost internally

This created hidden profit leakage.`
        },
        {
          heading: "Lack of Profit Visibility",
          content: `Leadership had no reliable way to answer questions such as:
• Which clients are consuming the most team hours?
• Are we exceeding the contracted scope for specific accounts?
• Which accounts are actually profitable?

Most of this information required manual spreadsheet analysis.
As a result, it was rarely reviewed.`
        },
        {
          heading: "The Automation System Implemented",
          content: `The agency implemented an automated utilization and profitability analysis system.
The system runs automatically every Monday morning.
It pulls operational data from multiple sources.`
        },
        {
          heading: "Data Aggregation",
          content: `The workflow collects time tracking data from the agency's time logging system.
This includes:
• Team member
• Hours logged
• Client project
• Task description

At the same time, the system retrieves contract information from the CRM.
This includes:
• Monthly service hours
• Contracted retainers
• Internal hourly cost estimates`
        },
        {
          heading: "Automated Profitability Analysis",
          content: `The system calculates key metrics for each client including:
• Hours budgeted vs. hours used
• Utilization rate
• Estimated internal cost
• Gross margin per client

This reveals which accounts are exceeding their allocated service hours.`
        },
        {
          heading: "AI Insight Layer",
          content: `When the system detects abnormal utilization patterns, it generates a brief explanation of the issue.
Examples include:
• Excessive revision cycles on campaigns
• Onboarding work exceeding expectations
• Scope creep in client requests

These insights help leadership understand the underlying cause.`
        },
        {
          heading: "Leadership Dashboard",
          content: `The processed data feeds into a leadership dashboard showing:
• Overall agency utilization
• Top over-serviced clients
• Under-utilized team members
• Margin per client account

This dashboard provides leadership with a clear operational overview.`
        },
        {
          heading: "Weekly Leadership Digest",
          content: `Each week, the agency leadership receives a Slack summary containing:
• Total agency utilization
• Top over-serviced clients
• Available team capacity
• Potential margin risks

This ensures the data is reviewed consistently.`
        },
        {
          heading: "Results",
          results: [
            { metric: "Leadership profit visibility", value: "Gained clear visibility into client profitability" },
            { metric: "Over-servicing issues", value: "Identified earlier" },
            { metric: "Team capacity planning", value: "Improved significantly" }
          ],
          content: `After implementing the profitability monitoring system:

Leadership gained clear visibility into client profitability.
Over-servicing issues were identified earlier.
Team capacity planning improved significantly.`
        },
        {
          heading: "Strategic Impact",
          content: `The agency was able to address scope creep earlier and rebalance workloads across teams.
This helped leadership maintain healthier client margins.`
        }
      ]
    }
  ];

  useEffect(() => {
    const validStudy = caseStudies.find((study) => study.id === initialCaseStudyId);
    setSelectedCaseStudyId(validStudy ? initialCaseStudyId : null);
  }, [initialCaseStudyId]);

  const selectedStudy = caseStudies.find((study) => study.id === selectedCaseStudyId) || null;
  const selectedIndex = selectedStudy
    ? caseStudies.findIndex((study) => study.id === selectedStudy.id)
    : -1;

  const openCaseStudy = (studyId) => {
    setSelectedCaseStudyId(studyId);
    window.location.hash = `case-studies/${studyId}`;
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  };

  const showAllCaseStudies = () => {
    setSelectedCaseStudyId(null);
    window.location.hash = 'case-studies';
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <br/>
      <br/>

      {/* <div className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5"> */}
        {/* <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">Case Studies</h1>
          <div className="flex items-center gap-3">
            {selectedStudy && (
              <button
                onClick={showAllCaseStudies}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">All Studies</span>
              </button>
            )}
            <button
              onClick={() => {
                window.location.hash = '';
                onBack && onBack();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all duration-200 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Back</span>
            </button>
          </div> */}
        {/* </div> */}
      {/* </div> */}

      {!selectedStudy ? (
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-white/60 text-lg">Choose a case study card to open its full page.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <motion.button
                key={study.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => openCaseStudy(study.id)}
                className="text-left p-6 rounded-xl border border-white/10 bg-white/3 hover:bg-white/6 hover:border-amber-500/40 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-semibold">
                    0{study.id}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-amber-300 transition-colors mb-3">
                  {study.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
                    📍 {study.location}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                    {study.industry}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <motion.div
            key={selectedStudy.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="scroll-mt-20"
          >
            <div className="mb-12 pb-8 border-b border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center">
                  <span className="text-amber-400 font-semibold text-lg">0{selectedStudy.id}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3 leading-tight">
                    {selectedStudy.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300">
                      📍 {selectedStudy.location}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300">
                      {selectedStudy.industry}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {selectedStudy.sections.map((section, sIdx) => (
                <motion.div
                  key={sIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: sIdx * 0.04 }}
                  viewport={{ once: true }}
                  className="bg-white/2 border border-white/5 rounded-xl p-6 md:p-8 hover:bg-white/4 hover:border-white/10 transition-all duration-300"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-amber-500" />
                    {section.heading}
                  </h3>
                  {section.results ? (
                    <div className="space-y-4">
                      {section.results.map((result, rIdx) => (
                        <div key={rIdx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-3 border-b border-white/5 last:border-b-0">
                          <span className="text-white/70 font-medium">{result.metric}</span>
                          {result.before ? (
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-red-400 line-through">{result.before}</span>
                              <span className="text-amber-400">→</span>
                              <span className="text-green-400 font-semibold">{result.after}</span>
                            </div>
                          ) : (
                            <span className="text-green-400 font-semibold text-sm">{result.value}</span>
                          )}
                        </div>
                      ))}
                      <p className="text-white/60 text-sm mt-4 leading-relaxed whitespace-pre-wrap">
                        {section.content}
                      </p>
                    </div>
                  ) : (
                    <p className="text-white/60 leading-relaxed whitespace-pre-wrap">
                      {section.content}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-between">
              <button
                type="button"
                disabled={selectedIndex <= 0}
                onClick={() => openCaseStudy(caseStudies[selectedIndex - 1].id)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/10 bg-white/3 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/8 transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous Case Study
              </button>

              <button
                type="button"
                onClick={showAllCaseStudies}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 transition-all duration-200"
              >
                All Case Studies
              </button>

              <button
                type="button"
                disabled={selectedIndex >= caseStudies.length - 1}
                onClick={() => openCaseStudy(caseStudies[selectedIndex + 1].id)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/10 bg-white/3 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/8 transition-all duration-200"
              >
                Next Case Study
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <div className="relative bg-linear-to-b from-[#0a0a0a] to-[#0a0a0a] mt-20 py-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[200px]" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              Ready to <span className="gradient-gold">eliminate revenue leakage</span>?
            </h3>
            <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
              See how we can help your agency avoid the operational inefficiencies that cost millions in hidden losses.
            </p>
            <a
              href="mailto:ramankerzarkar@logicawork.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Your Audit
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
