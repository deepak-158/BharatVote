'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  NewspaperIcon,
  CheckBadgeIcon,
  ClockIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'
const newsItems = [
  {
    id: 1,
    title: 'Election Commission Announces Digital Voting Pilot Program',
    excerpt: 'The Election Commission of India has officially launched a pilot program for digital voting in select constituencies, marking a historic step toward modernizing Indian democracy.',
    source: 'Press Information Bureau',
    publishedAt: '2024-01-15T10:30:00Z',
    readTime: '3 min read',
    category: 'Official Announcement',
    verified: true,
    image: '/images/news/eci-announcement.jpg'
  },
  {
    id: 2,
    title: 'Blockchain Technology Ensures Vote Integrity in Trial Run',
    excerpt: 'Recent trials demonstrate 100% accuracy in vote counting and verification using blockchain technology, with zero discrepancies reported across test constituencies.',
    source: 'Indian Express',
    publishedAt: '2024-01-12T14:20:00Z',
    readTime: '5 min read',
    category: 'Technology',
    verified: true,
    image: '/images/news/blockchain-trial.jpg'
  },
  {
    id: 3,
    title: 'Multi-Language Support Enhances Voter Accessibility',
    excerpt: 'The new digital voting platform now supports 10 Indian languages with voice assistance, making voting more accessible for citizens across different linguistic regions.',
    source: 'The Hindu',
    publishedAt: '2024-01-10T09:15:00Z',
    readTime: '4 min read',
    category: 'Accessibility',
    verified: true,
    image: '/images/news/multilingual.jpg'
  },
  {
    id: 4,
    title: 'Cybersecurity Experts Praise Digital Voting Security Measures',
    excerpt: 'Leading cybersecurity professionals have endorsed the platform\'s security architecture, highlighting its multi-layered protection and encryption standards.',
    source: 'Times of India',
    publishedAt: '2024-01-08T16:45:00Z',
    readTime: '6 min read',
    category: 'Security',
    verified: true,
    image: '/images/news/security-endorsement.jpg'
  }
]

export function NewsSection() {
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

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <NewspaperIcon className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900">
              Verified <span className="text-gradient">News</span> Hub
            </h2>
          </div>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Stay informed with authentic, verified news from trusted sources. 
            Every article is blockchain-verified to ensure authenticity and prevent misinformation.
          </p>
        </motion.div>

        {/* Featured news grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {newsItems.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="card card-hover h-full overflow-hidden">
                {/* News image placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-6 flex items-center justify-center">
                  <NewspaperIcon className="w-16 h-16 text-primary-400" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Category and verification */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {news.category}
                    </span>
                    {news.verified && (
                      <div className="flex items-center space-x-1 text-accent-600">
                        <CheckBadgeIcon className="w-5 h-5" />
                        <span className="text-sm font-medium">Verified</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-neutral-600 leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>

                  {/* Meta information */}
                  <div className="flex items-center justify-between text-sm text-neutral-500 pt-4 border-t border-neutral-100">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium">{news.source}</span>
                      <div className="flex items-center space-x-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{news.readTime}</span>
                      </div>
                    </div>
                    <span>{formatDate(news.publishedAt)}</span>
                  </div>

                  {/* Read more link */}
                  <div className="pt-4">
                    <Link
                      href={`/news/${news.id}`}
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      <span>Read Full Article</span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Blockchain verification button */}
                  <div className="pt-2">
                    <button className="w-full px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg text-sm font-medium text-neutral-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                      <CheckBadgeIcon className="w-4 h-4" />
                      <span>Verify Authenticity on Blockchain</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* News features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft border border-neutral-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
              Fighting Misinformation with Technology
            </h3>
            <p className="text-lg text-neutral-600">
              Our verified news system ensures you get accurate, authentic information
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckBadgeIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">Verified Sources Only</h4>
              <p className="text-neutral-600">News from PIB, registered agencies, and verified journalists</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">Blockchain Verification</h4>
              <p className="text-neutral-600">Every article hashed on blockchain for tamper-proof verification</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">Real-Time Updates</h4>
              <p className="text-neutral-600">Latest election news and updates as they happen</p>
            </div>
          </div>
        </motion.div>

        {/* View all news CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/news"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
          >
            <span>View All News</span>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
