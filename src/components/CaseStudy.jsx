import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function CaseStudy() {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="case-study" ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">
              AI-POWERED REPORTING
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Reports done. Clients wowed.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Automated weekly summaries and insights. Deliver polished, on-brand reports—no late nights, just
              results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-yellowBrand text-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
            >
              Discover
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 to-purple-100 aspect-square flex items-center justify-center"
          >
            <span className="text-7xl">💜</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
