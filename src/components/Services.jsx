import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { BarChart3, Brain, Users, Zap, Database, Layout } from 'lucide-react'

export default function Services() {
  const { ref, inView } = useScrollAnimation()

  const services = [
    {
      icon: BarChart3,
      title: 'Ad Platform Data Automation',
      description: 'Sync Meta, Google, LinkedIn data automatically with custom formatting and cleaning.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Brain,
      title: 'AI Reporting Engine',
      description: 'Generate AI-written performance reports with insights and recommendations daily.',
      gradient: 'from-yellow-300 to-yellow-500'
    },
    {
      icon: Users,
      title: 'Lead Gen & CRM Automation',
      description: 'Automate lead qualification, scoring, and CRM updates in real-time.',
      gradient: 'from-orange-400 to-yellow-400'
    },
    {
      icon: Zap,
      title: 'Custom AI Agents',
      description: 'Build specialized AI agents for your unique business workflows and processes.',
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      icon: Database,
      title: 'Web Scraping & Data Pipelines',
      description: 'Extract, transform, and load data from any source at scale.',
      gradient: 'from-amber-400 to-yellow-300'
    },
    {
      icon: Layout,
      title: 'Dashboard Automation',
      description: 'Real-time dashboards that update automatically with live data.',
      gradient: 'from-yellow-400 to-orange-400'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" ref={ref} className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            What we <span className="gradient-text">automate</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From data pipelines to AI agents, we handle every automation need
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255, 211, 0, 0.2)" }}
                className="bg-gradient-to-br from-zinc-900 to-black border-2 border-yellowBrand/20 rounded-2xl p-8 hover:border-yellowBrand/60 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
