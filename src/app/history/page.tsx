'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  DocumentTextIcon,
  CalendarIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowDownTrayIcon,
  PrinterIcon
} from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext'
import { MainLayout } from '@/components/layout/MainLayout'

// Mock voting history data
const votingHistory = [
  {
    id: 1,
    electionType: 'General Election',
    electionYear: '2025',
    date: '2025-07-18',
    time: '14:23:45',
    constituency: 'Mumbai Central',
    candidate: 'Dr. Priya Sharma',
    party: 'Progressive Party',
    status: 'completed',
    verificationId: 'BV2025MC789456123',
    method: 'digital',
    location: 'Home (Verified)',
    receipt: 'BV-2025-MC-001234.pdf'
  },
  {
    id: 2,
    electionType: 'State Assembly',
    electionYear: '2024',
    date: '2024-11-15',
    time: '10:15:32',
    constituency: 'Mumbai Central',
    candidate: 'Rajesh Kumar',
    party: 'Unity Alliance',
    status: 'completed',
    verificationId: 'BV2024MC456789012',
    method: 'digital',
    location: 'Polling Station (PS-142)',
    receipt: 'BV-2024-MC-005678.pdf'
  },
  {
    id: 3,
    electionType: 'Local Municipal',
    electionYear: '2024',
    date: '2024-03-22',
    time: '16:45:18',
    constituency: 'Ward 23, Mumbai',
    candidate: 'Sita Devi',
    party: 'Independent',
    status: 'completed',
    verificationId: 'BV2024W23123456789',
    method: 'digital',
    location: 'Home (Verified)',
    receipt: 'BV-2024-W23-009012.pdf'
  },
  {
    id: 4,
    electionType: 'General Election',
    electionYear: '2019',
    date: '2019-04-29',
    time: '09:30:00',
    constituency: 'Mumbai Central',
    candidate: 'Traditional Voting',
    party: 'N/A',
    status: 'completed',
    verificationId: 'EVM-2019-MC-78901',
    method: 'evm',
    location: 'Polling Station (PS-142)',
    receipt: null
  }
]

const electionTypes = ['All', 'General Election', 'State Assembly', 'Local Municipal']
const years = ['All', '2025', '2024', '2023', '2022', '2021', '2020', '2019']

