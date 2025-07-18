'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRive } from '@rive-app/react-canvas'
import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  LockClosedIcon,
  CheckBadgeIcon 
} from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext'

export function Hero() {
    const { isAuthenticated } = useAuth()

  // Rive animation (you would need to add the actual .riv file)
  const { RiveComponent } = useRive({
    src: '/animations/democracy.riv', // You would need to create this
    autoplay: true,
    animations: ['vote_animation'],
  })

  const stats = [
    { icon: UserGroupIcon, value: '100M+', label: 'Registered Voters' },
    { icon: ShieldCheckIcon, value: '543', label: 'Constituencies' },
    { icon: LockClosedIcon, value: '100%', label: 'Private Voting' },
    { icon: CheckBadgeIcon, value: 'ECI', label: 'Verified Platform' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50 pt-12 pb-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-saffron/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-50 border border-accent-200 rounded-full text-sm font-medium text-accent-700"
            >
              <CheckBadgeIcon className="w-5 h-5" />
              <span>Verified & Secure Platform</span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight"
              >
                <span className="block">Secure Digital</span>
                <span className="block text-gradient">
                  Voting Platform
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-neutral-600 leading-relaxed max-w-2xl"
              >
                Experience the future of democracy with our blockchain-secured voting system. Vote securely, transparently, and conveniently from anywhere.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {isAuthenticated ? (
                <Link href="/vote" className="btn-primary text-lg px-8 py-4 text-center">
                  Cast Your Vote
                </Link>
              ) : (
                <Link href="/auth/register" className="btn-primary text-lg px-8 py-4 text-center">
                  Register to Vote
                </Link>
              )}
              
              <Link href="/how-it-works" className="btn-outline text-lg px-8 py-4 text-center">
                Learn How It Works
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Animation/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
              <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                {/* Rive Animation would go here */}
                <div className="w-full h-full flex items-center justify-center">
                  {/* Fallback illustration if Rive is not available */}
                  <div className="relative w-80 h-80">
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-saffron via-white to-green rounded-full opacity-20"
                    />
                    
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-strong flex flex-col">
                        {/* Indian Flag - Tricolor */}
                        <div className="flex-1 bg-[#FF9933]"></div> {/* Saffron */}
                        <div className="flex-1 bg-white flex items-center justify-center">
                          {/* Ashoka Chakra */}
                          <svg className="w-12 h-12" viewBox="0 0 100 100">
                            {/* Navy blue circle */}
                            <circle cx="50" cy="50" r="40" fill="#000080" />
                            
                            {/* 24 spokes of the Ashoka Chakra */}
                            {[...Array(24)].map((_, i) => (
                              <line 
                                key={i}
                                x1="50" 
                                y1="50" 
                                x2="50" 
                                y2="10"
                                stroke="white"
                                strokeWidth="2"
                                transform={`rotate(${i * 15} 50 50)`}
                              />
                            ))}
                            
                            {/* Small center circle */}
                            <circle cx="50" cy="50" r="4" fill="#000080" stroke="white" strokeWidth="1" />
                          </svg>
                        </div>
                        <div className="flex-1 bg-[#138808]"></div> {/* Green */}
                      </div>
                    </motion.div>

                    {/* Floating elements */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          y: [-5, 5, -5],
                          rotate: [0, 360],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2
                        }}
                        className={`absolute w-3 h-3 bg-primary-400 rounded-full`}
                        style={{
                          left: `${20 + (i * 60) % 80}%`,
                          top: `${20 + (i * 40) % 60}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-white rounded-xl shadow-medium p-4 border border-neutral-200"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="text-sm font-medium text-neutral-900">Secure Vote</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-medium p-4 border border-neutral-200"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-sm font-medium text-neutral-900">Verified Result</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
