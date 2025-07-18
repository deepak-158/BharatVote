'use client'

import { ReactNode, useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: ReactNode
  fallback?: ReactNode
}

/**
 * Wrapper component that only renders children on the client side
 * to prevent hydration mismatches with server-side rendering
 */
export function ClientOnly({ children, fallback }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
