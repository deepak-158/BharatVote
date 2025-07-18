'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BookOpenIcon,
  VideoCameraIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import { MainLayout } from '@/components/layout/MainLayout'

const helpCategories = [
  {
    id: 'voting',
    title: 'Voting Process',
    icon: QuestionMarkCircleIcon,
    description: 'Learn how to vote digitally and securely',
    articles: 12
  },
  {
    id: 'registration',
    title: 'Registration & Verification',
    icon: DocumentTextIcon,
    description: 'Account setup and identity verification',
    articles: 8
  },
  {
    id: 'technical',
    title: 'Technical Support',
    icon: ChatBubbleLeftRightIcon,
    description: 'Troubleshooting and technical issues',
    articles: 15
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    icon: BookOpenIcon,
    description: 'Understanding our security measures',
    articles: 6
  }
]

const faqData = [
  {
    question: 'How do I cast my vote using BharatVote?',
    answer: 'To vote using BharatVote: 1) Log in to your verified account, 2) Complete biometric verification, 3) Select your constituency, 4) Choose your candidate, 5) Review and confirm your vote, 6) Receive digital receipt. Your vote is encrypted and recorded on the blockchain for transparency.'
  },
  {
    question: 'Is my vote secret and secure?',
    answer: 'Yes, absolutely. BharatVote uses advanced encryption and blockchain technology to ensure your vote is completely secret and secure. While your vote is recorded on the blockchain for transparency, it cannot be traced back to you personally, maintaining complete ballot secrecy.'
  },
  {
    question: 'What if I face technical issues while voting?',
    answer: 'If you encounter any technical issues: 1) Try refreshing your browser, 2) Check your internet connection, 3) Clear your browser cache, 4) Use our live chat support, 5) Call our 24/7 helpline at 1800-XXX-VOTE, 6) Visit your nearest assistance center.'
  },
  {
    question: 'Can I vote from anywhere in India?',
    answer: 'Yes, with BharatVote you can vote from anywhere in India as long as you have a stable internet connection and access to a device with biometric capabilities. You must be registered in your home constituency to vote for those representatives.'
  },
  {
    question: 'How do I verify my identity for voting?',
    answer: 'Identity verification involves: 1) Aadhaar card verification, 2) Biometric scan (fingerprint and facial recognition), 3) OTP verification on registered mobile number, 4) Cross-verification with Election Commission database. This multi-layer verification ensures only eligible voters can participate.'
  },
  {
    question: 'What devices are compatible with BharatVote?',
    answer: 'BharatVote works on: 1) Smartphones (Android 8+ and iOS 12+), 2) Tablets, 3) Laptops and desktops with webcam, 4) Government-provided voting kiosks. Biometric features require camera and fingerprint sensor or external biometric device.'
  }
]

export default function HelpPage() {
    const [searchTerm, setSearchTerm] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <MainLayout>
      <div className="bg-neutral-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50 pt-20 pb-16">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-saffron/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-green/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-8">
                <span className="text-gradient">Help</span> Center
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                Get help with voting, account setup, and technical support
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  className="w-full pl-12 pr-4 py-4 bg-white border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg shadow-soft"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </div>

      <div className="container-custom py-8">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white rounded-2xl shadow-soft p-6 text-center hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ChatBubbleLeftRightIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Live Chat</h3>
            <p className="text-neutral-600 mb-4">Get instant help from our support team</p>
            <button className="btn-primary w-full">Start Chat</button>
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-6 text-center hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <PhoneIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Call Support</h3>
            <p className="text-neutral-600 mb-4">24/7 helpline for urgent issues</p>
            <button className="btn-secondary w-full">1800-XXX-VOTE</button>
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-6 text-center hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Email Support</h3>
            <p className="text-neutral-600 mb-4">Detailed assistance via email</p>
            <button className="btn-outline w-full">Send Email</button>
          </div>
        </motion.div>

        {/* Help Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-medium transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4 group-hover:bg-primary-200 transition-colors">
                  <category.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{category.title}</h3>
                <p className="text-neutral-600 text-sm mb-3">{category.description}</p>
                <div className="text-primary-600 text-sm font-medium">
                  {category.articles} articles
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isExpanded = expandedFaq === index
              return (
                <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-neutral-900 pr-4">{faq.question}</h3>
                    {isExpanded ? (
                      <ChevronUpIcon className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                    )}
                  </button>
                  
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 border-t border-neutral-100"
                    >
                      <p className="text-neutral-700 pt-4">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Video Tutorials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'How to Vote Online', duration: '3:45', views: '125K' },
              { title: 'Biometric Verification Process', duration: '2:20', views: '89K' },
              { title: 'Account Registration Guide', duration: '4:15', views: '156K' },
              { title: 'Troubleshooting Common Issues', duration: '5:30', views: '73K' },
              { title: 'Understanding Blockchain Voting', duration: '6:10', views: '94K' },
              { title: 'Mobile App Tutorial', duration: '3:55', views: '112K' }
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 group cursor-pointer">
                <div className="relative h-40 bg-neutral-200 flex items-center justify-center">
                  <VideoCameraIcon className="w-12 h-12 text-neutral-400" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-primary-600 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{video.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 during election periods to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-neutral-100 transition-colors">
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <span>Start Live Chat</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              <PhoneIcon className="w-5 h-5" />
              <span>Call 1800-XXX-VOTE</span>
            </button>
          </div>
        </motion.div>
      </div>
      </div>
    </MainLayout>
  )
}
