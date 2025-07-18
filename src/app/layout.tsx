import '../styles/globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast'
import { SecurityProvider } from '@/components/common/SecurityProvider'
import { DevelopmentNotice } from '@/components/common/DevelopmentNotice'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'BharatVote - Secure Digital Electoral Platform',
    template: '%s | BharatVote'
  },
  description: 'A unified, secure, and transparent digital electoral platform for all eligible Indian citizens. Vote securely, transparently, and with complete anonymity.',
  keywords: ['india', 'voting', 'elections', 'digital democracy', 'blockchain', 'secure voting'],
  authors: [{ name: 'BharatVote Team' }],
  creator: 'BharatVote',
  publisher: 'Election Commission of India',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bharatvote.gov.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'hi-IN': '/hi-IN',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bharatvote.gov.in',
    title: 'BharatVote - Secure Digital Electoral Platform',
    description: 'A unified, secure, and transparent digital electoral platform for all eligible Indian citizens.',
    siteName: 'BharatVote',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BharatVote - Secure Digital Electoral Platform',
    description: 'A unified, secure, and transparent digital electoral platform for all eligible Indian citizens.',
    creator: '@bharatvote',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f97316' },
    { media: '(prefers-color-scheme: dark)', color: '#ea580c' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-neutral-50 antialiased">
        <SecurityProvider />
        <DevelopmentNotice />
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#22c55e',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
