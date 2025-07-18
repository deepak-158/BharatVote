'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { 
  IdentificationIcon,
  FingerPrintIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  DocumentTextIcon,
  ClockIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'

export default function HowItWorksPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const steps = [
    {
      id: 1,
      title: 'Register Once',
      description: 'Create your secure voter account using your Voter ID (EPIC) and Aadhaar for one-time biometric verification.',
      icon: IdentificationIcon,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      id: 2,
      title: 'Biometric Authentication',
      description: 'Verify your identity using fingerprint, facial recognition, or iris scan on election day.',
      icon: FingerPrintIcon, 
      color: 'bg-purple-100 text-purple-700'
    },
    {
      id: 3,
      title: 'Cast Your Vote',
      description: 'Review candidates from your constituency and securely cast your vote from anywhere in India.',
      icon: CheckCircleIcon,
      color: 'bg-green-100 text-green-700'
    },
    {
      id: 4,
      title: 'Blockchain Verification',
      description: 'Receive a unique transaction ID that proves your vote was recorded without revealing your choice.',
      icon: ShieldCheckIcon,
      color: 'bg-amber-100 text-amber-700'
    }
  ]

  const features = [
    {
      title: 'Vote from Anywhere',
      description: 'Cast your vote securely from any location in India using your smartphone, tablet, or computer with biometric capabilities.',
      icon: DevicePhoneMobileIcon
    },
    {
      title: 'Complete Privacy',
      description: 'Your identity is cryptographically separated from your vote, making it impossible to determine how you voted.',
      icon: LockClosedIcon
    },
    {
      title: 'Transparent Results',
      description: 'Election results are published on the blockchain, making them immutable, verifiable, and resistant to tampering.',
      icon: DocumentTextIcon
    },
    {
      title: 'Real-time Updates',
      description: 'Follow the election process in real-time with live turnout statistics and result counting.',
      icon: ClockIcon
    }
  ]

  const faqs = [
    {
      question: 'Is digital voting secure?',
      answer: 'Yes. BharatVote employs bank-level encryption, blockchain technology, and multi-factor authentication to ensure the highest level of security for your vote.'
    },
    {
      question: 'What if I don\'t have a smartphone?',
      answer: 'BharatVote is accessible through any internet-enabled device. Additionally, assisted voting kiosks are available in public locations for those without personal devices.'
    },
    {
      question: 'How is my vote kept anonymous?',
      answer: 'We use a cryptographic technique that separates your identity from your vote after authentication. Your vote is represented as an anonymous transaction on the blockchain.'
    },
    {
      question: 'Can I verify my vote was counted?',
      answer: 'Yes, you receive a unique transaction ID that allows you to verify your vote was recorded on the blockchain without revealing your specific choice.'
    },
    {
      question: 'What happens if there\'s a technical issue?',
      answer: 'BharatVote has multiple redundancy systems. In the rare event of technical difficulties, backup systems ensure no votes are lost, and 24/7 technical support is available.'
    }
  ]

  return (
    <MainLayout>
      <div className="bg-neutral-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50 pt-28 pb-16">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-saffron/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-green/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
                How <span className="text-gradient">BharatVote</span> Works
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Our secure digital voting platform combines cutting-edge technology with 
                ease of use to make democracy more accessible for all Indian citizens.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/auth/register" className="btn-primary px-8 py-3">
                  Register to Vote
                </Link>
                <Link href="/help" className="btn-outline px-8 py-3">
                  Get Help
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Process Steps */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                The Voting Process
              </h2>
              <p className="text-lg text-neutral-600">
                BharatVote simplifies the electoral process while maintaining the highest standards 
                of security and transparency
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-soft p-8 text-center hover:shadow-medium transition-all duration-300"
                >
                  <div className="mb-6 flex justify-center">
                    <div className={`w-16 h-16 rounded-xl ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-neutral-900 rounded-full text-white flex items-center justify-center mx-auto mb-4 font-bold">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center mt-12">
              <Link href="/vote" className="btn-primary px-8 py-3">
                Experience the Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                  Cutting-Edge Security Technology
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  BharatVote leverages multiple layers of security to ensure your vote is secure, 
                  private, and tamper-proof from end to end.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <LockClosedIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-1">End-to-End Encryption</h3>
                      <p className="text-neutral-600">
                        AES-256 encryption protects all data transmission between your device and our servers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FingerPrintIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-1">Biometric Authentication</h3>
                      <p className="text-neutral-600">
                        Multi-factor biometric verification ensures only you can cast your vote.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 text-green-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <ShieldCheckIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-1">Blockchain Immutability</h3>
                      <p className="text-neutral-600">
                        Once cast, your vote is recorded on a distributed ledger, making it impossible to alter or delete.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2 flex justify-center"
              >
                <div className="w-full max-w-md p-2 bg-white rounded-3xl shadow-strong">
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 lg:p-10 flex items-center justify-center">
                    <div className="relative w-full aspect-square">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4/5 h-4/5 rounded-full border-4 border-primary-200 border-dashed animate-spin-slow"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3/5 h-3/5 rounded-full border-4 border-secondary-200 border-dashed animate-spin-slow animation-delay-1000"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2/5 h-2/5 bg-white rounded-full shadow-strong flex items-center justify-center">
                          <ShieldCheckIcon className="w-12 h-12 text-primary-600" />
                        </div>
                      </div>
                      
                      {/* Security badges around the circle */}
                      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                        <div 
                          key={i}
                          className="absolute w-12 h-12 bg-white rounded-full shadow-medium flex items-center justify-center"
                          style={{
                            top: `calc(50% + ${Math.sin(angle * Math.PI / 180) * 35}%)`,
                            left: `calc(50% + ${Math.cos(angle * Math.PI / 180) * 35}%)`
                          }}
                        >
                          {i % 3 === 0 ? (
                            <LockClosedIcon className="w-6 h-6 text-primary-600" />
                          ) : i % 3 === 1 ? (
                            <FingerPrintIcon className="w-6 h-6 text-secondary-600" />
                          ) : (
                            <DocumentTextIcon className="w-6 h-6 text-accent-600" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                Key Features
              </h2>
              <p className="text-lg text-neutral-600">
                Designed to make voting accessible, secure, and convenient for all citizens
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-medium transition-all duration-300 flex"
                >
                  <div className="w-14 h-14 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-neutral-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-600">
                Get answers to common questions about digital voting
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-6 bg-white rounded-2xl shadow-soft p-8 hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <QuestionMarkCircleIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">{faq.question}</h3>
                      <p className="text-neutral-600">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-neutral-600 mb-6">
                Have more questions? Visit our comprehensive help center.
              </p>
              <Link href="/help" className="btn-primary px-8 py-3">
                View All FAQs
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-600 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Experience the Future of Voting?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join millions of Indian citizens who are making their voices heard through secure digital voting.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/auth/register" className="btn-white px-8 py-3">
                  Register Now
                </Link>
                <Link href="/elections" className="btn-outline-white px-8 py-3">
                  View Upcoming Elections
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
