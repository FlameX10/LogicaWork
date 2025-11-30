import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;

      const rect = sec.getBoundingClientRect();
      const sectionHeight = sec.offsetHeight;
      const win = window.innerHeight;

      const isInViewport = rect.top <= win && rect.bottom >= 0;
      setIsStuck(isInViewport && rect.top <= 0);

      if (isInViewport) {
        const distanceFromTop = Math.max(0, Math.abs(rect.top));
        const scrollProgress = distanceFromTop / (sectionHeight - win);
        setProgress(Math.min(Math.max(scrollProgress, 0), 1));
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

  const horizontalProgress = Math.max(0, progress);
  const translateX = -(horizontalProgress * (cards.length - 1) * 100);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#F4EFE4] to-[#F5F0E6]"
      style={{ height: "180vh" }}
    >
      {isStuck && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#F4EFE4] to-[#FFFAF0] z-20 flex flex-col overflow-hidden will-change-transform">
          
          <div className="px-8 md:px-16 py-12 z-40">
            <p className="text-xs md:text-sm font-semibold text-gray-500 tracking-widest mb-3 uppercase">
              What We Automate
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-4">
              Workflows that <span className="text-yellowBrand">work</span> for you
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Scroll down to see our automation solutions in action
            </p>
          </div>

          <div className="flex-1 overflow-hidden relative px-8 md:px-16 will-change-transform">
            <div
              className="flex gap-8 h-full"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: "transform 0.2s cubic-bezier(0.4, 0.0, 0.2, 1)",
                willChange: "transform"
              }}
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full md:w-[500px] h-full"
                >
                  <div
                    className={`bg-gradient-to-br ${card.cardBg} border border-yellow-200/40 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between shadow-lg hover:shadow-xl hover:border-yellow-300/60 transition-all duration-500 hover:scale-105`}
                  >
                    <motion.div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-4xl shadow-lg mb-6`}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {card.icon}
                    </motion.div>

                    <div className="flex-1">
                      <p className="text-xs font-semibold text-yellow-600 tracking-widest uppercase mb-4">
                        {card.tag}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, x: 8 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 inline-flex items-center gap-2 bg-yellowBrand text-[#1a1a1a] px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-500 self-start shadow-md"
                    >
                      Learn more →
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              className="absolute bottom-8 left-8 flex items-center gap-2 text-yellow-600"
              animate={{ x: [0, 12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm font-semibold">Scroll to explore</span>
              <span className="text-xl">→</span>
            </motion.div>
          </div>

          <div className="px-8 md:px-16 py-6 border-t border-yellow-100/50">
            <div className="flex items-center gap-3">
              {cards.map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i <= Math.floor(horizontalProgress * (cards.length - 1))
                      ? "bg-yellowBrand w-8"
                      : "bg-yellow-100 w-2"
                  }`}
                  animate={{
                    width: i <= Math.floor(horizontalProgress * (cards.length - 1)) ? 32 : 8,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              ))}
              <span className="text-gray-600 text-sm ml-4">
                {Math.round(horizontalProgress * 100)}%
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
