'use client'

import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react'
import { toast } from 'react-hot-toast'

export interface User {
  id: string
  voterEpicId: string
  name: string
  email?: string
  phone?: string
  constituency: string
  state: string
  isVerified: boolean
  registrationDate: string
  lastLogin?: string
  profilePicture?: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

type AuthAction = 
  | { type: 'AUTH_START' }
  | { type: 'AUTH_SUCCESS'; payload: User }
  | { type: 'AUTH_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'CLEAR_ERROR' }
  | { type: 'UPDATE_USER'; payload: Partial<User> }

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
}

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      }
    case 'AUTH_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      }
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      }
    case 'UPDATE_USER':
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : null,
      }
    default:
      return state
  }
}

interface AuthContextType {
  state: AuthState
  login: (epicId: string, otp: string) => Promise<void>
  logout: () => void
  register: (registrationData: RegisterData) => Promise<void>
  updateProfile: (data: Partial<User>) => Promise<void>
  clearError: () => void
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

interface RegisterData {
  voterEpicId: string
  name: string
  phone: string
  email?: string
  constituency: string
  state: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  // Check for existing session on mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('bharatvote-token')
          if (token) {
            // Verify token with backend
            const response = await fetch('/api/auth/verify', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            
            if (response.ok) {
              const user = await response.json()
              dispatch({ type: 'AUTH_SUCCESS', payload: user })
            } else {
              localStorage.removeItem('bharatvote-token')
            }
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        if (typeof window !== 'undefined') {
          localStorage.removeItem('bharatvote-token')
        }
      }
    }

    checkAuthStatus()
  }, [])

  const login = async (epicId: string, otp: string): Promise<void> => {
    dispatch({ type: 'AUTH_START' })
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ epicId, otp }),
      })

      const data = await response.json()

      if (response.ok) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('bharatvote-token', data.token)
        }
        dispatch({ type: 'AUTH_SUCCESS', payload: data.user })
        toast.success('Login successful!')
      } else {
        dispatch({ type: 'AUTH_FAILURE', payload: data.message || 'Login failed' })
        toast.error(data.message || 'Login failed')
      }
    } catch (error) {
      const errorMessage = 'Network error. Please try again.'
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage })
      toast.error(errorMessage)
    }
  }

  const register = async (registrationData: RegisterData): Promise<void> => {
    dispatch({ type: 'AUTH_START' })
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Registration successful! Please verify your account.')
        // Don't auto-login after registration, require verification
      } else {
        dispatch({ type: 'AUTH_FAILURE', payload: data.message || 'Registration failed' })
        toast.error(data.message || 'Registration failed')
      }
    } catch (error) {
      const errorMessage = 'Network error. Please try again.'
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage })
      toast.error(errorMessage)
    }
  }

  const updateProfile = async (data: Partial<User>): Promise<void> => {
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('bharatvote-token') : null
      const response = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        dispatch({ type: 'UPDATE_USER', payload: result.user })
        toast.success('Profile updated successfully!')
      } else {
        toast.error(result.message || 'Profile update failed')
      }
    } catch (error) {
      toast.error('Network error. Please try again.')
    }
  }

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('bharatvote-token')
    }
    dispatch({ type: 'LOGOUT' })
    toast.success('Logged out successfully')
  }

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' })
  }

  const value: AuthContextType = {
    state,
    login,
    logout,
    register,
    updateProfile,
    clearError,
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    error: state.error,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
