import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;

      const rect = sec.getBoundingClientRect();
      const win = window.innerHeight;

      // Trigger animation when section is 60% visible
      if (rect.top < win * 0.6 && rect.bottom > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      tag: "AD PLATFORM AUTOMATION",
      title: "Ad data, handled automatically",
      desc: "Pull ad reports, unify metrics, and keep everything in sync.",
      icon: "📊",
      gradient: "from-yellow-500 to-yellow-600",
      cardBg: "from-[#FBF9F4] to-[#F5F1E8]"
    },
    {
      tag: "LEAD & CRM AUTOMATION",
      title: "Leads scored. Deals closed. Fast.",
      desc: "Auto-score, enrich, and sync leads with AI precision.",
      icon: "🎯",
      gradient: "from-yellow-400 to-yellow-500",
      cardBg: "from-[#FDFCFA] to-[#F8F5F0]"
    },
    {
      tag: "AI-POWERED REPORTING",
      title: "Reports done. Clients wowed.",
      desc: "Automated weekly summaries delivered on-brand.",
      icon: "✨",
      gradient: "from-yellow-300 to-yellow-400",
      cardBg: "from-[#FEFDF9] to-[#FAF7F2]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4 md:px-8 bg-[#F7F0DF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
              <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs md:text-sm font-semibold text-gray-500 tracking-widest mb-4 uppercase"
              >
                What We Automate
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6 leading-tight"
              >
                Workflows that{" "}
            <span className="text-yellowBrand inline-block">
                  work
            </span>{" "}
                for you
              </motion.h2>
              
              <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              >
            Streamline your operations with intelligent automation solutions designed to save time and boost efficiency.
              </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {cards.map((card, i) => (
                  <motion.div
                    key={i}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
                    }}
              className="group"
                  >
                    <div
                className={`bg-gradient-to-br ${card.cardBg} border border-yellow-200/40 rounded-3xl p-8 md:p-10 h-full flex flex-col shadow-lg hover:shadow-2xl hover:border-yellow-300/60 transition-all duration-500 relative overflow-hidden`}
                    >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                      <motion.div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-3xl md:text-4xl shadow-lg mb-6 relative z-10`}
                  whileHover={{ 
                    rotate: [0, -5, 5, 0],
                    scale: 1.1,
                    transition: { duration: 0.5 }
                        }}
                      >
                        <motion.span
                    animate={{ y: [0, -6, 0] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                        >
                          {card.icon}
                        </motion.span>
                      </motion.div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                        <motion.p
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                          className="text-xs font-semibold text-yellow-600 tracking-widest uppercase mb-4"
                        >
                          {card.tag}
                        </motion.p>
                        
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 0.6 + (i * 0.1) }}
                    className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 leading-tight group-hover:text-yellow-600 transition-colors duration-300"
                        >
                          {card.title}
                        </motion.h3>
                        
                        <motion.p
                          initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + (i * 0.1) }}
                    className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
                        >
                          {card.desc}
                        </motion.p>
                      </div>

                {/* Button */}
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                  whileHover={{ 
                    scale: 1.05, 
                    x: 8,
                    transition: { duration: 0.2 }
                  }}
                        whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-yellowBrand text-[#1a1a1a] px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 self-start shadow-md relative z-10 group/btn"
                      >
                  <span>Learn more</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-lg"
                  >
                    →
                  </motion.span>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

        {/* Bottom decorative element */}
            <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 md:mt-20 text-center"
            >
          <div className="inline-flex items-center gap-3 text-gray-400">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-300" />
            <span className="text-sm font-medium">Automation that scales with you</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-300" />
              </div>
            </motion.div>
      </div>
    </section>
  );
};

export default Services;
