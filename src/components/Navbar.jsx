import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { label: 'Solutions', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white font-sans">
              ✨ LogicaWork
            </h1>
          </motion.div>

          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 font-medium hover:text-yellowBrand transition-colors duration-300"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-yellowBrand text-dark px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
          >
            Get started
          </motion.button>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 border-t border-gray-800"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 px-4 text-gray-300 hover:text-yellowBrand transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="block w-full mt-2 bg-yellowBrand text-dark px-4 py-2 rounded-lg font-semibold">
              Get started
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
