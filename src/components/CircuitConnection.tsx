'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CircuitConnectionProps {
  startX: number
  startY: number
  endX: number
  endY: number
  delay?: number
  animated?: boolean
  type?: 'primary' | 'secondary'
}

export default function CircuitConnection({
  startX,
  startY,
  endX,
  endY,
  delay = 0,
  animated = true,
  type = 'primary'
}: CircuitConnectionProps) {
  const [pathLength, setPathLength] = useState(0)

  // Calculate the SVG path
  const dx = endX - startX
  const dy = endY - startY
  const distance = Math.sqrt(dx * dx + dy * dy)

  // Create curved path with control points
  const midX = startX + dx * 0.5
  const midY = startY + dy * 0.5
  const controlOffset = Math.min(distance * 0.3, 100) // Max curve of 100px

  // Alternate curve direction for visual variety
  const curveDirection = (startX + startY) % 2 === 0 ? 1 : -1
  const controlX = midX + (dy / distance) * controlOffset * curveDirection
  const controlY = midY - (dx / distance) * controlOffset * curveDirection

  const pathData = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`

  useEffect(() => {
    // Calculate approximate path length for animation
    const approxLength = distance * 1.2 // Rough approximation for curved path
    setPathLength(approxLength)
  }, [distance])

  const colors = {
    primary: {
      stroke: 'rgb(59, 130, 246)',
      glow: 'rgba(59, 130, 246, 0.6)',
      particle: 'rgb(147, 197, 253)'
    },
    secondary: {
      stroke: 'rgb(156, 163, 175)',
      glow: 'rgba(156, 163, 175, 0.4)',
      particle: 'rgb(209, 213, 219)'
    }
  }

  const colorScheme = colors[type]

  return (
    <g className="circuit-connection">
      {/* Background glow */}
      <motion.path
        d={pathData}
        stroke={colorScheme.glow}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 1.5, delay, ease: "easeInOut" },
          opacity: { duration: 0.5, delay }
        }}
        style={{
          filter: 'blur(2px)'
        }}
      />

      {/* Main circuit trace */}
      <motion.path
        d={pathData}
        stroke={colorScheme.stroke}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          delay: delay + 0.5,
          ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for circuit-like animation
        }}
      />

      {/* Animated energy particles */}
      {animated && (
        <>
          {/* Fast particle */}
          <motion.circle
            r="2"
            fill={colorScheme.particle}
            initial={{ offsetDistance: '0%', opacity: 0 }}
            animate={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
            transition={{
              offsetDistance: {
                duration: 3,
                delay: delay + 1,
                repeat: Infinity,
                ease: "linear"
              },
              opacity: {
                duration: 3,
                delay: delay + 1,
                repeat: Infinity,
                times: [0, 0.1, 0.9, 1]
              }
            }}
            style={{
              offsetPath: `path('${pathData}')`,
              filter: 'blur(0.5px)'
            }}
          />

          {/* Slow particle */}
          <motion.circle
            r="1.5"
            fill={colorScheme.particle}
            initial={{ offsetDistance: '0%', opacity: 0 }}
            animate={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
            transition={{
              offsetDistance: {
                duration: 6,
                delay: delay + 2,
                repeat: Infinity,
                ease: "linear"
              },
              opacity: {
                duration: 6,
                delay: delay + 2,
                repeat: Infinity,
                times: [0, 0.1, 0.9, 1]
              }
            }}
            style={{
              offsetPath: `path('${pathData}')`,
              filter: 'blur(0.3px)'
            }}
          />

          {/* Pulsing nodes at connection points */}
          <motion.circle
            cx={startX}
            cy={startY}
            r="3"
            fill={colorScheme.stroke}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              delay: delay + 0.8,
              repeat: Infinity,
              repeatDelay: 4
            }}
            style={{
              filter: `drop-shadow(0 0 4px ${colorScheme.glow})`
            }}
          />

          <motion.circle
            cx={endX}
            cy={endY}
            r="3"
            fill={colorScheme.stroke}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              delay: delay + 1.3,
              repeat: Infinity,
              repeatDelay: 4
            }}
            style={{
              filter: `drop-shadow(0 0 4px ${colorScheme.glow})`
            }}
          />
        </>
      )}

      {/* Circuit pattern overlay */}
      <motion.path
        d={pathData}
        stroke="url(#circuit-pattern)"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="1 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.5,
          delay: delay + 1,
          ease: "easeInOut"
        }}
        opacity="0.6"
      />

      {/* SVG Definitions for patterns */}
      <defs>
        <pattern
          id="circuit-pattern"
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
        >
          <path
            d="M0,10 L5,10 L7,8 L10,12 L13,8 L15,10 L20,10"
            stroke={colorScheme.stroke}
            strokeWidth="1"
            fill="none"
          />
        </pattern>
      </defs>
    </g>
  )
}

