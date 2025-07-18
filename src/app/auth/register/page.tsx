'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  IdentificationIcon,
  MapPinIcon,
  EyeIcon,
  EyeSlashIcon,
  ShieldCheckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext'
import { MainLayout } from '@/components/layout/MainLayout'

export default function RegisterPage() {
    const { register } = useAuth()
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    aadhaar: '',
    voterId: '',
    dateOfBirth: '',
    address: '',
    constituency: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    enableBiometric: true
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format'
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
      else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits'
    }

    if (currentStep === 2) {
      if (!formData.aadhaar.trim()) newErrors.aadhaar = 'Aadhaar number is required'
      else if (!/^\d{12}$/.test(formData.aadhaar)) newErrors.aadhaar = 'Aadhaar must be 12 digits'
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
      if (!formData.address.trim()) newErrors.address = 'Address is required'
      if (!formData.constituency) newErrors.constituency = 'Constituency is required'
    }

    if (currentStep === 3) {
      if (!formData.password) newErrors.password = 'Password is required'
      else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
      if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(3)) {
      try {
        // Transform form data to match RegisterData interface
        const registerData = {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          voterEpicId: formData.voterId,
          phone: formData.phone,
          constituency: formData.constituency,
          state: formData.constituency
        }
        await register(registerData)
        // Redirect to verification page
      } catch (error) {
        console.error('Registration failed:', error)
      }
    }
  }

  const constituencies = [
    'Mumbai Central', 'Delhi South', 'Bangalore North', 'Chennai Central',
    'Kolkata East', 'Pune West', 'Hyderabad', 'Ahmedabad East'
  ]

  return (
    <MainLayout>
      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                Create Your BharatVote Account
              </h1>
              <p className="text-lg text-neutral-600">
                Join India's digital democracy revolution
              </p>
            </motion.div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                  step >= stepNumber 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-neutral-200 text-neutral-600'
                }`}>
                  {step > stepNumber ? (
                    <CheckCircleIcon className="w-6 h-6" />
                  ) : (
                    stepNumber
                  )}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNumber ? 'bg-primary-500' : 'bg-neutral-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-soft p-8"
          >
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`input-field pl-10 ${errors.firstName ? 'border-red-500' : ''}`}
                          placeholder="Enter your first name"
                        />
                      </div>
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`input-field pl-10 ${errors.lastName ? 'border-red-500' : ''}`}
                          placeholder="Enter your last name"
                        />
                      </div>
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`input-field pl-10 ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="Enter your email address"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`input-field pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                        placeholder="Enter your 10-digit phone number"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              )}

              {/* Step 2: Identity & Address */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Identity & Address</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Aadhaar Number *
                    </label>
                    <div className="relative">
                      <IdentificationIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="text"
                        name="aadhaar"
                        value={formData.aadhaar}
                        onChange={handleInputChange}
                        className={`input-field pl-10 ${errors.aadhaar ? 'border-red-500' : ''}`}
                        placeholder="Enter your 12-digit Aadhaar number"
                        maxLength={12}
                      />
                    </div>
                    {errors.aadhaar && <p className="text-red-500 text-sm mt-1">{errors.aadhaar}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Voter ID (Optional)
                    </label>
                    <div className="relative">
                      <IdentificationIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="text"
                        name="voterId"
                        value={formData.voterId}
                        onChange={handleInputChange}
                        className="input-field pl-10"
                        placeholder="Enter your Voter ID (if available)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className={`input-field ${errors.dateOfBirth ? 'border-red-500' : ''}`}
                    />
                    {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Address *
                    </label>
                    <div className="relative">
                      <MapPinIcon className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className={`input-field pl-10 resize-none ${errors.address ? 'border-red-500' : ''}`}
                        placeholder="Enter your complete address"
                      />
                    </div>
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Constituency *
                    </label>
                    <select
                      name="constituency"
                      value={formData.constituency}
                      onChange={handleInputChange}
                      className={`input-field ${errors.constituency ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select your constituency</option>
                      {constituencies.map(constituency => (
                        <option key={constituency} value={constituency}>{constituency}</option>
                      ))}
                    </select>
                    {errors.constituency && <p className="text-red-500 text-sm mt-1">{errors.constituency}</p>}
                  </div>
                </div>
              )}

              {/* Step 3: Security */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Security Setup</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`input-field pr-10 ${errors.password ? 'border-red-500' : ''}`}
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400"
                      >
                        {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`input-field ${errors.confirmPassword ? 'border-red-500' : ''}`}
                      placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="enableBiometric"
                        name="enableBiometric"
                        checked={formData.enableBiometric}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="enableBiometric" className="text-sm text-blue-900">
                        <div className="flex items-center space-x-2">
                          <ShieldCheckIcon className="w-5 h-5 text-blue-600" />
                          <span className="font-medium">Enable Biometric Authentication (Recommended)</span>
                        </div>
                        <p className="text-blue-700 mt-1">
                          Use fingerprint and facial recognition for secure voting
                        </p>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1"
                    />
                    <label htmlFor="acceptTerms" className="text-sm text-neutral-700">
                      I accept the{' '}
                      <Link href="/terms" className="text-primary-600 hover:text-primary-700">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  {errors.acceptTerms && <p className="text-red-500 text-sm">{errors.acceptTerms}</p>}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-200">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn-outline"
                  >
                    Previous
                  </button>
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-primary ml-auto"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-primary ml-auto"
                  >
                    Create Account
                  </button>
                )}
              </div>
            </form>

            {/* Login Link */}
            <div className="mt-6 pt-6 border-t border-neutral-100 text-center">
              <p className="text-neutral-600">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-primary-600 hover:text-primary-700 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </MainLayout>
  )
}
