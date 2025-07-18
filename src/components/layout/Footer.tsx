'use client'

import Link from 'next/link'
import { 
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
const footerLinks = {
  voting: [
    { name: 'Vote Now', href: '/vote' },
    { name: 'Register', href: '/auth/register' },
    { name: 'How to Vote', href: '/how-to-vote' },
    { name: 'Results', href: '/results' }
  ],
  explore: [
    { name: 'Candidates', href: '/candidates' },
    { name: 'News', href: '/news' },
    { name: 'History', href: '/history' },
    { name: 'Help', href: '/help' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ],
  admin: [
    { name: 'ECI Admin Portal', href: '/admin/login' }
  ]
}

export function Footer() {
    return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-saffron to-primary-500 rounded-xl flex items-center justify-center">
                <ShieldCheckIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">BharatVote</h3>
                <p className="text-sm text-neutral-400">Digital Democracy</p>
              </div>
            </Link>
            
            <p className="text-neutral-300 leading-relaxed">
              India's secure digital voting platform, empowering democracy through technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-neutral-400" />
                <span className="text-neutral-300">1800-XXX-VOTE</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-neutral-400" />
                <span className="text-neutral-300">support@bharatvote.gov.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="w-5 h-5 text-neutral-400" />
                <span className="text-neutral-300">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Voting Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Voting</h4>
            <ul className="space-y-3">
              {footerLinks.voting.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admin Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">ECI Administration</h4>
            <ul className="space-y-3">
              {footerLinks.admin.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-400 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <div className="bg-gradient-to-r from-primary-900/20 to-secondary-900/20 rounded-2xl p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated on Elections
              </h3>
              <p className="text-neutral-300 mb-6">
                Get important updates about election schedules and voting procedures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-neutral-400">
                © 2025 BharatVote. All rights reserved.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-2 mt-1">
                <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                <span className="text-sm text-neutral-500">
                  Authorized by Election Commission of India
                </span>
              </div>
            </div>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 text-neutral-400">
              <span>Made with</span>
              <HeartIcon className="w-5 h-5 text-red-500" />
              <span>for Indian Democracy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Government Badge */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-lg shadow-lg p-3 border border-neutral-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-saffron via-white to-green rounded-lg flex items-center justify-center">
              <ShieldCheckIcon className="w-5 h-5 text-neutral-700" />
            </div>
            <div className="text-xs">
              <div className="font-semibold text-neutral-900">Government of India</div>
              <div className="text-neutral-600">Official Platform</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
