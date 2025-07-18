'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import { 
  UsersIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  DocumentTextIcon,
  UserIcon,
  MapPinIcon,
  CalendarIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline'

export default function CandidateManagementPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedElection, setSelectedElection] = useState('all')
  
  // Mock data
  const candidates = [
    {
      id: 'CAND001',
      name: 'Rajesh Kumar',
      party: 'Indian National Congress',
      constituency: 'New Delhi',
      election: 'General Election 2024',
      status: 'verified',
      photo: '/api/placeholder/100/100',
      age: 45,
      email: 'rajesh.kumar@example.com',
      phone: '+91-9876543210',
      submittedAt: '2024-03-15',
      verifiedAt: '2024-03-18',
      documents: ['Affidavit', 'Nomination Form', 'ID Proof', 'Address Proof']
    },
    {
      id: 'CAND002',
      name: 'Priya Sharma',
      party: 'Bharatiya Janata Party',
      constituency: 'Mumbai South',
      election: 'General Election 2024',
      status: 'pending',
      photo: '/api/placeholder/100/100',
      age: 38,
      email: 'priya.sharma@example.com',
      phone: '+91-9876543211',
      submittedAt: '2024-03-20',
      verifiedAt: null,
      documents: ['Affidavit', 'Nomination Form', 'ID Proof']
    },
    {
      id: 'CAND003',
      name: 'Mohammed Ali',
      party: 'Aam Aadmi Party',
      constituency: 'Hyderabad',
      election: 'General Election 2024',
      status: 'rejected',
      photo: '/api/placeholder/100/100',
      age: 52,
      email: 'mohammed.ali@example.com',
      phone: '+91-9876543212',
      submittedAt: '2024-03-10',
      verifiedAt: '2024-03-12',
      documents: ['Affidavit', 'Nomination Form']
    },
    {
      id: 'CAND004',
      name: 'Anita Desai',
      party: 'Independent',
      constituency: 'Pune',
      election: 'Maharashtra Assembly Election',
      status: 'verified',
      photo: '/api/placeholder/100/100',
      age: 41,
      email: 'anita.desai@example.com',
      phone: '+91-9876543213',
      submittedAt: '2024-03-08',
      verifiedAt: '2024-03-10',
      documents: ['Affidavit', 'Nomination Form', 'ID Proof', 'Address Proof', 'Educational Certificate']
    }
  ]
  
  const elections = [
    { id: 'all', name: 'All Elections' },
    { id: 'GE2024', name: 'General Election 2024' },
    { id: 'MH2024', name: 'Maharashtra Assembly Election' },
    { id: 'DL2023', name: 'Delhi Assembly Election' }
  ]
  
  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.party.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.constituency.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTab = activeTab === 'all' || candidate.status === activeTab
    const matchesElection = selectedElection === 'all' || candidate.election.includes(selectedElection.replace(/\d+/, '').trim())
    
    return matchesSearch && matchesTab && matchesElection
  })
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />
      case 'pending':
        return <ClockIcon className="w-5 h-5 text-amber-500" />
      case 'rejected':
        return <XCircleIcon className="w-5 h-5 text-red-500" />
      default:
        return <ClockIcon className="w-5 h-5 text-gray-500" />
    }
  }
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-amber-100 text-amber-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <MainLayout>
      <div className="bg-neutral-50 min-h-screen pb-16">
        <div className="container-custom mt-16">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">Total Candidates</p>
                  <p className="text-2xl font-bold text-neutral-900">{candidates.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">Verified</p>
                  <p className="text-2xl font-bold text-green-600">
                    {candidates.filter(c => c.status === 'verified').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircleIcon className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">Pending</p>
                  <p className="text-2xl font-bold text-amber-600">
                    {candidates.filter(c => c.status === 'pending').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-amber-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">Rejected</p>
                  <p className="text-2xl font-bold text-red-600">
                    {candidates.filter(c => c.status === 'rejected').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <XCircleIcon className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters and Search */}
          <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search candidates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              {/* Filters */}
              <div className="flex items-center space-x-4">
                <select
                  value={selectedElection}
                  onChange={(e) => setSelectedElection(e.target.value)}
                  className="px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {elections.map(election => (
                    <option key={election.id} value={election.id}>{election.name}</option>
                  ))}
                </select>
                
                <button className="flex items-center space-x-2 px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50">
                  <FunnelIcon className="w-4 h-4" />
                  <span>More Filters</span>
                </button>
              </div>
            </div>
            
            {/* Status Tabs */}
            <div className="flex space-x-1 mt-6 p-1 bg-neutral-100 rounded-lg w-fit">
              {[
                { key: 'all', label: 'All', count: candidates.length },
                { key: 'pending', label: 'Pending', count: candidates.filter(c => c.status === 'pending').length },
                { key: 'verified', label: 'Verified', count: candidates.filter(c => c.status === 'verified').length },
                { key: 'rejected', label: 'Rejected', count: candidates.filter(c => c.status === 'rejected').length }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.key
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>
          
          {/* Candidates List */}
          <div className="space-y-4">
            {filteredCandidates.map((candidate, index) => (
              <motion.div
                key={candidate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-soft p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center overflow-hidden">
                      <UserIcon className="w-8 h-8 text-neutral-400" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-neutral-900">{candidate.name}</h3>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(candidate.status)}`}>
                          {candidate.status}
                        </span>
                        {getStatusIcon(candidate.status)}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <BuildingLibraryIcon className="w-4 h-4 text-neutral-400" />
                          <span className="text-neutral-600">Party:</span>
                          <span className="font-medium">{candidate.party}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <MapPinIcon className="w-4 h-4 text-neutral-400" />
                          <span className="text-neutral-600">Constituency:</span>
                          <span className="font-medium">{candidate.constituency}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <CalendarIcon className="w-4 h-4 text-neutral-400" />
                          <span className="text-neutral-600">Age:</span>
                          <span className="font-medium">{candidate.age} years</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <DocumentTextIcon className="w-4 h-4 text-neutral-400" />
                          <span className="text-neutral-600">Documents:</span>
                          <span className="font-medium">{candidate.documents.length}/5</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-3 text-sm text-neutral-600">
                        <div className="flex items-center space-x-1">
                          <EnvelopeIcon className="w-4 h-4" />
                          <span>{candidate.email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <PhoneIcon className="w-4 h-4" />
                          <span>{candidate.phone}</span>
                        </div>
                        <div>
                          Submitted: {new Date(candidate.submittedAt).toLocaleDateString('en-IN')}
                        </div>
                        {candidate.verifiedAt && (
                          <div>
                            Verified: {new Date(candidate.verifiedAt).toLocaleDateString('en-IN')}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-neutral-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                      <EyeIcon className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-neutral-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                    
                    {candidate.status === 'pending' && (
                      <div className="flex items-center space-x-2 ml-4">
                        <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                          Approve
                        </button>
                        <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors">
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredCandidates.length === 0 && (
            <div className="text-center py-12">
              <UsersIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">No candidates found</h3>
              <p className="text-neutral-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
