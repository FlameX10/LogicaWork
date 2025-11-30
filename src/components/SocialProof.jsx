import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SocialProof = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      id="social-proof"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-black to-[#1a1a1a] border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-gray-400 text-lg mb-12 font-semibold"
        >
          Trusted by fast-growing agencies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
