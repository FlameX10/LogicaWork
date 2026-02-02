import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroOptimized = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-dark" />
      
      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
        
        {/* Main H1 - SEO Critical */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-[1.1] tracking-tight"
        >
          Custom AI & Software Development{' '}
          <span className="gradient-gold">Solutions</span> for Growing Businesses
        </motion.h1>

        {/* Subheadline - Meta Description alignment */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Build intelligent systems with AI-powered automation. From concept to scale, we deliver custom software solutions that transform your business operations and drive measurable growth.
        </motion.p>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 flex-wrap"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-amber-500" />
            <span className="text-white/70">Proven Track Record</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-amber-500" />
            <span className="text-white/70">Expert Development Team</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-amber-500" />
            <span className="text-white/70">24/7 Support</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all">
            Learn More
          </button>
        </motion.div>

        {/* Schema Markup for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "LogicaWork",
            "url": "https://logicawork.com",
            "image": "https://logicawork.com/logo.png",
            "description": "Custom AI and software development services for startups, SMBs, and enterprises",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Address",
              "addressLocality": "City",
              "addressRegion": "State",
              "postalCode": "ZIP",
              "addressCountry": "US"
            },
            "priceRange": "$$",
            "areaServed": {
              "@type": "Country",
              "name": "US"
            }
          })}
        </script>
      </div>
    </section>
  );
};

export default HeroOptimized;
