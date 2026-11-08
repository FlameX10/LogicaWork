import { PageHero } from '../components/ui.jsx'

function LegalPage({ label, title, updated, sections }) {
  return (
    <>
      <PageHero label={label} title={title} intro={`Last updated: ${updated}`} />
      <section className="container-x pb-24">
        <div className="prose-lw max-w-3xl space-y-12">
          {sections.map(([h, body]) => (
            <div key={h}>
              <h2 className="mb-4 text-2xl font-bold">{h}</h2>
              {body.map((p, i) =>
                Array.isArray(p) ? (
                  <ul key={i}>{p.map((x) => <li key={x}>{x}</li>)}</ul>
                ) : (
                  <p key={i}>{p}</p>
                ),
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export function Privacy() {
  return (
    <LegalPage
      label="Legal"
      title="Privacy Policy"
      updated="November 2026"
      sections={[
        ['Who we are', ['LogicaWork (“we”, “us”) provides AI automation, workflow and integration services. This policy explains how we handle information collected through logicawork.com.']],
        [
          'What we collect',
          [
            'When you submit the contact form we receive the details you provide:',
            ['Name and work email', 'Company name and phone number (optional)', 'The description of your process or problem'],
            'We also collect anonymous usage analytics (such as pages visited and device type) through Google Analytics to understand how the site is used.',
          ],
        ],
        [
          'How we use it',
          [
            ['To respond to your enquiry and arrange a discovery conversation', 'To scope and deliver services you request', 'To improve this website'],
            'We do not sell your personal information, and we do not use it for unrelated marketing.',
          ],
        ],
        ['Service providers', ['Contact form submissions are sent directly to our business inbox by email. Our website host (Netlify) and email provider process this data on our behalf, and analytics is provided by Google, each under their own privacy terms.']],
        ['Retention', ['We keep enquiry details only as long as needed to respond and, if we work together, for the duration of the engagement and any legal record-keeping obligations.']],
        ['Your rights', ['You can ask us to access, correct or delete the personal information we hold about you by contacting us through the contact page.']],
        ['Changes', ['We may update this policy from time to time. The latest version will always be available on this page.']],
      ]}
    />
  )
}

export function Terms() {
  return (
    <LegalPage
      label="Legal"
      title="Terms of Service"
      updated="November 2026"
      sections={[
        ['Use of this website', ['By using logicawork.com you agree to these terms. The content on this site is provided for general information about our services.']],
        ['Services', ['Specific services, deliverables, timelines, fees and success criteria are agreed in a separate written proposal or agreement for each engagement. Those documents take precedence over this website.']],
        ['Results', ['Case study results describe outcomes measured for specific businesses against their own baseline. They are not a guarantee of identical results for every business.']],
        ['Intellectual property', ['All content, design and branding on this website belong to LogicaWork unless stated otherwise. Client names and logos are used with reference to work performed for them.']],
        ['Limitation of liability', ['This website is provided “as is”. To the extent permitted by law, LogicaWork is not liable for any loss arising from use of the website or reliance on its content.']],
        ['Governing law', ['These terms are governed by the laws of India.']],
        ['Contact', ['Questions about these terms can be sent through our contact page.']],
      ]}
    />
  )
}
