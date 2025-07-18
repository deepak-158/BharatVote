'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { 
  ChevronDownIcon,
  ChevronUpIcon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  InformationCircleIcon,
  FingerPrintIcon,
  IdentificationIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export default function FAQPage() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  
  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }
  
  const faqCategories = [
    { id: 'all', name: 'All Questions', icon: QuestionMarkCircleIcon },
    { id: 'registration', name: 'Voter Registration', icon: IdentificationIcon },
    { id: 'voting', name: 'Voting Process', icon: DocumentTextIcon },
    { id: 'security', name: 'Security & Privacy', icon: ShieldCheckIcon },
    { id: 'technical', name: 'Technical Questions', icon: CpuChipIcon }
  ]
  
  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'How do I register to vote on BharatVote?',
      answer: 'To register on BharatVote, you need to create an account with your Aadhaar number, mobile number, and basic personal information. Our system will verify your identity against the electoral database. Once verified, you will receive a secure digital voter ID that you can use to vote in elections.',
      category: 'registration'
    },
    {
      id: '2',
      question: 'Is my vote really anonymous?',
      answer: 'Yes, your vote is completely anonymous. While we verify your identity to ensure you\'re eligible to vote, the voting process itself uses a cryptographic technique called "blind signature" which separates your identity from your vote. This ensures that nobody, not even system administrators, can link your identity to your specific vote choice.',
      category: 'security'
    },
    {
      id: '3',
      question: 'How secure is the blockchain voting system?',
      answer: 'Our blockchain voting system employs multiple layers of security. It uses end-to-end encryption, decentralized verification, and tamper-proof ledger technology. Each vote is cryptographically sealed and can be verified without revealing the voter\'s identity. The system undergoes regular security audits and penetration testing by independent cybersecurity experts.',
      category: 'security'
    },
    {
      id: '4',
      question: 'What happens if I lose internet connection while voting?',
      answer: 'If you lose your internet connection during the voting process, your vote will not be submitted until you reconnect. Our system saves your session securely, and you can resume the voting process once your connection is restored. If the session expires, you will need to start the voting process again, but you can only submit one vote.',
      category: 'technical'
    },
    {
      id: '5',
      question: 'Can I vote from outside India?',
      answer: 'Yes, eligible Indian citizens living abroad can vote using our platform. You need to be registered as an overseas voter and verify your identity through our multi-factor authentication process. The platform is accessible 24/7 during the voting period to accommodate different time zones.',
      category: 'voting'
    },
    {
      id: '6',
      question: 'How do I know my vote was correctly recorded?',
      answer: 'After submitting your vote, you will receive a unique, anonymous receipt with a transaction ID. You can use this ID to verify that your vote was correctly recorded on the blockchain. Our system allows you to check that your vote was counted without revealing your specific choice, maintaining the secrecy of your ballot.',
      category: 'voting'
    },
    {
      id: '7',
      question: 'What devices and browsers are supported?',
      answer: 'BharatVote supports all major devices including desktops, laptops, tablets, and smartphones. The platform works on recent versions of Chrome, Firefox, Safari, and Edge browsers. For the best experience, we recommend using the latest version of your preferred browser and ensuring your device has a stable internet connection.',
      category: 'technical'
    },
    {
      id: '8',
      question: 'What if I have technical difficulties during voting?',
      answer: 'If you encounter any technical issues, our support team is available 24/7 during the election period. You can contact us through the help button in the app, by email, or by phone. We also have a comprehensive troubleshooting guide available in the Help Center section of our website.',
      category: 'technical'
    },
    {
      id: '9',
      question: 'How does BharatVote prevent someone from voting twice?',
      answer: 'Our system implements strict identity verification and vote tracking to prevent duplicate voting. Once you have cast your vote for a specific election, the system marks your voter ID as having participated. Any additional attempts to vote in the same election will be rejected. This is similar to how traditional voting works, but with enhanced digital security.',
      category: 'security'
    },
    {
      id: '10',
      question: 'What information do I need to register?',
      answer: 'To register on BharatVote, you need your Aadhaar number, a valid mobile phone number, your permanent address, and basic personal information. You may also need to provide a recent photograph for identity verification. All information is securely stored and protected according to data protection regulations.',
      category: 'registration'
    },
    {
      id: '11',
      question: 'Can I update my voter information?',
      answer: 'Yes, you can update your voter information such as address, phone number, or photograph through your BharatVote profile. Any changes to critical information will require re-verification. It\'s important to keep your information updated to ensure you can vote in the correct constituency and receive important notifications about upcoming elections.',
      category: 'registration'
    },
    {
      id: '12',
      question: 'How are election results calculated and verified?',
      answer: 'Election results are calculated by tallying all valid votes recorded on the blockchain. The decentralized nature of blockchain ensures the count is transparent and tamper-proof. Independent observers and auditors can verify the results without accessing individual voting data. Results are published only after verification by the Election Commission of India.',
      category: 'voting'
    }
  ]
  
  // Filter FAQs based on search query and active category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    
    return matchesSearch && matchesCategory
  })
  
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
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-neutral-600 max-w-3xl">
                Find answers to common questions about BharatVote, including voter registration, 
                the voting process, security measures, and technical support.
              </p>
              
              {/* Search bar */}
              <div className="mt-8 max-w-2xl">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full rounded-lg border-neutral-300 pl-10 pr-12 py-3 text-neutral-900 placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500 shadow-soft"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-600"
                      onClick={() => setSearchQuery('')}
                    >
                      <ArrowPathIcon className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="container-custom mt-8">
          {/* Category tabs */}
          <div className="bg-white rounded-xl shadow-soft mb-8 overflow-x-auto">
            <div className="flex min-w-max">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 ${
                    activeCategory === category.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
                  }`}
                >
                  <category.icon className={`w-5 h-5 mr-2 ${
                    activeCategory === category.id ? 'text-primary-500' : 'text-neutral-400'
                  }`} />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* FAQ accordion */}
          <div className="space-y-4 mb-12">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-soft overflow-hidden"
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="font-semibold text-neutral-900">{faq.question}</span>
                    {openFaqId === faq.id ? (
                      <ChevronUpIcon className="w-5 h-5 text-neutral-500" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-neutral-500" />
                    )}
                  </button>
                  
                  {openFaqId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <div className="pt-2 border-t border-neutral-200">
                        <p className="text-neutral-700 whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-xl shadow-soft">
                <QuestionMarkCircleIcon className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neutral-700 mb-2">No Questions Found</h3>
                <p className="text-neutral-600">Try adjusting your search query or category selection.</p>
              </div>
            )}
          </div>
          
          {/* Still have questions section */}
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                Still Have Questions?
              </h2>
              <p className="text-neutral-600 max-w-xl mx-auto">
                If you couldn't find the answer you were looking for, our support team is here to help.
                Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-neutral-200 rounded-xl p-6 text-center hover:border-primary-200 hover:bg-primary-50 transition-colors duration-300">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Call Helpline</h3>
                <p className="text-neutral-600 mb-4">Our support team is available 24/7 during election periods</p>
                <div className="text-lg font-bold text-primary-600">1800-XXX-XXXX</div>
              </div>
              
              <div className="border border-neutral-200 rounded-xl p-6 text-center hover:border-primary-200 hover:bg-primary-50 transition-colors duration-300">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Email Support</h3>
                <p className="text-neutral-600 mb-4">Send us your questions and we'll respond within 24 hours</p>
                <div className="text-lg font-bold text-primary-600">support@bharatvote.gov.in</div>
              </div>
              
              <div className="border border-neutral-200 rounded-xl p-6 text-center hover:border-primary-200 hover:bg-primary-50 transition-colors duration-300">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChatBubbleLeftRightIcon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Live Chat</h3>
                <p className="text-neutral-600 mb-4">Chat with our support team for immediate assistance</p>
                <button className="btn-primary py-2 px-6">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
          
          {/* Visit help center */}
          <div className="mt-12 bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl shadow-soft p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Explore Our Help Center
                </h2>
                <p className="text-neutral-700 mb-4">
                  Our comprehensive Help Center provides detailed guides, video tutorials, and 
                  troubleshooting tips to help you make the most of the BharatVote platform.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <DocumentTextIcon className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-neutral-700">Step-by-step guides for registration and voting</p>
                  </div>
                  <div className="flex items-start">
                    <CpuChipIcon className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-neutral-700">Technical troubleshooting and system requirements</p>
                  </div>
                  <div className="flex items-start">
                    <ShieldCheckIcon className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-neutral-700">Security information and best practices</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/help-center" className="btn-primary py-2 px-6">
                    Visit Help Center
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-white rounded-full shadow-soft flex items-center justify-center">
                  <InformationCircleIcon className="w-24 h-24 text-primary-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
