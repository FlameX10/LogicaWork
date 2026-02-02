import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

export default function Blog3StartupTech() {
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
      <header className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-purple-300 hover:text-purple-200 mb-6"
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
            Essential Technology Stack for Startups: Build Right, Scale Fast
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-purple-200 mb-8 leading-relaxed"
          >
            Discover the technology choices that enable startups to launch faster, scale efficiently, and compete with larger enterprises from day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-6 text-sm text-purple-300"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By LogicaWork Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>13 min read</span>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        
        <section className="mb-12">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Technology choices made in the first six months of a startup often determine whether that startup survives and thrives—or struggles under technical debt and scaling problems. Getting the tech stack right doesn't mean choosing the newest or trendiest tools. It means selecting technologies that balance speed to market, scalability, and developer productivity.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We've worked with dozens of startups at various stages. Here's what we've learned about building tech stacks that actually work.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Startup Tech Stack Challenge: Speed vs. Scalability
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Every startup founder faces this dilemma: Launch fast with quick-and-dirty code, or build carefully for future scale? The answer isn't either/or—it's both.
          </p>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
            <p className="font-semibold text-gray-900 mb-2">The Goldilocks Principle:</p>
            <p className="text-gray-700">
              Choose tools and technologies that let you ship quickly without creating unmaintainable code. Prioritize developer experience and built-in scalability over premature optimization.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frontend Technology: Recommendations for 2024
          </h2>

          <div className="space-y-8">
            {[
              {
                tech: "React.js or Next.js",
                why: "Massive ecosystem, huge developer pool, excellent tooling. Next.js adds built-in performance optimization and server-side rendering.",
                when: "Choose React for complex applications. Choose Next.js if you need SEO, API routes, and faster initial deployment.",
                cost: "Free (open source). Developer cost may be higher due to learning curve."
              },
              {
                tech: "TypeScript",
                why: "Catches errors before runtime, improves code maintainability, makes refactoring safer. Saves time long-term.",
                when: "Recommended for all startups planning to scale. Costs more upfront but pays off within 6 months.",
                cost: "Free. Slower initial development but fewer bugs in production."
              },
              {
                tech: "Tailwind CSS",
                why: "Utility-first CSS framework dramatically accelerates UI development. No need for separate CSS files or design decisions.",
                when: "Perfect for startups that want to launch quickly without hiring a dedicated designer.",
                cost: "Free. Dramatically reduces styling time."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white border-2 border-purple-200 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.tech}</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Why:</strong> {item.why}</p>
                  <p><strong>When to use:</strong> {item.when}</p>
                  <p><strong className="text-purple-700">Cost:</strong> {item.cost}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Backend Technology: Proven Choices for Startups
          </h2>

          <div className="space-y-8">
            {[
              {
                tech: "Node.js with Express or Fastify",
                why: "JavaScript across full stack reduces context switching. Excellent package ecosystem. Scales horizontally.",
                when: "Best for startups with smaller teams and JavaScript developers.",
                considerations: "Less suitable for CPU-intensive applications."
              },
              {
                tech: "Python with Django or FastAPI",
                why: "Rapid development, excellent libraries for AI/ML, huge data science community. Beautiful syntax reduces bugs.",
                when: "Ideal for startups doing data processing, machine learning, or complex business logic.",
                considerations: "Slightly slower than Node.js, but developer productivity more than makes up for it."
              },
              {
                tech: "Golang",
                why: "Compiled language, excellent performance, built for concurrent systems. Modern language design without legacy baggage.",
                when: "Choose for high-performance systems, microservices, or if you need maximum efficiency.",
                considerations: "Smaller ecosystem than Node/Python. Requires more experienced developers."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                className="bg-white border-2 border-purple-200 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.tech}</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Why:</strong> {item.why}</p>
                  <p><strong>When to use:</strong> {item.when}</p>
                  <p><strong className="text-purple-700">Considerations:</strong> {item.considerations}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Database Choices: SQL vs. NoSQL vs. Specialized
          </h2>

          <div className="space-y-8">
            {[
              {
                db: "PostgreSQL",
                best: "Almost everything",
                why: "Powerful relational database with JSON support, full-text search, and excellent scaling options. Industry standard.",
                cost: "Free. Managed services ($100-500/month)"
              },
              {
                db: "MongoDB",
                best: "Flexible schemas, rapid iteration",
                why: "NoSQL database good when you don't have fixed schema. Better for document storage and rapid prototyping.",
                cost: "Free. Managed Atlas ($57-500+/month)"
              },
              {
                db: "Redis",
                best: "Caching, sessions, real-time data",
                why: "In-memory database for cache layer, sessions, real-time features. Dramatically speeds up applications.",
                cost: "Free. Managed services ($15-100+/month)"
              },
              {
                db: "Elasticsearch",
                best: "Search, logging, analytics",
                why: "Powerful search and analytics engine. Essential if search is core to your product.",
                cost: "Free. Managed services ($95-400+/month)"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{item.db}</h3>
                  <span className="text-sm font-semibold bg-white text-purple-700 px-3 py-1 rounded-full">{item.best}</span>
                </div>
                <p className="text-gray-700 mb-3"><strong>Why:</strong> {item.why}</p>
                <p className="text-gray-700"><strong className="text-purple-700">Cost:</strong> {item.cost}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-8">
            <p className="font-semibold text-gray-900 mb-2">💡 Pro Tip for Startups:</p>
            <p className="text-gray-700">
              Start with PostgreSQL for structured data and Redis for caching. This combination handles 90% of startup requirements. Add specialized databases only when you have a specific need.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Infrastructure & Deployment: Keep It Simple
          </h2>

          <div className="space-y-6">
            {[
              {
                option: "Vercel (Frontend)",
                best: "Best for React/Next.js applications",
                benefits: "Automatic deployments, edge functions, built-in CDN, amazing DX. Free tier generous for startups.",
                cost: "$0-100+/month"
              },
              {
                option: "AWS or Google Cloud (Backend)",
                best: "Everything else",
                benefits: "Industry standard with excellent scalability. Larger learning curve but worth it.",
                cost: "$50-500+/month depending on usage"
              },
              {
                option: "Docker + Kubernetes",
                best: "When you're ready to scale",
                benefits: "Containerized deployments, portable, auto-scaling. Often overkill for early-stage startups.",
                cost: "Free (tools) but requires DevOps expertise"
              },
              {
                option: "Fly.io or Railway",
                best: "Between simple and complex",
                benefits: "Docker deployment made easy. Simpler than AWS, more powerful than Vercel. Growing ecosystem.",
                cost: "$5-100+/month"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
                className="bg-white border-2 border-purple-200 rounded-lg p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{item.option}</h3>
                  <span className="text-xs font-bold bg-purple-100 text-purple-700 px-3 py-1 rounded">{item.best}</span>
                </div>
                <p className="text-gray-700 mb-2"><strong>Benefits:</strong> {item.benefits}</p>
                <p className="text-sm text-gray-600"><strong>Cost:</strong> {item.cost}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Recommended Startup Tech Stack (2024)
          </h2>

          <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8">The Complete Stack</h3>
            
            <div className="space-y-6">
              {[
                { category: "Frontend", tech: "Next.js, TypeScript, Tailwind CSS", why: "Fast shipping, great performance, scalable" },
                { category: "Backend", tech: "Node.js with Express or Python with FastAPI", why: "Developer productivity, scalable, lots of libraries" },
                { category: "Database", tech: "PostgreSQL (primary) + Redis (cache)", why: "Reliable, performant, handles most needs" },
                { category: "Deployment", tech: "Vercel (frontend) + AWS/Fly.io (backend)", why: "Easy deployment, scales as you grow" },
                { category: "Authentication", tech: "Auth0 or NextAuth.js", why: "Secure, saves development time, proven" },
                { category: "File Storage", tech: "AWS S3 or Vercel Blob Storage", why: "Scalable, reliable, cost-effective" },
                { category: "Monitoring", tech: "Vercel Analytics + Sentry", why: "Catches errors, monitors performance" },
                { category: "CI/CD", tech: "GitHub Actions", why: "Free, integrated with GitHub, sufficient for startups" }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 pb-4 border-b border-purple-700 last:border-b-0">
                  <div className="flex-shrink-0 w-24 font-semibold text-purple-200">{item.category}</div>
                  <div className="flex-grow">
                    <p className="font-semibold mb-1">{item.tech}</p>
                    <p className="text-purple-200 text-sm">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-purple-700">
              <p className="text-purple-200"><strong>Estimated monthly cost:</strong> $100-300 for a typical startup</p>
              <p className="text-purple-200 text-sm mt-2">This is highly scalable—costs grow with usage, not upfront complexity.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Technology Decisions That Matter (And Those That Don't)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">💚 Decisions That Matter</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Database choice (locks you in long-term)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Architecture for scalability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Authentication & security approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Team expertise & productivity</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🔵 Don't Over-Optimize</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span>Specific frontend framework (React vs Vue vs Svelte)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span>Microservices in year 1</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span>Complex caching strategies (cache later)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span>Premature optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Common Startup Tech Stack Mistakes
          </h2>

          <div className="space-y-6">
            {[
              {
                mistake: "Choosing trendy tech over proven solutions",
                impact: "Fewer developers available, limited documentation, support disappears",
                solution: "Stick with mainstream technologies that have large communities"
              },
              {
                mistake: "Overengineering from day one",
                impact: "Slow to launch, expensive, buggy code, technical debt",
                solution: "Build for today's needs. Refactor when scaling demands it"
              },
              {
                mistake: "Ignoring scalability completely",
                impact: "System crashes under growth, expensive rewrites later",
                solution: "Choose fundamentally scalable architectures, even if simple now"
              },
              {
                mistake: "Wrong infrastructure choices",
                impact: "Massive bills, limited scaling capability, vendor lock-in pain",
                solution: "Start small with managed services, migrate as needed"
              }
            ].map((item, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❌ {item.mistake}</h3>
                <p className="text-gray-700 mb-2"><strong>Impact:</strong> {item.impact}</p>
                <p className="text-gray-700"><strong className="text-green-700">✓ Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Conclusion: Build for Tomorrow, Not Yesterday
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The best tech stack is one that lets your team ship quickly, scales as your business grows, and isn't so complex that technical debt buries you. Choose proven technologies with large communities, build with scalability in mind, and don't over-engineer until you have to. The goal isn't the perfect tech stack—it's the stack that lets you win.
          </p>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Building Your Tech Stack?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Our team has experience building scalable systems for startups. Let's create a tech strategy tailored to your business.
          </p>
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all">
            Get a Tech Stack Consultation
          </button>
        </section>
      </main>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Essential Technology Stack for Startups: Build Right, Scale Fast",
          "description": "Discover the technology choices that enable startups to launch faster, scale efficiently, and compete with larger enterprises from day one.",
          "datePublished": "2024-01-15",
          "author": { "@type": "Organization", "name": "LogicaWork" },
          "publisher": { "@type": "Organization", "name": "LogicaWork", "logo": "https://logicawork.com/logo.png" }
        })}
      </script>
    </article>
  );
}
