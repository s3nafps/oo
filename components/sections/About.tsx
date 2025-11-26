'use client'

import { motion } from 'framer-motion'
import { User, Target, Award } from 'lucide-react'

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <User className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Professional Profile</h3>
            <p className="text-gray-600 dark:text-gray-400">
              IT Support Engineer with extensive experience in enterprise infrastructure management, 
              specializing in Microsoft technologies, network security, and IT service management.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <Target className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Core Expertise</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Deep expertise in Active Directory, Exchange Server, Group Policy Objects, 
              Fortinet firewalls, PKI infrastructure, and ITSM tools like GLPI and ManageEngine.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <Award className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Maintained 99%+ uptime for enterprise infrastructure, reduced support tickets by 25%, 
              and successfully managed IT operations for organizations with 500+ users.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

