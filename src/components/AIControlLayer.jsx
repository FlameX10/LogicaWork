import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Radar, AlertCircle, MessageSquare, TrendingUp, Cpu } from 'lucide-react';

const capabilities = [
  {
    type: "detection",
    icon: Radar,
    title: "Delay Detection",
    description: "Spots leads going cold, deals stalling, content slipping — before humans notice",
    examples: ["Lead response > 30min", "Deal untouched 48hrs", "Content 2 days late"]
  },
  {
    type: "detection",
    icon: TrendingUp,
    title: "Drift Detection",
    description: "Identifies when reality diverges from promises made",
    examples: ["Scope expanding", "Timeline slipping", "Deliverables changing"]
  },
  {
    type: "intervention",
    icon: AlertCircle,
    title: "Risk Surfacing",
    description: "Brings problems to the right person before escalation",
    examples: ["Auto-alert to manager", "Client health warnings", "Capacity alerts"]
  },
  {
    type: "intervention",
    icon: MessageSquare,
    title: "Sentiment Monitoring",
    description: "Reads communication patterns for early churn signals",
    examples: ["Response delays", "Tone changes", "Engagement drops"]
  }
];

const AIControlLayer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-500/5 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-xs uppercase tracking-wider text-blue-400">AI Layer</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            AI as a Control Layer
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Not automation for automation's sake. AI that detects problems and triggers intervention.
          </p>
        </motion.div>

        {/* Two columns: Detection + Intervention */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Detection column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Radar className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Detection</h3>
            </div>
            
            <div className="space-y-4">
              {capabilities.filter(c => c.type === 'detection').map((cap, index) => (
                <div 
                  key={cap.title}
                  className="p-5 rounded-xl bg-[#111111] border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <cap.icon className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white mb-1">{cap.title}</h4>
                      <p className="text-sm text-white/50">{cap.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-8">
                    {cap.examples.map((ex, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-cyan-500/10 text-xs text-cyan-400">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Intervention column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Intervention</h3>
            </div>
            
            <div className="space-y-4">
              {capabilities.filter(c => c.type === 'intervention').map((cap, index) => (
                <div 
                  key={cap.title}
                  className="p-5 rounded-xl bg-[#111111] border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <cap.icon className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white mb-1">{cap.title}</h4>
                      <p className="text-sm text-white/50">{cap.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-8">
                    {cap.examples.map((ex, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-purple-500/10 text-xs text-purple-400">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="p-8 rounded-2xl bg-linear-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-white/10 text-center"
        >
          <p className="text-lg md:text-xl text-white/80 mb-4">
            We don't use AI for productivity.
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-white">
            We use it for <span className="gradient-gold">control</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AIControlLayer;
