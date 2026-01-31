import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Clock, XCircle } from 'lucide-react';

const thresholds = [
  {
    delay: "30 min",
    context: "lead response delay",
    impact: "Conversion drops by 50%",
    progress: 85,
    status: "warning"
  },
  {
    delay: "48 hrs",
    context: "deal stuck in pipeline",
    impact: "Close probability collapses",
    progress: 60,
    status: "danger"
  },
  {
    delay: "3 days",
    context: "content delivery delay",
    impact: "Trust breaks",
    progress: 35,
    status: "critical"
  },
  {
    delay: "7 days",
    context: "client silence",
    impact: "Churn risk peaks",
    progress: 10,
    status: "expired"
  }
];

const getStatusColor = (status) => {
  switch (status) {
    case 'warning': return 'from-yellow-500 to-yellow-400';
    case 'danger': return 'from-orange-500 to-orange-400';
    case 'critical': return 'from-red-500 to-red-400';
    case 'expired': return 'from-red-700 to-red-600';
    default: return 'from-green-500 to-green-400';
  }
};

const getStatusBg = (status) => {
  switch (status) {
    case 'warning': return 'bg-yellow-500/10 border-yellow-500/30';
    case 'danger': return 'bg-orange-500/10 border-orange-500/30';
    case 'critical': return 'bg-red-500/10 border-red-500/30';
    case 'expired': return 'bg-red-900/20 border-red-700/30';
    default: return 'bg-green-500/10 border-green-500/30';
  }
};

const ThresholdCard = ({ threshold, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [animatedProgress, setAnimatedProgress] = useState(100);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedProgress(threshold.progress);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, threshold.progress, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-6 rounded-xl border ${getStatusBg(threshold.status)}`}
    >
      {/* Too Late stamp for expired */}
      {threshold.status === 'expired' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: -12 } : {}}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          className="absolute -top-3 -right-3 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded transform"
        >
          TOO LATE
        </motion.div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`
            w-10 h-10 rounded-lg flex items-center justify-center
            ${threshold.status === 'expired' ? 'bg-red-600' : 'bg-white/10'}
          `}>
            {threshold.status === 'expired' ? (
              <XCircle className="w-5 h-5 text-white" />
            ) : (
              <Clock className={`w-5 h-5 ${
                threshold.status === 'warning' ? 'text-yellow-500' :
                threshold.status === 'danger' ? 'text-orange-500' : 'text-red-500'
              }`} />
            )}
          </div>
          <div>
            <span className="text-2xl font-bold text-white">{threshold.delay}</span>
            <p className="text-xs text-white/50">{threshold.context}</p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 bg-black/30 rounded-full overflow-hidden mb-3">
        <motion.div
          className={`absolute inset-y-0 left-0 bg-linear-to-r ${getStatusColor(threshold.status)} rounded-full`}
          initial={{ width: '100%' }}
          animate={{ width: `${animatedProgress}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
        />
      </div>

      {/* Impact */}
      <p className={`text-sm font-medium ${
        threshold.status === 'expired' ? 'text-red-400' :
        threshold.status === 'critical' ? 'text-red-400' :
        threshold.status === 'danger' ? 'text-orange-400' : 'text-yellow-400'
      }`}>
        → {threshold.impact}
      </p>
    </motion.div>
  );
};

const TooLate = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="section-padding bg-[#0a0a0a] relative">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-red-900/5 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Clock className="w-4 h-4 text-white/50" />
            <span className="text-xs uppercase tracking-wider text-white/50">Time Thresholds</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            "Too Late" in Real Agencies
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            These aren't arbitrary deadlines. They're empirical failure points where recovery becomes exponentially harder.
          </p>
        </motion.div>

        {/* Threshold cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {thresholds.map((threshold, index) => (
            <ThresholdCard key={threshold.delay} threshold={threshold} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-white/30 text-sm mt-12"
        >
          Most agencies don't track these thresholds. They discover failures in client exit interviews.
        </motion.p>
      </div>
    </section>
  );
};

export default TooLate;
