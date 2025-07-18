'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface AdminUser {
  id: string
  name: string
  email: string
  role: 'admin' | 'super_admin'
  permissions: string[]
}

interface AdminAuthContextType {
  adminUser: AdminUser | null
  isAdminAuthenticated: boolean
  adminLogin: (credentials: { email: string; password: string; captcha: string }) => Promise<boolean>
  adminLogout: () => void
  loading: boolean
  isClient: boolean
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined)

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Set client flag to true after component mounts
    setIsClient(true)
    
    // Check if admin is already logged in (from localStorage or sessionStorage)
    const checkAdminAuth = () => {
      try {
        if (typeof window !== 'undefined') {
          const storedAdminUser = localStorage.getItem('bharatVote_adminUser')
          const storedAdminToken = localStorage.getItem('bharatVote_adminToken')
          
          if (storedAdminUser && storedAdminToken) {
            const user = JSON.parse(storedAdminUser)
            setAdminUser(user)
            setIsAdminAuthenticated(true)
          }
        }
      } catch (error) {
        console.error('Error checking admin auth:', error)
        // Clear invalid data
        if (typeof window !== 'undefined') {
          localStorage.removeItem('bharatVote_adminUser')
          localStorage.removeItem('bharatVote_adminToken')
        }
      } finally {
        setLoading(false)
      }
    }

    checkAdminAuth()
  }, [])

  const adminLogin = async (credentials: { email: string; password: string; captcha: string }): Promise<boolean> => {
    try {
      setLoading(true)
      
      // Mock admin authentication - in real app, this would be an API call
      if (credentials.email === 'admin@eci.gov.in' && credentials.password === 'admin123' && credentials.captcha === 'ABCD') {
        const mockAdminUser: AdminUser = {
          id: 'admin_001',
          name: 'ECI Administrator',
          email: 'admin@eci.gov.in',
          role: 'super_admin',
          permissions: ['manage_elections', 'manage_candidates', 'manage_voters', 'manage_news', 'system_settings']
        }
        
        // Store admin data
        if (typeof window !== 'undefined') {
          localStorage.setItem('bharatVote_adminUser', JSON.stringify(mockAdminUser))
          localStorage.setItem('bharatVote_adminToken', 'mock_admin_token_' + Date.now())
        }
        
        setAdminUser(mockAdminUser)
        setIsAdminAuthenticated(true)
        
        return true
      }
      
      return false
    } catch (error) {
      console.error('Admin login error:', error)
      return false
    } finally {
      setLoading(false)
    }
  }

  const adminLogout = () => {
    // Clear admin data
    if (typeof window !== 'undefined') {
      localStorage.removeItem('bharatVote_adminUser')
      localStorage.removeItem('bharatVote_adminToken')
    }
    
    setAdminUser(null)
    setIsAdminAuthenticated(false)
  }

  const value = {
    adminUser,
    isAdminAuthenticated: isClient ? isAdminAuthenticated : false,
    adminLogin,
    adminLogout,
    loading: !isClient || loading,
    isClient
  }

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext)
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider')
  }
  return context
}
