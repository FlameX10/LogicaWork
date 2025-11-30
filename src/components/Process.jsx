import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const sec = sectionRef.current
      if (!sec) return

      const rect = sec.getBoundingClientRect()
      const win = window.innerHeight

      if (rect.top < win * 0.8 && rect.bottom > win * 0.2) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <section
      id="process"
      ref={sectionRef}
      className="py-24 px-4 bg-black border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your AI automation <span className="text-yellowBrand">questions</span>, answered</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              No jargon. No fluff. Just clear, fast answers to your top automation questions—so you can scale smarter, not harder.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-full md:w-auto bg-yellowBrand text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-all"
            >
              Ask now
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800"
              >
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
