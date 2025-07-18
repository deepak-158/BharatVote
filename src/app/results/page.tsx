'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ChartBarIcon,
  TrophyIcon,
  ClockIcon,
  MapIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline'
import { MainLayout } from '@/components/layout/MainLayout'

// Mock results data
const electionResults = {
  status: 'ongoing', // 'upcoming', 'ongoing', 'completed'
  totalConstituencies: 543,
  resultsDeclared: 387,
  lastUpdated: '2025-07-18T14:30:00Z',
  turnout: {
    total: 67.2,
    male: 69.1,
    female: 65.3
  }
}

const constituencyResults = [
  {
    id: 1,
    name: 'Mumbai Central',
    status: 'declared',
    winner: {
      name: 'Dr. Priya Sharma',
      party: 'Progressive Party',
      votes: 185432,
      percentage: 52.3
    },
    candidates: [
      { name: 'Dr. Priya Sharma', party: 'Progressive Party', votes: 185432, percentage: 52.3 },
      { name: 'Rajesh Gupta', party: 'Unity Alliance', votes: 142876, percentage: 40.2 },
      { name: 'Sunita Verma', party: 'Independent', votes: 26543, percentage: 7.5 }
    ],
    totalVotes: 354851,
    validVotes: 348234
  },
  {
    id: 2,
    name: 'Delhi South',
    status: 'counting',
    leader: {
      name: 'Rajesh Kumar',
      party: 'Unity Alliance',
      votes: 156234,
      percentage: 48.7
    },
    candidates: [
      { name: 'Rajesh Kumar', party: 'Unity Alliance', votes: 156234, percentage: 48.7 },
      { name: 'Amit Patel', party: 'Progressive Party', votes: 148976, percentage: 46.4 },
      { name: 'Meera Singh', party: 'People\'s Front', votes: 15789, percentage: 4.9 }
    ],
    totalVotes: 320999,
    validVotes: 315432
  },
  {
    id: 3,
    name: 'Bangalore North',
    status: 'declared',
    winner: {
      name: 'Sita Devi',
      party: 'People\'s Front',
      votes: 198765,
      percentage: 55.8
    },
    candidates: [
      { name: 'Sita Devi', party: 'People\'s Front', votes: 198765, percentage: 55.8 },
      { name: 'Kiran Kumar', party: 'Progressive Party', votes: 134521, percentage: 37.8 },
      { name: 'Anita Sharma', party: 'Unity Alliance', votes: 22687, percentage: 6.4 }
    ],
    totalVotes: 355973,
    validVotes: 348234
  }
]

const partyWiseResults = [
  { party: 'Progressive Party', seats: 156, leading: 23, color: 'blue' },
  { party: 'Unity Alliance', seats: 134, leading: 18, color: 'green' },
  { party: 'People\'s Front', seats: 67, leading: 12, color: 'purple' },
  { party: 'National Democratic Party', seats: 30, leading: 8, color: 'orange' },
  { party: 'Others', seats: 12, leading: 4, color: 'gray' }
]

const partyColors = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-500',
  orange: 'bg-orange-500',
  gray: 'bg-gray-500'
}

