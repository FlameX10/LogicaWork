import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Star } from 'lucide-react'

export default function About() {
  const { ref, inView } = useScrollAnimation()

  const stats = [
    { number: '52K+', label: 'Marketers supercharged' },
    { number: '2M+', label: 'Workflows streamlined' },
  ]

  const testimonials = [
    {
      name: 'Alex Harper',
      title: 'Growth Lead, AdVanta',
      quote: 'Logica Work\'s automations slashed our reporting time. Now we focus on strategy, not spreadsheets.',
      rating: 5
    },
    {
      name: 'Taylor Singh',
      title: 'Ops Director, PixelPulse',
      quote: 'We scaled campaigns without extra hires. The AI agents just work—total game changer.',
      rating: 5
    },
    {
      name: 'Jordan Avery',
      title: 'Head of Digital, NovaWorks',
      quote: 'Automations let us deliver client reports 10× faster. Our clients notice the difference.',
      rating: 5
    },
    {
      name: 'Morgan Lane',
      title: 'Founder, MetricNest',
      quote: 'From onboarding to launch, everything was seamless. Our data flows are now fully automated.',
      rating: 5
    },
  ]

  return (
    <section id="about" ref={ref} className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            Agencies <span className="gradient-text">rave</span>. Results speak.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear how digital teams win big with AI automation—straight from the source.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-gradient-to-br from-zinc-900 to-black border-2 border-yellowBrand/30 rounded-2xl p-10 text-center"
            >
              <h3 className="text-6xl md:text-7xl font-bold gradient-text mb-2">{stat.number}</h3>
              <p className="text-gray-300 text-lg font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gradient-to-br from-zinc-900 to-black border-2 border-yellowBrand/20 p-8 rounded-2xl hover:border-yellowBrand/60 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellowBrand fill-yellowBrand" size={18} />
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
