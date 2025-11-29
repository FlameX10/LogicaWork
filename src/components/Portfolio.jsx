import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Portfolio() {
  const { ref, inView } = useScrollAnimation()

  const projects = [
    {
      tag: 'LEAD & CRM AUTOMATION',
      title: 'Leads scored. Deals closed. Fast.',
      description: 'Auto-score, enrich, and sync leads. Trigger outreach and CRM updates—never miss a hot lead again.',
      bg: 'bg-gradient-to-br from-orange-100 to-orange-50'
    },
    {
      tag: 'AD PLATFORM AUTOMATION',
      title: 'Ad data, handled automatically',
      description: 'Sync Meta, Google, LinkedIn ad data. Clean, report, and automate—no more spreadsheets or manual updates.',
      bg: 'bg-gradient-to-br from-blue-100 to-blue-50'
    },
  ]

  return (
    <section id="portfolio" ref={ref} className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="mb-20 last:mb-0"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {i % 2 === 0 ? (
                <>
                  <div className={`${project.bg} rounded-2xl aspect-square flex items-center justify-center`}>
                    <span className="text-7xl">{i === 0 ? '📊' : '💼'}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">{project.tag}</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-dark mb-4">{project.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 bg-yellowBrand text-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
                    >
                      Explore
                    </motion.button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">{project.tag}</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-dark mb-4">{project.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 bg-yellowBrand text-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
                    >
                      Explore
                    </motion.button>
                  </div>
                  <div className={`${project.bg} rounded-2xl aspect-square flex items-center justify-center`}>
                    <span className="text-7xl">{i === 0 ? '📊' : '💼'}</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