export default function ResultsPage() {
    const [selectedView, setSelectedView] = useState('overview')
  const [selectedState, setSelectedState] = useState('all')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'declared': return 'text-green-600 bg-green-50'
      case 'counting': return 'text-yellow-600 bg-yellow-50'
      case 'pending': return 'text-gray-600 bg-gray-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'declared': return CheckCircleIcon
      case 'counting': return ClockIcon
      case 'pending': return ExclamationCircleIcon
      default: return ClockIcon
    }
  }

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
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Election <span className="text-gradient">Results 2025</span>
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Live results and comprehensive analysis of the General Elections
              </p>
              <div className="mt-8 flex items-center justify-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900">{electionResults.resultsDeclared}</div>
                  <div className="text-neutral-600">Results Declared</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900">{electionResults.turnout.total}%</div>
                  <div className="text-neutral-600">Voter Turnout</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container-custom py-8">
          {/* Status Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-soft p-6 mb-10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-neutral-900">Live Results</span>
                <span className="text-neutral-600">
                  Last updated: {new Date(electionResults.lastUpdated).toLocaleTimeString()}
                </span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-neutral-900">
                  {electionResults.resultsDeclared}/{electionResults.totalConstituencies}
                </div>
                <div className="text-sm text-neutral-600">Constituencies Declared</div>
              </div>
            </div>
          </motion.div>

          {/* View Selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: 'overview', label: 'Overview', icon: ChartBarIcon },
              { id: 'party-wise', label: 'Party-wise', icon: UserGroupIcon },
              { id: 'constituency', label: 'Constituency-wise', icon: MapIcon },
              { id: 'turnout', label: 'Voter Turnout', icon: UserGroupIcon }
            ].map((view) => (
              <button
                key={view.id}
                onClick={() => setSelectedView(view.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedView === view.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <view.icon className="w-4 h-4" />
                <span>{view.label}</span>
              </button>
            ))}
          </div>

          {/* Content based on selected view */}
          {selectedView === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Party-wise Seats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-soft p-6"
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Party-wise Seats</h3>
                <div className="space-y-4">
                  {partyWiseResults.map((party, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded ${partyColors[party.color]}`}></div>
                        <span className="font-medium text-neutral-900">{party.party}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-neutral-900">{party.seats}</span>
                        {party.leading > 0 && (
                          <span className="text-sm text-green-600 font-medium">+{party.leading}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Majority Status */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-soft p-6"
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Majority Status</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">272</div>
                  <div className="text-neutral-600 mb-6">Seats needed for majority</div>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="font-semibold text-blue-900">Progressive Party Alliance</div>
                      <div className="text-2xl font-bold text-blue-600">179 seats</div>
                      <div className="text-sm text-blue-700">93 seats short</div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="font-semibold text-green-900">Unity Alliance</div>
                      <div className="text-2xl font-bold text-green-600">152 seats</div>
                      <div className="text-sm text-green-700">120 seats short</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {selectedView === 'constituency' && (
            <div className="space-y-6">
              {constituencyResults.map((constituency, index) => {
                const StatusIcon = getStatusIcon(constituency.status)
                return (
                  <motion.div
                    key={constituency.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-soft p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-neutral-900">{constituency.name}</h3>
                      <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(constituency.status)}`}>
                        <StatusIcon className="w-4 h-4" />
                        <span className="capitalize">{constituency.status}</span>
                      </div>
                    </div>

                    {constituency.status === 'declared' && constituency.winner && (
                      <div className="bg-green-50 rounded-lg p-4 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <TrophyIcon className="w-5 h-5 text-green-600" />
                          <span className="font-semibold text-green-900">Winner</span>
                        </div>
                        <div className="font-bold text-lg text-green-900">{constituency.winner.name}</div>
                        <div className="text-green-700">{constituency.winner.party}</div>
                        <div className="text-sm text-green-600">
                          {constituency.winner.votes.toLocaleString()} votes ({constituency.winner.percentage}%)
                        </div>
                      </div>
                    )}

                    {constituency.status === 'counting' && constituency.leader && (
                      <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <ClockIcon className="w-5 h-5 text-yellow-600" />
                          <span className="font-semibold text-yellow-900">Leading</span>
                        </div>
                        <div className="font-bold text-lg text-yellow-900">{constituency.leader.name}</div>
                        <div className="text-yellow-700">{constituency.leader.party}</div>
                        <div className="text-sm text-yellow-600">
                          {constituency.leader.votes.toLocaleString()} votes ({constituency.leader.percentage}%)
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      {constituency.candidates.map((candidate, idx) => (
                        <div key={idx} className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-b-0">
                          <div>
                            <div className="font-medium text-neutral-900">{candidate.name}</div>
                            <div className="text-sm text-neutral-600">{candidate.party}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-neutral-900">
                              {candidate.votes.toLocaleString()}
                            </div>
                            <div className="text-sm text-neutral-600">{candidate.percentage}%</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-neutral-100 text-sm text-neutral-600">
                      Total votes: {constituency.totalVotes.toLocaleString()} | 
                      Valid votes: {constituency.validVotes.toLocaleString()}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}

          {selectedView === 'turnout' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-soft p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {electionResults.turnout.total}%
                </div>
                <div className="text-neutral-600">Overall Turnout</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-soft p-6 text-center"
              >
                <div className="text-4xl font-bold text-secondary-600 mb-2">
                  {electionResults.turnout.male}%
                </div>
                <div className="text-neutral-600">Male Turnout</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-soft p-6 text-center"
              >
                <div className="text-4xl font-bold text-accent-600 mb-2">
                  {electionResults.turnout.female}%
                </div>
                <div className="text-neutral-600">Female Turnout</div>
              </motion.div>
            </div>
          )}

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8"
          >
            <div className="flex items-start space-x-3">
              <ExclamationCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Important Notice</h4>
                <p className="text-blue-800 text-sm">
                  These are live preliminary results. Final results will be declared after completion of counting 
                  and verification process. Results shown here are for informational purposes only.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  )
}
