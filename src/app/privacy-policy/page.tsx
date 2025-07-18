'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { ShieldCheckIcon, DocumentTextIcon, EyeIcon, LockClosedIcon, ClockIcon, ScaleIcon } from '@heroicons/react/24/outline'

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-lg text-neutral-600">
                Your privacy and data protection are our top priorities
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container-custom mt-8">
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-8">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-neutral-900">Privacy Policy for BharatVote</h2>
              </div>
              <p className="text-neutral-700">
                Last Updated: July 15, 2025
              </p>
            </div>

            <div className="prose prose-neutral max-w-none">
              <p>
                This Privacy Policy describes how the Election Commission of India ("we," "us," or "our") collects, uses, and protects your personal information when you use the BharatVote platform ("Service"). We are committed to ensuring that your privacy is protected and that your personal data is handled in accordance with applicable data protection laws, including the Digital Personal Data Protection Act, 2023.
              </p>

              <h3>1. Information We Collect</h3>
              
              <h4>1.1 Personal Information</h4>
              <p>When you register for BharatVote, we collect the following personal information:</p>
              <ul>
                <li>Full name as per government records</li>
                <li>Aadhaar number for identity verification</li>
                <li>Date of birth</li>
                <li>Gender</li>
                <li>Mobile phone number</li>
                <li>Email address</li>
                <li>Residential address</li>
                <li>Photograph for voter identification</li>
                <li>Biometric data (where applicable) for authentication</li>
              </ul>

              <h4>1.2 Voting Data</h4>
              <p>We collect information related to your voting activities, including:</p>
              <ul>
                <li>Voting history (without linking to specific vote choices)</li>
                <li>Time and date of vote submission</li>
                <li>Device information used for voting</li>
                <li>IP address and location data for security purposes</li>
              </ul>

              <h4>1.3 Technical Information</h4>
              <p>We automatically collect certain technical information:</p>
              <ul>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Device identifiers</li>
                <li>Log files and usage data</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h3>2. How We Use Your Information</h3>
              
              <p>We use your personal information for the following purposes:</p>
              
              <h4>2.1 Electoral Purposes</h4>
              <ul>
                <li>Verifying your identity and eligibility to vote</li>
                <li>Facilitating secure online voting</li>
                <li>Preventing fraud and ensuring election integrity</li>
                <li>Maintaining accurate voter records</li>
                <li>Providing election-related notifications and updates</li>
              </ul>

              <h4>2.2 Platform Operations</h4>
              <ul>
                <li>Creating and managing your user account</li>
                <li>Providing customer support and technical assistance</li>
                <li>Improving our services and user experience</li>
                <li>Ensuring platform security and preventing unauthorized access</li>
                <li>Complying with legal and regulatory requirements</li>
              </ul>

              <h3>3. Vote Anonymity and Security</h3>
              
              <p>
                We are committed to maintaining the secrecy of your ballot. Your voting choices are completely anonymous and cannot be linked back to your identity. We employ advanced cryptographic techniques including:
              </p>
              <ul>
                <li>End-to-end encryption of all vote data</li>
                <li>Blockchain technology for tamper-proof vote storage</li>
                <li>Zero-knowledge proofs to verify votes without revealing choices</li>
                <li>Multi-layered security protocols to prevent data breaches</li>
              </ul>

              <h3>4. Data Sharing and Disclosure</h3>
              
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              
              <h4>4.1 Authorized Government Agencies</h4>
              <ul>
                <li>With the Election Commission of India for electoral purposes</li>
                <li>With authorized election officials for verification purposes</li>
                <li>With law enforcement agencies when legally required</li>
              </ul>

              <h4>4.2 Service Providers</h4>
              <ul>
                <li>With trusted third-party service providers who assist in platform operations</li>
                <li>All service providers are bound by strict confidentiality agreements</li>
                <li>Access is limited to what is necessary for providing services</li>
              </ul>

              <h4>4.3 Legal Requirements</h4>
              <ul>
                <li>When required by law, court order, or government regulation</li>
                <li>To protect our rights, property, or safety</li>
                <li>To prevent fraud or security threats</li>
              </ul>

              <h3>5. Data Retention</h3>
              
              <p>We retain your personal information for different periods depending on the type of data:</p>
              <ul>
                <li><strong>Voter Registration Data:</strong> Retained as long as you are an eligible voter</li>
                <li><strong>Voting Records:</strong> Retained permanently for electoral integrity and historical purposes</li>
                <li><strong>Technical Logs:</strong> Retained for 7 years for security and audit purposes</li>
                <li><strong>Biometric Data:</strong> Retained only during active voting sessions</li>
              </ul>

              <h3>6. Your Rights</h3>
              
              <p>Under applicable data protection laws, you have the following rights:</p>
              
              <h4>6.1 Access and Correction</h4>
              <ul>
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate or incomplete data</li>
                <li>Right to update your contact information</li>
              </ul>

              <h4>6.2 Data Portability</h4>
              <ul>
                <li>Right to receive your data in a portable format</li>
                <li>Right to transfer your data to other authorized platforms</li>
              </ul>

              <h4>6.3 Withdrawal of Consent</h4>
              <ul>
                <li>Right to withdraw consent for non-essential data processing</li>
                <li>Note: Some data processing is required by law for electoral purposes</li>
              </ul>

              <h3>7. Security Measures</h3>
              
              <p>We implement comprehensive security measures to protect your data:</p>
              <ul>
                <li>Advanced encryption for data in transit and at rest</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular security audits and penetration testing</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Employee training on data protection and security</li>
                <li>Incident response procedures for data breaches</li>
              </ul>

              <h3>8. International Data Transfers</h3>
              
              <p>
                Your personal data is stored and processed within India. We do not transfer personal data outside of India except in specific circumstances required for electoral integrity, and only with appropriate safeguards in place.
              </p>

              <h3>9. Children's Privacy</h3>
              
              <p>
                BharatVote is intended for use by eligible voters who are 18 years of age or older. We do not knowingly collect personal information from individuals under 18 years of age.
              </p>

              <h3>10. Updates to This Privacy Policy</h3>
              
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and sending notifications to registered users.
              </p>

              <h3>11. Contact Information</h3>
              
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              
              <p>
                <strong>Data Protection Officer</strong><br />
                Election Commission of India<br />
                Nirvachan Sadan, Ashoka Road<br />
                New Delhi - 110001<br />
                Email: privacy@bharatvote.gov.in<br />
                Phone: 1800-XXX-XXXX
              </p>

              <h3>12. Grievance Redressal</h3>
              
              <p>
                If you have concerns about how your personal data is being processed, you can file a complaint with our Grievance Officer or with the Data Protection Board of India.
              </p>
              
              <p>
                <strong>Grievance Officer:</strong><br />
                Name: [Officer Name]<br />
                Email: grievance@bharatvote.gov.in<br />
                Response Time: Within 72 hours
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/terms-of-service" className="block group">
              <div className="bg-white rounded-2xl shadow-soft p-6 h-full hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <DocumentTextIcon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">Terms of Service</h3>
                </div>
                <p className="text-neutral-600">
                  Read our terms and conditions for using BharatVote.
                </p>
              </div>
            </Link>

            <Link href="/legal/data-protection" className="block group">
              <div className="bg-white rounded-2xl shadow-soft p-6 h-full hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <LockClosedIcon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">Data Protection</h3>
                </div>
                <p className="text-neutral-600">
                  Learn about our data protection measures and your rights.
                </p>
              </div>
            </Link>

            <Link href="/legal/transparency" className="block group">
              <div className="bg-white rounded-2xl shadow-soft p-6 h-full hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <EyeIcon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">Transparency Report</h3>
                </div>
                <p className="text-neutral-600">
                  View our transparency report and data usage statistics.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
