import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-background-secondary border border-border p-6 transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}

