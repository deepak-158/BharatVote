'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bars3Icon, 
  XMarkIcon, 
  UserIcon, 
  ShieldCheckIcon,
  BellIcon
} from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext'
import { LanguageSelector } from '@/components/common/LanguageSelector'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
    const { user, isAuthenticated, logout } = useAuth()

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Vote', href: '/vote' },
    { name: 'Candidates', href: '/candidates' },
    { name: 'Results', href: '/results' },
    { name: 'News', href: '/news' },
    { name: 'History', href: '/history' },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-saffron to-primary-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-gradient">BharatVote</span>
              <span className="text-xs text-neutral-600 -mt-1 hidden sm:block">Secure • Transparent • Democratic</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            {/* Language Selector - Hidden on very small screens */}
            <div className="hidden xs:block">
              <LanguageSelector />
            </div>

            {/* Notifications */}
            {isAuthenticated && (
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  className="p-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
                >
                  <BellIcon className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>

                <AnimatePresence>
                  {isNotificationOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-lg shadow-strong border border-neutral-200 py-2 z-50"
                    >
                      <div className="px-4 py-2 border-b border-neutral-100">
                        <h3 className="font-semibold text-neutral-900">Notifications</h3>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        <div className="px-4 py-3 hover:bg-neutral-50 cursor-pointer">
                          <p className="text-sm text-neutral-900">Election for your constituency starts in 2 days</p>
                          <p className="text-xs text-neutral-500 mt-1">2 hours ago</p>
                        </div>
                        <div className="px-4 py-3 hover:bg-neutral-50 cursor-pointer">
                          <p className="text-sm text-neutral-900">New candidate registered in your area</p>
                          <p className="text-xs text-neutral-500 mt-1">1 day ago</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* User actions */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-1 sm:space-x-3">
                <Link
                  href="/profile"
                  className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
                >
                  <UserIcon className="w-5 h-5" />
                  <span className="hidden md:block font-medium">{user?.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-200"
                >
                  <span className="hidden sm:inline">Logout</span>
                  <span className="sm:hidden">Out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-1 sm:space-x-3">
                <Link
                  href="/auth/login"
                  className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="btn-primary text-xs sm:text-sm px-2 sm:px-4 py-2"
                >
                  <span className="hidden sm:inline">Register</span>
                  <span className="sm:hidden">Join</span>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-neutral-200 py-4"
            >
              <div className="flex flex-col space-y-3">
                {/* Language Selector for mobile */}
                <div className="xs:hidden px-3 py-2">
                  <div className="text-sm font-medium text-neutral-700 mb-2">Language</div>
                  <LanguageSelector />
                </div>
                
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 rounded-lg font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile notifications for authenticated users */}
                {isAuthenticated && (
                  <div className="sm:hidden px-3 py-2 border-t border-neutral-200">
                    <button
                      onClick={() => {
                        setIsNotificationOpen(!isNotificationOpen)
                        setIsMenuOpen(false)
                      }}
                      className="flex items-center space-x-2 w-full text-left text-neutral-700 hover:text-primary-600 font-medium"
                    >
                      <BellIcon className="w-5 h-5" />
                      <span>Notifications</span>
                      <span className="ml-auto w-3 h-3 bg-red-500 rounded-full"></span>
                    </button>
                  </div>
                )}
                
                {!isAuthenticated && (
                  <div className="pt-3 border-t border-neutral-200 space-y-2">
                    <Link
                      href="/auth/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      Login
                    </Link>
                    <Link
                      href="/auth/register"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 text-white bg-primary-500 hover:bg-primary-600 rounded-lg font-medium transition-colors duration-200"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
