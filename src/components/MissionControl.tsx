'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HolographicNode from './HolographicNode'
import CircuitConnection from './CircuitConnection'
import { projects, Project } from '@/lib/projects'

interface MissionControlProps {
  onNodeClick: (project: Project) => void
}

// Connection data - defining relationships between projects
const connections = [
  // Main project flow
  { source: 'toye', target: 'alikohub', type: 'primary' as const },
  { source: 'alikohub', target: 'ssgi', type: 'primary' as const },
  { source: 'ssgi', target: 'guade-ai', type: 'primary' as const },
  { source: 'guade-ai', target: 'yipper', type: 'primary' as const },
  { source: 'yipper', target: 'testvalley-clone', type: 'primary' as const },

  // Infrastructure connections
  { source: 'testvalley-clone', target: 'user-auth', type: 'secondary' as const },
  { source: 'user-auth', target: 'nateshoeshop', type: 'secondary' as const },

  // AI/ML cluster
  { source: 'guade-ai', target: 'assister', type: 'primary' as const },

  // Game dev cluster
  { source: 'ball-breaker', target: 'bst-implementation', type: 'secondary' as const },

  // Cross-connections for visual interest
  { source: 'toye', target: 'user-auth', type: 'secondary' as const },
  { source: 'alikohub', target: 'nateshoeshop', type: 'secondary' as const },
  { source: 'ssgi', target: 'assister', type: 'secondary' as const },
  { source: 'guade-ai', target: 'ball-breaker', type: 'secondary' as const },
]

export default function MissionControl({ onNodeClick }: MissionControlProps) {
  const [mounted, setMounted] = useState(false)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h1 className="text-2xl font-bold text-white mb-2">Initializing Mission Control</h1>
          <p className="text-slate-400">Loading system architecture...</p>
        </motion.div>
      </div>
    )
  }

  // Calculate viewport dimensions and scaling
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080

  // Scale factor for responsive design
  const scale = Math.min(viewportWidth / 1920, viewportHeight / 1080, 1)

  // Center offset for the entire system
  const centerX = viewportWidth / 2
  const centerY = viewportHeight / 2

  // Transform project positions to screen coordinates
  const getNodePosition = (project: Project) => {
    // Scale positions and center them - adjust for new wider spread
    const scaledX = (project.nodePosition.x - 450) * scale + centerX - 150
    const scaledY = (project.nodePosition.y - 400) * scale + centerY - 50

    return {
      x: Math.max(120, Math.min(viewportWidth - 320, scaledX)),
      y: Math.max(120, Math.min(viewportHeight - 220, scaledY))
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* SVG Canvas for connections */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 10 }}
      >
        <defs>
          {/* Glow filter for connections */}
          <filter id="connection-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Holographic gradient */}
          <linearGradient id="hologram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.8)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.8)" />
          </linearGradient>
        </defs>

        {/* Render connections */}
        {connections.map((connection, index) => {
          const sourceProject = projects.find(p => p.id === connection.source)
          const targetProject = projects.find(p => p.id === connection.target)

          if (!sourceProject || !targetProject) return null

          const sourcePos = getNodePosition(sourceProject)
          const targetPos = getNodePosition(targetProject)

          return (
            <CircuitConnection
              key={`${connection.source}-${connection.target}`}
              startX={sourcePos.x + 96} // Center of node (192px width / 2)
              startY={sourcePos.y + 64} // Center of node (128px height / 2)
              endX={targetPos.x + 96}
              endY={targetPos.y + 64}
              delay={index * 0.1}
              animated={true}
              type={connection.type}
            />
          )
        })}
      </svg>

      {/* System Status Panel */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-6 left-6 z-20"
      >
        <div className="bg-slate-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 shadow-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <h2 className="text-lg font-bold text-white">Mission Control</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-slate-400">Systems Online</div>
              <div className="text-cyan-400 font-mono">{projects.length}</div>
            </div>
            <div>
              <div className="text-slate-400">Active Connections</div>
              <div className="text-cyan-400 font-mono">{connections.length}</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Nodes */}
      {projects.map((project, index) => {
        const position = getNodePosition(project)
        const isHovered = hoveredNode === project.id

        return (
          <motion.div
            key={project.id}
            className="absolute"
            style={{
              left: position.x,
              top: position.y,
              zIndex: isHovered ? 30 : 20
            }}
            onHoverStart={() => setHoveredNode(project.id)}
            onHoverEnd={() => setHoveredNode(null)}
          >
            <HolographicNode
              project={project}
              onClick={onNodeClick}
              delay={1 + index * 0.1}
            />
          </motion.div>
        )
      })}

      {/* Ambient lighting effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
          `,
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />

    </div>
  )
}
