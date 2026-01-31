import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingDown, Scale, Users, Zap } from 'lucide-react';

const risks = [
  {
    icon: TrendingDown,
    title: "Thin Margins",
    description: "5-15% net margins leave zero room for operational waste or client recovery costs",
    accent: "border-l-amber-500"
  },
  {
    icon: Scale,
    title: "High Comparison",
    description: "Clients benchmark you against 10 other agencies in real-time. Every delay is measured.",
    accent: "border-l-amber-500"
  },
  {
    icon: Users,
    title: "Zero Tolerance",
    description: "Indian clients expect WhatsApp-speed responses and over-delivery as baseline",
    accent: "border-l-amber-500"
  },
  {
    icon: Zap,
    title: "Instant Churn",
    description: "No loyalty buffer. One bad month and they're talking to your competitor",
    accent: "border-l-amber-500"
  }
];

const IndianMarketRisk = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#0a0a0a] relative">
      {/* Subtle gold accent in background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px]" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <span className="text-xs uppercase tracking-wider text-amber-400">Market Context</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Indian Market Risk Reality
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            The Indian agency landscape has unique pressures that amplify operational failures.
          </p>
        </motion.div>

        {/* Risk cards - Premium boardroom style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {risks.map((risk, index) => (
            <motion.div
              key={risk.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative p-6 rounded-xl bg-[#111111] border border-white/5
                border-l-4 ${risk.accent}
                hover:border-white/10 transition-all duration-300
              `}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                  <risk.icon className="w-5 h-5 text-amber-500" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{risk.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{risk.description}</p>
                </div>
              </div>

              {/* Gold accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-amber-500/20 via-amber-500/10 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Summary callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 p-8 rounded-xl glass-gold text-center"
        >
          <p className="text-lg text-white/80">
            In this market, <span className="text-amber-400 font-semibold">operational excellence isn't a competitive advantage</span> — it's survival.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndianMarketRisk;
