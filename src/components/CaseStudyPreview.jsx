import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Clock, TrendingUp } from "lucide-react";

const CaseStudyPreview = ({ onViewCaseStudies }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;

      const rect = sec.getBoundingClientRect();
      const win = window.innerHeight;

      if (rect.top < win * 0.6 && rect.bottom > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "65-Employee Agency Eliminates 25+ Hours Monthly Reporting",
      location: "Pune",
      metric: "30+ hours → <2 hours",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      tagColor: "bg-blue-500/10 border-blue-500/20 text-blue-300"
    },
    {
      id: 2,
      title: "70-Employee Agency Reduces Onboarding from 5 Days to 1 Day",
      location: "Mumbai",
      metric: "5 days → 24 hours",
      icon: <Clock className="w-6 h-6" />,
      color: "from-amber-500/20 to-amber-600/20",
      borderColor: "border-amber-500/30",
      tagColor: "bg-amber-500/10 border-amber-500/20 text-amber-300"
    },
    {
      id: 3,
      title: "Performance Agency Increases Sales Efficiency by 3x",
      location: "Bengaluru",
      metric: "10 min → <1 min",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      tagColor: "bg-green-500/10 border-green-500/20 text-green-300"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] py-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-sm text-amber-300 font-medium">Real Results</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight">
            How Agencies Are{' '}
            <span className="gradient-gold">Eliminating Leakage</span>
            {' '}in Real Time
          </h2>

          <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            See how 6 Indian agencies eliminated operational bottlenecks, recovered team capacity, 
            and increased profitability through intelligent automation.
          </p>
        </motion.div>

        {/* Case Study Cards Preview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => {
                window.location.hash = 'case-studies'
              }}
              className="group cursor-pointer"
            >
              <div className={`
                relative h-full p-8 rounded-xl border transition-all duration-300
                bg-gradient-to-br ${study.color} ${study.borderColor}
                hover:border-white/20 hover:bg-white/[0.08]
              `}>
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg`}
                  style={{
                    background: `linear-gradient(135deg, ${study.color.split(' ')[1]}20 0%, transparent 100%)`
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`
                    inline-flex items-center justify-center w-14 h-14 rounded-lg mb-6
                    ${study.tagColor} border transition-all duration-300
                    group-hover:scale-110
                  `}>
                    {study.icon}
                  </div>

                  {/* Metric Badge */}
                  <div className={`
                    inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4
                    ${study.tagColor} border
                  `}>
                    {study.metric}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-4 line-clamp-3 group-hover:text-amber-300 transition-colors">
                    {study.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
                    <span>📍</span>
                    <span>{study.location}</span>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">View Study</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Border animation on hover */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            Explore all 6 case studies and see the exact systems used to prevent revenue leakage at scale.
          </p>

          <button
            onClick={() => {
              window.location.hash = 'case-studies'
            }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-500/30 cursor-pointer hover:scale-105 active:scale-95 transform"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Subtext */}
          <p className="text-white/30 text-sm mt-6">
            6 detailed case studies • 100+ hours of implementation documented
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-3 gap-6 mt-20 pt-12 border-t border-white/5"
        >
          {[
            { label: "Agencies Studied", value: "6+" },
            { label: "Hours Saved Monthly", value: "100+" },
            { label: "Revenue Recovered", value: "₹15L+" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-gold mb-2">
                {stat.value}
              </div>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;
