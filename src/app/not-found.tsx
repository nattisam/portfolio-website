'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/ui/button'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-8xl md:text-9xl font-bold text-gradient mb-4"
          >
            404
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Page Not Found
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-foreground-muted mb-8 leading-relaxed"
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back to exploring my work.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects" className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              View Projects
            </Link>
          </Button>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative"
        >
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-accent/10 to-accent-secondary/10 rounded-full flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-accent/30 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 -z-10">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + i * 0.1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 2
                }}
                className="absolute w-2 h-2 bg-accent rounded-full"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-sm text-foreground-muted"
        >
          <p>If you believe this is an error, feel free to <Link href="/contact" className="text-accent hover:underline">contact me</Link>.</p>
        </motion.div>
      </div>
    </div>
  )
}
