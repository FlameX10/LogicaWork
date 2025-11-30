import { motion } from "framer-motion"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { useState } from "react"
import last from '../assets/last.jpg';

export default function Contact() {
  const { ref, inView } = useScrollAnimation()

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full py-28 px-6 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={last}   // <-- Replace with actual path
            alt="Office workspace"
            className="w-full rounded-2xl"
          />
        </motion.div>

        {/* RIGHT — TEXT + BUTTONS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-semibold leading-tight text-gray-900">
            Let’s automate <br />
            your agency <span className="text-yellow-500">now</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Ready to ditch manual work? Book a free strategy call and see how AI
            can supercharge your workflow—no more bottlenecks, just growth.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="bg-yellow-500 text-black font-medium px-6 py-3 rounded-xl shadow-sm hover:bg-yellow-400 transition-all">
              Book call
            </button>

            <button className="bg-white border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition-all">
              See work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
