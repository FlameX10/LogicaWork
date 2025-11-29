import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="hero" className="pt-32 md:pt-40 pb-20 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 font-sans"
            >
              AI automation that scales agencies
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl"
            >
              We build automation workflows, AI agents, and data pipelines that eliminate bottlenecks and help agencies grow without adding headcount.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-yellowBrand text-dark px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
              >
                Book a call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark transition-all duration-300 w-fit"
              >
                Case studies
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 aspect-video flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/10"></div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative z-10 text-center"
                >
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-dark font-bold text-lg">AI Automation Dashboard</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
