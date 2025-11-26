'use client'

import { motion } from 'framer-motion'
import { Award, Calendar } from 'lucide-react'

const certifications = [
  {
    name: 'ITIL Foundation',
    issuer: 'AXELOS',
    year: '2023',
  },
  {
    name: 'Microsoft 365 Administration',
    issuer: 'Microsoft',
    year: '2023',
  },
  {
    name: 'Fortinet Firewall Management',
    issuer: 'Fortinet',
    year: '2022',
  },
]

export default function Certifications() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="certifications"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-primary-200 dark:border-primary-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary-600 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{cert.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

