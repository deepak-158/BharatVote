'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ExclamationCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    submitted: false,
    error: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simple validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormState({ ...formState, error: true })
      return
    }
    
    // In a real app, you would send the form data to a server here
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
        submitted: true,
        error: false
      })
    }, 1000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value,
      error: false
    })
  }

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone Support',
      details: [
        'Toll-Free: 1800-XXX-VOTE (8683)',
        'Technical Support: +91-XX-XXXX-XXXX',
        'Available 24/7 during elections'
      ],
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: [
        'General Inquiries: info@bharatvote.gov.in',
        'Support: support@bharatvote.gov.in',
        'Media: media@bharatvote.gov.in'
      ],
      color: 'bg-primary-100 text-primary-700'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      details: [
        'Election Commission of India',
        'Nirvachan Sadan, Ashoka Road',
        'New Delhi - 110001, India'
      ],
      color: 'bg-secondary-100 text-secondary-700'
    }
  ]

  return (
    <MainLayout>
      <div className="bg-neutral-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50 pt-28 pb-16">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-saffron/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-green/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                We're here to help with any questions about digital voting, 
                technical support, or general inquiries about BharatVote.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-soft p-8 text-center hover:shadow-medium transition-all duration-300"
                >
                  <div className="mb-6 flex justify-center">
                    <div className={`w-16 h-16 rounded-xl ${info.color} flex items-center justify-center`}>
                      <info.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-neutral-600">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-neutral-600">
                  We'll get back to you as soon as possible
                </p>
              </motion.div>
              
              <div className="bg-white rounded-2xl shadow-soft p-8 lg:p-12">
                {formState.submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-8"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircleIcon className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Thank You!</h3>
                    <p className="text-neutral-600 text-lg mb-6">
                      Your message has been received. We'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setFormState({ ...formState, submitted: false })}
                      className="btn-primary px-6 py-3"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {formState.error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
                        <ExclamationCircleIcon className="w-6 h-6 text-red-500 mr-3" />
                        <p className="text-red-700">Please fill in all the required fields</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-neutral-700 font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="What is your inquiry about?"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <button type="submit" className="btn-primary px-8 py-3">
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                Visit Our Offices
              </h2>
              <p className="text-lg text-neutral-600">
                The Election Commission of India headquarters in New Delhi
              </p>
            </motion.div>
            
            <div className="bg-white rounded-2xl shadow-soft p-4 overflow-hidden">
              {/* In a real app, replace this with an actual map integration like Google Maps */}
              <div className="aspect-video bg-neutral-200 rounded-xl flex items-center justify-center">
                <p className="text-neutral-600 text-lg">Map Placeholder - Election Commission of India, New Delhi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Help Center CTA */}
        <section className="py-16 bg-gradient-to-br from-primary-500 to-secondary-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold mb-4">
                      Looking for Quick Answers?
                    </h2>
                    <p className="text-xl text-white/90 mb-6 md:mb-0">
                      Visit our comprehensive help center with hundreds of articles and video tutorials.
                    </p>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex justify-center md:justify-end"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                    </div>
                    <a href="/help" className="btn-white px-6 py-3">
                      Visit Help Center
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
