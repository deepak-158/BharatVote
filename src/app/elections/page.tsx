'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { 
  CalendarIcon,
  MapPinIcon,
  ChartBarIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'

export default function ElectionsPage() {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterState, setFilterState] = useState('all')
  const [filterType, setFilterType] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  
  // Mock elections data
  const upcomingElections = [
    {
      id: 'GE2024',
      title: 'General Election 2024',
      subtitle: 'Lok Sabha Elections',
      date: '2024-05-15',
      registrationDeadline: '2024-04-01',
      type: 'National',
      states: ['All India'],
      isRegistered: true,
      image: '/assets/elections/national.jpg'
    },
    {
      id: 'MH2024',
      title: 'Maharashtra Assembly Election',
      subtitle: 'State Legislative Assembly',
      date: '2024-10-15',
      registrationDeadline: '2024-09-01',
      type: 'State',
      states: ['Maharashtra'],
      isRegistered: false,
      image: '/assets/elections/maharashtra.jpg'
    },
    {
      id: 'UP2024',
      title: 'Uttar Pradesh Municipal Elections',
      subtitle: 'Local Body Elections',
      date: '2024-06-20',
      registrationDeadline: '2024-05-15',
      type: 'Local',
      states: ['Uttar Pradesh'],
      isRegistered: false,
      image: '/assets/elections/up.jpg'
    },
    {
      id: 'KA2024',
      title: 'Karnataka Panchayat Elections',
      subtitle: 'Rural Local Body Elections',
      date: '2024-08-10',
      registrationDeadline: '2024-07-05',
      type: 'Local',
      states: ['Karnataka'],
      isRegistered: false,
      image: '/assets/elections/karnataka.jpg'
    }
  ]
  
  const pastElections = [
    {
      id: 'DL2023',
      title: 'Delhi Assembly Election',
      subtitle: 'State Legislative Assembly',
      date: '2023-11-10',
      type: 'State',
      states: ['Delhi'],
      result: {
        winner: 'Party A',
        seats: [42, 20, 8]
      },
      participated: true,
      image: '/assets/elections/delhi.jpg'
    },
    {
      id: 'MC2023',
      title: 'Municipal Corporation Election',
      subtitle: 'Local Body Elections',
      date: '2023-09-05',
      type: 'Local',
      states: ['Delhi'],
      result: {
        winner: 'Party B',
        seats: [134, 97, 12]
      },
      participated: true,
      image: '/assets/elections/municipal.jpg'
    },
    {
      id: 'GJ2022',
      title: 'Gujarat Assembly Election',
      subtitle: 'State Legislative Assembly',
      date: '2022-12-01',
      type: 'State',
      states: ['Gujarat'],
      result: {
        winner: 'Party C',
        seats: [99, 77, 6]
      },
      participated: false,
      image: '/assets/elections/gujarat.jpg'
    },
    {
      id: 'HP2022',
      title: 'Himachal Pradesh Assembly Election',
      subtitle: 'State Legislative Assembly',
      date: '2022-11-12',
      type: 'State',
      states: ['Himachal Pradesh'],
      result: {
        winner: 'Party B',
        seats: [40, 25, 3]
      },
      participated: false,
      image: '/assets/elections/himachal.jpg'
    },
    {
      id: 'GE2019',
      title: 'General Election 2019',
      subtitle: 'Lok Sabha Elections',
      date: '2019-05-19',
      type: 'National',
      states: ['All India'],
      result: {
        winner: 'Party C',
        seats: [303, 52, 188]
      },
      participated: true,
      image: '/assets/elections/national2019.jpg'
    }
  ]
  
  // Filter elections based on search query and filters
  const filterElections = (elections) => {
    return elections
      .filter(election => {
        // Filter by search query
        if (searchQuery && !election.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
            !election.states.some(state => state.toLowerCase().includes(searchQuery.toLowerCase()))) {
          return false
        }
        
        // Filter by state
        if (filterState !== 'all' && !election.states.includes(filterState) && election.states[0] !== 'All India') {
          return false
        }
        
        // Filter by type
        if (filterType !== 'all' && election.type !== filterType) {
          return false
        }
        
        return true
      })
  }
  
  const filteredUpcoming = filterElections(upcomingElections)
  const filteredPast = filterElections(pastElections)
  
  // Display the current active tab content
  const displayElections = () => {
    const elections = activeTab === 'upcoming' ? filteredUpcoming : filteredPast
    
    if (elections.length === 0) {
      return (
        <div className="text-center py-16">
          <MagnifyingGlassIcon className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-neutral-700 mb-2">No Elections Found</h3>
          <p className="text-neutral-600">Try adjusting your search or filter criteria.</p>
        </div>
      )
    }
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {elections.map((election) => (
          <Link 
            key={election.id}
            href={`/election?id=${election.id}`}
            className="block group"
          >
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-md group-hover:translate-y-[-2px]">
              <div className="h-48 bg-neutral-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                  <ChartBarIcon className="w-12 h-12" />
                </div>
              </div>
              
              <div className="p-6">
                {/* Header with election type badge */}
                <div className="flex justify-between items-start mb-3">
                  <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
                    election.type === 'National'
                      ? 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                      : election.type === 'State'
                        ? 'bg-teal-100 text-teal-800 border border-teal-200'
                        : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}>
                    {election.type}
                  </span>
                  
                  {activeTab === 'upcoming' ? (
                    election.isRegistered ? (
                      <span className="inline-flex items-center text-green-600 text-xs font-medium">
                        <CheckCircleIcon className="w-4 h-4 mr-1" />
                        Registered
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-orange-600 text-xs font-medium">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        Not Registered
                      </span>
                    )
                  ) : (
                    election.participated ? (
                      <span className="inline-flex items-center text-green-600 text-xs font-medium">
                        <CheckCircleIcon className="w-4 h-4 mr-1" />
                        Participated
                      </span>
                    ) : null
                  )}
                </div>
                
                {/* Election title and details */}
                <h3 className="font-semibold text-neutral-900 text-lg mb-1 group-hover:text-primary-600 transition-colors">
                  {election.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-3">{election.subtitle}</p>
                
                {/* Date and location info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-neutral-600 text-sm">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span>{new Date(election.date).toLocaleDateString('en-IN')}</span>
                  </div>
                  <div className="flex items-center text-neutral-600 text-sm">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    <span>{election.states.join(', ')}</span>
                  </div>
                  
                  {activeTab === 'upcoming' && election.registrationDeadline && (
                    <div className="flex items-center text-orange-600 text-sm">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>Registration Deadline: {new Date(election.registrationDeadline).toLocaleDateString('en-IN')}</span>
                    </div>
                  )}
                  
                  {activeTab === 'past' && election.result && (
                    <div className="flex items-center text-neutral-600 text-sm">
                      <ChartBarIcon className="w-4 h-4 mr-2" />
                      <span>Winner: {election.result.winner}</span>
                    </div>
                  )}
                </div>
                
                {/* Action button */}
                <div className="pt-3 border-t border-neutral-100">
                  <div className="flex justify-end">
                    <span className="inline-flex items-center text-primary-600 text-sm font-medium group-hover:underline">
                      {activeTab === 'upcoming' ? 'View Details' : 'View Results'}
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  }

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
                Elections
              </h1>
              <p className="text-lg text-neutral-600 max-w-3xl">
                Stay informed about upcoming and past elections across India. Register to vote, check your eligibility, 
                and view election results.
              </p>
              
              {/* Search and filter bar */}
              <div className="mt-8 bg-white rounded-xl shadow-soft p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full rounded-lg border-neutral-300 pl-10 pr-3 py-2 text-neutral-900 placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Search by election name or location..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className="btn-outline py-2 px-4 flex items-center"
                    >
                      <FunnelIcon className="h-5 w-5 mr-2" />
                      <span>Filter</span>
                    </button>
                    
                    <button
                      className="btn-primary py-2 px-4"
                      onClick={() => {
                        setSearchQuery('')
                        setFilterState('all')
                        setFilterType('all')
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </div>
                
                {/* Expanded filters */}
                {showFilters && (
                  <div className="mt-4 pt-4 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="filter-state" className="block text-sm font-medium text-neutral-700 mb-1">
                        Filter by State
                      </label>
                      <select
                        id="filter-state"
                        className="block w-full rounded-lg border-neutral-300 py-2 text-neutral-900 focus:border-primary-500 focus:ring-primary-500"
                        value={filterState}
                        onChange={(e) => setFilterState(e.target.value)}
                      >
                        <option value="all">All States</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="filter-type" className="block text-sm font-medium text-neutral-700 mb-1">
                        Filter by Type
                      </label>
                      <select
                        id="filter-type"
                        className="block w-full rounded-lg border-neutral-300 py-2 text-neutral-900 focus:border-primary-500 focus:ring-primary-500"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                      >
                        <option value="all">All Types</option>
                        <option value="National">National</option>
                        <option value="State">State</option>
                        <option value="Local">Local</option>
                      </select>
                    </div>
                    
                    <div className="flex items-end">
                      <button
                        className="btn-primary py-2 px-4 w-full"
                        onClick={() => setShowFilters(false)}
                      >
                        Apply Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Election listings */}
        <div className="container-custom mt-8">
          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-soft mb-8">
            <div className="flex">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 ${
                  activeTab === 'upcoming'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
                }`}
              >
                <CalendarIcon className={`w-5 h-5 mr-2 ${
                  activeTab === 'upcoming' ? 'text-primary-500' : 'text-neutral-400'
                }`} />
                Upcoming Elections
              </button>
              
              <button
                onClick={() => setActiveTab('past')}
                className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 ${
                  activeTab === 'past'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
                }`}
              >
                <ChartBarIcon className={`w-5 h-5 mr-2 ${
                  activeTab === 'past' ? 'text-primary-500' : 'text-neutral-400'
                }`} />
                Past Elections
              </button>
            </div>
          </div>
          
          {/* Election Cards */}
          {displayElections()}
          
          {/* Info card */}
          <div className="mt-12 bg-white rounded-2xl shadow-soft p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Know Your Electoral Rights
                </h2>
                <p className="text-neutral-700 mb-4">
                  Every Indian citizen who is 18 years or older has the right to vote in elections. Ensure your 
                  name is registered in the electoral roll to exercise this fundamental democratic right.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-neutral-700">Check your voter registration status</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-neutral-700">Verify your constituency and polling station</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-neutral-700">Access information about candidates and parties</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/how-it-works" className="btn-primary py-2 px-6">
                    Learn More
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-neutral-100 rounded-full flex items-center justify-center">
                  <div className="w-40 h-40 flex items-center justify-center">
                    {/* You can replace this with an actual SVG or image */}
                    <svg viewBox="0 0 100 100" className="w-full h-full text-primary-500">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" />
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        d="M30,50 L45,65 L70,35"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
