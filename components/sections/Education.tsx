'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export default function Education() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary-600 rounded-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Superior Technician Diploma in Database Management
                </h3>
                <p className="text-lg text-primary-600 dark:text-primary-400 mb-4">
                  INSFP Baiche Abdelkader
                </p>
                <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Setif, Algeria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>2017 – 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="mt-8 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Languages</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="font-semibold mb-1">Arabic</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Native</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="font-semibold mb-1">English</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Upper Intermediate</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="font-semibold mb-1">French</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Intermediate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

