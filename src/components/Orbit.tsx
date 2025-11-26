'use client'

import { motion } from 'framer-motion'

interface OrbitProps {
  radius?: number
  radiusX?: number
  radiusY?: number
  centerX: number
  centerY: number
  isActive: boolean
  isSlanted?: boolean
}

export default function Orbit({ radius, radiusX, radiusY, centerX, centerY, isActive, isSlanted = false }: OrbitProps) {
  // Use radiusX/radiusY if provided for elliptical orbits
  const rx = radiusX || radius || 100
  const ry = radiusY || radius || 100

  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        left: centerX - rx,
        top: centerY - ry,
        width: rx * 2,
        height: ry * 2
      }}
    >
      <motion.ellipse
        cx={rx}
        cy={ry}
        rx={rx}
        ry={ry}
        fill="none"
        stroke="rgba(34, 211, 238, 0.2)"
        strokeWidth="1"
        animate={{
          stroke: isActive ? 'rgba(34, 211, 238, 0.4)' : 'rgba(34, 211, 238, 0.2)',
          filter: isActive ? 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.3))' : 'none'
        }}
        transition={{ duration: 0.5 }}
      />
    </svg>
  )
}
