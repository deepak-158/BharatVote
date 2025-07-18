'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { 
  NewspaperIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  FunnelIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  CalendarIcon,
  TagIcon,
  UserIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  ArrowLeftIcon,
  PhotoIcon,
  DocumentTextIcon,
  BellIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

export default function NewsManagementPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  
  // Mock data
  const newsArticles = [
    {
      id: 'NEWS001',
      title: 'General Election 2024 Schedule Announced',
      excerpt: 'The Election Commission of India has announced the complete schedule for the upcoming General Election 2024, covering 543 constituencies across the nation.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'announcement',
      status: 'published',
      priority: 'high',
      author: 'ECI Admin',
      publishedAt: '2024-03-20T10:00:00Z',
      createdAt: '2024-03-19T15:30:00Z',
      views: 15420,
      featured: true,
      tags: ['General Election', 'Schedule', '2024'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 'NEWS002',
      title: 'New Voter Registration Drive Launched',
      excerpt: 'A nationwide voter registration drive has been launched to enroll eligible citizens who have turned 18 years of age.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'news',
      status: 'published',
      priority: 'medium',
      author: 'ECI Admin',
      publishedAt: '2024-03-18T14:30:00Z',
      createdAt: '2024-03-18T09:00:00Z',
      views: 8750,
      featured: false,
      tags: ['Voter Registration', 'Youth'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 'NEWS003',
      title: 'Digital Voting Platform Security Update',
      excerpt: 'Important security enhancements have been implemented to ensure the integrity and transparency of the digital voting process.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'update',
      status: 'draft',
      priority: 'high',
      author: 'Tech Team',
      publishedAt: null,
      createdAt: '2024-03-21T11:15:00Z',
      views: 0,
      featured: false,
      tags: ['Security', 'Digital Voting', 'Update'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 'NEWS004',
      title: 'Candidate Nomination Process Guidelines',
      excerpt: 'Comprehensive guidelines for the candidate nomination process, including required documents and deadlines.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'guidelines',
      status: 'published',
      priority: 'medium',
      author: 'ECI Admin',
      publishedAt: '2024-03-15T09:00:00Z',
      createdAt: '2024-03-14T16:45:00Z',
      views: 12300,
      featured: true,
      tags: ['Candidates', 'Nomination', 'Guidelines'],
      thumbnail: '/api/placeholder/400/250'
    }
  ]
  
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'announcement', name: 'Announcements' },
    { id: 'news', name: 'News' },
    { id: 'update', name: 'Updates' },
    { id: 'guidelines', name: 'Guidelines' },
    { id: 'alert', name: 'Alerts' }
  ]
  
  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesTab = activeTab === 'all' || article.status === activeTab
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    
    return matchesSearch && matchesTab && matchesCategory
  })
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />
      case 'draft':
        return <ClockIcon className="w-5 h-5 text-amber-500" />
      case 'archived':
        return <XCircleIcon className="w-5 h-5 text-red-500" />
      default:
        return <ClockIcon className="w-5 h-5 text-gray-500" />
    }
  }
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800'
      case 'draft':
        return 'bg-amber-100 text-amber-800'
      case 'archived':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'announcement':
        return 'bg-blue-100 text-blue-800'
      case 'news':
        return 'bg-purple-100 text-purple-800'
      case 'update':
        return 'bg-indigo-100 text-indigo-800'
      case 'guidelines':
        return 'bg-emerald-100 text-emerald-800'
      case 'alert':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500'
      case 'medium':
        return 'bg-amber-500'
      case 'low':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
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
                  <p className="text-sm font-medium text-neutral-600">Total Articles</p>
                  <p className="text-2xl font-bold text-neutral-900">{newsArticles.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <NewspaperIcon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">Published</p>
                  <p className="text-2xl font-bold text-green-600">
                    {newsArticles.filter(a => a.status === 'published').length}
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
                  <p className="text-sm font-medium text-neutral-600">Drafts</p>
                  <p className="text-2xl font-bold text-amber-600">
                    {newsArticles.filter(a => a.status === 'draft').length}
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
                  <p className="text-sm font-medium text-neutral-600">Total Views</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {newsArticles.reduce((sum, article) => sum + article.views, 0).toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <ChartBarIcon className="w-6 h-6 text-purple-600" />
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
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              {/* Filters */}
              <div className="flex items-center space-x-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
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
                { key: 'all', label: 'All', count: newsArticles.length },
                { key: 'published', label: 'Published', count: newsArticles.filter(a => a.status === 'published').length },
                { key: 'draft', label: 'Drafts', count: newsArticles.filter(a => a.status === 'draft').length },
                { key: 'archived', label: 'Archived', count: newsArticles.filter(a => a.status === 'archived').length || 0 }
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
          
          {/* Articles List */}
          <div className="space-y-4">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-soft p-6"
              >
                <div className="flex items-start space-x-6">
                  {/* Thumbnail */}
                  <div className="w-24 h-24 bg-neutral-100 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                    <PhotoIcon className="w-8 h-8 text-neutral-400" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {article.featured && (
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          )}
                          <div className={`w-3 h-3 rounded-full ${getPriorityColor(article.priority)}`}></div>
                          <h3 className="text-lg font-semibold text-neutral-900 line-clamp-1">
                            {article.title}
                          </h3>
                        </div>
                        
                        <p className="text-neutral-600 text-sm line-clamp-2 mb-3">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center flex-wrap gap-3 text-sm">
                          <div className="flex items-center space-x-2">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(article.status)}`}>
                              {article.status}
                            </span>
                            {getStatusIcon(article.status)}
                          </div>
                          
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                            {article.category}
                          </span>
                          
                          <div className="flex items-center space-x-1 text-neutral-500">
                            <UserIcon className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                          
                          <div className="flex items-center space-x-1 text-neutral-500">
                            <CalendarIcon className="w-4 h-4" />
                            <span>
                              {article.publishedAt 
                                ? new Date(article.publishedAt).toLocaleDateString('en-IN')
                                : 'Not published'
                              }
                            </span>
                          </div>
                          
                          {article.status === 'published' && (
                            <div className="flex items-center space-x-1 text-neutral-500">
                              <EyeIcon className="w-4 h-4" />
                              <span>{article.views.toLocaleString()} views</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Tags */}
                        <div className="flex items-center space-x-2 mt-3">
                          <TagIcon className="w-4 h-4 text-neutral-400" />
                          <div className="flex flex-wrap gap-1">
                            {article.tags.map(tag => (
                              <span 
                                key={tag}
                                className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center space-x-2 ml-4">
                        <button className="p-2 text-neutral-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                          <EyeIcon className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-neutral-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <PencilIcon className="w-5 h-5" />
                        </button>
                        {article.status === 'draft' && (
                          <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                            Publish
                          </button>
                        )}
                        {article.status === 'published' && (
                          <button className="p-2 text-neutral-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                            <BellIcon className="w-5 h-5" />
                          </button>
                        )}
                        <button className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <NewspaperIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">No articles found</h3>
              <p className="text-neutral-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
