import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, MessageSquare, FileText, Users, AlertCircle } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: "Leads waiting hours",
    description: "Hot prospects going cold while your team figures out who should respond",
    severity: "critical"
  },
  {
    icon: MessageSquare,
    title: "Sales promises trapped in WhatsApp",
    description: "Commitments made in DMs that never reach operations",
    severity: "high"
  },
  {
    icon: FileText,
    title: "Content calendars built after deals close",
    description: "Strategy created on the fly instead of promised upfront",
    severity: "high"
  },
  {
    icon: Users,
    title: "Founders hearing about unhappy clients too late",
    description: "By the time you know, they're already drafting the exit email",
    severity: "critical"
  }
];

const ProblemCard = ({ problem, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      <div className={`
        flex items-start gap-4 p-6 rounded-xl border transition-all duration-300
        ${problem.severity === 'critical' 
          ? 'bg-red-500/5 border-red-500/20 hover:border-red-500/40' 
          : 'bg-orange-500/5 border-orange-500/20 hover:border-orange-500/40'}
      `}>
        {/* Alert indicator */}
        <div className={`
          relative shrink-0 w-12 h-12 rounded-lg flex items-center justify-center
          ${problem.severity === 'critical' ? 'bg-red-500/10' : 'bg-orange-500/10'}
        `}>
          <problem.icon className={`w-5 h-5 ${problem.severity === 'critical' ? 'text-red-500' : 'text-orange-500'}`} />
          
          {/* Pulse dot */}
          <motion.div
            className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${problem.severity === 'critical' ? 'bg-red-500' : 'bg-orange-500'}`}
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-white font-medium mb-1">{problem.title}</h3>
          <p className="text-white/50 text-sm leading-relaxed">{problem.description}</p>
        </div>
        
        {/* Alert badge */}
        <div className={`
          flex items-center gap-1 px-2 py-1 rounded text-xs font-medium
          ${problem.severity === 'critical' 
            ? 'bg-red-500/20 text-red-400' 
            : 'bg-orange-500/20 text-orange-400'}
        `}>
          <AlertCircle className="w-3 h-3" />
          {problem.severity === 'critical' ? 'CRITICAL' : 'HIGH'}
        </div>
      </div>
    </motion.div>
  );
};

const InvisibleLeakage = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="problem" className="section-padding bg-[#0a0a0a] relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-red-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs uppercase tracking-wider text-red-400">System Alert</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Invisible Revenue Leakage
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Agencies don't lose money loudly. They bleed silently through operational failures that compound daily.
          </p>
        </motion.div>

        {/* Problems list */}
        <div className="space-y-4">
          {problems.map((problem, index) => (
            <ProblemCard key={problem.title} problem={problem} index={index} />
          ))}
        </div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 text-center"
        >
          <p className="text-white/70 text-lg">
            <span className="text-white font-medium">Growth without control</span> creates invisible chaos and revenue leakage
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvisibleLeakage;
