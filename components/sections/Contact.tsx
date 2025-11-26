'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mohamed.senator@icloud.com',
      href: 'mailto:mohamed.senator@icloud.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mohamedsenator',
      href: 'https://linkedin.com/in/mohamedsenator',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+213 541176852',
      href: 'tel:+213541176852',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Algiers, Algeria',
      href: '#',
      color: 'from-red-500 to-red-600',
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${method.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{method.label}</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{method.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = 'mailto:mohamed.senator@icloud.com?subject=Contact from Portfolio'
              }}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

