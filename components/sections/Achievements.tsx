'use client'

import { motion } from 'framer-motion'
import { Trophy, TrendingUp, Users, Shield, FileCheck } from 'lucide-react'

const achievements = [
  {
    icon: TrendingUp,
    title: '99%+ Uptime',
    description: 'Maintained exceptional system availability for enterprise infrastructure',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Users,
    title: '500+ Users Managed',
    description: 'Successfully managed IT infrastructure for large-scale organizations',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    title: '25% Ticket Reduction',
    description: 'Reduced support tickets by 25% through training and documentation',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Shield,
    title: 'Security Compliance',
    description: 'Maintained compliance with government digital certification standards',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: FileCheck,
    title: 'SOPs & Knowledge Base',
    description: 'Created comprehensive documentation and standard operating procedures',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Trophy,
    title: 'Infrastructure Optimization',
    description: 'Optimized GPOs and network configurations for improved performance',
    color: 'from-cyan-500 to-cyan-600',
  },
]

export default function Achievements() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="achievements"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Achievements</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${achievement.color} mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

