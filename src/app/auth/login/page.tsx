'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FingerPrintIcon,
  ShieldCheckIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext'
export default function LoginPage() {
  const [epicId, setEpicId] = useState('')
  const [otp, setOtp] = useState('')
  const [showOtp, setShowOtp] = useState(false)
  const [isOtpSent, setIsOtpSent] = useState(false)
  const { login, isLoading, error } = useAuth()
    const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!epicId.trim()) return

    // Simulate OTP sending
    setIsOtpSent(true)
    // In real implementation, call API to send OTP
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!epicId.trim() || !otp.trim()) return

    try {
      await login(epicId, otp)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Link href="/" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6">
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-saffron to-primary-500 rounded-2xl flex items-center justify-center">
              <ShieldCheckIcon className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-neutral-900 mb-2">
            Secure Login
          </h2>
          <p className="text-neutral-600">
            Access your BharatVote account with your EPIC ID
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-soft p-8 border border-neutral-200"
        >
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={isOtpSent ? handleLogin : handleSendOtp} className="space-y-6">
            {/* EPIC ID Input */}
            <div>
              <label htmlFor="epicId" className="block text-sm font-medium text-neutral-700 mb-2">
                EPIC (Voter ID) Number
              </label>
              <input
                id="epicId"
                type="text"
                value={epicId}
                onChange={(e) => setEpicId(e.target.value.toUpperCase())}
                placeholder="ABC1234567"
                maxLength={10}
                className="input-field"
                required
                disabled={isOtpSent}
              />
              <p className="text-xs text-neutral-500 mt-1">
                Enter your 10-character EPIC number
              </p>
            </div>

            {/* OTP Input (shown after EPIC verification) */}
            {isOtpSent && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-neutral-700 mb-2">
                    OTP (One-Time Password)
                  </label>
                  <div className="relative">
                    <input
                      id="otp"
                      type={showOtp ? 'text' : 'password'}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter 6-digit OTP"
                      maxLength={6}
                      className="input-field pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowOtp(!showOtp)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                    >
                      {showOtp ? (
                        <EyeSlashIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    OTP sent to your registered mobile number
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOtpSent(false)}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Change EPIC Number
                </button>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-4 text-lg flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <div className="loading-dots">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <>
                  <FingerPrintIcon className="w-6 h-6" />
                  <span>{isOtpSent ? 'Verify & Login' : 'Send OTP'}</span>
                </>
              )}
            </button>
          </form>

          {/* Biometric Login Option */}
          <div className="mt-6 pt-6 border-t border-neutral-100">
            <button className="w-full px-4 py-3 bg-neutral-100 hover:bg-neutral-200 rounded-lg text-neutral-700 font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
              <FingerPrintIcon className="w-5 h-5" />
              <span>Login with Biometrics</span>
            </button>
            <p className="text-xs text-neutral-500 text-center mt-2">
              Available on supported devices
            </p>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center space-x-6 text-sm">
            <Link href="/auth/register" className="text-primary-600 hover:text-primary-700 font-medium">
              New user? Register here
            </Link>
            <span className="text-neutral-400">•</span>
            <Link href="/forgot-password" className="text-neutral-600 hover:text-neutral-800">
              Forgot Password?
            </Link>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-xs text-neutral-500">
            <Link href="/help" className="hover:text-neutral-700">
              Need Help?
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-neutral-700">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-neutral-700">
              Terms of Service
            </Link>
          </div>
        </motion.div>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-4 shadow-soft border border-neutral-200"
        >
          <div className="flex items-center justify-center space-x-2 text-sm text-neutral-600">
            <ShieldCheckIcon className="w-5 h-5 text-accent-500" />
            <span>Protected by bank-level encryption</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
