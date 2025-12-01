import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import automation1 from "../assets/automation1.jpeg";
import automation2 from "../assets/automation2.jpeg";
import automation3 from "../assets/automation3.jpeg";
const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

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
      tag: "AD INTELLIGENCE AUTOMATION",
      title: "Competitor insights, delivered automatically",
      desc: "Monitor Facebook ads in real time and get clean AI summaries of every video, image, and text creative.",
      detailedInfo: "Unlock your competitors' secrets with our Facebook Ads Spy Automation. It continuously scans Facebook for new ads, downloads them, analyzes visuals & messages with AI, and delivers ready-to-use summaries. Perfect for brands, marketers, and agencies who want to discover viral ad angles, copy ideas, and creative trends — without spending hours researching manually.",
      gradient: "from-yellow-500 to-yellow-600",
      cardBg: "from-[#FBF9F4] to-[#F5F1E8]",
      image: automation1 // Add your image path here
    },
    {
      tag: "PROPOSAL AUTOMATION",
      title: "Proposals generated, delivered automatically",
      desc: "Draft, customize, and deliver professional proposals at scale using AI-assisted templates and data-driven personalization.",
      detailedInfo: "Speed up your sales cycle with Proposal Generation Automation. The system pulls client data, past interactions, and product/pricing info to auto-build tailored proposals and statements of work. It supports editable templates, on-the-fly pricing calculations, client-specific messaging, and export to PDF or shareable links — saving hours of manual drafting while increasing win rates and consistency across your team.",
      gradient: "from-yellow-500 to-yellow-600",
      cardBg: "from-[#FBF9F4] to-[#F5F1E8]",
      image: automation2 // Add your image path or import reference here

    },
    {
      tag: "PERSONALIZATION ENGINE",
      title: "Tailored experiences, delivered automatically",
      desc: "Personalize content, recommendations, and user journeys in real time using AI.",
      detailedInfo: "Create highly relevant and individualized experiences with our Deep Personalization Automation. It analyzes user behavior, preferences, and interactions to generate tailored messages, product recommendations, and dynamic content. Ideal for e-commerce brands, SaaS platforms, and marketers who want to increase engagement, boost conversions, and build stronger customer relationships through data-driven personalization.",
      gradient: "from-blue-500 to-blue-600",
      cardBg: "from-[#F4F8FB] to-[#E8F1F9]",
      image: automation3 // Add your image path here
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
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-[#F7F0DF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-500 tracking-widest mb-3 sm:mb-4 uppercase"
          >
            What We Automate
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a1a] mb-4 sm:mb-5 md:mb-6 leading-tight px-4"
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
            className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4"
          >
            Streamline your operations with intelligent automation solutions designed to save time and boost efficiency.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8"
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
                className={`bg-gradient-to-br ${card.cardBg} border border-yellow-200/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 h-full flex flex-col shadow-lg hover:shadow-2xl hover:border-yellow-300/60 transition-all duration-500 relative overflow-hidden`}
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-200/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Flex container for image and content */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-5 lg:gap-6 mb-4 sm:mb-5 md:mb-6">
                  {/* Image - Full width on mobile, fixed on desktop */}
                  {card.image && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                      className="w-full sm:w-24 md:w-28 lg:w-32 h-32 sm:h-24 md:h-28 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg flex-shrink-0 mx-auto sm:mx-0"
                    >
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}

                  {/* Tag and Title */}
                  <div className="flex-1 relative z-10 text-center sm:text-left">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                      className="text-[10px] sm:text-xs font-semibold text-yellow-600 tracking-widest uppercase mb-2 sm:mb-3"
                    >
                      {card.tag}
                    </motion.p>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.6, delay: 0.6 + (i * 0.1) }}
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] leading-tight group-hover:text-yellow-600 transition-colors duration-300"
                    >
                      {card.title}
                    </motion.h3>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 relative z-10">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + (i * 0.1) }}
                    className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6 text-center sm:text-left"
                  >
                    {card.desc}
                  </motion.p>

                  {/* Detailed Info - Expandable */}
                  <AnimatePresence>
                    {expandedCard === i && card.detailedInfo && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="bg-yellow-50/50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-5 border border-yellow-200/30">
                          <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed text-left">
                            {card.detailedInfo}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (card.detailedInfo) {
                      setExpandedCard(expandedCard === i ? null : i);
                    }
                  }}
                  className={`inline-flex items-center justify-center gap-2 ${
                    card.detailedInfo 
                      ? 'bg-yellowBrand hover:bg-yellow-400' 
                      : 'bg-gray-200 hover:bg-gray-300 cursor-not-allowed'
                  } text-[#1a1a1a] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 shadow-md relative z-10 text-xs sm:text-sm md:text-base w-full sm:w-auto sm:self-start`}
                  disabled={!card.detailedInfo}
                >
                  <span>{expandedCard === i ? 'Show less' : 'Show more'}</span>
                  <motion.span
                    animate={{ 
                      rotate: expandedCard === i ? 180 : 0
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                    className="text-base sm:text-lg"
                  >
                    ↓
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
          className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 text-gray-400 px-4">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-yellow-300" />
            <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Automation that scales with you</span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-yellow-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
