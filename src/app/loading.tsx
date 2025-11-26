'use client'

import { motion } from 'framer-motion'
import { Rocket, Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", damping: 20 }}
        className="relative"
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 blur-3xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center gap-6 p-8">
          {/* Rocket animation */}
          <motion.div
            animate={{
              y: [-5, 5, -5],
              rotate: [-3, 3, -3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <Rocket className="w-16 h-16 text-cyan-400" />
            
            {/* Particle effects */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 left-1/2 w-2 h-2 bg-orange-400 rounded-full"
                animate={{
                  y: [0, 20],
                  x: [0, Math.random() * 20 - 10],
                  opacity: [1, 0],
                  scale: [1, 0.3]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>

          {/* Loading spinner */}
          <div className="relative">
            <Loader2 className="w-12 h-12 text-cyan-400 animate-spin" />
            <div className="absolute inset-0 border-4 border-cyan-400/20 rounded-full"></div>
          </div>

          {/* Text */}
          <div className="text-center">
            <motion.h2
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
            >
              Loading
            </motion.h2>
            <p className="text-slate-400">Preparing your experience...</p>
          </div>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
              animate={{
                x: [-200, 200]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ width: '50%' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
