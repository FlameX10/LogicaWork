import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, FlaskConical, BarChart3, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Audit",
    description: "Map your leakage points and quantify the risk",
    duration: "30 days"
  },
  {
    icon: FlaskConical,
    title: "Pilot",
    description: "Implement control systems on highest-impact area",
    duration: "60 days"
  },
  {
    icon: BarChart3,
    title: "Measure",
    description: "Track improvements with hard data",
    duration: "30 days"
  },
  {
    icon: Rocket,
    title: "Scale",
    description: "Expand to remaining operations",
    duration: "Ongoing"
  }
];

const PathToScale = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Path to Scale
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Start small. Prove ROI. Expand safely. No big-bang transformations.
          </p>
        </motion.div>

        {/* Steps flow */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-linear-to-r from-amber-500/0 via-amber-500/30 to-amber-500/0 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="relative z-10 w-12 h-12 mx-auto mb-4 rounded-full bg-[#111111] border-2 border-amber-500/30 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-amber-500" />
                </div>

                {/* Arrow (mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-2">
                    <ArrowRight className="w-5 h-5 text-amber-500/30 rotate-90" />
                  </div>
                )}

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 mb-3">{step.description}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-xs text-amber-400">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 p-6 rounded-xl bg-[#111111] border border-white/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Start small — no massive upfront investment",
              "Prove ROI — before committing to scale",
              "Expand safely — based on what works"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm text-white/70">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PathToScale;
