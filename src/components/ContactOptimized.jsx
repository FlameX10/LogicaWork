import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactOptimized() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sec = sectionRef.current
      if (!sec) return

      const rect = sec.getBoundingClientRect()
      const win = window.innerHeight

      if (rect.top < win * 0.75) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with actual form submission logic
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@logicawork.com",
      href: "mailto:hello@logicawork.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Office Location",
      value: "San Francisco, CA",
      href: "#"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#"
    }
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full py-16 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* H1 - Contact Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get In Touch With LogicaWork
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Have a software development project in mind? Let's discuss how we can help your business grow with custom AI and software solutions.
          </p>
        </motion.div>

        {/* Main Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* LEFT COLUMN - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>

            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">
                        {info.label}
                      </h3>
                      <p className="text-gray-600 text-lg mt-1">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-100 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Working Hours</h3>
              <ul className="space-y-3 text-gray-600">
                <li><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM PST</li>
                <li><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM PST</li>
                <li><span className="font-semibold">Sunday:</span> Closed</li>
              </ul>
              <p className="text-sm text-gray-500 mt-6">
                We typically respond to inquiries within 24 hours during business days.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your software development project, goals, and timeline..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your information is secure and will only be used to respond to your inquiry.
              </p>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section - H2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gray-900 text-white rounded-3xl p-12 md:p-16"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Most projects take 6-16 weeks depending on complexity. We provide detailed timelines after the discovery phase."
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! We provide 24/7 monitoring, maintenance, and support packages after launch to ensure smooth operation."
              },
              {
                q: "Can you integrate with our existing systems?",
                a: "Absolutely. We specialize in seamless integrations with legacy systems and modern APIs."
              },
              {
                q: "What are your pricing models?",
                a: "We offer fixed-price projects, time & materials, and retainer models. We'll discuss the best fit for your needs."
              },
              {
                q: "Do you sign NDAs?",
                a: "Yes, we sign NDAs and maintain strict confidentiality for all client projects and information."
              },
              {
                q: "How do we stay updated on project progress?",
                a: "We provide weekly updates, sprint reviews, and you have access to our project management portal anytime."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.05 }}
                className="border-l-4 border-amber-500 pl-6"
              >
                <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation with our team to discuss your software development needs.
          </p>
          <button className="px-10 py-4 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-all text-lg">
            Book Free Consultation Now
          </button>
        </motion.div>

        {/* Schema Markup - ContactPoint */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "telephone": "+1 (555) 123-4567",
            "email": "hello@logicawork.com",
            "areaServed": "US",
            "availableLanguage": ["en"]
          })}
        </script>
      </div>
    </section>
  )
}
