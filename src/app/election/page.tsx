'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { MainLayout } from '@/components/layout/MainLayout'
import { 
  UserCircleIcon,
  CalendarIcon,
  MapPinIcon,
  ChartBarIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ClockIcon,
  ArrowRightIcon,
  UsersIcon,
  BuildingLibraryIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline'

function ElectionDetailContent() {
  const searchParams = useSearchParams()
  const electionId = searchParams.get('id') || 'GE2024'
  const [activeTab, setActiveTab] = useState('overview')
  
  // Mock election data
  const elections = {
    'GE2024': {
      id: 'GE2024',
      title: 'General Election 2024',
      subtitle: 'Lok Sabha Elections',
      status: 'upcoming',
      date: '2024-05-15',
      registrationDeadline: '2024-04-01',
      eligibility: 'All Indian citizens 18 years or older as of January 1, 2024',
      description: 'The General Election to the 18th Lok Sabha will be held in April-May 2024 to constitute the 18th Lok Sabha. Elections will be conducted in multiple phases across all states and union territories of India.',
      phases: [
        { name: 'Phase 1', date: '2024-04-11', states: ['Maharashtra', 'Uttar Pradesh', 'West Bengal', 'Assam'] },
        { name: 'Phase 2', date: '2024-04-18', states: ['Kerala', 'Karnataka', 'Tamil Nadu', 'Goa'] },
        { name: 'Phase 3', date: '2024-04-23', states: ['Gujarat', 'Madhya Pradesh', 'Bihar', 'Delhi'] },
        { name: 'Phase 4', date: '2024-04-29', states: ['Rajasthan', 'Jharkhand', 'Punjab', 'Haryana'] },
        { name: 'Phase 5', date: '2024-05-06', states: ['Andhra Pradesh', 'Telangana', 'Odisha', 'Jammu & Kashmir'] },
        { name: 'Phase 6', date: '2024-05-12', states: ['Remaining constituencies'] },
        { name: 'Phase 7', date: '2024-05-15', states: ['Remaining constituencies'] }
      ],
      authority: 'Election Commission of India',
      votingMethods: [
        { name: 'In-person Electronic Voting Machine (EVM)', description: 'Cast your vote at your designated polling station using an EVM' },
        { name: 'Remote Voting for Migrants', description: 'Special arrangements for internal migrants to vote remotely' },
        { name: 'Digital Remote Voting', description: 'For eligible overseas Indian citizens using secure blockchain technology' }
      ],
      candidates: [
        { name: 'Candidate 1', party: 'Party A', constituency: 'Delhi South', image: '/assets/candidates/placeholder1.jpg' },
        { name: 'Candidate 2', party: 'Party B', constituency: 'Delhi South', image: '/assets/candidates/placeholder2.jpg' },
        { name: 'Candidate 3', party: 'Party C', constituency: 'Delhi South', image: '/assets/candidates/placeholder3.jpg' },
        { name: 'Candidate 4', party: 'Party D', constituency: 'Delhi South', image: '/assets/candidates/placeholder4.jpg' },
      ],
      resources: [
        { title: 'Voter Guide 2024', description: 'Complete guide for voters', link: '#', icon: DocumentTextIcon },
        { title: 'Voter ID Verification', description: 'Verify your voter ID status', link: '#', icon: CheckCircleIcon },
        { title: 'Constituency Finder', description: 'Find your constituency', link: '#', icon: MapPinIcon },
        { title: 'Election Timeline', description: 'Complete election schedule', link: '#', icon: ClockIcon },
      ],
      news: [
        { title: 'Election Commission Announces 7-Phase General Election', date: '2024-03-15', source: 'National News', link: '#' },
        { title: 'Digital Voting Option Introduced for Overseas Indians', date: '2024-03-10', source: 'Tech Times', link: '#' },
        { title: 'Record Number of First-Time Voters Expected in 2024 Elections', date: '2024-03-05', source: 'Youth Today', link: '#' },
      ]
    },
    'DL2023': {
      id: 'DL2023',
      title: 'Delhi Assembly Election',
      subtitle: 'State Legislative Assembly Elections',
      status: 'completed',
      date: '2023-11-10',
      registrationDeadline: '2023-10-10',
      eligibility: 'All Indian citizens 18 years or older as of January 1, 2023, residing in Delhi',
      description: 'The Delhi Legislative Assembly election was held on November 10, 2023, to elect 70 members of the Delhi Legislative Assembly.',
      phases: [
        { name: 'Single Phase', date: '2023-11-10', states: ['Delhi'] }
      ],
      authority: 'Election Commission of India',
      votingMethods: [
        { name: 'In-person Electronic Voting Machine (EVM)', description: 'Cast your vote at your designated polling station using an EVM' },
        { name: 'Digital Remote Voting (Pilot)', description: 'For eligible voters who registered for the pilot program' }
      ],
      candidates: [
        { name: 'Candidate A', party: 'Party A', constituency: 'Delhi South', image: '/assets/candidates/placeholder1.jpg' },
        { name: 'Candidate B', party: 'Party B', constituency: 'Delhi South', image: '/assets/candidates/placeholder2.jpg' },
        { name: 'Candidate C', party: 'Party C', constituency: 'Delhi South', image: '/assets/candidates/placeholder3.jpg' },
      ],
      results: {
        winner: 'Party A',
        seats: [
          { party: 'Party A', won: 42, color: '#FF9933' },
          { party: 'Party B', won: 20, color: '#138808' },
          { party: 'Party C', won: 8, color: '#000080' },
        ],
        totalVoters: 10500000,
        turnout: 72.8,
        rejectedVotes: 0.4,
      },
      resources: [
        { title: 'Official Results', description: 'Complete election results', link: '#', icon: ChartBarIcon },
        { title: 'Constituency-wise Results', description: 'Results by constituency', link: '#', icon: MapPinIcon },
        { title: 'Election Analysis', description: 'Expert analysis of the results', link: '#', icon: DocumentTextIcon },
      ],
      news: [
        { title: 'Party A Secures Majority in Delhi Assembly Elections', date: '2023-11-11', source: 'Delhi News', link: '#' },
        { title: 'Record 73% Voter Turnout in Delhi Elections', date: '2023-11-10', source: 'Electoral Times', link: '#' },
        { title: 'Digital Voting Pilot Program Sees 95% Success Rate', date: '2023-11-12', source: 'Tech News', link: '#' },
      ]
    }
  }
  
  const election = elections[electionId] || elections['GE2024']
  const isUpcoming = election.status === 'upcoming'
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Election Overview */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Election Overview</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-neutral-700 whitespace-pre-line">{election.description}</p>
                  
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Eligibility</h4>
                      <p className="text-neutral-700">{election.eligibility}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Conducted By</h4>
                      <p className="text-neutral-700">{election.authority}</p>
                    </div>
                    
                    {isUpcoming && (
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Registration Deadline</h4>
                        <p className="text-neutral-700">{new Date(election.registrationDeadline).toLocaleDateString('en-IN')}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="bg-neutral-50 rounded-xl p-6">
                  <h4 className="font-semibold text-neutral-900 mb-4">Election Schedule</h4>
                  
                  <div className="space-y-4">
                    {election.phases.map((phase, index) => (
                      <div key={index} className="flex">
                        <div className="relative flex flex-col items-center mr-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            index === 0 ? 'bg-primary-100 text-primary-700' : 'bg-neutral-200 text-neutral-600'
                          }`}>
                            {index + 1}
                          </div>
                          {index < election.phases.length - 1 && (
                            <div className="h-full w-0.5 bg-neutral-200 absolute top-8"></div>
                          )}
                        </div>
                        
                        <div className="pb-6">
                          <h5 className="font-semibold text-neutral-900">{phase.name}</h5>
                          <p className="text-neutral-600 text-sm mb-1">{new Date(phase.date).toLocaleDateString('en-IN')}</p>
                          <p className="text-neutral-700">
                            {phase.states.join(', ')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Voting Methods */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Voting Methods</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {election.votingMethods.map((method, index) => (
                  <div key={index} className="border border-neutral-200 rounded-xl p-6 hover:shadow-soft transition-shadow duration-300">
                    <h4 className="font-semibold text-neutral-900 mb-2">{method.name}</h4>
                    <p className="text-neutral-700 text-sm">{method.description}</p>
                    
                    {isUpcoming && (
                      <Link href="#" className="mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center">
                        <span>Learn More</span>
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Resources */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">
                {isUpcoming ? 'Voter Resources' : 'Election Resources'}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {election.resources.map((resource, index) => (
                  <Link key={index} href={resource.link} className="group">
                    <div className="flex flex-col items-center bg-neutral-50 rounded-xl p-6 hover:bg-primary-50 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center mb-4 group-hover:text-primary-600">
                        <resource.icon className="w-6 h-6 text-neutral-600 group-hover:text-primary-600" />
                      </div>
                      <h4 className="font-semibold text-neutral-900 text-center mb-1">{resource.title}</h4>
                      <p className="text-neutral-600 text-sm text-center">{resource.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Election News */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-neutral-900">Latest News</h3>
                <Link href="#" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                  <span>View All</span>
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {election.news.map((item, index) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-soft transition-shadow duration-300">
                      <div className="h-40 bg-neutral-100 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                          <NewspaperIcon className="w-12 h-12" />
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-sm text-neutral-500 mb-2">{new Date(item.date).toLocaleDateString('en-IN')} • {item.source}</p>
                        <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-3">{item.title}</h4>
                        <span className="text-primary-600 text-sm font-medium">Read More</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )
      
      case 'candidates':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-neutral-900">Candidates for Delhi South Constituency</h3>
                
                <div className="relative">
                  <select className="bg-white border border-neutral-300 rounded-lg px-4 py-2 text-sm pr-8 appearance-none">
                    <option>Delhi South</option>
                    <option>Delhi North</option>
                    <option>Delhi East</option>
                    <option>Delhi West</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {election.candidates.map((candidate, index) => (
                  <div key={index} className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-soft transition-shadow duration-300">
                    <div className="h-48 bg-neutral-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                        <UserCircleIcon className="w-16 h-16" />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-600 mb-3">
                        {candidate.party}
                      </div>
                      <h4 className="font-semibold text-neutral-900 mb-1">{candidate.name}</h4>
                      <p className="text-neutral-600 text-sm mb-4">{candidate.constituency}</p>
                      
                      <Link href="#" className="text-primary-600 text-sm font-medium flex items-center">
                        <span>View Profile</span>
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-200 text-center">
                <p className="text-neutral-600 mb-4">Want to learn more about the candidates and parties?</p>
                <Link href="#" className="btn-primary py-2 px-6 inline-block">
                  Compare Candidates
                </Link>
              </div>
            </div>
          </div>
        )
      
      case 'results':
        return (
          <div className="space-y-8">
            {isUpcoming ? (
              <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
                <ClockIcon className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Results Not Available Yet</h3>
                <p className="text-neutral-600 mb-6">
                  The election results will be available once the voting process is completed and counting is done.
                </p>
                <div className="inline-flex items-center text-primary-600">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  <span className="font-medium">Expected on: May 18, 2024</span>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-white rounded-2xl shadow-soft p-8">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">Election Results</h3>
                  
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-7/12">
                      <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                        <h4 className="font-semibold text-neutral-900 mb-4">Seat Distribution</h4>
                        
                        <div className="flex h-12 rounded-lg overflow-hidden mb-4">
                          {election.results.seats.map((seat, index) => (
                            <div 
                              key={index}
                              className="h-full flex items-center justify-center text-white font-medium"
                              style={{
                                width: `${(seat.won / 70) * 100}%`,
                                backgroundColor: seat.color
                              }}
                            >
                              {seat.won}
                            </div>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          {election.results.seats.map((seat, index) => (
                            <div key={index} className="flex items-center">
                              <div 
                                className="w-3 h-3 rounded-full mr-2"
                                style={{ backgroundColor: seat.color }}
                              ></div>
                              <span className="text-sm text-neutral-700">{seat.party}: {seat.won}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-neutral-50 rounded-xl p-6">
                        <h4 className="font-semibold text-neutral-900 mb-4">Voter Turnout</h4>
                        
                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm text-neutral-600">Overall Turnout</span>
                              <span className="text-sm font-medium">{election.results.turnout}%</span>
                            </div>
                            <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary-500 rounded-full"
                                style={{ width: `${election.results.turnout}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <p className="text-neutral-600 text-sm mb-1">Total Registered Voters</p>
                              <p className="font-semibold text-neutral-900">{election.results.totalVoters.toLocaleString('en-IN')}</p>
                            </div>
                            <div>
                              <p className="text-neutral-600 text-sm mb-1">Invalid/Rejected Votes</p>
                              <p className="font-semibold text-neutral-900">{election.results.rejectedVotes}%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-5/12">
                      <div className="bg-neutral-50 rounded-xl p-6 h-full">
                        <div className="flex items-center space-x-3 mb-6">
                          <BuildingLibraryIcon className="w-6 h-6 text-primary-600" />
                          <h4 className="font-semibold text-neutral-900">Winner</h4>
                        </div>
                        
                        <div className="bg-white rounded-xl p-6 border border-neutral-200 mb-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-neutral-900">{election.results.winner}</h3>
                            <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center">
                              <span className="text-xl font-bold text-primary-600">
                                {election.results.seats.find(s => s.party === election.results.winner)?.won || ''}
                              </span>
                            </div>
                          </div>
                          <p className="text-neutral-600 mb-4">
                            Secured majority with {election.results.seats.find(s => s.party === election.results.winner)?.won || ''} out of 70 seats
                          </p>
                          <div className="flex justify-between text-sm text-neutral-500">
                            <span>Election Date: {new Date(election.date).toLocaleDateString('en-IN')}</span>
                            <span>Results Declared: {new Date(election.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric' })}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <Link href="#" className="flex items-center justify-between p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-200 hover:bg-primary-50 transition-colors">
                            <div className="flex items-center">
                              <DocumentTextIcon className="w-5 h-5 text-neutral-500 mr-3" />
                              <span className="font-medium">Constituency-wise Results</span>
                            </div>
                            <ArrowRightIcon className="w-4 h-4 text-primary-600" />
                          </Link>
                          
                          <Link href="#" className="flex items-center justify-between p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-200 hover:bg-primary-50 transition-colors">
                            <div className="flex items-center">
                              <ChartBarIcon className="w-5 h-5 text-neutral-500 mr-3" />
                              <span className="font-medium">Vote Share Analysis</span>
                            </div>
                            <ArrowRightIcon className="w-4 h-4 text-primary-600" />
                          </Link>
                          
                          <Link href="#" className="flex items-center justify-between p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-200 hover:bg-primary-50 transition-colors">
                            <div className="flex items-center">
                              <UsersIcon className="w-5 h-5 text-neutral-500 mr-3" />
                              <span className="font-medium">Demographic Analysis</span>
                            </div>
                            <ArrowRightIcon className="w-4 h-4 text-primary-600" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-soft p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-neutral-900">Election Analysis</h3>
                    <Link href="#" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                      <span>View Full Report</span>
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <p className="text-neutral-700 mb-4">
                      Party A has secured a clear majority in the Delhi Assembly Elections, winning 42 out of 70 seats. 
                      This marks their third consecutive victory in the state. Party B secured 20 seats, while Party C 
                      won 8 seats. The election saw a record turnout of 72.8% voters.
                    </p>
                    <p className="text-neutral-700">
                      Key issues that dominated the election were infrastructure development, water management, education 
                      reforms, and healthcare accessibility. The digital voting pilot program was successfully implemented 
                      in selected constituencies, with a 95% success rate.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        )
        
      default:
        return null
    }
  }

  const tabs = isUpcoming 
    ? [
        { id: 'overview', label: 'Overview', icon: InformationCircleIcon },
        { id: 'candidates', label: 'Candidates', icon: UserCircleIcon },
        { id: 'results', label: 'Results', icon: ChartBarIcon }
      ]
    : [
        { id: 'overview', label: 'Overview', icon: InformationCircleIcon },
        { id: 'candidates', label: 'Candidates', icon: UserCircleIcon },
        { id: 'results', label: 'Results', icon: ChartBarIcon }
      ]

  return (
    <MainLayout>
      <div className="bg-neutral-50 min-h-screen pb-16">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50 pt-28 pb-8">
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
              <div className="mb-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  isUpcoming 
                    ? 'bg-blue-100 text-blue-800 border border-blue-200' 
                    : 'bg-green-100 text-green-800 border border-green-200'
                }`}>
                  {isUpcoming ? 'Upcoming Election' : 'Completed Election'}
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">
                {election.title}
              </h1>
              <p className="text-lg text-neutral-600">
                {election.subtitle}
              </p>
              
              <div className="flex flex-wrap items-center mt-4 text-neutral-600 gap-4">
                <div className="flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  <span>{new Date(election.date).toLocaleDateString('en-IN')}</span>
                </div>
                
                {isUpcoming ? (
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    <span>Registration Deadline: {new Date(election.registrationDeadline).toLocaleDateString('en-IN')}</span>
                  </div>
                ) : (
                  <div className="flex items-center text-green-600">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    <span className="font-medium">Results Declared</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tabs and Content */}
        <div className="container-custom mt-8">
          <div className="bg-white rounded-xl shadow-soft mb-8">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
                  }`}
                >
                  <tab.icon className={`w-5 h-5 mr-2 ${
                    activeTab === tab.id ? 'text-primary-500' : 'text-neutral-400'
                  }`} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {renderTabContent()}
          
          {/* Action Buttons */}
          {isUpcoming && (
            <div className="mt-8 flex justify-center">
              <Link href="/vote" className="btn-primary text-center px-8 py-3 mx-2">
                Register to Vote
              </Link>
              <Link href="/elections" className="btn-outline text-center px-8 py-3 mx-2">
                View All Elections
              </Link>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export default function ElectionDetailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ElectionDetailContent />
    </Suspense>
  )
}
