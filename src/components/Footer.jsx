import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, AlertTriangle, Mail, Linkedin, Calendar } from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contact" className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Final CTA Section */}
      <section className="section-padding relative" ref={ref}>
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 rounded-full blur-[200px]" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
              <AlertTriangle className="w-7 h-7 text-red-500" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Find where your agency is{' '}
              <span className="gradient-danger">bleeding</span>
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10">
              30 days. Complete leakage map. No long-term commitment.
            </p>

            {/* CTA Button */}
            <motion.a
              href="mailto:hello@revops.in"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 btn-primary text-lg px-10 py-5"
            >
              <Calendar className="w-5 h-5" />
              Book a Revenue Leakage Audit
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            {/* Trust note */}
            <p className="text-white/30 text-sm mt-6">
              Free initial consultation • No sales pressure • Just clarity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                </div>
                <span className="text-white font-semibold text-lg tracking-tight">
                LogicaWork<span className="text-amber-500">.</span>
                </span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                LogicaWork helps growing agencies stop invisible revenue leakage through control systems and AI-powered detection.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: 'The Problem', href: '#problem' },
                  { label: 'Revenue Audit', href: '#audit' },
                  { label: 'Our Approach', href: '#audit' },
                  { label: 'Contact', href: '#contact' }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/40 hover:text-white/70 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-medium mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:hello@logicawork.com" 
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@logicawork.com
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
              
              {/* Founder */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="text-xs text-white/30">Founded by</p>
                <p className="text-sm text-white/60">LogicaWork Team</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              © 2026 LogicaWork. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Powered by LogicaWork | Built for agencies that refuse to bleed silently.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
