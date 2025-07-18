'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  UserIcon,
  MapPinIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext'

interface Candidate {
  id: string
  name: string
  party: string
  symbol: string
  manifesto: string
  experience: string
  education: string
  criminalCases: number
  assets: string
  photo: string
}

const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    party: 'Progressive Democratic Party',
    symbol: 'Lotus',
    manifesto: 'Focus on digital infrastructure, education reform, and sustainable development.',
    experience: '15 years in public service',
    education: 'PhD in Public Administration',
    criminalCases: 0,
    assets: '₹2.5 Crore',
    photo: '/candidates/candidate1.jpg'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    party: 'United People\'s Alliance',
    symbol: 'Hand',
    manifesto: 'Women empowerment, healthcare accessibility, and rural development.',
    experience: '12 years in social work',
    education: 'Masters in Social Work',
    criminalCases: 0,
    assets: '₹1.8 Crore',
    photo: '/candidates/candidate2.jpg'
  },
  {
    id: '3',
    name: 'Arjun Patel',
    party: 'National Reform Party',
    symbol: 'Arrow',
    manifesto: 'Economic growth, job creation, and anti-corruption measures.',
    experience: '10 years in business',
    education: 'MBA, B.Tech',
    criminalCases: 1,
    assets: '₹5.2 Crore',
    photo: '/candidates/candidate3.jpg'
  }
]

export default function VotePage() {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null)
  const [isVoteConfirmed, setIsVoteConfirmed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(3600) // 1 hour in seconds
  const { user } = useAuth()
  const router = useRouter()

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => Math.max(0, prev - 1))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleVoteSubmit = async () => {
    if (!selectedCandidate) return

    setIsSubmitting(true)
    
    // Simulate voting process
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setIsVoteConfirmed(true)
    setIsSubmitting(false)
  }

  const handleLoginClick = () => {
    router.push('/auth/login')
  }

  const handleRegisterClick = () => {
    router.push('/auth/register')
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md w-full">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheckIcon className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">Authentication Required</h1>
            <p className="text-neutral-600 mb-8">
              Please log in to access the voting interface and cast your vote securely.
            </p>
          </div>
          
          <div className="space-y-4">
            <button 
              onClick={handleLoginClick}
              className="btn-primary w-full inline-flex items-center justify-center"
            >
              <UserIcon className="w-5 h-5 mr-2" />
              Login to Vote
            </button>
            
            <div className="text-center">
              <p className="text-sm text-neutral-600 mb-2">Don't have an account?</p>
              <button 
                onClick={handleRegisterClick}
                className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
              >
                Register as a new voter
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isVoteConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-accent-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-strong border border-green-200">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircleIcon className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-2xl font-bold text-neutral-900 mb-4">
              Vote Submitted Successfully!
            </h1>
            
            <p className="text-neutral-600 mb-6">
              Your vote has been securely recorded on the blockchain. 
              Thank you for participating in the democratic process.
            </p>
            
            <div className="bg-neutral-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-neutral-700">
                <strong>Transaction ID:</strong><br />
                <code className="text-xs bg-white px-2 py-1 rounded">
                  0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c5
                </code>
              </p>
            </div>
            
            <div className="space-y-3">
              <button className="w-full btn-primary">
                View Receipt
              </button>
              <button className="w-full btn-outline">
                Download Certificate
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-saffron to-primary-500 rounded-lg flex items-center justify-center">
                <ShieldCheckIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-900">Secure Voting</h1>
                <p className="text-sm text-neutral-600">Lok Sabha Election 2024</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-sm text-neutral-600">Time Remaining</div>
                <div className="text-lg font-bold text-red-600 flex items-center">
                  <ClockIcon className="w-5 h-5 mr-1" />
                  {formatTime(timeRemaining)}
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm text-neutral-600">Voter</div>
                <div className="font-medium text-neutral-900">{user.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Constituency Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-200 mb-8"
        >
          <div className="flex items-center space-x-4">
            <MapPinIcon className="w-8 h-8 text-primary-600" />
            <div>
              <h2 className="text-xl font-bold text-neutral-900">{user.constituency}</h2>
              <p className="text-neutral-600">{user.state} • Assembly Constituency</p>
            </div>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8"
        >
          <h3 className="font-bold text-blue-900 mb-4">Voting Instructions</h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Review each candidate's profile carefully before making your choice</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>You can select only ONE candidate</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Once submitted, your vote cannot be changed</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Your vote is completely anonymous and secure</span>
            </li>
          </ul>
        </motion.div>

        {/* Candidates */}
        <div className="space-y-6 mb-8">
          <h3 className="text-2xl font-bold text-neutral-900">Select Your Candidate</h3>
          
          {mockCandidates.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`bg-white rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                selectedCandidate === candidate.id 
                  ? 'border-primary-500 shadow-medium' 
                  : 'border-neutral-200 hover:border-neutral-300 shadow-soft'
              }`}
              onClick={() => setSelectedCandidate(candidate.id)}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Radio button */}
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                    selectedCandidate === candidate.id 
                      ? 'border-primary-500 bg-primary-500' 
                      : 'border-neutral-300'
                  }`}>
                    {selectedCandidate === candidate.id && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>

                  {/* Candidate photo */}
                  <div className="w-20 h-20 bg-neutral-200 rounded-xl flex items-center justify-center">
                    <UserIcon className="w-10 h-10 text-neutral-400" />
                  </div>

                  {/* Candidate info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-neutral-900">{candidate.name}</h4>
                        <p className="text-neutral-600">{candidate.party}</p>
                        <p className="text-sm text-neutral-500">Symbol: {candidate.symbol}</p>
                      </div>
                      
                      {candidate.criminalCases > 0 && (
                        <div className="flex items-center space-x-1 text-red-600">
                          <ExclamationTriangleIcon className="w-4 h-4" />
                          <span className="text-xs">{candidate.criminalCases} case(s)</span>
                        </div>
                      )}
                    </div>

                    <p className="text-neutral-700 mb-3">{candidate.manifesto}</p>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-neutral-700">Experience:</span>
                        <p className="text-neutral-600">{candidate.experience}</p>
                      </div>
                      <div>
                        <span className="font-medium text-neutral-700">Education:</span>
                        <p className="text-neutral-600">{candidate.education}</p>
                      </div>
                      <div>
                        <span className="font-medium text-neutral-700">Assets:</span>
                        <p className="text-neutral-600">{candidate.assets}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Submit Vote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-200"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Ready to Submit Your Vote?
            </h3>
            
            {selectedCandidate ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <p className="text-green-800">
                  You have selected: <strong>
                    {mockCandidates.find(c => c.id === selectedCandidate)?.name}
                  </strong>
                </p>
              </div>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <p className="text-yellow-800">
                  Please select a candidate before submitting your vote
                </p>
              </div>
            )}

            <button
              onClick={handleVoteSubmit}
              disabled={!selectedCandidate || isSubmitting}
              className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="loading-dots">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span>Submitting Vote...</span>
                </div>
              ) : (
                'Submit My Vote'
              )}
            </button>

            <p className="text-xs text-neutral-500 mt-4">
              Your vote will be encrypted and recorded on the blockchain
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
