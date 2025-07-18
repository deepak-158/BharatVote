'use client'

import { ReactNode } from 'react'
import { AdminHeader } from '@/components/layout/AdminHeader'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  )
}
