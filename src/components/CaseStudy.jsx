import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function CaseStudy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const sec = sectionRef.current
      if (!sec) return

      const rect = sec.getBoundingClientRect()
      const win = window.innerHeight

      if (rect.top < win * 0.6) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // First Row - Workflow Hacks, Smart Scaling, Tool Spotlight
  const topRowStudies = [
    {
      tag: "WORKFLOW HACKS",
      title: "Automate reports in minutes",
      desc: "Cut reporting time, boost accuracy, and let your team focus on what matters.",
      bgColor: "from-[#C8D4B8] to-[#D8E4C8]",
      bgImage: "laptop-dashboard"
    },
    {
      tag: "SMART SCALING",
      title: "Grow fast, hire less",
      desc: "Unlock agency growth with clever systems—no extra hires needed.",
      bgColor: "from-[#B8C8B0] to-[#C8D8C0]",
      bgImage: "team-meeting"
    },
    {
      tag: "TOOL SPOTLIGHT",
      title: "Pick your perfect AI stack",
      desc: "Find automation platforms that fit your workflow and budget.",
      bgColor: "from-[#A8D4D4] to-[#B8E4E4]",
      bgImage: "tablet-app"
    }
  ]

  // Second Row - Real Results, Onboarding Wins, AI Trends
  const bottomRowStudies = [
    {
      tag: "REAL RESULTS",
      title: "Lead gen, fully automated",
      desc: "See how one agency slashed manual lead work with a custom AI flow.",
      bgColor: "from-[#D4C8E4] to-[#E4D8F4]",
      bgImage: "analytics-screen"
    },
    {
      tag: "ONBOARDING WINS",
      title: "Frictionless client onboarding",
      desc: "Make onboarding a breeze with simple automations from call to launch.",
      bgColor: "from-[#E4D8C8] to-[#F4E8D8]",
      bgImage: "tv-dashboard"
    },
    {
      tag: "AI TRENDS",
      title: "Next-gen marketing moves",
      desc: "Catch up on the hottest AI trends shaping digital marketing this year.",
      bgColor: "from-[#F4D0D0] to-[#FFE0E0]",
      bgImage: "whiteboard-meeting"
    }
  ]

  return (
    <section 
      id="case-study" 
      ref={sectionRef}
      className="relative py-24 px-4 bg-[#f1dcb2] "
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#2a2a2a] mb-6">
            Fresh AI insights for marketers
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl">
            Explore the latest in automation, AI tools, and agency growth. Stay sharp with our expert takes.
          </p>
        </motion.div>

        {/* First Row - Top 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {topRowStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.1 }}
              className="group"
            >
              {/* Image Container */}
              <motion.div
                className={`relative overflow-hidden rounded-3xl aspect-[4/3] mb-4 bg-gradient-to-br ${study.bgColor} shadow-lg`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {study.bgImage === 'laptop-dashboard' && '💻'}
                    {study.bgImage === 'team-meeting' && '👥'}
                    {study.bgImage === 'tablet-app' && '📱'}
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
              >
                <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-2">
                  {study.tag}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3 group-hover:text-yellowBrand transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {study.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Second Row - Bottom 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {bottomRowStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: (i + 3) * 0.1 }}
              className="group"
            >
              {/* Image Container */}
              <motion.div
                className={`relative overflow-hidden rounded-3xl aspect-[4/3] mb-4 bg-gradient-to-br ${study.bgColor} shadow-lg`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {study.bgImage === 'analytics-screen' && '📊'}
                    {study.bgImage === 'tv-dashboard' && '📺'}
                    {study.bgImage === 'whiteboard-meeting' && '🤝'}
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: (i + 3) * 0.1 + 0.2 }}
              >
                <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-2">
                  {study.tag}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3 group-hover:text-yellowBrand transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {study.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}