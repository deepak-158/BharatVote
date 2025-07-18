'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MainLayout } from '@/components/layout/MainLayout'
import { useAdminAuth } from '@/contexts/AdminAuthContext'
import { 
  ShieldCheckIcon,
  UserCircleIcon,
  LockClosedIcon,
  KeyIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  BuildingLibraryIcon,
  FingerPrintIcon
} from '@heroicons/react/24/outline'

export default function AdminLoginPage() {
  const router = useRouter()
  const { adminLogin, isAdminAuthenticated } = useAdminAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    securityToken: '',
    captcha: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showSecurityToken, setShowSecurityToken] = useState(false)

  // Redirect if already logged in
  useEffect(() => {
    if (isAdminAuthenticated) {
      router.push('/admin/dashboard')
    }
  }, [isAdminAuthenticated, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const success = await adminLogin({
        email: formData.email,
        password: formData.password,
        captcha: formData.captcha
      })

      if (success) {
        router.push('/admin/dashboard')
      } else {
        setError('Invalid credentials. Please check your email and password.')
      }
    } catch (error) {
      setError('An error occurred during login. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-neutral-100 via-neutral-50 to-primary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mx-auto h-20 w-20 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center mb-6">
              <BuildingLibraryIcon className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900">
              ECI Admin Portal
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Secure access for Election Commission officials
            </p>
          </motion.div>

          {/* Security Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-amber-50 border border-amber-200 rounded-lg p-4"
          >
            <div className="flex items-start">
              <ExclamationTriangleIcon className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-amber-800">
                  Authorized Personnel Only
                </h3>
                <p className="text-sm text-amber-700 mt-1">
                  This portal is restricted to authorized Election Commission officials. 
                  Unauthorized access is strictly prohibited and monitored.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden"
          >
            <div className="px-8 py-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Official Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserCircleIcon className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-neutral-900 placeholder-neutral-500"
                      placeholder="admin@eci.gov.in"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockClosedIcon className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-neutral-900 placeholder-neutral-500"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                {/* Security Token */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="securityToken" className="block text-sm font-medium text-neutral-700">
                      Security Token
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowSecurityToken(!showSecurityToken)}
                      className="text-xs text-primary-600 hover:text-primary-500"
                    >
                      {showSecurityToken ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <KeyIcon className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      id="securityToken"
                      name="securityToken"
                      type={showSecurityToken ? 'text' : 'password'}
                      required
                      value={formData.securityToken}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-neutral-900 placeholder-neutral-500"
                      placeholder="Enter your security token"
                    />
                  </div>
                </div>

                {/* CAPTCHA */}
                <div>
                  <label htmlFor="captcha" className="block text-sm font-medium text-neutral-700 mb-2">
                    Security Verification
                  </label>
                  <div className="flex space-x-3">
                    <div className="flex-1">
                      <input
                        id="captcha"
                        name="captcha"
                        type="text"
                        required
                        value={formData.captcha}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-neutral-900 placeholder-neutral-500"
                        placeholder="Enter CAPTCHA"
                      />
                    </div>
                    <div className="w-24 h-12 bg-neutral-100 border border-neutral-300 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-neutral-700 tracking-wider">7K9M</span>
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center">
                      <ExclamationTriangleIcon className="h-5 w-5 text-red-400 mr-2" />
                      <span className="text-sm text-red-700">{error}</span>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Authenticating...
                      </div>
                    ) : (
                      <>
                        <ShieldCheckIcon className="h-5 w-5 mr-2" />
                        Secure Login
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Additional Security */}
            <div className="px-8 py-4 bg-neutral-50 border-t border-neutral-200">
              <div className="flex items-center text-xs text-neutral-600">
                <FingerPrintIcon className="h-4 w-4 mr-2" />
                <span>Multi-factor authentication enabled for enhanced security</span>
              </div>
            </div>
          </motion.div>

          {/* Help Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-2"
          >
            <div className="text-sm text-neutral-600">
              Need help accessing your account?
            </div>
            <div className="space-x-4">
              <Link href="/admin/forgot-password" className="text-sm text-primary-600 hover:text-primary-500">
                Reset Password
              </Link>
              <span className="text-neutral-300">|</span>
              <Link href="/admin/support" className="text-sm text-primary-600 hover:text-primary-500">
                Technical Support
              </Link>
            </div>
          </motion.div>

          {/* Demo Credentials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-green-50 border border-green-200 rounded-lg p-4"
          >
            <div className="text-center">
              <h3 className="text-sm font-medium text-green-800 mb-2">Demo Credentials</h3>
              <div className="text-sm text-green-700 space-y-1">
                <p><strong>Email:</strong> admin@eci.gov.in</p>
                <p><strong>Password:</strong> admin123</p>
                <p><strong>CAPTCHA:</strong> ABCD</p>
              </div>
            </div>
          </motion.div>

          {/* Footer Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-center">
                <InformationCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                <div className="text-sm text-blue-800">
                  <strong>Security Notice:</strong> All admin activities are logged and monitored for security purposes.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  )
}
