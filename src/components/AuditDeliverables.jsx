import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileCheck, GitBranch, AlertTriangle, MapPin } from 'lucide-react';

const deliverables = [
  {
    icon: GitBranch,
    title: "Funnel Friction Analysis",
    description: "Where leads slow down and why. Response time distribution, conversion drop-off points.",
    priority: "high"
  },
  {
    icon: FileCheck,
    title: "Handoff Integrity Report",
    description: "Promise tracking from sales to delivery. What gets lost, where, and how often.",
    priority: "critical"
  },
  {
    icon: AlertTriangle,
    title: "Client Retention Risk",
    description: "Which clients show early churn signals. Communication health scores and warning indicators.",
    priority: "high"
  },
  {
    icon: MapPin,
    title: "Fix Roadmap",
    description: "Prioritized list of what to fix first. Quick wins vs. structural changes. What to automate.",
    priority: "medium"
  }
];

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'critical': return 'bg-red-500/10 border-red-500/30 text-red-400';
    case 'high': return 'bg-orange-500/10 border-orange-500/30 text-orange-400';
    default: return 'bg-amber-500/10 border-amber-500/30 text-amber-400';
  }
};

const AuditDeliverables = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#0a0a0a] relative">
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Audit Deliverables
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Concrete outputs. No vague recommendations. Actionable intelligence.
          </p>
        </motion.div>

        {/* Deliverables grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-[#111111] border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              {/* Priority badge */}
              <div className={`absolute top-4 right-4 px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(item.priority)}`}>
                {item.priority.toUpperCase()}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-white/60" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 pr-20">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Format note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-white/40"
        >
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            Written report
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            Video walkthrough
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            Priority matrix
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            ROI projections
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditDeliverables;
