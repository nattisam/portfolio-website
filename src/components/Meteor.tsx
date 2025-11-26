'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface MeteorProps {
  id: number
  onComplete: (id: number) => void
}

export default function Meteor({ id, onComplete }: MeteorProps) {
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })
  const [endPosition, setEndPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Random start position (left side of screen)
    const startX = -100
    const startY = Math.random() * (window.innerHeight * 0.6) + (window.innerHeight * 0.2)

    // Random end position (right side of screen, slightly angled)
    const endX = window.innerWidth + 100
    const endY = startY + (Math.random() - 0.5) * 200 // Slight angle variation

    setStartPosition({ x: startX, y: startY })
    setEndPosition({ x: endX, y: endY })
  }, [])

  return (
    <motion.div
      className="absolute pointer-events-none z-5"
      style={{
        left: startPosition.x,
        top: startPosition.y,
        width: 80,
        height: 2
      }}
      initial={{ opacity: 0 }}
      animate={{
        x: endPosition.x - startPosition.x,
        y: endPosition.y - startPosition.y,
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: 8 + Math.random() * 4, // 8-12 seconds
        ease: "easeOut",
        opacity: {
          times: [0, 0.1, 0.9, 1],
          duration: 8 + Math.random() * 4
        }
      }}
      onAnimationComplete={() => onComplete(id)}
    >
      {/* Meteor trail */}
      <div
        className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        style={{
          filter: 'blur(0.5px)',
          opacity: 0.8
        }}
      />
    </motion.div>
  )
}
