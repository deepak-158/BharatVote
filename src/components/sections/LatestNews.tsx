'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  ClockIcon,
  ArrowRightIcon,
  CalendarIcon,
  TagIcon
} from '@heroicons/react/24/outline'
const latestNews = [
  {
    id: 1,
    title: 'Record Voter Turnout in Phase 3 of General Elections',
    excerpt: 'Election Commission reports unprecedented 72% voter turnout in the third phase, marking the highest participation in recent history.',
    category: 'Election Updates',
    publishedAt: '2025-07-18T10:30:00Z',
    readTime: 5,
    featured: true
  },
  {
    id: 2,
    title: 'New Accessibility Features Launched for Disabled Voters',
    excerpt: 'BharatVote introduces voice-guided voting and enhanced screen reader support to ensure inclusive democratic participation.',
    category: 'Technology',
    publishedAt: '2025-07-17T14:15:00Z',
    readTime: 3,
    featured: false
  },
  {
    id: 3,
    title: 'Youth Participation Reaches All-Time High',
    excerpt: 'First-time voters aged 18-25 show remarkable engagement with 78% registration rate ahead of upcoming elections.',
    category: 'Participation',
    publishedAt: '2025-07-16T09:45:00Z',
    readTime: 4,
    featured: false
  }
]

export function LatestNews() {
    const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const timeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays}d ago`
    }
  }

  return (
    <section id="latest-news" className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Latest <span className="text-gradient">News</span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Stay informed with the latest updates, announcements, and insights from India's digital democracy
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured News */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            {latestNews
              .filter(news => news.featured)
              .map((news) => (
                <div key={news.id} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-sm text-neutral-500">{timeAgo(news.publishedAt)}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    {news.title}
                  </h3>
                  
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <div className="flex items-center space-x-1">
                        <TagIcon className="w-4 h-4" />
                        <span>{news.category}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{news.readTime} min read</span>
                      </div>
                    </div>
                    
                    <Link 
                      href="/news" 
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2 group"
                    >
                      <span>Read More</span>
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
          </motion.div>

          {/* Other News */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {latestNews
              .filter(news => !news.featured)
              .map((news, index) => (
                <div key={news.id} className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100 hover:shadow-medium transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs font-medium">
                      {news.category}
                    </span>
                    <span className="text-xs text-neutral-400">{timeAgo(news.publishedAt)}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-neutral-900 mb-3 leading-tight">
                    {news.title}
                  </h4>
                  
                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                    {news.excerpt.substring(0, 120)}...
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-neutral-500">
                      <ClockIcon className="w-3 h-3" />
                      <span>{news.readTime} min</span>
                    </div>
                    
                    <Link 
                      href="/news" 
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center space-x-1 group"
                    >
                      <span>Read</span>
                      <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>

        {/* View All News Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link 
            href="/news" 
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
          >
            <span>View All News</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
