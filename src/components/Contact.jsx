import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, User, Building2, Globe, MessageSquare, Send } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const { ref, inView } = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    challenge: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', website: '', challenge: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-4 bg-black">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Let's automate your <span className="text-yellowBrand">agency</span> now</h2>
          <p className="text-gray-400 text-lg">
            Ready to eliminate manual work? Book a free strategy call and see how AI can transform your workflow.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-yellowBrand focus:bg-gray-800 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-yellowBrand focus:bg-gray-800 transition-all"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-yellowBrand focus:bg-gray-800 transition-all"
            />
            <input
              type="url"
              name="website"
              placeholder="Your Website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-yellowBrand focus:bg-gray-800 transition-all"
            />
          </div>

          <textarea
            name="challenge"
            placeholder="Describe your workflow challenge..."
            value={formData.challenge}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-yellowBrand focus:bg-gray-800 transition-all resize-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 211, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-yellowBrand text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl"
          >
            Book a Free Strategy Call
          </motion.button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="p-4 bg-green-500/20 border border-green-500 text-green-400 rounded-lg text-center font-semibold"
            >
              ✓ Thank you! We'll be in touch soon.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
