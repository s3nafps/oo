'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Calendar, MapPin, ChevronDown, ChevronUp, Building2 } from 'lucide-react'

interface ExperienceItem {
  company: string
  position: string
  location: string
  period: string
  description: string[]
  highlights: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: 'Autorité Gouvernementale de Certification Électronique',
    position: 'IT Support Engineer',
    location: 'Algiers, Algeria',
    period: 'Feb 2025 – Present',
    description: [
      'Resolved critical system and network issues using GLPI, maintaining ~99% uptime',
      'Ensured compliance with digital certification security policies',
      'Delivered end-user training and documented SOPs',
      'Collaborated with PKI and security teams',
    ],
    highlights: ['GLPI', 'PKI', 'Security Compliance', 'SOP Documentation'],
  },
  {
    company: 'Agrofilm Packaging',
    position: 'IT Support Engineer',
    location: 'Algiers, Algeria',
    period: 'Feb 2024 – Aug 2024',
    description: [
      'Managed Active Directory, Exchange, and DHCP infrastructure',
      'Implemented security policies and access controls',
      'Created comprehensive technical documentation',
      'Provided Level 2 support for complex issues',
    ],
    highlights: ['Active Directory', 'Exchange Server', 'DHCP', 'Security Policies'],
  },
  {
    company: 'Samsung',
    position: 'IT Support Engineer',
    location: 'Algiers, Algeria',
    period: 'Dec 2022 – Dec 2023',
    description: [
      'Maintained Active Directory and Exchange for 500+ users, optimized Group Policy Objects',
      'Administered Fortinet firewall solutions',
      'Delivered staff training, reduced tickets by ~25%',
      'Established internal helpdesk processes',
    ],
    highlights: ['Active Directory', 'Exchange', 'GPO', 'Fortinet Firewall', '500+ Users'],
  },
  {
    company: 'IRIS',
    position: 'IT Support Specialist',
    location: 'Algiers, Algeria',
    period: 'May 2022 – Nov 2022',
    description: [
      'Ensured 24/7 server uptime',
      'Deployed and managed security solutions: Kaspersky, Sophos, Bitdefender',
      'Provided L1–L2 support using ManageEngine',
    ],
    highlights: ['24/7 Operations', 'Security Solutions', 'ManageEngine', 'Kaspersky', 'Sophos'],
  },
  {
    company: 'Brandt',
    position: 'IT Support Specialist',
    location: 'Algiers, Algeria',
    period: 'Apr 2021 – Apr 2022',
    description: [
      'Managed ITSM workflows in GLPI',
      'Supported Microsoft tools and services',
      'Applied ITIL principles in daily operations',
    ],
    highlights: ['GLPI', 'ITSM', 'ITIL', 'Microsoft Tools'],
  },
]

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 transform md:-translate-x-1/2"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform md:-translate-x-1/2 z-10"></div>

                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => toggleExpanded(index)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                          <h3 className="text-xl font-bold">{exp.company}</h3>
                        </div>
                        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                          {exp.position}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                        {expandedIndex === index ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <ul className="space-y-2 mb-4">
                              {exp.description.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                  <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {exp.highlights.map((highlight, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

