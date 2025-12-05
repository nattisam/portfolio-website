'use client'

import { useState, useEffect, useMemo, useLayoutEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, Project } from '@/lib/projects'
import Planet from './Planet'
import Orbit from './Orbit'
import Meteor from './Meteor'

interface SolarSystemProps {
  onPlanetClick: (project: Project) => void
  onSunClick: () => void
}

export default function SolarSystem({ onPlanetClick, onSunClick }: SolarSystemProps) {
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null)
  const [meteors, setMeteors] = useState<number[]>([])

  const [dimensions, setDimensions] = useState({
    width: 1200,
    height: 800,
    viewportScale: 1,
    sunSize: 220,
    orbitSpacing: 120,
    planetSize: 70
  })

  const calculateDimensions = () => {
    if (typeof window === 'undefined') return
    const width = window.innerWidth
    const height = window.innerHeight
    const referenceWidth = 1400
    const referenceHeight = 900
    const viewportScale = Math.min(1, width / referenceWidth, height / referenceHeight)
    setDimensions({
      width,
      height,
      viewportScale,
      sunSize: Math.max(50, 150 * viewportScale),
      orbitSpacing: Math.max(30, 70 * viewportScale),
      planetSize: Math.max(20, 50 * viewportScale)
    })
  }

  useLayoutEffect(() => {
    calculateDimensions()
  }, [])

  useEffect(() => {
    const resizeHandler = () => calculateDimensions()
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  // Meteor spawning system
  useEffect(() => {

    const spawnMeteor = () => {
      const newMeteorId = Date.now() + Math.random()
      setMeteors(prev => [...prev, newMeteorId])

      // Remove meteor after animation completes
      setTimeout(() => {
        setMeteors(prev => prev.filter(id => id !== newMeteorId))
      }, 14000) // Slightly longer than animation duration
    }

    // Spawn meteors occasionally (every 15-30 seconds)
    const scheduleNextMeteor = () => {
      const delay = 5000 + Math.random() * 5000 // 15-30 seconds
      setTimeout(() => {
        spawnMeteor()
        scheduleNextMeteor() // Schedule next one
      }, delay)
    }

    // Start the meteor spawning cycle
    const initialDelay = 5000 + Math.random() * 10000 // 5-15 seconds initial delay
    setTimeout(scheduleNextMeteor, initialDelay)

    return () => {
      // Cleanup any pending timeouts
    }
  }, [])

  const dims = dimensions

  // Generate evenly distributed planet properties
  const planetProperties = useMemo(() => {
    const properties: { [key: string]: {
      angle: number
      sizeMultiplier: number
      rotationSpeed: number
      colorVariant: number
    } } = {}

    // Distribute planets evenly around the solar system with maximum spacing
    projects.forEach((project, index) => {
      // Calculate even angular distribution for maximum spacing
      const baseAngle = (index * 360) / projects.length
      // Add minimal randomization (±5°) to avoid perfect alignment
      const angle = baseAngle + (Math.random() - 0.5) * 10

      properties[project.id] = {
        angle: angle,
        sizeMultiplier: 0.8 + Math.random() * 0.7,
        rotationSpeed: 45 + Math.random() * 90,
        colorVariant: Math.random()
      }
    })

    return properties
  }, [])

  const handleMeteorComplete = (meteorId: number) => {
    setMeteors(prev => prev.filter(id => id !== meteorId))
  }

  // Move solar system slightly upward for better composition
  const centerX = dims.width / 2
  const centerY = dims.height / 2 - dims.height * 0.12

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ height: '100vh' }}>
      {/* Instruction sign at top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-6 left-20 transform -translate-x-1/2 z-30"
      >
        <div className="bg-slate-900/90 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-6 py-3 shadow-2xl">
          <div className="text-cyan-400 text-center font-medium">
            Click planets for projects • Click sun for about me
          </div>
        </div>
      </motion.div>

      {/* Slanted orbits container - only for orbits */}
      <div
        className="absolute inset-0"
        style={{
          transform: 'rotateX(30deg) rotateY(-15deg)',
          transformStyle: 'preserve-3d',
          perspective: '100px'
        }}
      >

      {/* Orbits - slanted elliptical view */}
      {projects.map((_, index) => {
        const orbitRadius = dims.sunSize / 2 + (index + 1) * dims.orbitSpacing

        return (
          <Orbit
            key={index}
            radiusX={orbitRadius * 2.5}
            radiusY={orbitRadius * 0.4}
            centerX={centerX}
            centerY={centerY}
            isActive={hoveredPlanet !== null}
            isSlanted={true}
          />
        )
      })}
      </div> {/* End slanted orbits container */}

      {/* Straight view for planets, sun, and info boxes */}
      <div className="absolute inset-0">

      {/* Planets - evenly distributed around solar system */}
      {projects.map((project, index) => {
        const properties = planetProperties[project.id]
        const radianAngle = (properties.angle * Math.PI) / 180

        // All planets use their natural orbit index for even distribution
        const orbitRadius = dims.sunSize / 2 + index * dims.orbitSpacing

        // Position planets in straight view
        let planetX = centerX + Math.cos(radianAngle) * orbitRadius
        let planetY = centerY + Math.sin(radianAngle) * orbitRadius

        // Ensure planets stay within screen bounds and don't overlap sun
        const planetRadius = dims.planetSize * properties.sizeMultiplier / 2
        const sunRadius = dims.sunSize / 2

        // Check if planet would be too close to sun
        const distanceFromSun = Math.sqrt(
          Math.pow(planetX - centerX, 2) + Math.pow(planetY - centerY, 2)
        )

        // If too close to sun, push it outward with larger buffer
        const extraBuffer = project.id === 'user-auth' ? 200 : 120
        if (distanceFromSun < sunRadius + planetRadius + extraBuffer / 2) {
          const minDistance = sunRadius + planetRadius + extraBuffer
          const pushFactor = minDistance / Math.max(distanceFromSun, 1)
          planetX = centerX + (planetX - centerX) * pushFactor
          planetY = centerY + (planetY - centerY) * pushFactor
        }

        // Strict bounds checking
        const minX = planetRadius + 20
        const maxX = dims.width - planetRadius - 20
        const minY = planetRadius + 140 // Account for top instruction sign
        const maxY = dims.height - planetRadius - 20

        planetX = Math.max(minX, Math.min(maxX, planetX))
        planetY = Math.max(minY, Math.min(maxY, planetY))

        return (
          <Planet
            key={project.id}
            project={project}
            x={planetX}
            y={planetY}
            baseSize={dims.planetSize}
            sizeMultiplier={properties.sizeMultiplier}
            colorVariant={properties.colorVariant}
            rotationSpeed={properties.rotationSpeed}
            isHovered={hoveredPlanet === project.id}
            onHover={() => setHoveredPlanet(project.id)}
            onLeave={() => setHoveredPlanet(null)}
            onClick={() => onPlanetClick(project)}
            delay={index * 0.1}
          />
        )
      })}

      {/* Sun */}
      <div
        className="absolute"
        style={{
          left: centerX - dims.sunSize / 2,
          top: centerY - dims.sunSize / 2,
          width: dims.sunSize,
          height: dims.sunSize
        }}
      >
        {/* Clickable overlay for entire sun area */}
        <div
          className="absolute inset-0 cursor-pointer z-10"
          onMouseEnter={() => setHoveredPlanet('sun')}
          onMouseLeave={() => setHoveredPlanet(null)}
          onClick={onSunClick}
          style={{ borderRadius: '50%' }}
        />

        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        {/* Sun glow layers */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
          animate={{
            boxShadow: [
              '0 0 60px rgba(251, 191, 36, 0.6), 0 0 120px rgba(251, 191, 36, 0.3)',
              '0 0 80px rgba(249, 115, 22, 0.8), 0 0 160px rgba(249, 115, 22, 0.4)',
              '0 0 60px rgba(251, 191, 36, 0.6), 0 0 120px rgba(251, 191, 36, 0.3)'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Sun core */}
        <motion.div
          className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-200 to-orange-600 border-2 border-yellow-300/50"
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Sun corona - subtle glow */}
        <div className="absolute inset-0 rounded-full opacity-30"
             style={{
               background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(249, 115, 22, 0.2) 50%, transparent 70%)'
             }}
        />

        {/* Sun center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full shadow-lg" />
        </div>

        </motion.div>

        {/* Sun hover info box */}
        <AnimatePresence>
          {hoveredPlanet === 'sun' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute pointer-events-none"
              style={{
                top: dims.sunSize + 15,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 40
              }}
            >
              <div className="bg-slate-900/95 backdrop-blur-sm border border-cyan-400/50 rounded-lg px-4 py-3 shadow-2xl">
                <div className="text-cyan-400 text-center">About Me</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div> {/* End straight view container */}

      {/* Meteors */}
      {meteors.map(meteorId => (
        <Meteor
          key={meteorId}
          id={meteorId}
          onComplete={handleMeteorComplete}
        />
      ))}

      </div> {/* End main container */}
    </div>
  )
}
