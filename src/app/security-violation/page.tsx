'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExclamationTriangleIcon, ShieldExclamationIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function SecurityViolationPage() {
  useEffect(() => {
    // Clear any sensitive data from memory
    if (typeof window !== 'undefined') {
      // Clear session storage
      sessionStorage.clear()
      
      // Log the violation
      const violation = {
        timestamp: new Date().toISOString(),
        page: window.location.href,
        userAgent: navigator.userAgent
      }
      
      console.warn('Security violation detected:', violation)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center border border-red-200"
      >
        {/* Warning Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center"
        >
          <ExclamationTriangleIcon className="w-10 h-10 text-red-600" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-red-600 mb-4"
        >
          Security Violation Detected
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 text-gray-700"
        >
          <div className="flex items-center justify-center space-x-2 text-orange-600">
            <ShieldExclamationIcon className="w-5 h-5" />
            <span className="font-semibold">Unauthorized Access Attempt</span>
          </div>
          
          <p className="text-sm leading-relaxed">
            Your attempt to access developer tools or inspect the voting platform has been detected and logged. 
            This is a secure electoral system protected by advanced security measures.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm">
            <p className="font-semibold text-red-800 mb-2">Important Notice:</p>
            <ul className="text-red-700 space-y-1 text-left">
              <li>• All security violations are logged and monitored</li>
              <li>• Tampering attempts may result in legal action</li>
              <li>• This platform is protected by Election Commission of India</li>
              <li>• For assistance, contact official support channels</li>
            </ul>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 space-y-3"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          
          <Link
            href="/help"
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            Get Help
          </Link>
        </motion.div>

        {/* Support Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 pt-6 border-t border-gray-200 text-xs text-gray-500"
        >
          <p>For technical support:</p>
          <p className="font-mono">support@bharatvote.gov.in</p>
          <p className="mt-1">Incident ID: {Date.now().toString(36).toUpperCase()}</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
