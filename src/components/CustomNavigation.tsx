'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/', description: 'Interactive system map' },
  { name: 'Projects', href: '/projects', description: 'Case studies & work' },
  { name: 'Experience', href: '/experience', description: 'Career timeline' },
  { name: 'Skills', href: '/skills', description: 'Technical expertise' },
  { name: 'Contact', href: '/contact', description: 'Get in touch' },
]

export default function CustomNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <span className="text-2xl font-bold tracking-tight">
                    <span className="text-accent">N</span>
                    <span className="text-foreground mx-1">|</span>
                    <span className="text-accent-secondary">S</span>
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-accent to-accent-secondary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-sm text-foreground-muted font-medium hidden sm:block">
                  Systems Architect
                </span>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href))

                return (
                  <Link key={item.name} href={item.href} className="group relative">
                    <motion.div
                      className="flex flex-col items-center"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className={`text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-accent'
                          : 'text-foreground-muted group-hover:text-foreground'
                      }`}>
                        {item.name}
                      </span>
                      <motion.div
                        className="h-px bg-gradient-to-r from-accent to-accent-secondary"
                        initial={{ scaleX: isActive ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-background-tertiary transition-all duration-200"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] bg-background border-l border-border z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-2 pb-4 border-b border-border/50">
                  <span className="text-xl font-bold tracking-tight">
                    <span className="text-accent">N</span>
                    <span className="text-foreground mx-1">|</span>
                    <span className="text-accent-secondary">S</span>
                  </span>
                </div>

                {/* Mobile Menu Items */}
                <div className="space-y-4">
                  {navigationItems.map((item, index) => {
                    const isActive = pathname === item.href ||
                      (item.href !== '/' && pathname.startsWith(item.href))

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block p-4 rounded-xl border transition-all duration-300 ${
                            isActive
                              ? 'bg-accent/5 border-accent/20 text-accent'
                              : 'border-border/50 hover:border-accent/30 hover:bg-background-tertiary'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className={`font-medium ${
                                isActive ? 'text-accent' : 'text-foreground'
                              }`}>
                                {item.name}
                              </div>
                              <div className="text-sm text-foreground-muted mt-1">
                                {item.description}
                              </div>
                            </div>
                            <motion.div
                              animate={{ x: isActive ? 4 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isActive ? 'rotate-[-90deg] text-accent' : 'text-foreground-muted'
                                }`}
                              />
                            </motion.div>
                          </div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Mobile Footer */}
                <div className="pt-6 border-t border-border/50">
                  <p className="text-xs text-foreground-muted text-center">
                    Nathan Samson • Systems Architect
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  )
}
