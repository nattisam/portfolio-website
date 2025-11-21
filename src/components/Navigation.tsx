'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/#about' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      {/* Desktop Navigation - Left Side */}
      <nav className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:flex lg:flex-col lg:w-64 lg:border-r lg:border-border bg-background-secondary/50 backdrop-blur-sm z-50">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-8"
        >
          <Link href="/" className="block mb-12">
            <h2 className="text-2xl font-bold text-gradient font-mono">
              NS
            </h2>
            <p className="text-sm text-foreground-muted mt-1">
              Systems Architect
            </p>
          </Link>
          
          <ul className="space-y-4">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname?.startsWith(item.href))
              
              return (
                <motion.li
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-accent/10 text-accent neon-border'
                        : 'text-foreground-muted hover:text-foreground hover:bg-background-tertiary'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              )
            })}
          </ul>
        </motion.div>
      </nav>

      {/* Mobile Navigation - Top */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background-secondary/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gradient font-mono">NS</h2>
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-background-tertiary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-border"
            >
              <ul className="p-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || 
                    (item.href !== '/' && pathname?.startsWith(item.href))
                  
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                          isActive
                            ? 'bg-accent/10 text-accent'
                            : 'text-foreground-muted hover:text-foreground hover:bg-background-tertiary'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for mobile nav */}
      <div className="lg:hidden h-16" />
      
      {/* Spacer for desktop nav */}
      <div className="hidden lg:block w-64" />
    </>
  )
}

