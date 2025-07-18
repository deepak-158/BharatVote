'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { MainLayout } from '@/components/layout/MainLayout'

// Mock candidate data
const candidates = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    party: 'Progressive Party',
    constituency: 'Mumbai Central',
    age: 45,
    education: 'PhD in Public Policy, Harvard University',
    experience: '15 years in public service',
    promises: ['Healthcare reform', 'Education accessibility', 'Digital infrastructure'],
    photo: '/api/placeholder/200/200',
    color: 'blue'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    party: 'Unity Alliance',
    constituency: 'Delhi South',
    age: 52,
    education: 'MBA, IIM Ahmedabad',
    experience: '20 years in corporate leadership',
    promises: ['Economic growth', 'Job creation', 'Infrastructure development'],
    photo: '/api/placeholder/200/200',
    color: 'green'
  },
  {
    id: 3,
    name: 'Sita Devi',
    party: 'People\'s Front',
    constituency: 'Bangalore North',
    age: 38,
    education: 'MA in Social Work, Tata Institute',
    experience: '12 years in NGO sector',
    promises: ['Women empowerment', 'Rural development', 'Environmental protection'],
    photo: '/api/placeholder/200/200',
    color: 'purple'
  },
  {
    id: 4,
    name: 'Arjun Singh',
    party: 'National Democratic Party',
    constituency: 'Pune West',
    age: 41,
    education: 'BTech, IIT Delhi',
    experience: '18 years in technology sector',
    promises: ['Digital India', 'Startup ecosystem', 'Tech education'],
    photo: '/api/placeholder/200/200',
    color: 'orange'
  }
]

const partyColors = {
  blue: 'from-blue-500 to-blue-600',
  green: 'from-green-500 to-green-600',
  purple: 'from-purple-500 to-purple-600',
  orange: 'from-orange-500 to-orange-600'
}

export default function CandidatesPage() {
    const [searchTerm, setSearchTerm] = useState('')
  const [selectedConstituency, setSelectedConstituency] = useState('all')
  const [selectedParty, setSelectedParty] = useState('all')

  const constituencies = ['all', 'Mumbai Central', 'Delhi South', 'Bangalore North', 'Pune West']
  const parties = ['all', 'Progressive Party', 'Unity Alliance', 'People\'s Front', 'National Democratic Party']

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.party.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.constituency.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesConstituency = selectedConstituency === 'all' || candidate.constituency === selectedConstituency
    const matchesParty = selectedParty === 'all' || candidate.party === selectedParty
    
    return matchesSearch && matchesConstituency && matchesParty
  })

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
                Meet Your <span className="text-gradient">Candidates</span>
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Learn about the candidates running in your constituency. Make an informed choice for India's future.
              </p>
            </motion.div>
          </div>
        </div>

      {/* Search and Filters */}
      <div className="container-custom py-8">
        <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search candidates, parties, or constituencies..."
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Constituency Filter */}
            <div className="relative">
              <FunnelIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
                value={selectedConstituency}
                onChange={(e) => setSelectedConstituency(e.target.value)}
              >
                {constituencies.map(constituency => (
                  <option key={constituency} value={constituency}>
                    {constituency === 'all' ? 'All Constituencies' : constituency}
                  </option>
                ))}
              </select>
            </div>

            {/* Party Filter */}
            <div className="relative">
              <FunnelIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
                value={selectedParty}
                onChange={(e) => setSelectedParty(e.target.value)}
              >
                {parties.map(party => (
                  <option key={party} value={party}>
                    {party === 'all' ? 'All Parties' : party}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-neutral-600 text-lg">
            Showing {filteredCandidates.length} of {candidates.length} candidates
          </p>
        </div>

        {/* Candidates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCandidates.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group"
            >
              {/* Party Banner */}
              <div className={`h-2 bg-gradient-to-r ${partyColors[candidate.color]}`}></div>
              
              {/* Card Content */}
              <div className="p-8">
                {/* Candidate Photo & Basic Info */}
                <div className="text-center mb-8">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-24 h-24 bg-neutral-200 rounded-full flex items-center justify-center">
                      <UserIcon className="w-12 h-12 text-neutral-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">
                    {candidate.name}
                  </h3>
                  <p className="text-primary-600 font-medium">
                    {candidate.party}
                  </p>
                  <p className="text-neutral-500 text-sm">
                    {candidate.constituency} • Age {candidate.age}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <AcademicCapIcon className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-900 text-sm">Education</p>
                      <p className="text-neutral-600 text-sm">{candidate.education}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <BriefcaseIcon className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-900 text-sm">Experience</p>
                      <p className="text-neutral-600 text-sm">{candidate.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <HeartIcon className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-900 text-sm">Key Promises</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {candidate.promises.slice(0, 2).map((promise, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                          >
                            {promise}
                          </span>
                        ))}
                        {candidate.promises.length > 2 && (
                          <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full">
                            +{candidate.promises.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <button className="w-full btn-outline text-sm py-2">
                    View Full Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCandidates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <UserIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No candidates found
            </h3>
            <p className="text-neutral-600">
              Try adjusting your search criteria or filters.
            </p>
          </motion.div>
        )}
      </div>

      {/* How to Choose Section */}
      <div className="bg-gradient-to-r from-accent-50 to-secondary-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              How to Choose Your Candidate
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Make an informed decision by evaluating these key factors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: AcademicCapIcon,
                title: 'Education & Background',
                description: 'Review their educational qualifications and professional background'
              },
              {
                icon: BriefcaseIcon,
                title: 'Experience & Track Record',
                description: 'Evaluate their past experience and achievements in public service'
              },
              {
                icon: HeartIcon,
                title: 'Promises & Vision',
                description: 'Understand their promises and vision for your constituency'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </MainLayout>
  )
}
