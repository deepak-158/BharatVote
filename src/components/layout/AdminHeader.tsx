'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BuildingLibraryIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
import { useAdminAuth } from '@/contexts/AdminAuthContext'
import { NoSSR } from '@/components/common/NoSSR'

export function AdminHeader() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { adminUser, adminLogout } = useAdminAuth()

  const handleLogout = () => {
    adminLogout()
    window.location.href = '/' // Redirect to home page
  }

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 shadow-lg">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Admin Logo - simplified to only show Admin Portal */}
          <Link href="/admin/dashboard" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <BuildingLibraryIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white">Admin Portal</span>
            </div>
          </Link>

          {/* Profile Button (kept minimal) */}
          <div className="flex items-center">
            <NoSSR fallback={
              <div className="w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
            }>
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-colors duration-200"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-medium text-white">
                      {adminUser?.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <span className="hidden md:inline text-sm font-medium truncate max-w-32">
                    {adminUser?.name}
                  </span>
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-56 sm:w-64 bg-white rounded-lg shadow-strong border border-neutral-200 py-2 z-50"
                    >
                      <div className="px-4 py-3 border-b border-neutral-100">
                        <p className="font-semibold text-neutral-900">{adminUser?.name}</p>
                        <p className="text-sm text-neutral-600">{adminUser?.email}</p>
                      </div>
                      
                      <div className="border-t border-neutral-100 py-1">
                        <button
                          onClick={handleLogout}
                          className="flex items-center space-x-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <ArrowRightOnRectangleIcon className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </NoSSR>
          </div>
        </div>
      </nav>
    </header>
  )
}
