'use client'

import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react'

type Theme = 'light' | 'dark' | 'auto'

interface ThemeState {
  theme: Theme
  isDark: boolean
}

type ThemeAction = 
  | { type: 'SET_THEME'; payload: Theme }
  | { type: 'SET_IS_DARK'; payload: boolean }

const initialState: ThemeState = {
  theme: 'light',
  isDark: false,
}

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      }
    case 'SET_IS_DARK':
      return {
        ...state,
        isDark: action.payload,
      }
    default:
      return state
  }
}

interface ThemeContextType {
  state: ThemeState
  setTheme: (theme: Theme) => void
  theme: Theme
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = useReducer(themeReducer, initialState)

  const setTheme = (theme: Theme) => {
    dispatch({ type: 'SET_THEME', payload: theme })
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('bharatvote-theme', theme)
      updateDocumentTheme(theme)
    }
  }

  const updateDocumentTheme = (theme: Theme) => {
    const root = window.document.documentElement
    const isDark = theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    dispatch({ type: 'SET_IS_DARK', payload: isDark })
  }

  // Initialize theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('bharatvote-theme') as Theme
      const initialTheme = savedTheme || 'light'
      
      dispatch({ type: 'SET_THEME', payload: initialTheme })
      updateDocumentTheme(initialTheme)

      // Listen for system theme changes if theme is set to auto
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = () => {
        if (state.theme === 'auto') {
          updateDocumentTheme('auto')
        }
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [state.theme])

  const value: ThemeContextType = {
    state,
    setTheme,
    theme: state.theme,
    isDark: state.isDark,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
