'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { 
  CalendarIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  FunnelIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  MapPinIcon,
  UsersIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  BellIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  ArrowLeftIcon,
  DocumentTextIcon,
  BanknotesIcon,
  GlobeAltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function ElectionManagementPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  
  // Mock data
  const elections = [
    {
      id: 'GE2024',
      title: 'General Election 2024',
      type: 'general',
      status: 'upcoming',
      description: 'National parliamentary election for all 543 constituencies across India',
      startDate: '2024-04-15',
      endDate: '2024-06-01',
      resultDate: '2024-06-04',
      resultTime: '08:00',
      constituencies: 543,
      registeredVoters: 95000000,
      registeredCandidates: 2547,
      phases: 7,
      createdAt: '2024-01-15',
      createdBy: 'ECI Admin',
      featured: true,
      budget: 500000000000,
      securityLevel: 'maximum'
    },
    {
      id: 'MH2024',
      title: 'Maharashtra Assembly Election',
      type: 'assembly',
      status: 'draft',
      description: 'State assembly election for Maharashtra with 288 constituencies',
      startDate: '2024-10-15',
      endDate: '2024-10-15',
      resultDate: '2024-10-18',
      resultTime: '09:00',
      constituencies: 288,
      registeredVoters: 0,
      registeredCandidates: 0,
      phases: 1,
      createdAt: '2024-03-10',
      createdBy: 'State Admin',
      featured: false,
      budget: 15000000000,
      securityLevel: 'high'
    },
    {
      id: 'DL2023',
      title: 'Delhi Assembly Election',
      type: 'assembly',
      status: 'completed',
      description: 'State assembly election for Delhi with 70 constituencies',
      startDate: '2023-11-10',
      endDate: '2023-11-10',
      resultDate: '2023-11-13',
      resultTime: '10:00',
      constituencies: 70,
      registeredVoters: 10500000,
      registeredCandidates: 234,
      phases: 1,
      createdAt: '2023-08-15',
      createdBy: 'ECI Admin',
      featured: false,
      budget: 2500000000,
      securityLevel: 'high'
    },
    {
      id: 'LB2024',
      title: 'Municipal Corporation Elections',
      type: 'local',
      status: 'active',
      description: 'Local body elections for major cities across multiple states',
      startDate: '2024-07-01',
      endDate: '2024-07-15',
      resultDate: '2024-07-18',
      resultTime: '11:00',
      constituencies: 1250,
      registeredVoters: 25000000,
      registeredCandidates: 8920,
      phases: 3,
      createdAt: '2024-04-20',
      createdBy: 'Regional Admin',
      featured: true,
      budget: 8000000000,
      securityLevel: 'medium'
    }
  ]
  
  const electionTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'general', name: 'General Elections' },
    { id: 'assembly', name: 'Assembly Elections' },
    { id: 'local', name: 'Local Body Elections' },
    { id: 'by-election', name: 'By-Elections' }
  ]
  
  const filteredElections = elections.filter(election => {
    const matchesSearch = election.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         election.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         election.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTab = activeTab === 'all' || election.status === activeTab
    const matchesType = selectedType === 'all' || election.type === selectedType
    
    return matchesSearch && matchesTab && matchesType
  })
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <PlayIcon className="w-5 h-5 text-green-500" />
      case 'upcoming':
        return <ClockIcon className="w-5 h-5 text-blue-500" />
      case 'completed':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />
      case 'draft':
        return <DocumentTextIcon className="w-5 h-5 text-amber-500" />
      case 'paused':
        return <PauseIcon className="w-5 h-5 text-amber-500" />
      case 'cancelled':
        return <XCircleIcon className="w-5 h-5 text-red-500" />
      default:
        return <ClockIcon className="w-5 h-5 text-gray-500" />
    }
  }
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'upcoming':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'draft':
        return 'bg-amber-100 text-amber-800'
      case 'paused':
        return 'bg-amber-100 text-amber-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'general':
        return 'bg-purple-100 text-purple-800'
      case 'assembly':
        return 'bg-blue-100 text-blue-800'
      case 'local':
        return 'bg-emerald-100 text-emerald-800'
      case 'by-election':
        return 'bg-indigo-100 text-indigo-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  
  const getSecurityBadge = (level: string) => {
    switch (level) {
      case 'maximum':
        return <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800">Maximum Security</span>
      case 'high':
        return <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-amber-100 text-amber-800">High Security</span>
      case 'medium':
        return <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">Medium Security</span>
      default:
        return <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">Standard</span>
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
                  <p className="text-sm font-medium text-neutral-600">Total Elections</p>
                  <p className="text-2xl font-bold text-neutral-900">{elections.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <CalendarIcon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">Active Elections</p>
                  <p className="text-2xl font-bold text-green-600">
                    {elections.filter(e => e.status === 'active').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <PlayIcon className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">Upcoming Elections</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {elections.filter(e => e.status === 'upcoming').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">Total Constituencies</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {elections.reduce((sum, election) => sum + election.constituencies, 0).toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-purple-600" />
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
                  placeholder="Search elections..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              {/* Filters */}
              <div className="flex items-center space-x-4">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {electionTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
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
                { key: 'all', label: 'All', count: elections.length },
                { key: 'active', label: 'Active', count: elections.filter(e => e.status === 'active').length },
                { key: 'upcoming', label: 'Upcoming', count: elections.filter(e => e.status === 'upcoming').length },
                { key: 'draft', label: 'Drafts', count: elections.filter(e => e.status === 'draft').length },
                { key: 'completed', label: 'Completed', count: elections.filter(e => e.status === 'completed').length }
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
          
          {/* Elections List */}
          <div className="space-y-6">
            {filteredElections.map((election, index) => (
              <motion.div
                key={election.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-soft p-8"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      {election.featured && (
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      )}
                      <h3 className="text-xl font-bold text-neutral-900">{election.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(election.status)}`}>
                        {election.status}
                      </span>
                      {getStatusIcon(election.status)}
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(election.type)}`}>
                        {election.type}
                      </span>
                      {getSecurityBadge(election.securityLevel)}
                      <span className="text-sm text-neutral-500">ID: {election.id}</span>
                    </div>
                    
                    <p className="text-neutral-600 mb-4">{election.description}</p>
                    
                    {/* Election Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">Schedule</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <CalendarIcon className="w-4 h-4 text-neutral-400" />
                            <span className="text-neutral-600">Start:</span>
                            <span className="font-medium">{new Date(election.startDate).toLocaleDateString('en-IN')}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CalendarIcon className="w-4 h-4 text-neutral-400" />
                            <span className="text-neutral-600">End:</span>
                            <span className="font-medium">{new Date(election.endDate).toLocaleDateString('en-IN')}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <BellIcon className="w-4 h-4 text-neutral-400" />
                            <span className="text-neutral-600">Results:</span>
                            <span className="font-medium">{new Date(election.resultDate).toLocaleDateString('en-IN')} at {election.resultTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">Participation</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPinIcon className="w-4 h-4 text-neutral-400" />
                            <span className="text-neutral-600">Constituencies:</span>
                            <span className="font-medium">{election.constituencies.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <UsersIcon className="w-4 h-4 text-neutral-400" />
                            <span className="text-neutral-600">Voters:</span>
                            <span className="font-medium">{election.registeredVoters.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <UsersIcon className="w-4 h-4 text-neutral-400" />
                            <span className="text-neutral-600">Candidates:</span>
                            <span className="font-medium">{election.registeredCandidates.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">Operations</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <ChartBarIcon className="w-4 h-4 text-neutral-400" />
                            <span className="text-neutral-600">Phases:</span>
                            <span className="font-medium">{election.phases}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <BanknotesIcon className="w-4 h-4 text-neutral-400" />
                            <span className="text-neutral-600">Budget:</span>
                            <span className="font-medium">₹{(election.budget / 10000000).toFixed(1)}Cr</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <ShieldCheckIcon className="w-4 h-4 text-neutral-400" />
                            <span className="text-neutral-600">Security:</span>
                            <span className="font-medium">{election.securityLevel}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">Management</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <UsersIcon className="w-4 h-4 text-neutral-400" />
                            <span className="text-neutral-600">Created by:</span>
                            <span className="font-medium">{election.createdBy}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CalendarIcon className="w-4 h-4 text-neutral-400" />
                            <span className="text-neutral-600">Created:</span>
                            <span className="font-medium">{new Date(election.createdAt).toLocaleDateString('en-IN')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center space-x-2 ml-6">
                    <button className="p-2 text-neutral-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                      <EyeIcon className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-neutral-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-neutral-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                      <Cog6ToothIcon className="w-5 h-5" />
                    </button>
                    
                    {election.status === 'draft' && (
                      <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                        Publish
                      </button>
                    )}
                    
                    {election.status === 'upcoming' && (
                      <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                        Start Election
                      </button>
                    )}
                    
                    {election.status === 'active' && (
                      <div className="flex space-x-2">
                        <button className="px-3 py-2 bg-amber-100 text-amber-700 rounded-lg text-sm font-medium hover:bg-amber-200 transition-colors">
                          Pause
                        </button>
                        <button className="px-3 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors">
                          Declare Results
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredElections.length === 0 && (
            <div className="text-center py-12">
              <CalendarIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">No elections found</h3>
              <p className="text-neutral-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
