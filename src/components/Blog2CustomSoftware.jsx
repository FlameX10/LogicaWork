import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

export default function Blog2CustomSoftware() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <article ref={sectionRef} className="min-h-screen bg-white">
      <header className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-blue-300 hover:text-blue-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Why Off-the-Shelf Software Fails: The Case for Custom Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-blue-200 mb-8 leading-relaxed"
          >
            Learn why generic software solutions cost more in the long run and how custom software development delivers competitive advantages for growing businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-6 text-sm text-blue-300"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 28, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By LogicaWork Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>14 min read</span>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        
        <section className="mb-12">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Your business is unique. Yet 73% of companies try to force their operations into off-the-shelf software solutions that were designed for generic use cases. The result? Wasted time, frustrated teams, and thousands of dollars spent on workarounds.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Custom software development isn't just for large enterprises anymore. Today, companies of all sizes are discovering that investing in custom solutions provides faster ROI, better scalability, and genuine competitive advantages.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Real Costs of Off-the-Shelf Software
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            While off-the-shelf solutions appear cheaper upfront, the hidden costs add up quickly:
          </p>
          
          <div className="space-y-6">
            {[
              {
                cost: "Licensing & Subscription Fees",
                explanation: "Monthly SaaS fees, expensive upgrades, per-user costs. A 50-person team using industry standard tools can spend $50K-$200K annually on software alone."
              },
              {
                cost: "Customization & Integration Costs",
                explanation: "Off-the-shelf software rarely fits your workflow perfectly. Customizations, API integrations, and workarounds eat up budgets and timelines."
              },
              {
                cost: "Lost Productivity",
                explanation: "Employees forced to use software that doesn't match their workflow waste 10-15% of productive time navigating clunky interfaces and manual workarounds."
              },
              {
                cost: "Technical Debt & Migration Costs",
                explanation: "When software vendors change pricing, discontinue features, or get acquired, migration to new systems is painful and expensive."
              },
              {
                cost: "Limited Scalability",
                explanation: "Generic software hits performance ceilings as your business grows. Scaling often requires expensive system replacements."
              },
              {
                cost: "Vendor Lock-In & Lack of Control",
                explanation: "You're at the mercy of vendor decisions. They control features, pricing, security, and roadmap—not you."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.cost}</h3>
                <p className="text-gray-700">{item.explanation}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-blue-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Math: Custom vs. Off-the-Shelf</h3>
          <table className="w-full text-gray-700">
            <thead className="border-b-2 border-gray-300">
              <tr>
                <th className="text-left font-bold py-3">Factor</th>
                <th className="text-left font-bold py-3">Off-the-Shelf</th>
                <th className="text-left font-bold py-3">Custom Software</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-3">Initial Cost</td>
                <td>$0-$50K</td>
                <td>$75K-$250K</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">Annual Licensing</td>
                <td>$30K-$200K</td>
                <td>$0</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">5-Year Cost</td>
                <td>$150K-$1.1M</td>
                <td>$75K-$300K</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">Customization Effort</td>
                <td>High (Limited)</td>
                <td>Built-in (Unlimited)</td>
              </tr>
              <tr>
                <td className="py-3">Scalability</td>
                <td>Limited</td>
                <td>Unlimited</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-600 mt-4 italic">* Costs vary by company size and complexity</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Custom Software is Worth the Investment
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Perfect Alignment with Your Workflow",
                content: "Software designed specifically for your business processes eliminates workarounds and friction. Employees embrace tools that match their reality."
              },
              {
                title: "Competitive Differentiation",
                content: "Off-the-shelf software makes competitors indistinguishable. Custom software becomes a competitive moat—something competitors can't easily replicate."
              },
              {
                title: "True Scalability",
                content: "Custom software grows with your business without hitting performance ceilings or requiring expensive upgrades and migrations."
              },
              {
                title: "Complete Data Ownership",
                content: "Your data stays yours. No vendor access, no surprise pricing changes, no risk of discontinuation or acquisition."
              },
              {
                title: "Reduced Long-Term Costs",
                content: "After the initial development, custom software has negligible licensing costs. Over 5-10 years, costs drop dramatically compared to SaaS subscriptions."
              },
              {
                title: "Faster ROI",
                content: "Properly built custom software delivers measurable ROI in 12-18 months through productivity gains, cost reduction, and revenue opportunities."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.content}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Real-World Case Studies
          </h2>

          <div className="space-y-8">
            {[
              {
                company: "E-Commerce Startup",
                problem: "Shopify ecosystem couldn't handle custom pricing logic and inventory management",
                solution: "Built custom e-commerce platform with advanced pricing engine",
                result: "30% reduction in abandoned carts, $2M annual savings, 60% operational efficiency gain"
              },
              {
                company: "Manufacturing Company",
                problem: "ERP system required $200K in annual customization and had severe limitations",
                solution: "Developed integrated production planning and scheduling system",
                result: "40% reduction in production time, $500K annual savings, first-time implementation"
              },
              {
                company: "Digital Agency",
                problem: "Project management tools didn't fit agency workflow, forcing manual workarounds",
                solution: "Created custom PM tool tailored to agency processes",
                result: "25% faster project delivery, 100% team adoption, estimated $150K annual productivity gain"
              }
            ].map((study, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Problem:</strong> {study.problem}</p>
                  <p><strong>Solution:</strong> {study.solution}</p>
                  <p><strong className="text-green-700">Results:</strong> {study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            When to Choose Custom Software Development
          </h2>

          <div className="space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed">
              Custom software is the right choice when:
            </p>
            <ul className="space-y-3 text-gray-600 text-lg">
              {[
                "Your business has unique processes that off-the-shelf software can't support",
                "You're experiencing significant operational inefficiencies despite using SaaS tools",
                "You're spending more than 40% of your software budget on customization and integration",
                "You need seamless integration across multiple systems",
                "Scalability and performance are critical to your growth",
                "You want to reduce vendor dependency and licensing costs"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold text-xl mt-1">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How to Get Started With Custom Software
          </h2>

          <div className="space-y-6">
            {[
              { step: 1, title: "Discovery & Requirements", desc: "Document your workflows, pain points, and desired outcomes in detail." },
              { step: 2, title: "Technical Architecture Planning", desc: "Define technology stack, scalability requirements, and integration points." },
              { step: 3, title: "MVP Development", desc: "Start with a Minimum Viable Product containing core features, launched quickly." },
              { step: 4, title: "User Testing & Feedback", desc: "Gather real-world feedback from end-users and iterate rapidly." },
              { step: 5, title: "Phased Rollout", desc: "Implement in stages with training and support for smooth adoption." },
              { step: 6, title: "Continuous Optimization", desc: "Monitor performance and continuously improve based on usage patterns." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The Bottom Line
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Off-the-shelf software promises quick implementation but delivers long-term pain, costs, and limitations. Custom software requires upfront investment but pays dividends through better workflows, scalability, cost savings, and competitive advantage. For businesses serious about growth, custom development is an investment in your future.
          </p>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Build Custom Software for Your Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss your unique requirements and create a software solution built for your success.
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all">
            Get a Custom Software Consultation
          </button>
        </section>
      </main>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Why Off-the-Shelf Software Fails: The Case for Custom Development",
          "description": "Learn why generic software solutions cost more in the long run and how custom software development delivers competitive advantages for growing businesses.",
          "datePublished": "2024-01-28",
          "author": { "@type": "Organization", "name": "LogicaWork" },
          "publisher": { "@type": "Organization", "name": "LogicaWork", "logo": "https://logicawork.com/logo.png" }
        })}
      </script>
    </article>
  );
}
