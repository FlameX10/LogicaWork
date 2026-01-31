import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const RevenueLeakageAudit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="audit" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-amber-500/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[200px]" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <Search className="w-4 h-4 text-amber-500" />
            <span className="text-xs uppercase tracking-wider text-amber-400">Entry Point</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Revenue Leakage Audit
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            A 30-day time-boxed audit that shows exactly where your revenue, time, and trust are leaking.
          </p>
        </motion.div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-[#111111] border border-amber-500/20">
            {/* Duration badge */}
            <div className="flex items-center gap-2 mb-8">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span className="text-amber-400 font-medium">30-Day Audit</span>
            </div>

            {/* What we examine */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">What We Examine</h3>
                <ul className="space-y-3">
                  {[
                    "Lead response time patterns",
                    "Sales handoff documentation",
                    "Content delivery timelines",
                    "Client communication health",
                    "Promise vs. delivery gaps"
                  ].map((item, index) => (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-white/70">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">What You Get</h3>
                <ul className="space-y-3">
                  {[
                    "Complete leakage map",
                    "Risk quantification in INR",
                    "Priority fix roadmap",
                    "Quick win identification",
                    "Control system blueprint"
                  ].map((item, index) => (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-white/70">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key stat */}
            <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-8">
              <p className="text-center text-white/80">
                Most agencies discover <span className="text-amber-400 font-bold text-2xl">10–30%</span> of revenue at risk during the audit
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 btn-primary text-lg"
              >
                Start the Audit
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <p className="text-white/40 text-sm mt-4">
                No long-term commitment required
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueLeakageAudit;
