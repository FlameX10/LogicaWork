import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Zap, TrendingUp, Award } from 'lucide-react'

export default function SocialProof() {
  const { ref, inView } = useScrollAnimation()

  const stats = [
    { icon: Zap, number: '10×', label: 'Faster Reports' },
    { icon: TrendingUp, number: '90%', label: 'Less Manual Work' },
    { icon: Award, number: '100+', label: 'Happy Agencies' },
  ]

  return (
    <section id="social-proof" ref={ref} className="py-20 px-4 bg-black border-y border-yellowBrand/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gradient-to-br from-zinc-900 to-black border-2 border-yellowBrand/30 rounded-2xl p-8 text-center hover:border-yellowBrand/60 transition-all duration-300 group"
              >
                <Icon className="text-yellowBrand mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-5xl font-bold text-yellowBrand mb-2">{stat.number}</h3>
                <p className="text-gray-300 font-semibold">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
