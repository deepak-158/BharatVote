'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { 
  UserGroupIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  FunnelIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  UserIcon,
  MapPinIcon,
  CalendarIcon,
  PhoneIcon,
  EnvelopeIcon,
  IdentificationIcon,
  HomeIcon,
  ArrowLeftIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  PrinterIcon
} from '@heroicons/react/24/outline'

export default function VoterManagementPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedConstituency, setSelectedConstituency] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  
  // Mock data
  const voters = [
    {
      id: 'VOTER001',
      name: 'Amit Sharma',
      voterId: 'DL1234567890',
      constituency: 'New Delhi',
      assembly: 'New Delhi Assembly',
      status: 'active',
      age: 35,
      gender: 'Male',
      email: 'amit.sharma@example.com',
      phone: '+91-9876543210',
      address: '123, Connaught Place, New Delhi - 110001',
      registeredAt: '2024-01-15',
      lastVoted: '2023-11-10',
      documents: ['Aadhaar', 'Passport', 'Address Proof']
    },
    {
      id: 'VOTER002',
      name: 'Sunita Devi',
      voterId: 'MH9876543210',
      constituency: 'Mumbai South',
      assembly: 'Colaba Assembly',
      status: 'pending',
      age: 42,
      gender: 'Female',
      email: 'sunita.devi@example.com',
      phone: '+91-9876543211',
      address: '456, Marine Drive, Mumbai - 400002',
      registeredAt: '2024-03-20',
      lastVoted: null,
      documents: ['Aadhaar', 'Voter ID']
    },
    {
      id: 'VOTER003',
      name: 'Rajesh Kumar',
      voterId: 'UP1122334455',
      constituency: 'Lucknow',
      assembly: 'Lucknow Central Assembly',
      status: 'inactive',
      age: 28,
      gender: 'Male',
      email: 'rajesh.kumar@example.com',
      phone: '+91-9876543212',
      address: '789, Hazratganj, Lucknow - 226001',
      registeredAt: '2023-08-10',
      lastVoted: '2023-02-15',
      documents: ['Aadhaar']
    },
    {
      id: 'VOTER004',
      name: 'Priya Patel',
      voterId: 'GJ5566778899',
      constituency: 'Ahmedabad East',
      assembly: 'Maninagar Assembly',
      status: 'active',
      age: 31,
      gender: 'Female',
      email: 'priya.patel@example.com',
      phone: '+91-9876543213',
      address: '321, Ellis Bridge, Ahmedabad - 380006',
      registeredAt: '2023-12-05',
      lastVoted: '2023-11-10',
      documents: ['Aadhaar', 'Driving License', 'Address Proof']
    }
  ]
  
  const constituencies = [
    { id: 'all', name: 'All Constituencies' },
    { id: 'new-delhi', name: 'New Delhi' },
    { id: 'mumbai-south', name: 'Mumbai South' },
    { id: 'lucknow', name: 'Lucknow' },
    { id: 'ahmedabad-east', name: 'Ahmedabad East' }
  ]
  
  const filteredVoters = voters.filter(voter => {
    const matchesSearch = voter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         voter.voterId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         voter.constituency.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTab = activeTab === 'all' || voter.status === activeTab
    const matchesConstituency = selectedConstituency === 'all' || 
                               voter.constituency.toLowerCase().replace(' ', '-') === selectedConstituency
    
    return matchesSearch && matchesTab && matchesConstituency
  })
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />
      case 'pending':
        return <ClockIcon className="w-5 h-5 text-amber-500" />
      case 'inactive':
        return <XCircleIcon className="w-5 h-5 text-red-500" />
      default:
        return <ClockIcon className="w-5 h-5 text-gray-500" />
    }
  }
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-amber-100 text-amber-800'
      case 'inactive':
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
                  <p className="text-sm font-medium text-neutral-600">Total Voters</p>
                  <p className="text-2xl font-bold text-neutral-900">{voters.length.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <UserGroupIcon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">Active Voters</p>
                  <p className="text-2xl font-bold text-green-600">
                    {voters.filter(v => v.status === 'active').length.toLocaleString()}
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
                  <p className="text-sm font-medium text-neutral-600">Pending Registration</p>
                  <p className="text-2xl font-bold text-amber-600">
                    {voters.filter(v => v.status === 'pending').length.toLocaleString()}
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
                  <p className="text-sm font-medium text-neutral-600">Inactive Voters</p>
                  <p className="text-2xl font-bold text-red-600">
                    {voters.filter(v => v.status === 'inactive').length.toLocaleString()}
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
                  placeholder="Search voters by name, ID, or constituency..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              {/* Filters */}
              <div className="flex items-center space-x-4">
                <select
                  value={selectedConstituency}
                  onChange={(e) => setSelectedConstituency(e.target.value)}
                  className="px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {constituencies.map(constituency => (
                    <option key={constituency.id} value={constituency.id}>{constituency.name}</option>
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
                { key: 'all', label: 'All', count: voters.length },
                { key: 'active', label: 'Active', count: voters.filter(v => v.status === 'active').length },
                { key: 'pending', label: 'Pending', count: voters.filter(v => v.status === 'pending').length },
                { key: 'inactive', label: 'Inactive', count: voters.filter(v => v.status === 'inactive').length }
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
          
          {/* Voters List */}
          <div className="space-y-4">
            {filteredVoters.map((voter, index) => (
              <motion.div
                key={voter.id}
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
                        <h3 className="text-lg font-semibold text-neutral-900">{voter.name}</h3>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(voter.status)}`}>
                          {voter.status}
                        </span>
                        {getStatusIcon(voter.status)}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mb-3">
                        <div className="flex items-center space-x-2">
                          <IdentificationIcon className="w-4 h-4 text-neutral-400" />
                          <span className="text-neutral-600">Voter ID:</span>
                          <span className="font-medium font-mono">{voter.voterId}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <MapPinIcon className="w-4 h-4 text-neutral-400" />
                          <span className="text-neutral-600">Constituency:</span>
                          <span className="font-medium">{voter.constituency}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <CalendarIcon className="w-4 h-4 text-neutral-400" />
                          <span className="text-neutral-600">Age:</span>
                          <span className="font-medium">{voter.age} years ({voter.gender})</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <DocumentTextIcon className="w-4 h-4 text-neutral-400" />
                          <span className="text-neutral-600">Documents:</span>
                          <span className="font-medium">{voter.documents.length}/3</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <EnvelopeIcon className="w-4 h-4" />
                          <span>{voter.email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <PhoneIcon className="w-4 h-4" />
                          <span>{voter.phone}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-neutral-600">
                        <HomeIcon className="w-4 h-4" />
                        <span>{voter.address}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-3 text-sm text-neutral-600">
                        <div>
                          Registered: {new Date(voter.registeredAt).toLocaleDateString('en-IN')}
                        </div>
                        {voter.lastVoted && (
                          <div>
                            Last Voted: {new Date(voter.lastVoted).toLocaleDateString('en-IN')}
                          </div>
                        )}
                        <div>
                          Assembly: {voter.assembly}
                        </div>
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
                    
                    {voter.status === 'pending' && (
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
          
          {filteredVoters.length === 0 && (
            <div className="text-center py-12">
              <UserGroupIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">No voters found</h3>
              <p className="text-neutral-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
