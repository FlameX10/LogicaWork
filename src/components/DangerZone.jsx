import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, ArrowDown } from 'lucide-react';

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

const getRiskBadge = (risk) => {
  switch (risk) {
    case 'critical': return 'bg-red-500/15 border-red-500/30 text-red-300';
    case 'high': return 'bg-orange-500/15 border-orange-500/30 text-orange-300';
    default: return 'bg-white/5 border-white/10 text-white/60';
  }
};

const getRiskPill = (risk) => {
  switch (risk) {
    case 'critical': return 'bg-red-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.28)]';
    case 'high': return 'bg-orange-500 text-white shadow-[0_0_30px_rgba(249,115,22,0.28)]';
    default: return 'bg-white/10 text-white/80';
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
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10" ref={ref}>
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

        <div className="grid lg:grid-cols-[minmax(280px,360px)_1fr] gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-red-500/15 bg-linear-to-b from-red-500/8 via-transparent to-white/2 p-6 md:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-500/40 to-transparent" />
            <p className="text-xs uppercase tracking-[0.28em] text-red-300/80 mb-4">Operational Exposure</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-4">
              Five handoffs. Multiple silent points of failure.
            </h3>
            <p className="text-white/60 leading-relaxed mb-8">
              Most agencies do not lose margin in one dramatic moment. It leaks across small handoffs where ownership, context, and follow-through break down.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                <div className="text-3xl font-semibold text-white mb-1">5</div>
                <p className="text-sm text-white/50">core handoff nodes</p>
              </div>
              <div className="rounded-2xl border border-red-500/20 bg-red-500/8 p-4">
                <div className="text-3xl font-semibold text-red-300 mb-1">3-4</div>
                <p className="text-sm text-white/50">weekly failures in a 10-client agency</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-white/80">Where the pattern repeats:</p>
              {[
                'lead qualification lacks ownership',
                'sales promises never reach fulfillment',
                'delivery issues surface after the client feels them'
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-white/55">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.6)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative pl-0">
            <div className="absolute left-4 top-3 bottom-3 w-px bg-linear-to-b from-white/10 via-red-500/30 to-white/10 md:left-5" />

            <div className="space-y-5 md:space-y-6">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-16"
                >
                  <div className="absolute left-4 top-6 z-10 flex -translate-x-1/2 flex-col items-center md:left-5">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-semibold ${getRiskPill(stage.risk)}`}>
                      {index + 1}
                    </div>
                    {index < stages.length - 1 && (
                      <ArrowDown className="mt-3 h-4 w-4 text-white/20" />
                    )}
                  </div>

                  <div
                    className={`relative overflow-hidden rounded-3xl border p-5 md:p-6 transition-all duration-300 ${getRiskColor(stage.risk)}`}
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/18 to-transparent" />
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-white/35 mb-2">Handoff {index + 1}</p>
                        <h3 className="text-xl md:text-2xl font-semibold text-white">{stage.name}</h3>
                      </div>

                      <div className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${getRiskBadge(stage.risk)}`}>
                        {stage.risk}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {stage.failures.map((failure, i) => (
                        <div key={i} className="rounded-2xl border border-white/8 bg-black/18 px-4 py-3">
                          <div className="flex items-start gap-3">
                            <div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${getRiskTextColor(stage.risk).replace('text-', 'bg-')}`} />
                            <p className="text-sm text-white/68 leading-relaxed">{failure}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
