'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  UserPlusIcon,
  FingerPrintIcon,
  EyeSlashIcon,
  CubeTransparentIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
const steps = [
  {
    icon: UserPlusIcon,
    title: 'Registration',
    description: 'Register using your Voter ID (EPIC) and complete identity verification with Aadhaar.',
    details: [
      'EPIC number verification',
      'Identity verification',
      'Constituency confirmation',
      'Profile creation'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FingerPrintIcon,
    title: 'Secure Login',
    description: 'Login securely with verified identity ensuring "one person, one vote" principle.',
    details: [
      'Identity verification',
      'Secure authentication',
      'Multi-step verification',
      'Fraud prevention'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: EyeSlashIcon,
    title: 'Private Voting',
    description: 'Cast your vote privately while ensuring your identity remains separate from your choice.',
    details: [
      'Private voting process',
      'Secure ballot casting',
      'Identity protection',
      'Instant confirmation'
    ],
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: CubeTransparentIcon,
    title: 'Secure Recording',
    description: 'Your vote is securely recorded and stored in a tamper-proof digital system.',
    details: [
      'Secure recording',
      'Digital storage',
      'Tamper-proof system',
      'Transparent verification'
    ],
    color: 'from-orange-500 to-orange-600'
  }
]

export function VotingProcess() {
    const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
            How <span className="text-gradient">Voting</span> Works
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Our secure 4-step process ensures your vote is protected, private, and counted 
            accurately using trusted digital technology.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-600 mb-1">
                      Step {index + 1}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-neutral-600 leading-relaxed">
                  {step.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + detailIndex * 0.1 + 0.3 
                      }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-accent-500 flex-shrink-0" />
                      <span className="text-neutral-700">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual representation */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                  className="relative"
                >
                  <div className={`w-80 h-64 rounded-3xl bg-gradient-to-br ${step.color} p-1`}>
                    <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center relative overflow-hidden">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-transparent"></div>
                        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                          {[...Array(48)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 0.3, 0] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.1
                              }}
                              className="border border-neutral-300"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Main icon */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="relative z-10"
                      >
                        <step.icon className="w-24 h-24 text-neutral-400" />
                      </motion.div>

                      {/* Floating particles */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            opacity: [0.3, 0.8, 0.3]
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                          }}
                          className="absolute w-2 h-2 bg-primary-400 rounded-full"
                          style={{
                            left: `${20 + (i * 15) % 60}%`,
                            top: `${20 + (i * 20) % 60}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft border border-neutral-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
              Experience the Future of Voting
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Join the digital democracy revolution. Your vote matters, and now it's 
              more secure and transparent than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Registration
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
