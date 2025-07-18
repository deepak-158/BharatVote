'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  EyeSlashIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Secure Digital Platform',
    description: 'Every vote is securely processed and stored using trusted digital technology, ensuring complete integrity.',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: EyeSlashIcon,
    title: 'Complete Privacy',
    description: 'Your vote remains completely private while maintaining transparency. Your voting choice is protected.',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    icon: LockClosedIcon,
    title: 'Data Protection',
    description: 'Your personal information and voting data are protected using industry-standard security measures.',
    color: 'from-accent-500 to-accent-600'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Multi-Platform Access',
    description: 'Vote from anywhere using our secure web platform, mobile apps, or assisted kiosks.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: GlobeAltIcon,
    title: 'Multilingual Support',
    description: 'Available in 10+ Indian languages with voice assistance for inclusive participation.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: ClockIcon,
    title: 'Real-Time Verification',
    description: 'Instant vote confirmation and real-time result tracking with transparent audit trails.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: UserGroupIcon,
    title: 'ECI Verified Candidates',
    description: 'All candidate profiles are verified and managed by Election Commission officials.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: ChartBarIcon,
    title: 'Transparent Results',
    description: 'Public verification of results with detailed analytics while maintaining voter privacy.',
    color: 'from-teal-500 to-teal-600'
  }
]

export function Features() {
    const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="features" className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Key Features of <span className="text-gradient">BharatVote</span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Experience digital democracy with a platform designed for transparency, 
            accessibility, and reliable electoral participation for every citizen.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="card card-hover h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
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

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
              Ready to Experience Secure Digital Voting?
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Join millions of Indians in shaping the future of democracy with the most secure 
              and transparent voting platform ever created.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Register to Vote
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
