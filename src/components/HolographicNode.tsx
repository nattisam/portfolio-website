'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Project } from '@/lib/projects'

interface HolographicNodeProps {
  project: Project
  onClick: (project: Project) => void
  delay?: number
}

export default function HolographicNode({ project, onClick, delay = 0 }: HolographicNodeProps) {
  const [isHovered, setIsHovered] = useState(false)


  const getCategoryColors = (category: string) => {
    const colors = {
      frontend: { primary: 'from-cyan-400 to-blue-500', glow: 'shadow-cyan-400/50' },
      backend: { primary: 'from-purple-400 to-pink-500', glow: 'shadow-purple-400/50' },
      fullstack: { primary: 'from-emerald-400 to-teal-500', glow: 'shadow-emerald-400/50' },
      ai: { primary: 'from-orange-400 to-red-500', glow: 'shadow-orange-400/50' },
      devops: { primary: 'from-indigo-400 to-purple-500', glow: 'shadow-indigo-400/50' },
      infrastructure: { primary: 'from-slate-400 to-gray-500', glow: 'shadow-slate-400/50' },
      research: { primary: 'from-yellow-400 to-orange-500', glow: 'shadow-yellow-400/50' },
      social: { primary: 'from-pink-400 to-rose-500', glow: 'shadow-pink-400/50' },
      ecommerce: { primary: 'from-green-400 to-emerald-500', glow: 'shadow-green-400/50' },
      career: { primary: 'from-blue-400 to-indigo-500', glow: 'shadow-blue-400/50' },
      gamedev: { primary: 'from-violet-400 to-purple-500', glow: 'shadow-violet-400/50' },
      algorithms: { primary: 'from-amber-400 to-yellow-500', glow: 'shadow-amber-400/50' }
    }
    return colors[category as keyof typeof colors] || colors.frontend
  }

  const colors = getCategoryColors(project.category)

  const getStatusColor = (status: string) => {
    const statusColors = {
      live: 'bg-green-400',
      production: 'bg-blue-400',
      beta: 'bg-yellow-400',
      development: 'bg-orange-400',
      prototype: 'bg-purple-400',
      completed: 'bg-gray-400',
      active: 'bg-cyan-400',
      ongoing: 'bg-indigo-400',
      current: 'bg-pink-400'
    }
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-400'
  }

  const statusColor = getStatusColor(project.status)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="relative cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onClick(project)}
    >
      <motion.div
        className={`absolute -inset-2 rounded-xl bg-gradient-to-r ${colors.primary} opacity-0 blur-xl`}
        animate={{
          opacity: isHovered ? 0.6 : 0.2,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          background: isHovered
            ? `radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)`
            : 'transparent'
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      <motion.div
        className="relative w-48 h-32 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10"
        animate={{
          boxShadow: isHovered
            ? `0 0 60px rgba(59, 130, 246, 0.8), 0 0 120px rgba(59, 130, 246, 0.4), inset 0 0 60px rgba(59, 130, 246, 0.1)`
            : `0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.05)`
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${colors.primary} opacity-20`}
          animate={{
            backgroundPosition: isHovered ? '200% 200%' : '0% 0%'
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            backgroundSize: '200% 200%'
          }}
        />

        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id={`grid-${project.id}`} width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/20" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
          </svg>
        </div>

        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: `conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.8), transparent)`,
            padding: '1px'
          }}
          animate={{
            rotate: isHovered ? 360 : 0
          }}
          transition={{
            duration: isHovered ? 2 : 0,
            ease: "linear",
            repeat: isHovered ? Infinity : 0
          }}
        >
          <div className="w-full h-full rounded-xl bg-slate-900/80 backdrop-blur-sm" />
        </motion.div>

        <div className="relative z-10 p-4 h-full flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <motion.h3
                className="text-sm font-bold text-white truncate mb-1"
                animate={{
                  textShadow: isHovered
                    ? '0 0 10px rgba(255, 255, 255, 0.8)'
                    : 'none'
                }}
              >
                {project.displayName}
              </motion.h3>
              <p className="text-xs text-slate-300 capitalize">{project.category}</p>
            </div>

            <motion.div
              className={`w-2 h-2 rounded-full ${statusColor} flex-shrink-0 ml-2`}
              animate={{
                boxShadow: isHovered
                  ? `0 0 8px ${statusColor.replace('bg-', 'rgb(').replace('-400', ', 0.8)')})`
                  : 'none'
              }}
            />
          </div>

          <div className="flex flex-wrap gap-1 mt-2">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + index * 0.1 }}
                className="px-2 py-0.5 text-xs bg-white/10 rounded-full text-slate-200 border border-white/20"
              >
                {tech}
              </motion.span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-0.5 text-xs bg-white/10 rounded-full text-slate-400 border border-white/20">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        <motion.div
          className="absolute bottom-2 right-2 w-1 h-1 bg-cyan-400 rounded-full"
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [0.5, 1, 0.5] : 0.5
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  )
}
