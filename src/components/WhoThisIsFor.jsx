import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, User, TrendingUp, AlertCircle } from 'lucide-react';

const profiles = [
  {
    icon: Building2,
    title: "High-Growth Agencies",
    description: "10+ clients, growing fast, feeling the operational strain of scale",
    fit: "If you're adding clients faster than you're adding control, this is for you."
  },
  {
    icon: User,
    title: "Founders as the Bottleneck",
    description: "You're the only one with full context. Everything routes through you.",
    fit: "If your team can't function without your constant input, this is for you."
  },
  {
    icon: TrendingUp,
    title: "Growth Turned to Chaos",
    description: "More revenue, but also more fires, more churn, more stress",
    fit: "If growth feels like chaos instead of success, this is for you."
  }
];

const WhoThisIsFor = () => {
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
            Who This Is For
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Not every agency needs this. Here's who does.
          </p>
        </motion.div>

        {/* Profile cards */}
        <div className="space-y-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-6 md:p-8 rounded-xl bg-[#111111] border border-white/5 hover:border-amber-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <profile.icon className="w-6 h-6 text-amber-500" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{profile.title}</h3>
                  <p className="text-white/50 mb-4">{profile.description}</p>
                  
                  {/* Fit statement */}
                  <div className="inline-flex items-start gap-2 p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                    <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-amber-400/80">{profile.fit}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Not for */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10"
        >
          <h4 className="text-white font-medium mb-3">This is NOT for:</h4>
          <div className="flex flex-wrap gap-3">
            {[
              "Agencies with < 5 clients",
              "Solopreneurs without a team",
              "Agencies not ready to implement",
              "Those looking for quick fixes"
            ].map((item, index) => (
              <span key={index} className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-white/50">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
