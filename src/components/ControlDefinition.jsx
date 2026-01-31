import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Timer, Bell, Lock, Activity, Shield } from 'lucide-react';

const controlPoints = [
  {
    icon: Timer,
    title: "Response Timer",
    description: "Every lead has a ticking clock. Response time is tracked, not assumed.",
    metric: "< 30 min"
  },
  {
    icon: Bell,
    title: "Stall Alarm",
    description: "Every deal has an alarm. If it stops moving, someone knows immediately.",
    metric: "48 hr trigger"
  },
  {
    icon: Lock,
    title: "Deadline Lock",
    description: "Every content item has a deadline that can't be silently missed.",
    metric: "Auto-escalation"
  },
  {
    icon: Activity,
    title: "Risk Score",
    description: "Every client has a health score. Problems surface before churn calls.",
    metric: "Real-time"
  }
];

const ControlDefinition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[200px]" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <Shield className="w-4 h-4 text-amber-500" />
            <span className="text-xs uppercase tracking-wider text-amber-400">Key Differentiator</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            What <span className="gradient-gold">Control</span> Actually Means
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Not dashboards. Not reports. Active intervention points that prevent failures before they compound.
          </p>
        </motion.div>

        {/* Control points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {controlPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-xl bg-[#111111] border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 h-full">
                {/* Metric badge */}
                <div className="absolute top-4 right-4 px-2 py-1 rounded bg-amber-500/10 text-xs text-amber-400 font-mono">
                  {point.metric}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-amber-500" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{point.description}</p>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-amber-500/0 via-amber-500/30 to-amber-500/0 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Powerful statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-linear-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border border-amber-500/20 text-center"
        >
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
            Control means <span className="text-amber-400">nothing falls through</span> because every promise has an owner, a deadline, and an escalation path.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ControlDefinition;
