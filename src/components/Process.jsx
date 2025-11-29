import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Process() {
  const { ref, inView } = useScrollAnimation()

  const faqs = [
    {
      q: "What's included with setup?",
      a: "We handle workflow mapping, custom AI agent design, data integration, and onboarding. Every system is tailored—no one-size-fits-all.",
    },
    {
      q: "How fast can we launch?",
      a: "Most projects go live in 2–4 weeks. We keep you in the loop, every step of the way.",
    },
    {
      q: "Can you connect to our tools?",
      a: "Yes! We integrate with all major ad platforms, CRMs, and reporting tools. If it has an API, we automate it.",
    },
    {
      q: "What support comes after launch?",
      a: "You get ongoing support, performance checks, and quick updates as your needs change. We keep your automations humming.",
    },
  ]

  return (
    <section id="process" ref={ref} className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              Your AI automation questions, answered
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              No jargon. No fluff. Just clear, fast answers to your top automation
              questions—so you can scale smarter, not harder.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-full bg-yellowBrand text-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
            >
              Ask now
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl card-shadow"
              >
                <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
