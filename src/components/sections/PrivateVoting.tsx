'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ShieldCheckIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
  FingerPrintIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
const privacyFeatures = [
  {
    icon: EyeSlashIcon,
    title: 'Secret Ballot',
    description: 'Your vote choice remains completely private and anonymous.',
    details: 'No one can see how you voted, ensuring freedom from influence or coercion.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Identity Protection',
    description: 'Your personal identity is separated from your vote choice.',
    details: 'Advanced systems ensure voter verification without compromising ballot secrecy.'
  },
  {
    icon: LockClosedIcon,
    title: 'Secure Process',
    description: 'End-to-end protection throughout the entire voting process.',
    details: 'From registration to result counting, your privacy is maintained at every step.'
  }
]

export function PrivateVoting() {
    const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="privacy" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
                Your Vote is <span className="text-gradient">Private</span>
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                We ensure complete ballot secrecy while maintaining the highest standards 
                of electoral integrity and transparency.
              </p>
            </div>

            <div className="space-y-6">
              {privacyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 mb-2">
                      {feature.description}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {feature.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <DocumentTextIcon className="w-6 h-6 text-primary-600" />
                <h4 className="text-lg font-semibold text-neutral-900">
                  Constitutional Guarantee
                </h4>
              </div>
              <p className="text-neutral-600">
                Article 326 of the Indian Constitution guarantees the right to vote by secret ballot. 
                BharatVote upholds this fundamental democratic principle through advanced privacy protection.
              </p>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-soft">
              {/* Privacy Flow Visualization */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    How Privacy is Protected
                  </h3>
                  <p className="text-neutral-600">
                    Your identity and vote choice remain separate
                  </p>
                </div>

                {/* Step 1: Identity Verification */}
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FingerPrintIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Identity Verified</h4>
                    <p className="text-sm text-neutral-600">You are authenticated as eligible voter</p>
                  </div>
                </div>

                {/* Separation Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-neutral-300 to-transparent"></div>
                </div>

                {/* Step 2: Anonymous Token */}
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <UserIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Anonymous Token</h4>
                    <p className="text-sm text-neutral-600">Identity separated from voting process</p>
                  </div>
                </div>

                {/* Separation Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-neutral-300 to-transparent"></div>
                </div>

                {/* Step 3: Private Vote */}
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <EyeSlashIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Secret Ballot</h4>
                    <p className="text-sm text-neutral-600">Your vote choice remains completely private</p>
                  </div>
                </div>
              </div>

              {/* Privacy Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <ShieldCheckIcon className="w-5 h-5" />
                  <span className="font-semibold text-sm">Privacy Protected</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-secondary-500/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
