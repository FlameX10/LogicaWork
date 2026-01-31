import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, CheckCircle, FileText, Clock, XCircle } from 'lucide-react';

const guarantees = [
  {
    icon: Clock,
    title: "30-Day Audit",
    description: "Time-boxed engagement. Clear start and end."
  },
  {
    icon: FileText,
    title: "Written Report",
    description: "Documented findings you own forever."
  },
  {
    icon: XCircle,
    title: "Walk Away Option",
    description: "If no serious issues found — don't proceed."
  },
  {
    icon: Shield,
    title: "No Lock-In",
    description: "Zero long-term commitment required."
  }
];

const WhySayingYesIsSafe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-t from-green-900/5 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-xs uppercase tracking-wider text-green-400">Risk Reversal</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Why Saying Yes Is Safe
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            We've structured this so you have everything to gain and nothing to lose.
          </p>
        </motion.div>

        {/* Guarantees grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-[#111111] border border-green-500/10 hover:border-green-500/30 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/50">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main reassurance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="p-8 rounded-2xl bg-linear-to-r from-green-500/10 via-green-500/5 to-green-500/10 border border-green-500/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">The Audit Promise</h3>
              <p className="text-white/60">
                After 30 days, you'll have a complete picture of where your agency is leaking revenue, time, and trust. 
                If we don't find significant issues — you walk away with a clean bill of health. No pressure. No upsell.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 text-center text-sm text-white/30"
        >
          Worst case: you learn exactly how your operations perform. Best case: you stop invisible bleeding.
        </motion.div>
      </div>
    </section>
  );
};

export default WhySayingYesIsSafe;
