import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background'
  
  const variants = {
    primary: 'bg-accent text-background hover:bg-accent/80 neon-border',
    secondary: 'bg-background-tertiary text-foreground border border-border hover:border-accent/50 hover:text-accent',
    ghost: 'text-foreground-muted hover:text-foreground hover:bg-background-tertiary',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.div>
      </Link>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}

