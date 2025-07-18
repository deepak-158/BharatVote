'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

export function DevelopmentNotice() {
  const [isVisible, setIsVisible] = useState(false)
  const [countdown, setCountdown] = useState(5)

  const handleDismiss = () => {
    setIsVisible(false)
    // Update last shown time to prevent immediate re-showing
    localStorage.setItem('dev-notice-last-shown', Date.now().toString())
  }

  useEffect(() => {
    // Check if we're in development mode
    const isDevelopment = process.env.NODE_ENV === 'development' || 
                         process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ||
                         window.location.hostname === 'localhost' ||
                         window.location.hostname === '127.0.0.1' ||
                         window.location.port !== ''

    // Only show in development mode and if user hasn't dismissed it recently
    if (isDevelopment) {
      const lastShown = localStorage.getItem('dev-notice-last-shown')
      const now = Date.now()
      const fiveMinutes = 5 * 60 * 1000 // 5 minutes in milliseconds
      
      // Show notice if never shown, or if it was shown more than 5 minutes ago
      if (!lastShown || (now - parseInt(lastShown)) > fiveMinutes) {
        setIsVisible(true)
        setCountdown(5)
        localStorage.setItem('dev-notice-last-shown', now.toString())
        
        // Countdown timer
        const countdownInterval = setInterval(() => {
          setCountdown(prev => {
            if (prev <= 1) {
              setIsVisible(false)
              clearInterval(countdownInterval)
              return 0
            }
            return prev - 1
          })
        }, 1000)

        // Cleanup timer on unmount
        return () => clearInterval(countdownInterval)
      }
    }
  }, []) // Empty dependency array

  useEffect(() => {
    // Add keyboard shortcut to dismiss (Ctrl+D)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'd' && isVisible) {
        e.preventDefault()
        handleDismiss()
      }
    }

    if (isVisible) {
      window.addEventListener('keydown', handleKeyPress)
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isVisible])

  // Don't render anything if not visible
  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm bg-yellow-50 border border-yellow-200 rounded-lg shadow-lg p-4">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <CodeBracketIcon className="w-6 h-6 text-yellow-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-yellow-800">Development Mode</h3>
          <p className="text-xs text-yellow-700 mt-1">
            Security features are disabled for debugging. 
            They will automatically activate in production.
          </p>
          <div className="mt-2 text-xs text-yellow-600">
            <div>• DevTools: ✅ Enabled</div>
            <div>• Right-click: ✅ Enabled</div>
            <div>• Console: ✅ Available</div>
          </div>
          <div className="mt-2 text-xs text-yellow-500">
            Auto-hiding in {countdown}s • Press <kbd className="px-1 py-0.5 bg-yellow-100 rounded">Ctrl+D</kbd> to dismiss
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-yellow-400 hover:text-yellow-600 transition-colors"
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