export default function HistoryPage() {
    const { user, isAuthenticated } = useAuth()
  const [selectedElectionType, setSelectedElectionType] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const filteredHistory = votingHistory.filter(vote => {
    const matchesElectionType = selectedElectionType === 'All' || vote.electionType === selectedElectionType
    const matchesYear = selectedYear === 'All' || vote.electionYear === selectedYear
    return matchesElectionType && matchesYear
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50'
      case 'pending': return 'text-yellow-600 bg-yellow-50'
      case 'cancelled': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircleIcon
      case 'pending': return ClockIcon
      case 'cancelled': return XCircleIcon
      default: return ClockIcon
    }
  }

  const getMethodBadge = (method: string) => {
    switch (method) {
      case 'digital':
        return (
          <span className="inline-flex items-center space-x-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
            <ShieldCheckIcon className="w-3 h-3" />
            <span>Digital</span>
          </span>
        )
      case 'evm':
        return (
          <span className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            <DocumentTextIcon className="w-3 h-3" />
            <span>EVM</span>
          </span>
        )
      default:
        return null
    }
  }

  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
          <div className="text-center">
            <ShieldCheckIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Authentication Required</h2>
            <p className="text-neutral-600 mb-6">Please log in to view your voting history.</p>
            <a
              href="/auth/login"
              className="btn-primary"
            >
              Login to View History
            </a>
          </div>
        </div>
      </MainLayout>
    )
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
                Your Voting <span className="text-gradient">History</span>
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Complete record of your democratic participation across all elections
              </p>
            </motion.div>
          </div>
        </div>

      <div className="container-custom py-8">
        {/* User Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-soft p-6 mb-10"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-neutral-900">Voting History for {user?.name}</h2>
              <p className="text-neutral-600">Voter ID: BHV123456789</p>
              <p className="text-neutral-600">Registered Constituency: Mumbai Central</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600">{filteredHistory.length}</div>
              <div className="text-sm text-neutral-600">Total Votes Cast</div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Election Type
              </label>
              <select
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={selectedElectionType}
                onChange={(e) => setSelectedElectionType(e.target.value)}
              >
                {electionTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Year
              </label>
              <select
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end space-x-2">
              <button className="flex items-center space-x-2 px-4 py-3 bg-neutral-100 text-neutral-700 rounded-xl hover:bg-neutral-200 transition-colors">
                <ArrowDownTrayIcon className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-3 bg-neutral-100 text-neutral-700 rounded-xl hover:bg-neutral-200 transition-colors">
                <PrinterIcon className="w-4 h-4" />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>

        {/* Voting History List */}
        <div className="space-y-4">
          {filteredHistory.map((vote, index) => {
            const StatusIcon = getStatusIcon(vote.status)
            const isExpanded = expandedItem === vote.id
            
            return (
              <motion.div
                key={vote.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-soft overflow-hidden"
              >
                {/* Main Card */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(vote.status)}`}>
                        <StatusIcon className="w-4 h-4" />
                        <span className="capitalize">{vote.status}</span>
                      </div>
                      {getMethodBadge(vote.method)}
                    </div>
                    <button
                      onClick={() => setExpandedItem(isExpanded ? null : vote.id)}
                      className="flex items-center space-x-1 text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                      <span className="text-sm">Details</span>
                      {isExpanded ? (
                        <ChevronUpIcon className="w-4 h-4" />
                      ) : (
                        <ChevronDownIcon className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-bold text-lg text-neutral-900 mb-1">
                        {vote.electionType} {vote.electionYear}
                      </h3>
                      <p className="text-neutral-600">{vote.constituency}</p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 text-neutral-600 mb-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{new Date(vote.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-neutral-600">
                        <ClockIcon className="w-4 h-4" />
                        <span>{vote.time}</span>
                      </div>
                    </div>

                    <div>
                      {vote.candidate !== 'Traditional Voting' && (
                        <>
                          <div className="font-medium text-neutral-900">{vote.candidate}</div>
                          <div className="text-neutral-600">{vote.party}</div>
                        </>
                      )}
                      {vote.candidate === 'Traditional Voting' && (
                        <div className="text-neutral-600">Traditional EVM Voting</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-neutral-100 p-6 bg-neutral-50"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-4">Verification Details</h4>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm text-neutral-600">Verification ID:</span>
                            <div className="font-mono text-sm bg-white p-2 rounded border">
                              {vote.verificationId}
                            </div>
                          </div>
                          <div>
                            <span className="text-sm text-neutral-600">Voting Location:</span>
                            <div className="flex items-center space-x-2 mt-1">
                              <MapPinIcon className="w-4 h-4 text-neutral-400" />
                              <span className="text-sm">{vote.location}</span>
                            </div>
                          </div>
                          <div>
                            <span className="text-sm text-neutral-600">Method:</span>
                            <div className="mt-1">
                              {vote.method === 'digital' ? (
                                <span className="text-sm text-green-600">
                                  ✓ Secure Digital Voting with Biometric Verification
                                </span>
                              ) : (
                                <span className="text-sm text-gray-600">
                                  Traditional Electronic Voting Machine (EVM)
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-4">Actions</h4>
                        <div className="space-y-3">
                          {vote.receipt && (
                            <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                              <ArrowDownTrayIcon className="w-4 h-4" />
                              <span>Download Receipt</span>
                            </button>
                          )}
                          
                          <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors">
                            <ShieldCheckIcon className="w-4 h-4" />
                            <span>Verify on Blockchain</span>
                          </button>

                          {vote.method === 'digital' && (
                            <div className="text-xs text-neutral-500 mt-2">
                              Your vote has been recorded on the blockchain and can be independently verified 
                              while maintaining ballot secrecy.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* No Results */}
        {filteredHistory.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <DocumentTextIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No voting records found
            </h3>
            <p className="text-neutral-600">
              No voting history matches your current filter criteria.
            </p>
          </motion.div>
        )}

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8"
        >
          <div className="flex items-start space-x-3">
            <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Privacy & Security</h4>
              <p className="text-blue-800 text-sm">
                Your voting history is securely encrypted and stored. While you can view your participation 
                record, the actual candidate choices are protected by ballot secrecy and cannot be traced 
                back to you. All digital votes are verified on the blockchain for transparency while 
                maintaining anonymity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </MainLayout>
  )
}
