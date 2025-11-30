import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SocialProof = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="social-proof" ref={ref} className="py-20 px-4 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-400 text-lg mb-12 font-semibold"
        >
          Trusted by fast-growing agencies
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-center text-gray-300 text-xl leading-relaxed">
            10× faster reports. 90% less busywork. Performance teams rely on our AI to automate, accelerate, and scale—so you can focus on what matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
