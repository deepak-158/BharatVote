'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { useAuth } from '@/contexts/AuthContext'
import { 
  UserCircleIcon,
  IdentificationIcon,
  MapPinIcon,
  CalendarIcon,
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  KeyIcon,
  BellIcon,
  ClockIcon,
  DocumentTextIcon,
  QrCodeIcon,
  AdjustmentsHorizontalIcon,
  FingerPrintIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function ProfilePage() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login?redirect=/profile')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated || !user) {
    return null // Will redirect via the useEffect
  }

  // Mock data
  const voterDetails = {
    id: 'ABC1234567',
    name: user.name || 'Rajesh Kumar',
    aadhaar: 'XXXX-XXXX-7890',
    dob: '15/08/1985',
    gender: 'Male',
    constituency: 'Delhi South',
    pollingStation: 'Public School No. 5, Lajpat Nagar',
    address: '123 Nehru Place, New Delhi - 110019',
    verified: true,
    photo: user.profilePicture || '/api/placeholder/200/200'
  }

  const mockElections = [
    {
      id: 'GE2024',
      title: 'General Election 2024',
      date: '2024-05-15',
      type: 'Lok Sabha',
      status: 'upcoming',
      voted: false,
      registrationDeadline: '2024-04-01'
    },
    {
      id: 'DL2023',
      title: 'Delhi Assembly Election',
      date: '2023-11-10',
      type: 'State Assembly',
      status: 'completed',
      voted: true,
      result: 'View Results'
    },
    {
      id: 'MC2023',
      title: 'Municipal Corporation Election',
      date: '2023-09-05',
      type: 'Local Body',
      status: 'completed',
      voted: true,
      result: 'View Results'
    }
  ]
  
  const notifications = [
    {
      id: 1,
      title: 'Voter ID Verified',
      message: 'Your voter identification has been successfully verified.',
      date: '2023-12-15',
      read: true,
      type: 'success'
    },
    {
      id: 2,
      title: 'General Election 2024 Announced',
      message: 'The Election Commission has announced the General Election schedule for 2024.',
      date: '2024-01-10',
      read: false,
      type: 'info'
    },
    {
      id: 3,
      title: 'Address Update Required',
      message: 'Please update your current residential address for the upcoming election.',
      date: '2024-01-20',
      read: false,
      type: 'warning'
    }
  ]
  
  const voteHistory = [
    {
      id: 'DL2023',
      election: 'Delhi Assembly Election',
      date: '2023-11-10',
      time: '10:23 AM',
      constituency: 'Delhi South',
      method: 'Digital',
      receipt: 'TXID-54321',
    },
    {
      id: 'MC2023',
      election: 'Municipal Corporation Election',
      date: '2023-09-05',
      time: '02:45 PM',
      constituency: 'Delhi South',
      method: 'Digital',
      receipt: 'TXID-98765',
    }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Profile Overview */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-neutral-200 mb-4">
                    {voterDetails.photo ? (
                      <Image 
                        src={voterDetails.photo} 
                        alt={voterDetails.name} 
                        width={128} 
                        height={128} 
                        className="object-cover"
                      />
                    ) : (
                      <UserCircleIcon className="w-32 h-32 text-neutral-400" />
                    )}
                  </div>
                  
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-neutral-900">{voterDetails.name}</h2>
                    <p className="text-neutral-600">Voter ID: {voterDetails.id}</p>
                    {voterDetails.verified && (
                      <div className="flex items-center justify-center mt-2 text-green-600">
                        <CheckBadgeIcon className="w-5 h-5 mr-1" />
                        <span className="text-sm font-medium">Verified Voter</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-neutral-500">Aadhaar Number (Linked)</p>
                        <p className="font-medium">{voterDetails.aadhaar}</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">Date of Birth</p>
                        <p className="font-medium">{voterDetails.dob}</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">Gender</p>
                        <p className="font-medium">{voterDetails.gender}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-neutral-500">Constituency</p>
                        <p className="font-medium">{voterDetails.constituency}</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">Polling Station</p>
                        <p className="font-medium">{voterDetails.pollingStation}</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">Registered Address</p>
                        <p className="font-medium">{voterDetails.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="flex justify-end space-x-4">
                  <button className="btn-outline py-2 px-4">
                    Download Voter Card
                  </button>
                  <button className="btn-primary py-2 px-4">
                    Update Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Upcoming Elections */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Upcoming Elections</h3>
              
              {mockElections.filter(e => e.status === 'upcoming').map((election) => (
                <div 
                  key={election.id}
                  className="border border-neutral-200 rounded-xl p-6 mb-4 hover:shadow-soft transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    <div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200 mb-2 inline-block">
                        {election.type}
                      </span>
                      <h4 className="text-lg font-semibold text-neutral-900">{election.title}</h4>
                      <div className="flex items-center mt-2 text-neutral-600 text-sm">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        <span>{new Date(election.date).toLocaleDateString('en-IN')}</span>
                      </div>
                      <div className="flex items-center mt-1 text-neutral-600 text-sm">
                        <MapPinIcon className="w-4 h-4 mr-2" />
                        <span>{voterDetails.constituency}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="flex items-center mb-3 text-orange-600">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">
                          Registration Deadline: {new Date(election.registrationDeadline).toLocaleDateString('en-IN')}
                        </span>
                      </div>
                      <Link href="/vote" className="btn-primary text-center px-6 py-2">
                        {election.voted ? 'View Ballot' : 'Cast Your Vote'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              
              {mockElections.filter(e => e.status === 'upcoming').length === 0 && (
                <div className="text-center py-8">
                  <p className="text-neutral-600">No upcoming elections for your constituency at this time.</p>
                </div>
              )}
              
              <div className="mt-4 flex justify-end">
                <Link href="/elections" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                  <span>View All Elections</span>
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Notifications */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-neutral-900">Notifications</h3>
                <span className="px-2.5 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                  {notifications.filter(n => !n.read).length} new
                </span>
              </div>
              
              <div className="space-y-4">
                {notifications.slice(0, 3).map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-4 border ${notification.read ? 'border-neutral-200 bg-white' : 'border-primary-200 bg-primary-50'} rounded-xl`}
                  >
                    <div className="flex items-start">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 
                        ${notification.type === 'success' ? 'bg-green-100 text-green-600' : 
                          notification.type === 'warning' ? 'bg-amber-100 text-amber-600' : 
                          'bg-blue-100 text-blue-600'}`}>
                        {notification.type === 'success' ? (
                          <CheckBadgeIcon className="w-5 h-5" />
                        ) : notification.type === 'warning' ? (
                          <ExclamationTriangleIcon className="w-5 h-5" />
                        ) : (
                          <BellIcon className="w-5 h-5" />
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-semibold ${notification.read ? 'text-neutral-700' : 'text-neutral-900'}`}>
                            {notification.title}
                          </h4>
                          <span className="text-xs text-neutral-500">
                            {new Date(notification.date).toLocaleDateString('en-IN')}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-600 mt-1">{notification.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex justify-end">
                <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                  <span>View All Notifications</span>
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        )
        
      case 'voting-history':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Your Voting History</h3>
              
              {voteHistory.length > 0 ? (
                <div className="space-y-6">
                  {voteHistory.map((vote) => (
                    <div key={vote.id} className="border border-neutral-200 rounded-xl p-6 hover:shadow-soft transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-neutral-900">{vote.election}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-3">
                            <div className="flex items-center text-neutral-600">
                              <CalendarIcon className="w-4 h-4 mr-2" />
                              <span>{vote.date}, {vote.time}</span>
                            </div>
                            <div className="flex items-center text-neutral-600">
                              <MapPinIcon className="w-4 h-4 mr-2" />
                              <span>{vote.constituency}</span>
                            </div>
                            <div className="flex items-center text-neutral-600">
                              <IdentificationIcon className="w-4 h-4 mr-2" />
                              <span>Method: {vote.method}</span>
                            </div>
                            <div className="flex items-center text-neutral-600">
                              <DocumentTextIcon className="w-4 h-4 mr-2" />
                              <span>Receipt: {vote.receipt}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0">
                          <div className="flex flex-col items-end justify-between h-full">
                            <div className="flex items-center text-green-600">
                              <CheckBadgeIcon className="w-5 h-5 mr-1" />
                              <span className="font-medium">Vote Recorded</span>
                            </div>
                            <Link href={`/results?election=${vote.id}`} className="btn-outline text-center px-4 py-2 mt-4 md:mt-8">
                              View Results
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-neutral-50 rounded-xl">
                  <ClockIcon className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-neutral-700 mb-2">No Voting History</h4>
                  <p className="text-neutral-600">You haven't participated in any elections yet.</p>
                </div>
              )}
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Verification Receipts</h3>
              <div className="border border-neutral-200 rounded-xl p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {voteHistory.map((vote) => (
                    <div key={vote.id} className="bg-neutral-50 rounded-lg p-4 text-center">
                      <div className="w-32 h-32 bg-white rounded-lg border border-neutral-200 mx-auto mb-4 flex items-center justify-center">
                        <QrCodeIcon className="w-16 h-16 text-neutral-400" />
                      </div>
                      <h5 className="font-semibold text-neutral-900 mb-1">{vote.election}</h5>
                      <p className="text-sm text-neutral-600 mb-4">{vote.date}</p>
                      <button className="btn-outline text-sm px-3 py-1.5">
                        Verify on Blockchain
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
        
      case 'settings':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Account Settings</h3>
              
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="border border-neutral-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-neutral-900">Personal Information</h4>
                    <button className="btn-outline text-sm px-4 py-2">Edit</button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Full Name</p>
                      <p className="font-medium">{voterDetails.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Date of Birth</p>
                      <p className="font-medium">{voterDetails.dob}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Email Address</p>
                      <p className="font-medium">user@example.com</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Phone Number</p>
                      <p className="font-medium">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
                
                {/* Address Information */}
                <div className="border border-neutral-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-neutral-900">Address Information</h4>
                    <button className="btn-outline text-sm px-4 py-2">Edit</button>
                  </div>
                  
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Registered Address</p>
                    <p className="font-medium">{voterDetails.address}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-neutral-500 mb-1">Constituency</p>
                    <p className="font-medium">{voterDetails.constituency}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-neutral-500 mb-1">Polling Station</p>
                    <p className="font-medium">{voterDetails.pollingStation}</p>
                  </div>
                </div>
                
                {/* Security Settings */}
                <div className="border border-neutral-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-neutral-900">Security Settings</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <KeyIcon className="w-5 h-5 text-neutral-500 mr-3" />
                        <span className="font-medium">Change Password</span>
                      </div>
                      <button className="btn-outline text-sm px-4 py-2">Update</button>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-t border-neutral-100">
                      <div className="flex items-center">
                        <FingerPrintIcon className="w-5 h-5 text-neutral-500 mr-3" />
                        <span className="font-medium">Biometric Authentication</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-3 text-sm font-medium">Enabled</span>
                        <button className="btn-outline text-sm px-4 py-2">Manage</button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-t border-neutral-100">
                      <div className="flex items-center">
                        <BellIcon className="w-5 h-5 text-neutral-500 mr-3" />
                        <span className="font-medium">Notification Settings</span>
                      </div>
                      <button className="btn-outline text-sm px-4 py-2">Configure</button>
                    </div>
                  </div>
                </div>
                
                {/* Preferences */}
                <div className="border border-neutral-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-neutral-900">Preferences</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <GlobeAltIcon className="w-5 h-5 text-neutral-500 mr-3" />
                        <span className="font-medium">Language</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select className="bg-white border border-neutral-300 rounded-lg px-3 py-2 text-sm">
                          <option value="en">English</option>
                          <option value="hi">हिन्दी (Hindi)</option>
                          <option value="ta">தமிழ் (Tamil)</option>
                          <option value="te">తెలుగు (Telugu)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-t border-neutral-100">
                      <div className="flex items-center">
                        <AdjustmentsHorizontalIcon className="w-5 h-5 text-neutral-500 mr-3" />
                        <span className="font-medium">Accessibility Settings</span>
                      </div>
                      <button className="btn-outline text-sm px-4 py-2">Configure</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        
      default:
        return null
    }
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: UserCircleIcon },
    { id: 'voting-history', label: 'Voting History', icon: ClockIcon },
    { id: 'settings', label: 'Account Settings', icon: AdjustmentsHorizontalIcon }
  ]

  return (
    <MainLayout>
      <div className="bg-neutral-50 min-h-screen pb-16">
        {/* Profile Header */}
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
              <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">
                Voter Profile
              </h1>
              <p className="text-lg text-neutral-600">
                Manage your voter information and view your voting history
              </p>
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
        </div>
      </div>
    </MainLayout>
  )
}
