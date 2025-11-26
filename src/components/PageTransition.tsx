'use client'

import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  // Render immediately without any animation or client checks
  return <div className="w-full h-full">{children}</div>
}
