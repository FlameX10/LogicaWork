import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

const stages = [
  {
    name: "Lead",
    failures: [
      "Response time unmeasured",
      "No ownership assigned"
    ],
    risk: "low"
  },
  {
    name: "Sales",
    failures: [
      "Promises made in calls, never documented",
      "Deal timelines not tracked",
      "Handoff requirements unclear"
    ],
    risk: "critical"
  },
  {
    name: "Content",
    failures: [
      "Scope creep starts here",
      "Deadlines set without capacity check",
      "No content calendar at signing"
    ],
    risk: "high"
  },
  {
    name: "Delivery",
    failures: [
      "Milestones missed silently",
      "Client expectations diverge",
      "Quality check bypassed for speed"
    ],
    risk: "critical"
  },
  {
    name: "Client",
    failures: [
      "Satisfaction unmeasured",
      "Churn signals ignored",
      "Renewal conversations too late"
    ],
    risk: "high"
  }
];

const getRiskColor = (risk) => {
  switch (risk) {
    case 'critical': return 'border-red-500/50 bg-red-500/10';
    case 'high': return 'border-orange-500/50 bg-orange-500/10';
    default: return 'border-white/20 bg-white/5';
  }
};

const getRiskTextColor = (risk) => {
  switch (risk) {
    case 'critical': return 'text-red-400';
    case 'high': return 'text-orange-400';
    default: return 'text-white/60';
  }
};

const DangerZone = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/5 rounded-full blur-[150px]" />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-xs uppercase tracking-wider text-red-400">Danger Zone</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            The Handoff Failure Points
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Every handoff point is a failure node. Here's where promises get lost and revenue leaks begin.
          </p>
        </motion.div>

        {/* Pipeline visualization */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-linear-to-r from-white/10 via-red-500/30 to-white/10 hidden lg:block" />
          
          {/* Stages */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-2">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Stage card */}
                <div className={`
                  p-4 rounded-xl border transition-all duration-300
                  ${getRiskColor(stage.risk)}
                `}>
                  {/* Stage header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`
                        w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold
                        ${stage.risk === 'critical' ? 'bg-red-500 text-white' : 
                          stage.risk === 'high' ? 'bg-orange-500 text-white' : 
                          'bg-white/10 text-white/80'}
                      `}>
                        {index + 1}
                      </div>
                      <span className="font-medium text-white">{stage.name}</span>
                    </div>
                    
                    {stage.risk !== 'low' && (
                      <div className={`text-xs px-2 py-0.5 rounded ${getRiskTextColor(stage.risk)} bg-black/30`}>
                        {stage.risk.toUpperCase()}
                      </div>
                    )}
                  </div>
                  
                  {/* Failures list */}
                  <ul className="space-y-2">
                    {stage.failures.map((failure, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className={`w-1 h-1 rounded-full mt-2 shrink-0 ${getRiskTextColor(stage.risk).replace('text-', 'bg-')}`} />
                        <span className="text-xs text-white/60 leading-relaxed">{failure}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow connector (visible on lg) */}
                {index < stages.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-8 z-10">
                    <ArrowRight className="w-5 h-5 text-white/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom warning */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm">
            In a typical 10-client agency, at least <span className="text-red-400 font-medium">3-4 handoffs fail weekly</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DangerZone;
