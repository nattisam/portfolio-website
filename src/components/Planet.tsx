'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/lib/projects'

interface PlanetProps {
  project: Project
  x: number
  y: number
  baseSize: number
  sizeMultiplier: number
  colorVariant: number
  rotationSpeed: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  onClick: () => void
  delay: number
}

export default function Planet({
  project,
  x,
  y,
  baseSize,
  sizeMultiplier,
  colorVariant,
  rotationSpeed,
  isHovered,
  onHover,
  onLeave,
  onClick,
  delay
}: PlanetProps) {
  const size = Math.max(20, baseSize * sizeMultiplier) // Ensure minimum size

  // Get category-specific base colors with strong variation
  const getPlanetColors = (category: string, variant: number) => {
    const baseColors = {
      frontend: [
        { primary: 'from-cyan-400 to-blue-500', glow: 'rgba(34, 211, 238, 0.9)' },
        { primary: 'from-teal-400 to-cyan-500', glow: 'rgba(20, 184, 166, 0.9)' },
        { primary: 'from-blue-400 to-cyan-500', glow: 'rgba(59, 130, 246, 0.9)' }
      ],
      backend: [
        { primary: 'from-purple-400 to-pink-500', glow: 'rgba(168, 85, 247, 0.9)' },
        { primary: 'from-violet-400 to-purple-500', glow: 'rgba(139, 92, 246, 0.9)' },
        { primary: 'from-indigo-400 to-purple-500', glow: 'rgba(99, 102, 241, 0.9)' }
      ],
      fullstack: [
        { primary: 'from-emerald-400 to-teal-500', glow: 'rgba(16, 185, 129, 0.9)' },
        { primary: 'from-green-400 to-emerald-500', glow: 'rgba(34, 197, 94, 0.9)' },
        { primary: 'from-teal-400 to-green-500', glow: 'rgba(20, 184, 166, 0.9)' }
      ],
      ai: [
        { primary: 'from-orange-400 to-red-500', glow: 'rgba(249, 115, 22, 0.9)' },
        { primary: 'from-red-400 to-pink-500', glow: 'rgba(248, 113, 113, 0.9)' },
        { primary: 'from-yellow-400 to-orange-500', glow: 'rgba(251, 191, 36, 0.9)' }
      ],
      devops: [
        { primary: 'from-indigo-400 to-purple-500', glow: 'rgba(99, 102, 241, 0.9)' },
        { primary: 'from-blue-400 to-indigo-500', glow: 'rgba(59, 130, 246, 0.9)' },
        { primary: 'from-purple-400 to-indigo-500', glow: 'rgba(147, 51, 234, 0.9)' }
      ],
      infrastructure: [
        { primary: 'from-slate-400 to-gray-500', glow: 'rgba(100, 116, 139, 0.9)' },
        { primary: 'from-gray-400 to-slate-500', glow: 'rgba(107, 114, 128, 0.9)' },
        { primary: 'from-zinc-400 to-gray-500', glow: 'rgba(161, 161, 170, 0.9)' }
      ],
      research: [
        { primary: 'from-yellow-400 to-orange-500', glow: 'rgba(245, 158, 11, 0.9)' },
        { primary: 'from-amber-400 to-yellow-500', glow: 'rgba(245, 101, 101, 0.9)' },
        { primary: 'from-orange-400 to-yellow-500', glow: 'rgba(249, 115, 22, 0.9)' }
      ],
      social: [
        { primary: 'from-pink-400 to-rose-500', glow: 'rgba(236, 72, 153, 0.9)' },
        { primary: 'from-rose-400 to-pink-500', glow: 'rgba(244, 114, 182, 0.9)' },
        { primary: 'from-fuchsia-400 to-pink-500', glow: 'rgba(232, 121, 249, 0.9)' }
      ],
      ecommerce: [
        { primary: 'from-green-400 to-emerald-500', glow: 'rgba(34, 197, 94, 0.9)' },
        { primary: 'from-lime-400 to-green-500', glow: 'rgba(132, 204, 22, 0.9)' },
        { primary: 'from-emerald-400 to-green-500', glow: 'rgba(16, 185, 129, 0.9)' }
      ],
      career: [
        { primary: 'from-blue-400 to-indigo-500', glow: 'rgba(59, 130, 246, 0.9)' },
        { primary: 'from-sky-400 to-blue-500', glow: 'rgba(56, 189, 248, 0.9)' },
        { primary: 'from-indigo-400 to-blue-500', glow: 'rgba(99, 102, 241, 0.9)' }
      ],
      gamedev: [
        { primary: 'from-violet-400 to-purple-500', glow: 'rgba(139, 92, 246, 0.9)' },
        { primary: 'from-purple-400 to-violet-500', glow: 'rgba(147, 51, 234, 0.9)' },
        { primary: 'from-fuchsia-400 to-violet-500', glow: 'rgba(232, 121, 249, 0.9)' }
      ],
      algorithms: [
        { primary: 'from-amber-400 to-yellow-500', glow: 'rgba(245, 101, 101, 0.9)' },
        { primary: 'from-yellow-400 to-amber-500', glow: 'rgba(251, 191, 36, 0.9)' },
        { primary: 'from-orange-400 to-amber-500', glow: 'rgba(249, 115, 22, 0.9)' }
      ]
    }

    const categoryColors = baseColors[category as keyof typeof baseColors] || baseColors.frontend
    const colorIndex = Math.floor(variant * categoryColors.length)
    const selectedColor = categoryColors[colorIndex] || categoryColors[0]

    // Apply additional variation for uniqueness
    const intensity = 0.8 + variant * 0.4 // 0.8 to 1.2 intensity

    return {
      primary: selectedColor.primary,
      glow: selectedColor.glow,
      variantGlow: selectedColor.glow.replace('0.9', intensity.toString())
    }
  }

  const colors = getPlanetColors(project.category, colorVariant)

  return (
    <motion.div
      className="absolute cursor-pointer rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        transformOrigin: 'center center',
        zIndex: 20
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay, type: "spring", stiffness: 100, damping: 15 }
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
    >
      {/* Planet glow */}
      <motion.div
        className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.primary}`}
        animate={{
          boxShadow: isHovered
            ? `0 0 30px ${colors.variantGlow}, 0 0 60px ${colors.variantGlow}, 0 0 90px ${colors.variantGlow}`
            : `0 0 15px ${colors.variantGlow}`
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* Planet surface */}
      <motion.div
        className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/30"
        animate={{
          background: isHovered
            ? `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)`
            : `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)`
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* Planet highlight */}
      <motion.div
        className="absolute top-1 left-1 bg-white/60 rounded-full blur-sm"
        animate={{
          width: isHovered ? 3 : 2,
          height: isHovered ? 3 : 2
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Status indicator */}
      <motion.div
        className={`absolute -bottom-1 -right-1 rounded-full border border-white/50 ${
          project.status === 'live' ? 'bg-green-400' :
          project.status === 'production' ? 'bg-blue-400' :
          project.status === 'beta' ? 'bg-yellow-400' :
          'bg-gray-400'
        }`}
        animate={{
          width: isHovered ? 3 : 2,
          height: isHovered ? 3 : 2,
          scale: isHovered ? [1, 1.3, 1] : 1,
          opacity: isHovered ? [0.8, 1, 0.8] : 0.8
        }}
        transition={{
          scale: {
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }
        }}
      />

      {/* Hover info box */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute pointer-events-none"
            style={{
              top: size + 15,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 40
            }}
          >
            <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-600/50 rounded-lg px-3 py-2 shadow-2xl min-w-32">
              <div className="text-white font-semibold text-sm text-center truncate">{project.displayName}</div>
              <div className="text-cyan-400 text-xs capitalize text-center">{project.category}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}
