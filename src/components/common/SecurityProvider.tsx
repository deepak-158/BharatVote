'use client'

import { useEffect } from 'react'
import { SecurityManager } from '@/utils/security'

export function SecurityProvider() {
  useEffect(() => {
    // Better environment detection
    const isProduction = process.env.NODE_ENV === 'production' && 
                        process.env.NEXT_PUBLIC_VERCEL_ENV !== 'development' &&
                        window.location.hostname !== 'localhost' &&
                        window.location.hostname !== '127.0.0.1' &&
                        window.location.port === ''

    // Initialize security only in production
    if (isProduction) {
      SecurityManager.init()
      
      // Additional production-only security measures
      if (typeof window !== 'undefined') {
        // Disable print functionality
        window.addEventListener('beforeprint', (e) => {
          e.preventDefault()
          alert('Printing is disabled for security reasons')
          return false
        })

        // Detect browser focus changes (potential tampering)
        let focusLost = false
        window.addEventListener('blur', () => {
          focusLost = true
        })

        window.addEventListener('focus', () => {
          if (focusLost && (window.location.pathname.includes('/vote') || window.location.pathname.includes('/admin'))) {
            // Log potential tampering attempt
            console.warn('Browser focus regained - potential tampering detected')
          }
          focusLost = false
        })

        // Detect zoom changes
        const initialZoom = window.devicePixelRatio
        setInterval(() => {
          if (window.devicePixelRatio !== initialZoom) {
            console.warn('Zoom level changed - potential tampering detected')
            // Reset zoom if on sensitive pages
            if (window.location.pathname.includes('/vote')) {
              document.body.style.zoom = '1'
            }
          }
        }, 1000)

        // Disable screenshot functionality (Ctrl+Print Screen, etc.)
        document.addEventListener('keyup', (e) => {
          if (e.key === 'PrintScreen') {
            navigator.clipboard.writeText('')
            alert('Screenshots are disabled for security reasons')
          }
        })

        // Log successful security initialization
        console.log('🔒 Security features activated - Production mode')
      }
    } else {
      // Development mode - log that security is disabled
      console.log('🛠️ Development mode - Security features disabled for debugging')
    }
  }, [])

  return null // This component doesn't render anything
}
