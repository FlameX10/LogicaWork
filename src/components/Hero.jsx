import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle } from 'lucide-react';

const PipelineStage = ({ label, index, hasLeak }) => (
  <motion.div 
    className="relative flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
  >
    <div className={`
      relative px-4 py-3 md:px-6 md:py-4 rounded-lg border transition-all duration-300
      ${hasLeak 
        ? 'bg-red-500/10 border-red-500/30 text-red-400' 
        : 'bg-white/5 border-white/10 text-white/80'}
    `}>
      <span className="text-xs md:text-sm font-medium tracking-wide">{label}</span>
      
      {/* Leak indicator */}
      {hasLeak && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-0.5 h-4 bg-linear-to-b from-red-500/60 to-transparent animate-drip" />
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-red-500/60"
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.6, 0, 0.6]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
          />
        </div>
      )}
    </div>
    
    {/* Pulse glow for leak */}
    {hasLeak && (
      <motion.div
        className="absolute inset-0 rounded-lg bg-red-500/20 blur-xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    )}
  </motion.div>
);

const PipelineConnector = ({ hasLeak, delay }) => (
  <div className="relative flex items-center px-1 md:px-2">
    <div className={`
      w-6 md:w-12 h-px relative overflow-hidden
      ${hasLeak ? 'bg-red-500/30' : 'bg-white/20'}
    `}>
      <motion.div
        className={`absolute inset-y-0 w-4 ${hasLeak ? 'bg-red-500/60' : 'bg-amber-500/60'}`}
        animate={{ x: [-16, 48] }}
        transition={{ duration: 2, repeat: Infinity, delay, ease: "linear" }}
      />
    </div>
    <ArrowRight className={`w-3 h-3 md:w-4 md:h-4 ${hasLeak ? 'text-red-500/50' : 'text-white/30'}`} />
  </div>
);

const Hero = () => {
  const pipelineStages = [
    { label: 'Lead', hasLeak: false },
    { label: 'Sales', hasLeak: true },
    { label: 'Content', hasLeak: true },
    { label: 'Delivery', hasLeak: true },
    { label: 'Client', hasLeak: false },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-dark" />
      
      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          <span className="text-sm text-white/70">Revenue Operations Consultancy</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-[1.1] tracking-tight"
        >
          Your agency is growing.
          <br />
          <span className="gradient-gold">So is the risk.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          When more leads and clients don't mean more control.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a href="#audit" className="btn-primary flex items-center gap-2 group">
            Book a Revenue Leakage Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#problem" className="btn-secondary">
            See How Agencies Bleed
          </a>
        </motion.div>

        {/* Pipeline Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-8">
            Where revenue leaks happen
          </p>
          
          <div className="flex items-center justify-center flex-wrap gap-y-8">
            {pipelineStages.map((stage, index) => (
              <div key={stage.label} className="flex items-center">
                <PipelineStage 
                  label={stage.label} 
                  index={index} 
                  hasLeak={stage.hasLeak} 
                />
                {index < pipelineStages.length - 1 && (
                  <PipelineConnector 
                    hasLeak={pipelineStages[index + 1].hasLeak} 
                    delay={index * 0.4}
                  />
                )}
              </div>
            ))}
          </div>
          
          {/* Leak warning */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20"
          >
            <div className="w-2 h-2 rounded-full bg-red-500 pulse-glow-red" />
            <span className="text-sm text-red-400">3 handoff points at risk</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
};

export default Hero;
