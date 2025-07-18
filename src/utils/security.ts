/**
 * Security utilities to prevent inspection and tampering
 * Only active in production environment
 */

export class SecurityManager {
  private static isProduction = false
  private static devToolsOpen = false

  static init() {
    // Better environment detection
    if (typeof window !== 'undefined') {
      this.isProduction = process.env.NODE_ENV === 'production' && 
                         process.env.NEXT_PUBLIC_VERCEL_ENV !== 'development' &&
                         window.location.hostname !== 'localhost' &&
                         window.location.hostname !== '127.0.0.1' &&
                         window.location.port === ''
    }

    if (!this.isProduction) {
      console.log('🛠️ SecurityManager: Development mode detected - Security features disabled')
      return
    }

    console.log('🔒 SecurityManager: Production mode detected - Activating security features')

    // Disable right-click context menu
    this.disableContextMenu()
    
    // Disable keyboard shortcuts
    this.disableKeyboardShortcuts()
    
    // Detect developer tools
    this.detectDevTools()
    
    // Disable text selection
    this.disableTextSelection()
    
    // Disable drag and drop
    this.disableDragDrop()
    
    // Clear console periodically
    this.clearConsole()
    
    // Obfuscate console messages
    this.obfuscateConsole()
  }

  private static disableContextMenu() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      this.showSecurityWarning()
      return false
    })
  }

  private static disableKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Disable F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault()
        this.showSecurityWarning()
        return false
      }

      // Disable Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        this.showSecurityWarning()
        return false
      }

      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault()
        this.showSecurityWarning()
        return false
      }

      // Disable Ctrl+Shift+C (Element Inspector)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        this.showSecurityWarning()
        return false
      }

      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault()
        this.showSecurityWarning()
        return false
      }

      // Disable Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        this.showSecurityWarning()
        return false
      }

      // Disable Ctrl+A (Select All) on sensitive pages
      if (e.ctrlKey && e.key === 'a' && window.location.pathname.includes('/vote')) {
        e.preventDefault()
        this.showSecurityWarning()
        return false
      }
    })
  }

  private static detectDevTools() {
    // Method 1: Check window size differences
    setInterval(() => {
      const threshold = 160
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        if (!this.devToolsOpen) {
          this.devToolsOpen = true
          this.handleDevToolsDetection()
        }
      } else {
        this.devToolsOpen = false
      }
    }, 500)

    // Method 2: Console detection
    const devtools = { open: false, orientation: null }
    setInterval(() => {
      if (window.console && window.console.clear) {
        const startTime = performance.now()
        console.clear()
        const endTime = performance.now()
        
        if (endTime - startTime > 1) {
          if (!devtools.open) {
            devtools.open = true
            this.handleDevToolsDetection()
          }
        } else {
          devtools.open = false
        }
      }
    }, 1000)
  }

  private static handleDevToolsDetection() {
    // Log security violation
    this.logSecurityViolation('Developer tools detected')
    
    // Show warning
    this.showSecurityWarning()
    
    // Redirect to security page
    if (window.location.pathname.includes('/vote') || window.location.pathname.includes('/admin')) {
      setTimeout(() => {
        window.location.href = '/security-violation'
      }, 2000)
    }
  }

  private static disableTextSelection() {
    const style = document.createElement('style')
    style.innerHTML = `
      * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
      
      input, textarea, [contenteditable="true"] {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }
    `
    document.head.appendChild(style)
  }

  private static disableDragDrop() {
    document.addEventListener('dragstart', (e) => e.preventDefault())
    document.addEventListener('drop', (e) => e.preventDefault())
    document.addEventListener('dragover', (e) => e.preventDefault())
  }

  private static clearConsole() {
    setInterval(() => {
      if (console.clear) {
        console.clear()
      }
    }, 10000) // Clear every 10 seconds
  }

  private static obfuscateConsole() {
    // Override console methods
    const originalLog = console.log
    
    console.log = () => {}
    console.error = () => {}
    console.warn = () => {}
    console.info = () => {}
    console.debug = () => {}
    
    // Show security message instead
    setTimeout(() => {
      originalLog('%c🚨 SECURITY WARNING 🚨', 'color: red; font-size: 20px; font-weight: bold;')
      originalLog('%cThis is a secure voting platform. Unauthorized access attempts are logged and monitored.', 'color: red; font-size: 14px;')
      originalLog('%cFor technical support, contact: support@bharatvote.gov.in', 'color: blue; font-size: 12px;')
    }, 1000)
  }

  private static showSecurityWarning() {
    // Create modal warning
    const modal = document.createElement('div')
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Arial, sans-serif;
    `
    
    modal.innerHTML = `
      <div style="
        background: white;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        max-width: 400px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      ">
        <div style="font-size: 50px; margin-bottom: 20px;">🚨</div>
        <h2 style="color: #dc2626; margin-bottom: 15px;">Security Warning</h2>
        <p style="color: #374151; margin-bottom: 20px;">
          This action is not allowed on this secure platform. 
          All attempts are logged and monitored.
        </p>
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: #dc2626;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        ">Close</button>
      </div>
    `
    
    document.body.appendChild(modal)
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (modal.parentElement) {
        modal.remove()
      }
    }, 5000)
  }

  private static logSecurityViolation(type: string) {
    // Log to server (in real implementation)
    const violationData = {
      type,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      ip: 'detected-client-side' // Would be detected server-side
    }
    
    // In production, send to security monitoring service
    console.warn('Security violation logged:', violationData)
    
    // Store locally for admin review
    const violations = JSON.parse(localStorage.getItem('security-violations') || '[]')
    violations.push(violationData)
    localStorage.setItem('security-violations', JSON.stringify(violations.slice(-10))) // Keep last 10
  }

  // Public method to check if environment is secure
  static isSecureEnvironment(): boolean {
    return this.isProduction
  }

  // Method to temporarily disable security for specific operations
  static temporaryDisable(duration: number = 5000) {
    if (!this.isProduction) return
    
    // Store original functions
    const originalPreventDefault = Event.prototype.preventDefault
    
    // Temporarily restore functionality
    Event.prototype.preventDefault = function() {}
    
    // Restore after duration
    setTimeout(() => {
      Event.prototype.preventDefault = originalPreventDefault
    }, duration)
  }
}

// Auto-initialize when module is loaded
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SecurityManager.init())
  } else {
    SecurityManager.init()
  }
}
