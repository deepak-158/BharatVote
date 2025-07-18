'use client'

import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon,
  GlobeAltIcon,
  UsersIcon,
  LockClosedIcon,
  CheckCircleIcon,
  TrophyIcon,
  ChartBarIcon,
  CubeTransparentIcon
} from '@heroicons/react/24/outline'
import { MainLayout } from '@/components/layout/MainLayout'

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Military-Grade Security',
    description: 'Advanced encryption and multi-layer security protocols protect every vote'
  },
  {
    icon: CubeTransparentIcon,
    title: 'Blockchain Transparency',
    description: 'Immutable record of all votes on a transparent, verifiable blockchain'
  },
  {
    icon: UsersIcon,
    title: 'Universal Accessibility',
    description: 'Designed for all citizens, including those with disabilities and in remote areas'
  },
  {
    icon: GlobeAltIcon,
    title: 'Vote from Anywhere',
    description: 'Secure voting from any location within India with internet connectivity'
  }
]

const stats = [
  { label: 'Registered Voters', value: '950M+', icon: UsersIcon },
  { label: 'Constituencies', value: '543', icon: ChartBarIcon },
  { label: 'Security Layers', value: '12', icon: LockClosedIcon },
  { label: 'Uptime Guarantee', value: '99.99%', icon: CheckCircleIcon }
]

const timeline = [
  {
    year: '2020',
    title: 'Project Inception',
    description: 'BharatVote concept developed in collaboration with Election Commission of India'
  },
  {
    year: '2021',
    title: 'Pilot Testing',
    description: 'Successful pilot tests in select constituencies with 100% security record'
  },
  {
    year: '2022',
    title: 'State Elections',
    description: 'First deployment in state elections with overwhelming positive response'
  },
  {
    year: '2023',
    title: 'National Rollout',
    description: 'Full infrastructure deployment across all 543 parliamentary constituencies'
  },
  {
    year: '2024',
    title: 'International Recognition',
    description: 'Recognized by UN as the gold standard for digital democracy'
  },
  {
    year: '2025',
    title: 'General Elections',
    description: 'First complete digital general election in the world\'s largest democracy'
  }
]

const team = [
  {
    name: 'Dr. Rajesh Gupta',
    role: 'Chief Technology Officer',
    description: 'Former ISRO scientist with 20+ years in secure systems',
    image: '/api/placeholder/150/150'
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Security',
    description: 'Cybersecurity expert with experience in banking and defense',
    image: '/api/placeholder/150/150'
  },
  {
    name: 'Dr. Amit Patel',
    role: 'Blockchain Architect',
    description: 'Pioneer in blockchain technology and distributed systems',
    image: '/api/placeholder/150/150'
  },
  {
    name: 'Sita Devi',
    role: 'Accessibility Director',
    description: 'Advocate for inclusive design and universal access',
    image: '/api/placeholder/150/150'
  }
]

export default function AboutPage() {
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
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-6">
                About <span className="text-gradient">BharatVote</span>
              </h1>
              <p className="text-xl text-neutral-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionizing democracy through secure, transparent, and accessible digital voting for 
                the world's largest democracy
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-neutral-900">950M+</div>
                  <div className="text-neutral-600">Eligible Voters</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-neutral-900">543</div>
                  <div className="text-neutral-600">Constituencies</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-neutral-900">100%</div>
                  <div className="text-neutral-600">Security Record</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      {/* Mission Section */}
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">Our Mission</h2>
          <p className="text-xl text-neutral-700 max-w-4xl mx-auto">
            To democratize access to voting while maintaining the highest standards of security, 
            transparency, and integrity. We believe every citizen deserves a voice in shaping 
            their nation's future, regardless of their location, physical abilities, or circumstances.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-soft p-6 text-center hover:shadow-medium transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-accent-50 to-secondary-50 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-neutral-700">
              The scale and impact of India's digital democracy revolution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-soft p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-neutral-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">Our Journey</h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            From concept to reality: The evolution of India's digital voting system
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className={`bg-white rounded-2xl shadow-soft p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="text-2xl font-bold text-primary-600 mb-2">{item.year}</div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </div>
              
              <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg flex-shrink-0 relative">
                <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-20"></div>
              </div>
              
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-neutral-100 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Meet the experts who are making digital democracy a reality in India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-soft p-6 text-center hover:shadow-medium transition-all duration-300"
              >
                <div className="w-24 h-24 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UsersIcon className="w-12 h-12 text-neutral-400" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">{member.name}</h3>
                <div className="text-primary-600 font-medium mb-3">{member.role}</div>
                <p className="text-neutral-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-saffron/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">Our Vision for the Future</h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              We envision a world where democratic participation is seamless, secure, and accessible 
              to every citizen. BharatVote is just the beginning of a global transformation in how 
              democracies function in the digital age.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center bg-white rounded-2xl p-8 shadow-soft border border-neutral-100">
                <div className="w-16 h-16 bg-gradient-to-br from-saffron to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrophyIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Global Leadership</h3>
                <p className="text-neutral-600">Setting the standard for digital democracy worldwide</p>
              </div>
              <div className="text-center bg-white rounded-2xl p-8 shadow-soft border border-neutral-100">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Universal Access</h3>
                <p className="text-neutral-600">Making voting accessible to every citizen, everywhere</p>
              </div>
              <div className="text-center bg-white rounded-2xl p-8 shadow-soft border border-neutral-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Perfect Security</h3>
                <p className="text-neutral-600">Maintaining absolute trust in democratic processes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">Trusted Partners</h2>
          <p className="text-lg text-neutral-700 mb-12 max-w-3xl mx-auto">
            BharatVote is built in collaboration with leading institutions and organizations 
            committed to strengthening democracy.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grayscale hover:grayscale-0 transition-all duration-300">
            {[
              'Election Commission of India',
              'Ministry of Electronics & IT',
              'National Informatics Centre',
              'Unique Identification Authority'
            ].map((partner, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-neutral-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <GlobeAltIcon className="w-10 h-10 text-neutral-400" />
                </div>
                <div className="text-sm font-medium text-neutral-700">{partner}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </MainLayout>
  )
}
