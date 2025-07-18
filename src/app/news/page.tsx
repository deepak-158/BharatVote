'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  ClockIcon,
  TagIcon,
  ShareIcon,
  BookmarkIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CalendarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import { MainLayout } from '@/components/layout/MainLayout'

// Mock news data
const newsArticles = [
  {
    id: 1,
    title: 'Record Voter Turnout in Phase 3 of General Elections',
    excerpt: 'Election Commission reports unprecedented 72% voter turnout in the third phase, marking the highest participation in recent history.',
    content: 'The Election Commission of India announced today that the third phase of the 2025 General Elections witnessed a record-breaking voter turnout of 72%...',
    category: 'Election Updates',
    author: 'Priya Sharma',
    publishedAt: '2025-07-18T10:30:00Z',
    readTime: 5,
    image: '/api/placeholder/600/300',
    featured: true,
    tags: ['Voter Turnout', 'Election Commission', 'Phase 3']
  },
  {
    id: 2,
    title: 'New Digital Verification System Ensures Zero Fraud',
    excerpt: 'BharatVote\'s advanced biometric and blockchain verification has successfully prevented any fraudulent voting attempts.',
    content: 'The revolutionary digital verification system implemented in BharatVote has achieved a milestone...',
    category: 'Technology',
    author: 'Rajesh Kumar',
    publishedAt: '2025-07-18T09:15:00Z',
    readTime: 7,
    image: '/api/placeholder/600/300',
    featured: false,
    tags: ['Technology', 'Security', 'Biometric', 'Blockchain']
  },
  {
    id: 3,
    title: 'Youth Participation Reaches All-Time High',
    excerpt: 'First-time voters and young adults show remarkable enthusiasm, with 85% turnout in the 18-25 age group.',
    content: 'Young voters across India have shown unprecedented participation in the 2025 elections...',
    category: 'Demographics',
    author: 'Sita Devi',
    publishedAt: '2025-07-18T08:45:00Z',
    readTime: 4,
    image: '/api/placeholder/600/300',
    featured: false,
    tags: ['Youth', 'First-time Voters', 'Demographics']
  },
  {
    id: 4,
    title: 'International Observers Praise Election Transparency',
    excerpt: 'UN and international democracy watchdogs commend India\'s transparent and technologically advanced electoral process.',
    content: 'International observers from various democratic institutions have praised India\'s conduct of the 2025 elections...',
    category: 'International',
    author: 'Amit Patel',
    publishedAt: '2025-07-17T16:20:00Z',
    readTime: 6,
    image: '/api/placeholder/600/300',
    featured: false,
    tags: ['International', 'UN', 'Transparency', 'Democracy']
  },
  {
    id: 5,
    title: 'Remote Areas Achieve 100% Digital Connectivity',
    excerpt: 'Even the most remote constituencies now have full digital access for secure online voting through BharatVote.',
    content: 'The government\'s initiative to ensure digital connectivity has reached every corner of India...',
    category: 'Infrastructure',
    author: 'Meera Singh',
    publishedAt: '2025-07-17T14:10:00Z',
    readTime: 5,
    image: '/api/placeholder/600/300',
    featured: false,
    tags: ['Infrastructure', 'Digital India', 'Remote Areas']
  },
  {
    id: 6,
    title: 'Election Security: Multi-layered Protection Systems',
    excerpt: 'Comprehensive overview of the security measures protecting the integrity of India\'s digital elections.',
    content: 'The 2025 elections feature the most advanced security systems ever deployed...',
    category: 'Security',
    author: 'Kiran Kumar',
    publishedAt: '2025-07-17T12:30:00Z',
    readTime: 8,
    image: '/api/placeholder/600/300',
    featured: false,
    tags: ['Security', 'Cybersecurity', 'Election Protection']
  }
]

const categories = ['All', 'Election Updates', 'Technology', 'Security', 'Demographics', 'International', 'Infrastructure']

export default function NewsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null)

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  const featuredArticle = newsArticles.find(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  const getTimeAgo = (dateString: string) => {
    const now = new Date()
    const published = new Date(dateString)
    const diffInHours = Math.floor((now.getTime() - published.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    return `${Math.floor(diffInHours / 24)}d ago`
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
                Election <span className="text-gradient">News & Updates</span>
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Stay informed with the latest news, updates, and analysis from India's digital democracy
              </p>
            </motion.div>
          </div>
        </div>

      <div className="container-custom py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search news articles..."
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-soft overflow-hidden mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-full">
                <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                  <GlobeAltIcon className="w-16 h-16 text-neutral-400" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-4">
                  <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{getTimeAgo(featuredArticle.publishedAt)}</span>
                  </div>
                  <span>{featuredArticle.readTime} min read</span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                  {featuredArticle.title}
                </h2>
                
                <p className="text-neutral-600 mb-6 text-lg">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neutral-300 rounded-full"></div>
                    <span className="font-medium text-neutral-900">{featuredArticle.author}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors">
                      <BookmarkIcon className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors">
                      <ShareIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedArticle(article.id)}
            >
              <div className="relative h-48">
                <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                  <GlobeAltIcon className="w-12 h-12 text-neutral-400" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary-700 px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-neutral-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-3 h-3" />
                    <span>{getTimeAgo(article.publishedAt)}</span>
                  </div>
                  <span>{article.readTime} min read</span>
                </div>
                
                <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded">
                      +{article.tags.length - 2}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-neutral-300 rounded-full"></div>
                    <span className="text-sm text-neutral-700">{article.author}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-primary-600">
                    <span className="text-sm font-medium">Read more</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <GlobeAltIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No articles found
            </h3>
            <p className="text-neutral-600">
              Try adjusting your search terms or category filters.
            </p>
          </motion.div>
        )}

        {/* Breaking News Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-red-50 border border-red-200 rounded-2xl p-4 mt-8"
        >
          <div className="flex items-center space-x-3">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              LIVE
            </span>
            <div className="flex-1 overflow-hidden">
              <div className="whitespace-nowrap animate-marquee">
                <span className="text-red-800 font-medium">
                  Breaking: Election Commission announces extension of voting hours in select constituencies due to high turnout • 
                  Record 68% national turnout recorded so far • 
                  All technical systems functioning smoothly • 
                  International observers confirm transparent process
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white mt-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get the latest election news and updates delivered directly to your inbox. 
              Stay informed about India's democratic process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-neutral-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      </div>
    </MainLayout>
  )
}
