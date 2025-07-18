'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { 
  UserPlusIcon,
  IdentificationIcon,
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  InformationCircleIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CpuChipIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'

export default function HowToVotePage() {
  const [activeStep, setActiveStep] = useState(1)
  
  const votingSteps = [
    {
      id: 1,
      title: 'Register & Verify',
      description: 'Create your account and verify your identity',
      icon: UserPlusIcon,
      details: [
        'Sign up with your Aadhaar number and basic information',
        'Verify your mobile number with OTP',
        'Upload required documents for identity verification',
        'Wait for approval from the Election Commission'
      ]
    },
    {
      id: 2,
      title: 'Authenticate',
      description: 'Log in securely on election day',
      icon: IdentificationIcon,
      details: [
        'Log in to BharatVote during the voting period',
        'Complete multi-factor authentication',
        'Verify your identity using biometric data if required',
        'Access your personalized ballot'
      ]
    },
    {
      id: 3,
      title: 'Cast Your Vote',
      description: 'Select your candidates and submit securely',
      icon: DevicePhoneMobileIcon,
      details: [
        'Review the list of candidates for your constituency',
        'Select your preferred candidate for each position',
        'Review your choices before final submission',
        'Submit your vote securely to the blockchain'
      ]
    },
    {
      id: 4,
      title: 'Verify & Confirm',
      description: 'Get confirmation and receipt of your vote',
      icon: CheckCircleIcon,
      details: [
        'Receive instant confirmation of successful vote submission',
        'Download your encrypted vote receipt',
        'Verify your vote was recorded on the blockchain',
        'Keep your receipt for records and verification'
      ]
    }
  ]
  
  const securityFeatures = [
    {
      icon: ShieldCheckIcon,
      title: 'End-to-End Encryption',
      description: 'Your vote is encrypted from submission to counting, ensuring complete privacy.'
    },
    {
      icon: LockClosedIcon,
      title: 'Blockchain Security',
      description: 'Votes are stored on an immutable blockchain ledger that cannot be altered.'
    },
    {
      icon: CpuChipIcon,
      title: 'Multi-Factor Authentication',
      description: 'Multiple verification steps ensure only eligible voters can participate.'
    }
  ]
  
  const requirements = [
    'Indian citizen aged 18 or above',
    'Valid Aadhaar number',
    'Registered mobile phone number',
    'Stable internet connection',
    'Compatible device (smartphone, tablet, or computer)'
  ]

  return (
    <MainLayout>
      <div className="bg-neutral-50 min-h-screen pb-16">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50 pt-28 pb-12">
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
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">
                How to Vote
              </h1>
              <p className="text-lg text-neutral-600 max-w-3xl">
                Learn how to cast your vote securely using BharatVote's digital platform. 
                Follow our step-by-step guide to participate in India's democratic process.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="container-custom mt-8">
          {/* Voting Process Steps */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
              4 Simple Steps to Vote Online
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {votingSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    activeStep === step.id 
                      ? 'transform scale-105' 
                      : 'hover:transform hover:scale-102'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className={`border-2 rounded-xl p-6 h-full ${
                    activeStep === step.id
                      ? 'border-primary-300 bg-primary-50'
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}>
                    <div className="text-center mb-4">
                      <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                        activeStep === step.id
                          ? 'bg-primary-100 text-primary-600'
                          : 'bg-neutral-100 text-neutral-600'
                      }`}>
                        <step.icon className="w-8 h-8" />
                      </div>
                      <span className={`inline-block w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center mb-3 ${
                        activeStep === step.id ? 'bg-primary-500' : 'bg-neutral-400'
                      }`}>
                        {step.id}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-neutral-900 text-center mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 text-sm text-center">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow connector */}
                  {index < votingSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRightIcon className="w-6 h-6 text-neutral-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Detailed Step Information */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">{activeStep}</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                {votingSteps[activeStep - 1].title}
              </h3>
            </div>
            
            <p className="text-neutral-700 mb-6">
              {votingSteps[activeStep - 1].description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-4">What you need to do:</h4>
                <ul className="space-y-3">
                  {votingSteps[activeStep - 1].details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <InformationCircleIcon className="w-6 h-6 text-primary-600 mr-2" />
                  <h4 className="font-semibold text-neutral-900">Important Notes</h4>
                </div>
                
                {activeStep === 1 && (
                  <div className="space-y-3">
                    <p className="text-neutral-700 text-sm">
                      • Registration must be completed before the deadline
                    </p>
                    <p className="text-neutral-700 text-sm">
                      • Identity verification may take 24-48 hours
                    </p>
                    <p className="text-neutral-700 text-sm">
                      • Keep your documents ready for quick verification
                    </p>
                  </div>
                )}
                
                {activeStep === 2 && (
                  <div className="space-y-3">
                    <p className="text-neutral-700 text-sm">
                      • Voting is only available during official election hours
                    </p>
                    <p className="text-neutral-700 text-sm">
                      • Ensure you have a stable internet connection
                    </p>
                    <p className="text-neutral-700 text-sm">
                      • Keep your registered mobile phone accessible for OTP
                    </p>
                  </div>
                )}
                
                {activeStep === 3 && (
                  <div className="space-y-3">
                    <p className="text-neutral-700 text-sm">
                      • Review candidate information carefully before voting
                    </p>
                    <p className="text-neutral-700 text-sm">
                      • You can only vote once per election
                    </p>
                    <p className="text-neutral-700 text-sm">
                      • Your vote cannot be changed once submitted
                    </p>
                  </div>
                )}
                
                {activeStep === 4 && (
                  <div className="space-y-3">
                    <p className="text-neutral-700 text-sm">
                      • Save your vote receipt in a secure location
                    </p>
                    <p className="text-neutral-700 text-sm">
                      • You can verify your vote on the blockchain
                    </p>
                    <p className="text-neutral-700 text-sm">
                      • Results will be published after the voting period ends
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Requirements */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Requirements to Vote Online
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-4">Eligibility Requirements:</h3>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <ExclamationTriangleIcon className="w-6 h-6 text-amber-600 mr-2" />
                  <h3 className="font-semibold text-amber-900">Important Deadlines</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-amber-800">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    <span className="text-sm">Registration: 15 days before election</span>
                  </div>
                  <div className="flex items-center text-amber-800">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    <span className="text-sm">Document verification: 7 days before election</span>
                  </div>
                  <div className="flex items-center text-amber-800">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    <span className="text-sm">Voting period: As announced by Election Commission</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Security Features */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              Your Vote is Secure
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl shadow-soft p-8 text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Exercise Your Democratic Right?
            </h2>
            <p className="text-neutral-700 mb-8 max-w-2xl mx-auto">
              Join millions of Indians who are shaping the future of our nation through secure, 
              transparent, and accessible digital voting.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/auth/register" className="btn-primary py-3 px-8">
                Register to Vote
              </Link>
              <Link href="/elections" className="btn-outline py-3 px-8">
                View Elections
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}