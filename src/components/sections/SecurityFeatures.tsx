'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  EyeSlashIcon,
  DocumentCheckIcon,
  ServerIcon,
  KeyIcon
} from '@heroicons/react/24/outline'
const securityFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'End-to-End Encryption',
    description: 'AES-256 encryption protects every step of your voting journey',
    percentage: 100,
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: LockClosedIcon,
    title: 'Multi-Factor Authentication',
    description: 'Biometric + OTP + Device verification for maximum security',
    percentage: 99.9,
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: EyeSlashIcon,
    title: 'Zero-Knowledge Voting',
    description: 'Vote anonymity guaranteed through cryptographic protocols',
    percentage: 100,
    color: 'from-green-500 to-green-600'
  },
  {
    icon: DocumentCheckIcon,
    title: 'Blockchain Integrity',
    description: 'Immutable vote records with mathematical proof of validity',
    percentage: 100,
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: ServerIcon,
    title: 'Distributed Infrastructure',
    description: 'No single point of failure with global server distribution',
    percentage: 99.99,
    color: 'from-red-500 to-red-600'
  },
  {
    icon: KeyIcon,
    title: 'Cryptographic Signatures',
    description: 'Every vote digitally signed and mathematically verifiable',
    percentage: 100,
    color: 'from-teal-500 to-teal-600'
  }
]

const certifications = [
  { name: 'ISO 27001', description: 'Information Security Management' },
  { name: 'SOC 2 Type II', description: 'Security & Availability Controls' },
  { name: 'FIPS 140-2', description: 'Cryptographic Module Validation' },
  { name: 'Common Criteria', description: 'Security Evaluation Standard' }
]

export function SecurityFeatures() {
    const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="security" className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
            <span className="text-gradient">Bank-Level</span> Security
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Your vote is protected by multiple layers of military-grade security, 
            ensuring complete privacy and integrity throughout the democratic process.
          </p>
        </motion.div>

        {/* Security features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="card card-hover h-full relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon and percentage */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                        {feature.percentage}%
                      </div>
                      <div className="text-xs text-neutral-500">Security Rating</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6">
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${feature.percentage}%` } : {}}
                        transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${feature.color}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-neutral-50 to-primary-50 rounded-3xl p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
              Multi-Layer Security Architecture
            </h3>
            <p className="text-lg text-neutral-600">
              Every component is designed with security-first principles
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* User Layer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-2xl p-6 text-center shadow-soft"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">User Authentication</h4>
              <p className="text-sm text-neutral-600">Biometric + Multi-factor</p>
            </motion.div>

            {/* Encryption Layer */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-white rounded-2xl p-6 text-center shadow-soft"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">Encryption Layer</h4>
              <p className="text-sm text-neutral-600">AES-256 Encryption</p>
            </motion.div>

            {/* Application Layer */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-white rounded-2xl p-6 text-center shadow-soft"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">Application Security</h4>
              <p className="text-sm text-neutral-600">Zero-Trust Architecture</p>
            </motion.div>

            {/* Network Layer */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-soft"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">Network Security</h4>
              <p className="text-sm text-neutral-600">DDoS Protection</p>
            </motion.div>

            {/* Blockchain Layer */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-white rounded-2xl p-6 text-center shadow-soft"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">5</span>
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">Blockchain Layer</h4>
              <p className="text-sm text-neutral-600">Immutable Storage</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-8">
            Industry Certifications & Compliance
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-medium transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-bold text-neutral-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-neutral-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
