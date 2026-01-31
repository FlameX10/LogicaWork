import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, MessageCircle, User, ArrowRight } from 'lucide-react';

const failures = [
  {
    icon: Database,
    title: "Fragmented Data",
    description: "CRM, ClickUp, Email, Sheets — they don't talk. Every tool is an island with its own version of truth.",
    visual: "data"
  },
  {
    icon: MessageCircle,
    title: "Shadow Work in WhatsApp",
    description: "The real work happens in DMs. Promises, deadlines, scope changes — all invisible to your systems.",
    visual: "whatsapp"
  },
  {
    icon: User,
    title: "Founders Stuck in Updates",
    description: "You're the bottleneck because you're the only one with full context. That's not leadership, that's dependency.",
    visual: "bottleneck"
  }
];

const WhyToolsFailed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Why Your Tools Failed
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            It's not about the tools. It's about ownership of promises — and no tool owns that for you.
          </p>
        </motion.div>

        {/* Failure cards */}
        <div className="space-y-6">
          {failures.map((failure, index) => (
            <motion.div
              key={failure.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="p-6 md:p-8 rounded-xl bg-[#111111] border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <failure.icon className="w-6 h-6 text-white/60" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{failure.title}</h3>
                    <p className="text-white/50 leading-relaxed">{failure.description}</p>
                  </div>

                  {/* Visual representation */}
                  {failure.visual === 'data' && (
                    <div className="hidden lg:flex items-center gap-2 text-white/20">
                      <div className="px-2 py-1 rounded bg-white/5 text-xs">CRM</div>
                      <span className="text-red-500">✕</span>
                      <div className="px-2 py-1 rounded bg-white/5 text-xs">ClickUp</div>
                      <span className="text-red-500">✕</span>
                      <div className="px-2 py-1 rounded bg-white/5 text-xs">Email</div>
                    </div>
                  )}
                  
                  {failure.visual === 'whatsapp' && (
                    <div className="hidden lg:flex items-center gap-2">
                      <div className="px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-xs text-green-400">
                        "Yes, we'll include that"
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/20" />
                      <div className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400">
                        ? (lost)
                      </div>
                    </div>
                  )}
                  
                  {failure.visual === 'bottleneck' && (
                    <div className="hidden lg:flex items-center gap-1">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-white/30" />
                        </div>
                      ))}
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                        <User className="w-4 h-4 text-amber-500" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 p-6 rounded-xl border border-white/10 bg-white/5"
        >
          <p className="text-center text-white/60">
            <span className="text-white font-medium">The problem isn't broken tools.</span>
            <br className="md:hidden" />
            <span className="md:ml-2">It's the lack of a system that owns every promise from creation to completion.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyToolsFailed;
