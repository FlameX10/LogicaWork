import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const productLinks = [
    { label: 'Solutions', id: 'services' },
    { label: 'Our Work', id: 'portfolio' },
    { label: 'Process', id: 'process' },
  ]

  const companyLinks = [
    { label: 'About', id: 'about' },
    { label: 'Blog', id: '#' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <footer className="bg-dark text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 mb-16"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4 font-sans">
              ✨ LogicaWork
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI automation solutions for agencies that want to scale smarter and faster.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-yellowBrand transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellowBrand transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellowBrand transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-yellowBrand transition-colors flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

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
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Ready to Scale?</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-yellowBrand to-yellow-400 text-dark px-6 py-3 rounded-lg font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 origin-left"
        >
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} LogicaWork. All rights reserved. | Built with automation-first principles.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
