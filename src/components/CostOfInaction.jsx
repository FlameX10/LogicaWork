import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingDown, IndianRupee } from 'lucide-react';

const CostOfInaction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const costs = [
    {
      amount: "₹2,00,000",
      label: "potential revenue per day",
      type: "potential",
      subtext: "based on 20 active leads"
    },
    {
      amount: "₹30,000",
      label: "lost per day",
      type: "loss",
      subtext: "if 3 leads missed due to slow response"
    },
    {
      amount: "₹9,00,000",
      label: "lost per month",
      type: "critical",
      subtext: "from slow response alone"
    }
  ];

  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-red-900/10 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <TrendingDown className="w-4 h-4 text-red-500" />
            <span className="text-xs uppercase tracking-wider text-red-400">Financial Impact</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            The Cost of Inaction
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Numbers don't lie. Here's what operational gaps cost a mid-size agency.
          </p>
        </motion.div>

        {/* Cost cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {costs.map((cost, index) => (
            <motion.div
              key={cost.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`
                relative p-8 rounded-2xl border text-center
                ${cost.type === 'potential' 
                  ? 'bg-white/5 border-white/10' 
                  : cost.type === 'loss'
                    ? 'bg-orange-500/5 border-orange-500/20'
                    : 'bg-red-500/10 border-red-500/30'}
              `}
            >
              {/* Badge for critical */}
              {cost.type === 'critical' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full"
                >
                  EVERY MONTH
                </motion.div>
              )}

              {/* Amount */}
              <div className={`
                text-4xl md:text-5xl font-bold mb-3 tracking-tight
                ${cost.type === 'potential' 
                  ? 'text-white' 
                  : cost.type === 'loss'
                    ? 'text-orange-400'
                    : 'text-red-400'}
              `}>
                {cost.amount}
              </div>

              {/* Label */}
              <p className={`
                text-sm font-medium mb-2
                ${cost.type === 'potential' ? 'text-white/70' : cost.type === 'loss' ? 'text-orange-300/70' : 'text-red-300/70'}
              `}>
                {cost.label}
              </p>

              {/* Subtext */}
              <p className="text-xs text-white/40">
                {cost.subtext}
              </p>

              {/* Arrow indicator for losses */}
              {cost.type !== 'potential' && (
                <div className="absolute top-4 right-4">
                  <TrendingDown className={`w-5 h-5 ${cost.type === 'loss' ? 'text-orange-500/50' : 'text-red-500/50'}`} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Calculation breakdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <IndianRupee className="w-4 h-4" />
              <span>Simple math:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-2 py-1 bg-white/10 rounded">3 missed leads/day</span>
              <span>×</span>
              <span className="px-2 py-1 bg-white/10 rounded">₹10,000 avg value</span>
              <span>×</span>
              <span className="px-2 py-1 bg-white/10 rounded">30 days</span>
              <span>=</span>
              <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded font-medium">₹9,00,000 leak</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center text-white/30 text-sm mt-8"
        >
          This doesn't include churn from poor delivery, scope creep, or reputation damage.
        </motion.p>
      </div>
    </section>
  );
};

export default CostOfInaction;
