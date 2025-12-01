import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubscribe = async (e) => {
    e.preventDefault()

    if (!email) {
      setMessage('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setMessage('')

    try {
      const templateParams = {
        subscriber_email: email,
        to_email: 'paraspawar347@gmail.com',
        message: `New newsletter subscription from: ${email}`,
      }

      await emailjs.send(
        'service_v9gudbs',
        'template_c5nhsxe',
        templateParams,
        'U2a2rA8zUulbS8Tsn'
      )

      setMessage('Successfully subscribed! Thank you.')
      setEmail('')
    } catch (error) {
      console.error('Email subscription failed:', error)
      setMessage('Subscription failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const productLinks = [
    { label: 'Solutions', id: 'services' },
    { label: 'Our Work', id: 'portfolio' },
    { label: 'Case Studies', id: 'case-study' },
  ]

  const companyLinks = [
    { label: 'About', id: 'about' },
    { label: 'Blog', id: '#' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info & Newsletter */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#2b2b2b] rounded-md flex items-center justify-center">
                <div className="w-3.5 h-3.5 bg-white rounded-sm" />
              </div>
              <span className="text-2xl font-bold">LogicaWork</span>
            </div>

            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              AI automation solutions for agencies that want to scale smarter and
              faster. Streamline operations, reduce costs, and accelerate growth.
            </p>

            {/* Newsletter Subscription */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-3">
                Subscribe to our newsletter for the latest AI automation insights
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:border-yellowBrand focus:outline-none transition-colors"
                  disabled={isSubmitting}
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-yellowBrand text-black rounded-lg hover:bg-yellow-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </motion.button>
              </form>
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm mt-2 ${
                    message.includes('Success')
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                >
                  {message}
                </motion.p>
              )}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-yellowBrand transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellowBrand transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellowBrand transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services/Product Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-yellowBrand transition-colors flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </li>
              ))}
              <li>
                <button className="text-gray-400 hover:text-yellowBrand transition-colors flex items-center gap-1 group">
                  AI Automation
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-yellowBrand transition-colors flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-3">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>paraspawar347@gmail.com</li>
                <li>+91 7020594865</li>
                <li>India, Pune</li>
                <li>Mon-Fri 9AM-6PM IST</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 origin-left"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} LogicaWork. All rights reserved. | Built with
              automation-first principles.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-yellowBrand text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellowBrand text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellowBrand text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
