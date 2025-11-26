'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Linkedin, Phone, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  if (!mounted) return null

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
          >
            MOHAMED SENATOR
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4"
          >
            IT Support Engineer
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-4 mb-8 text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Algiers, Algeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+213541176852" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                +213 541176852
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:mohamed.senator@icloud.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                mohamed.senator@icloud.com
              </a>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Experienced IT Support Engineer specializing in Active Directory, Exchange Server, 
            Group Policy Objects, Firewall management, PKI, and ITSM. Proven track record of 
            maintaining 99%+ uptime and optimizing enterprise infrastructure for 500+ users.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a
              href="https://linkedin.com/in/mohamedsenator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <button
              onClick={() => {
                // Create a simple CV download - in production, you'd link to an actual PDF
                const link = document.createElement('a')
                link.href = '/cv-mohamed-senator.pdf'
                link.download = 'Mohamed_Senator_CV.pdf'
                link.click()
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

