'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const upcomingElections = [
  {
    id: 1,
    title: 'Lok Sabha General Elections 2025',
    type: 'General Election',
    date: '2025-08-15',
    registrationDeadline: '2025-07-25',
    constituencies: 543,
    estimatedVoters: '950M+',
    status: 'registration_open',
    description: 'National parliamentary elections for the 18th Lok Sabha'
  },
  {
    id: 2,
    title: 'Maharashtra Assembly Elections',
    type: 'State Assembly',
    date: '2025-09-20',
    registrationDeadline: '2025-08-30',
    constituencies: 288,
    estimatedVoters: '88M+',
    status: 'upcoming',
    description: 'State legislative assembly elections for Maharashtra'
  },
  {
    id: 3,
    title: 'Delhi Municipal Corporation Elections',
    type: 'Local Body',
    date: '2025-10-10',
    registrationDeadline: '2025-09-20',
    constituencies: 250,
    estimatedVoters: '1.5M+',
    status: 'upcoming',
    description: 'Municipal corporation elections for Delhi wards'
  }
]

const previousElections = [
  {
    id: 1,
    title: 'Rajasthan Assembly Elections 2024',
    type: 'State Assembly',
    date: '2024-12-15',
    constituencies: 200,
    totalVotes: '42M+',
    turnout: '74.2%',
    status: 'completed',
    winner: 'Indian National Congress'
  },
  {
    id: 2,
    title: 'Karnataka Assembly Elections 2024',
    type: 'State Assembly',
    date: '2024-05-10',
    constituencies: 224,
    totalVotes: '38M+',
    turnout: '72.8%',
    status: 'completed',
    winner: 'Indian National Congress'
  },
  {
    id: 3,
    title: 'Gujarat Local Body Elections 2024',
    type: 'Local Body',
    date: '2024-03-15',
    constituencies: 162,
    totalVotes: '15M+',
    turnout: '68.5%',
    status: 'completed',
    winner: 'Bharatiya Janata Party'
  }
]

export function Elections() {
    const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'registration_open':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'completed':
        return 'bg-neutral-100 text-neutral-800 border-neutral-200'
      default:
        return 'bg-neutral-100 text-neutral-800 border-neutral-200'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'registration_open':
        return 'Registration Open'
      case 'upcoming':
        return 'Upcoming'
      case 'completed':
        return 'Completed'
      default:
        return 'Unknown'
    }
  }

  return (
    <section id="elections" className="py-20 bg-neutral-50" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Election <span className="text-gradient">Schedule</span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Stay updated with upcoming elections and review results from previous electoral processes
          </p>
        </motion.div>

        {/* Upcoming Elections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">
              Upcoming Elections
            </h3>
            <Link href="/elections" className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2">
              <span>View All</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingElections.map((election, index) => (
              <motion.div
                key={election.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(election.status)}`}>
                    {getStatusText(election.status)}
                  </span>
                  <span className="text-sm text-neutral-500">{election.type}</span>
                </div>

                <h4 className="text-xl font-bold text-neutral-900 mb-3">{election.title}</h4>
                <p className="text-neutral-600 mb-4">{election.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <CalendarIcon className="w-4 h-4 text-neutral-400" />
                    <span className="text-neutral-700">
                      Election Date: {new Date(election.date).toLocaleDateString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <ExclamationTriangleIcon className="w-4 h-4 text-orange-400" />
                    <span className="text-neutral-700">
                      Registration Deadline: {new Date(election.registrationDeadline).toLocaleDateString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPinIcon className="w-4 h-4 text-neutral-400" />
                    <span className="text-neutral-700">{election.constituencies} Constituencies</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <UserGroupIcon className="w-4 h-4 text-neutral-400" />
                    <span className="text-neutral-700">{election.estimatedVoters} Eligible Voters</span>
                  </div>
                </div>

                {election.status === 'registration_open' && (
                  <Link 
                    href="/auth/register" 
                    className="w-full mt-6 btn-primary text-center block"
                  >
                    Register to Vote
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Previous Elections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">
              Previous Elections
            </h3>
            <Link href="/results" className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2">
              <span>View All Results</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousElections.map((election, index) => (
              <motion.div
                key={election.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(election.status)}`}>
                    <CheckCircleIcon className="w-4 h-4 inline mr-1" />
                    {getStatusText(election.status)}
                  </span>
                  <span className="text-sm text-neutral-500">{election.type}</span>
                </div>

                <h4 className="text-xl font-bold text-neutral-900 mb-3">{election.title}</h4>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <CalendarIcon className="w-4 h-4 text-neutral-400" />
                    <span className="text-neutral-700">
                      {new Date(election.date).toLocaleDateString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPinIcon className="w-4 h-4 text-neutral-400" />
                    <span className="text-neutral-700">{election.constituencies} Constituencies</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <UserGroupIcon className="w-4 h-4 text-neutral-400" />
                    <span className="text-neutral-700">{election.totalVotes} Total Votes</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <ClockIcon className="w-4 h-4 text-neutral-400" />
                    <span className="text-neutral-700">Turnout: {election.turnout}</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    Winner: {election.winner}
                  </p>
                </div>

                <Link 
                  href="/results" 
                  className="w-full mt-4 btn-secondary text-center block"
                >
                  View Detailed Results
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
