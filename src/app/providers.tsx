'use client'

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { AuthProvider } from '@/contexts/AuthContext'
import { AdminAuthProvider } from '@/contexts/AdminAuthContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
})

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <AdminAuthProvider>
              {children}
            </AdminAuthProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
