'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Chatbot } from '@/components/common/Chatbot'
import { useAdminAuth } from '@/contexts/AdminAuthContext'
import { usePathname } from 'next/navigation'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()
  const { isAdminAuthenticated } = useAdminAuth()

  // Check if the current path is an admin route
  const isAdminRoute = pathname?.startsWith('/admin')
  
  // For admin routes, don't show any header/footer at all
  // as they will be handled by the admin layout
  if (isAdminRoute) {
    return (
      <main className="min-h-screen pt-20">
        {children}
      </main>
    )
  }

  // For non-admin routes, show the regular header and footer
  return (
    <>
      <Header />
      <main className="min-h-screen pt-4 pb-8">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
