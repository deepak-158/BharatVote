'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { 
  BuildingLibraryIcon,
  UserGroupIcon,
  UsersIcon,
  DocumentTextIcon,
  ChartBarIcon,
  PlusIcon,
  CalendarIcon,
  NewspaperIcon,
  CogIcon,
  BellIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  
  // Mock data
  const stats = [
    {
      title: 'Active Elections',
      value: '3',
      change: '+1 from last month',
      icon: CalendarIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Registered Voters',
      value: '1,00,00,000',
      change: '+2.5% from last quarter',
      icon: UserGroupIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Verified Candidates',
      value: '2,547',
      change: '+156 this week',
      icon: UsersIcon,
      color: 'bg-purple-500'
    },
    {
      title: 'Pending Applications',
      value: '47',
      change: '-12 from yesterday',
      icon: DocumentTextIcon,
      color: 'bg-amber-500'
    }
  ]
  
  const recentElections = [
    {
      id: 'GE2024',
      title: 'General Election 2024',
      status: 'upcoming',
      date: '2024-05-15',
      candidates: 2547,
      voters: 95000000
    },
    {
      id: 'DL2023',
      title: 'Delhi Assembly Election',
      status: 'completed',
      date: '2023-11-10',
      candidates: 234,
      voters: 10500000
    },
    {
      id: 'MH2024',
      title: 'Maharashtra Assembly Election',
      status: 'draft',
      date: '2024-10-15',
      candidates: 0,
      voters: 0
    }
  ]
  
  const pendingTasks = [
    {
      id: 1,
      title: 'Review candidate applications for General Election 2024',
      priority: 'high',
      count: 23,
      dueDate: '2024-04-01'
    },
    {
      id: 2,
      title: 'Approve voter registration updates',
      priority: 'medium',
      count: 156,
      dueDate: '2024-03-25'
    },
    {
      id: 3,
      title: 'Update election schedule for Maharashtra',
      priority: 'high',
      count: 1,
      dueDate: '2024-03-20'
    },
    {
      id: 4,
      title: 'Publish election results for local body elections',
      priority: 'low',
      count: 5,
      dueDate: '2024-03-30'
    }
  ]
  
  const quickActions = [
    {
      title: 'Election Management',
      description: 'View, manage and monitor all elections',
      href: '/admin/elections',
      icon: CalendarIcon,
      color: 'bg-orange-500'
    },
    {
      title: 'Create New Election',
      description: 'Set up a new election with schedules and constituencies',
      href: '/admin/elections/create',
      icon: PlusIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Manage Candidates',
      description: 'Register, verify, or remove candidate applications',
      href: '/admin/candidates',
      icon: UsersIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Voter Management',
      description: 'Manage voter registrations and electoral rolls',
      href: '/admin/voters',
      icon: UserGroupIcon,
      color: 'bg-purple-500'
    },
    {
      title: 'Declare Results',
      description: 'Set result declaration time and publish outcomes',
      href: '/admin/results',
      icon: ChartBarIcon,
      color: 'bg-amber-500'
    },
    {
      title: 'Update News',
      description: 'Publish election news and announcements',
      href: '/admin/news',
      icon: NewspaperIcon,
      color: 'bg-indigo-500'
    },
    {
      title: 'System Settings',
      description: 'Configure platform settings and security',
      href: '/admin/settings',
      icon: CogIcon,
      color: 'bg-red-500'
    }
  ]

  return (
    <MainLayout>
      <div className="bg-neutral-50 min-h-screen pb-16">
        <div className="container-custom mt-16">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-soft p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-neutral-900">{stat.value}</h3>
                  <p className="text-sm font-medium text-neutral-700">{stat.title}</p>
                  <p className="text-xs text-neutral-500">{stat.change}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={action.href} className="block group">
                    <div className="border border-neutral-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-medium transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <action.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                            {action.title}
                          </h3>
                          <p className="text-sm text-neutral-600 mt-1">{action.description}</p>
                        </div>
                        <ArrowRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-primary-500 transition-colors" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Recent Elections & Pending Tasks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Elections */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">Recent Elections</h2>
                <Link href="/admin/elections" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  View All
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentElections.map((election) => (
                  <div key={election.id} className="border border-neutral-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-neutral-900">{election.title}</h3>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        election.status === 'upcoming' 
                          ? 'bg-blue-100 text-blue-800'
                          : election.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {election.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-500">Date:</span>
                        <p className="font-medium">{new Date(election.date).toLocaleDateString('en-IN')}</p>
                      </div>
                      <div>
                        <span className="text-neutral-500">Candidates:</span>
                        <p className="font-medium">{election.candidates.toLocaleString()}</p>
                      </div>
                      <div>
                        <span className="text-neutral-500">Voters:</span>
                        <p className="font-medium">{election.voters.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pending Tasks */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">Pending Tasks</h2>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  {pendingTasks.length} pending
                </span>
              </div>
              
              <div className="space-y-4">
                {pendingTasks.map((task) => (
                  <div key={task.id} className="border border-neutral-200 rounded-xl p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`w-2 h-2 rounded-full ${
                            task.priority === 'high' 
                              ? 'bg-red-500'
                              : task.priority === 'medium'
                                ? 'bg-amber-500'
                                : 'bg-green-500'
                          }`}></span>
                          <h3 className="font-medium text-neutral-900">{task.title}</h3>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-neutral-600">
                          <span className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            Due: {new Date(task.dueDate).toLocaleDateString('en-IN')}
                          </span>
                          <span className="bg-neutral-100 px-2 py-1 rounded text-xs">
                            {task.count} items
                          </span>
                        </div>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* System Status */}
          <div className="mt-8 bg-white rounded-2xl shadow-soft p-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-6">System Status</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                <div>
                  <p className="font-medium text-neutral-900">Voting Platform</p>
                  <p className="text-sm text-neutral-600">All systems operational</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                <div>
                  <p className="font-medium text-neutral-900">Blockchain Network</p>
                  <p className="text-sm text-neutral-600">Secure and synchronized</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <ExclamationTriangleIcon className="w-6 h-6 text-amber-500" />
                <div>
                  <p className="font-medium text-neutral-900">Database Backup</p>
                  <p className="text-sm text-neutral-600">Scheduled maintenance in 2 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
