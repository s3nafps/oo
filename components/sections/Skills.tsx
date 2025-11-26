'use client'

import { motion } from 'framer-motion'
import { 
  Server, 
  Shield, 
  Network, 
  Settings, 
  Database,
  Users,
  FileText
} from 'lucide-react'

const skillCategories = [
  {
    title: 'System Administration',
    icon: Server,
    skills: [
      { name: 'Active Directory (AD)', level: 95, highlight: true },
      { name: 'Exchange Server', level: 90, highlight: true },
      { name: 'DHCP/DNS', level: 92, highlight: true },
      { name: 'Group Policy Objects (GPO)', level: 93, highlight: true },
      { name: 'Windows Server', level: 88 },
      { name: 'Virtualization', level: 85 },
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Network & Security',
    icon: Shield,
    skills: [
      { name: 'Fortinet Firewall', level: 90, highlight: true },
      { name: 'VPN', level: 88 },
      { name: 'Network Troubleshooting', level: 92 },
      { name: 'PKI', level: 87, highlight: true },
      { name: 'System Hardening', level: 85 },
      { name: 'Security Audits', level: 83 },
    ],
    color: 'from-red-500 to-red-600',
  },
  {
    title: 'ITSM & Tools',
    icon: Settings,
    skills: [
      { name: 'GLPI', level: 95, highlight: true },
      { name: 'ManageEngine', level: 90 },
      { name: 'ITSM', level: 92, highlight: true },
      { name: 'ITIL', level: 88 },
      { name: 'Microsoft 365', level: 90 },
      { name: 'Teams & Outlook', level: 92 },
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Security Solutions',
    icon: Shield,
    skills: [
      { name: 'Kaspersky', level: 85 },
      { name: 'Sophos', level: 87 },
      { name: 'Bitdefender', level: 85 },
      { name: 'Security Policies', level: 90 },
      { name: 'Access Controls', level: 88 },
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Network Management',
    icon: Network,
    skills: [
      { name: 'Network Infrastructure', level: 90 },
      { name: 'Network Monitoring', level: 88 },
      { name: 'Troubleshooting', level: 92 },
      { name: 'Performance Optimization', level: 85 },
    ],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'Documentation & Training',
    icon: FileText,
    skills: [
      { name: 'Technical Documentation', level: 90 },
      { name: 'SOP Creation', level: 88 },
      { name: 'End-User Training', level: 85 },
      { name: 'Knowledge Base', level: 87 },
    ],
    color: 'from-orange-500 to-orange-600',
  },
]

export default function Skills() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="skills"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expertise in enterprise IT infrastructure, security, and service management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span
                          className={`text-sm font-medium ${
                            skill.highlight
                              ? 'text-primary-600 dark:text-primary-400 font-bold'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} ${
                            skill.highlight ? 'ring-2 ring-primary-400' : ''
                          }`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

