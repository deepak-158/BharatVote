'use client'

import { ReactNode } from 'react'
import { AdminHeader } from '@/components/layout/AdminHeader'

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdminHeader />
      <main className="min-h-screen pt-4 pb-8">
        {children}
      </main>
    </>
  )
}
