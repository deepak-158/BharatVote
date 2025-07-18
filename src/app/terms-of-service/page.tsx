'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { DocumentTextIcon, ShieldCheckIcon, ScaleIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function TermsOfServicePage() {
  return (
    <MainLayout>
      <div className="bg-neutral-50 min-h-screen pb-16">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50 pt-28 pb-8">
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
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">
                Terms of Service
              </h1>
              <p className="text-lg text-neutral-600">
                Please read these terms and conditions carefully before using BharatVote
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container-custom mt-8">
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-8">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <DocumentTextIcon className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-neutral-900">Terms of Service Agreement</h2>
              </div>
              <p className="text-neutral-700">
                Last Updated: July 15, 2025
              </p>
            </div>

            <div className="prose prose-neutral max-w-none">
              <p>
                These Terms of Service ("Terms") govern your access to and use of the BharatVote platform and services ("Service"), operated by the Election Commission of India. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
              </p>

              <h3>1. Acceptance of Terms</h3>
              <p>
                By creating an account on BharatVote, you acknowledge that you have read, understood, and agree to be bound by these Terms. These Terms constitute a legal agreement between you and the Election Commission of India.
              </p>

              <h3>2. Eligibility</h3>
              <p>
                To use the BharatVote service, you must:
              </p>
              <ul>
                <li>Be an Indian citizen</li>
                <li>Be 18 years of age or older on the qualifying date</li>
                <li>Be registered as a voter with the Election Commission of India</li>
                <li>Possess a valid Aadhaar number for identity verification</li>
                <li>Not be disqualified from voting under the provisions of the Constitution of India or any law enacted by the Parliament</li>
              </ul>

              <h3>3. Account Registration and Security</h3>
              <p>
                When you register for BharatVote, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other breach of security.
              </p>

              <h3>4. Voter Verification Process</h3>
              <p>
                BharatVote uses multi-factor authentication and biometric verification to ensure the integrity of the electoral process. By using our service, you consent to:
              </p>
              <ul>
                <li>Verification of your identity through Aadhaar authentication</li>
                <li>Verification against the electoral roll database</li>
                <li>Biometric verification where applicable</li>
                <li>Additional verification methods that may be implemented to ensure electoral integrity</li>
              </ul>

              <h3>5. Privacy and Data Protection</h3>
              <p>
                We are committed to protecting your privacy and personal data. Your use of BharatVote is also governed by our Privacy Policy, which is incorporated into these Terms by reference. The Privacy Policy explains how we collect, use, and protect your personal information.
              </p>

              <h3>6. Voting Process and Integrity</h3>
              <p>
                When using BharatVote to cast your vote, you agree that:
              </p>
              <ul>
                <li>You will cast only one vote per election as permitted by law</li>
                <li>You will not attempt to interfere with the voting process or electoral system</li>
                <li>You will not share your authentication credentials with any other person</li>
                <li>You will report any irregularities or technical issues to the appropriate authorities</li>
                <li>Your vote, once submitted, is final and cannot be changed or withdrawn</li>
              </ul>

              <h3>7. Intellectual Property</h3>
              <p>
                The BharatVote platform, including its content, features, and functionality, is owned by the Election Commission of India and is protected by Indian and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any material from our platform without written permission.
              </p>

              <h3>8. Prohibited Activities</h3>
              <p>
                You may not engage in any of the following activities:
              </p>
              <ul>
                <li>Using the service for any illegal purpose or in violation of any laws</li>
                <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Service</li>
                <li>Taking any action that imposes an unreasonable or disproportionately large load on our infrastructure</li>
                <li>Uploading invalid data, viruses, worms, or other software agents through the Service</li>
                <li>Impersonating another person or otherwise misrepresenting your affiliation with a person or entity</li>
                <li>Collecting or harvesting any personally identifiable information from the Service</li>
              </ul>

              <h3>9. Modifications to the Service</h3>
              <p>
                We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Service.
              </p>

              <h3>10. Amendments to Terms</h3>
              <p>
                We may amend these Terms at any time by posting the amended terms on our website. It is your responsibility to review these Terms periodically. Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes.
              </p>

              <h3>11. Termination</h3>
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
              </p>

              <h3>12. Limitation of Liability</h3>
              <p>
                In no event shall the Election Commission of India, its officers, directors, employees, or agents be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any (i) errors, mistakes, or inaccuracies of content; (ii) personal injury or property damage of any nature whatsoever resulting from your access to and use of our service; (iii) any unauthorized access to or use of our secure servers and/or any and all personal information stored therein.
              </p>

              <h3>13. Governing Law</h3>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of India.
              </p>

              <h3>14. Contact Information</h3>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Election Commission of India<br />
                Nirvachan Sadan, Ashoka Road<br />
                New Delhi - 110001<br />
                Email: legal@bharatvote.gov.in<br />
                Phone: 1800-XXX-XXXX
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/privacy-policy" className="block group">
              <div className="bg-white rounded-2xl shadow-soft p-6 h-full hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <ShieldCheckIcon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">Privacy Policy</h3>
                </div>
                <p className="text-neutral-600">
                  Learn how we collect, use, and protect your personal information.
                </p>
              </div>
            </Link>

            <Link href="/legal/user-conduct" className="block group">
              <div className="bg-white rounded-2xl shadow-soft p-6 h-full hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <ScaleIcon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">Code of Conduct</h3>
                </div>
                <p className="text-neutral-600">
                  Guidelines for appropriate user behavior on BharatVote.
                </p>
              </div>
            </Link>

            <Link href="/legal/updates" className="block group">
              <div className="bg-white rounded-2xl shadow-soft p-6 h-full hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <ClockIcon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">Policy Updates</h3>
                </div>
                <p className="text-neutral-600">
                  History of changes and updates to our legal policies and terms.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
