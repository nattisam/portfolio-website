'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedBackground from '@/components/AnimatedBackground'
import SolarSystem from '@/components/SolarSystem'
import ProjectDrawer from '@/components/ProjectDrawer'
import AboutModal from '@/components/AboutModal'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [isFirstVisit, setIsFirstVisit] = useState(false)

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem('hasVisitedHome')
    if (!hasVisited) {
      setIsFirstVisit(true)
      setShowWelcome(true)
      sessionStorage.setItem('hasVisitedHome', 'true')
      // Hide welcome after 3 seconds only on first visit
      const timer = setTimeout(() => {
        setShowWelcome(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handlePlanetClick = (projectData: any) => {
    setSelectedProject(projectData)
    setIsDrawerOpen(true)
  }

  const handleSunClick = () => {
    setIsAboutOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
    setSelectedProject(null)
  }

  const handleCloseAbout = () => {
    setIsAboutOpen(false)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden fixed inset-0">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Solar System */}
      <SolarSystem
        onPlanetClick={handlePlanetClick}
        onSunClick={handleSunClick}
      />

      {/* Project Details Drawer */}
      <ProjectDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        project={selectedProject}
      />

      {/* About Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={handleCloseAbout}
      />

      {/* Welcome Overlay - Only on first visit, non-blocking */}
      <AnimatePresence>
        {showWelcome && isFirstVisit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.6) 40%, rgba(15, 23, 42, 0.35) 70%, transparent 100%)'
            }}
          >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
            className="w-20 h-20 mx-auto mb-6 border-2 border-cyan-400/50 rounded-full flex items-center justify-center"
          >
            <div className="w-12 h-12 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
          >
            Nathan Samson
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl md:text-2xl text-slate-300 font-mono mb-8"
          >
            Full Stack Engineer
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-slate-400"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Initializing Solar System</span>
          </motion.div>
        </motion.div>
      </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

