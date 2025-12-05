'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/ui/button'
import Link from 'next/link'
import Image, { type StaticImageData } from 'next/image'

interface ProjectDrawerProps {
  isOpen: boolean
  onClose: () => void
  project: {
    id: string
    displayName: string
    category: string
    shortDescription: string
    techStack: string[]
    status: string
    imagePaths: string[]
    caseStudyUrl: string
    demoUrl?: string
  } | null
}

export default function ProjectDrawer({ isOpen, onClose, project }: ProjectDrawerProps) {
  const [lightboxImage, setLightboxImage] = useState<string | StaticImageData | undefined>(undefined)
  const [imageLoading, setImageLoading] = useState(true)

  if (!project) return null

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'live':
        return 'bg-green-500 shadow-green-500/20'
      case 'production':
        return 'bg-blue-500 shadow-blue-500/20'
      case 'beta':
        return 'bg-yellow-500 shadow-yellow-500/20'
      case 'development':
        return 'bg-orange-500 shadow-orange-500/20'
      case 'prototype':
        return 'bg-purple-500 shadow-purple-500/20'
      case 'completed':
        return 'bg-gray-500 shadow-gray-500/20'
      case 'active':
        return 'bg-cyan-500 shadow-cyan-500/20'
      case 'ongoing':
        return 'bg-indigo-500 shadow-indigo-500/20'
      case 'current':
        return 'bg-pink-500 shadow-pink-500/20'
      default:
        return 'bg-gray-500 shadow-gray-500/20'
    }
  }

  const getStatusGlow = (status: string) => {
    switch (status.toLowerCase()) {
      case 'live':
        return 'shadow-[0_0_20px_rgba(34,197,94,0.3)]'
      case 'production':
        return 'shadow-[0_0_20px_rgba(59,130,246,0.3)]'
      case 'beta':
        return 'shadow-[0_0_20px_rgba(234,179,8,0.3)]'
      case 'development':
        return 'shadow-[0_0_20px_rgba(249,115,22,0.3)]'
      case 'prototype':
        return 'shadow-[0_0_20px_rgba(147,51,234,0.3)]'
      case 'completed':
        return 'shadow-[0_0_20px_rgba(107,114,128,0.3)]'
      case 'active':
        return 'shadow-[0_0_20px_rgba(6,182,212,0.3)]'
      case 'ongoing':
        return 'shadow-[0_0_20px_rgba(99,102,241,0.3)]'
      case 'current':
        return 'shadow-[0_0_20px_rgba(236,72,153,0.3)]'
      default:
        return 'shadow-[0_0_20px_rgba(107,114,128,0.3)]'
    }
  }

  return (
    <>
      <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 300,
              duration: 0.4
            }}
            className={`fixed right-0 top-0 h-full w-full max-w-lg bg-background border-l border-accent/20 z-50 overflow-y-auto ${getStatusGlow(project.status)}`}
          >
            <div className="p-8 flex flex-col relative min-h-full">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5 pointer-events-none" />

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between mb-8 relative z-10"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 500 }}
                    className={`w-4 h-4 rounded-full ${getStatusColor(project.status)} ${getStatusGlow(project.status)}`}
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gradient">{project.displayName}</h2>
                    <p className="text-sm text-foreground-muted font-medium">{project.category}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="p-2 hover:bg-accent/10 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              </motion.div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-8 relative z-10"
              >
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(project.status)} text-white border border-white/20 ${getStatusGlow(project.status)}`}>
                  {project.status}
                </span>
              </motion.div>

              {/* Screenshots */}
              {project.imagePaths && project.imagePaths.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8 relative z-10"
                >
                  <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full"></span>
                    Screenshots
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {project.imagePaths.slice(0, 3).map((imagePath, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="group aspect-video rounded-lg border border-border overflow-hidden transition-all duration-300 relative bg-slate-900 shadow-lg hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20 cursor-pointer"
                      >
                        <button
                          onClick={() => {
                            setImageLoading(true)
                            setLightboxImage(imagePath)
                          }}
                          className="absolute inset-0 z-20 cursor-pointer"
                          aria-label={`Open screenshot ${index + 1}`}
                        />
                        <Image
                          src={imagePath}
                          alt={`${project.displayName} screenshot ${index + 1}`}
                          width={360}
                          height={200}
                          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="bg-accent/20 backdrop-blur-sm rounded-full p-3 border border-accent/50">
                            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                            </svg>
                          </div>
                        </div>
                        <span className="absolute bottom-2 left-3 z-10 text-xs text-foreground-muted uppercase tracking-wide group-hover:text-accent transition-colors duration-300">
                          Screenshot {index + 1}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex-1 mb-8 relative z-10"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-1 h-4 bg-accent rounded-full"></span>
                  Overview
                </h3>
                <p className="text-foreground-muted leading-relaxed text-sm">
                  {project.shortDescription}
                </p>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-8 relative z-10"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-1 h-4 bg-accent rounded-full"></span>
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                      className="px-3 py-2 text-xs rounded-full bg-gradient-to-r from-accent/10 to-accent-secondary/10 text-accent border border-accent/20 hover:border-accent/50 hover:bg-accent/20 transition-all duration-300 hover:scale-105 font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex gap-3 relative z-10"
              >
                <Link href={project.caseStudyUrl} className="flex-1">
                  <Button
                    variant="primary"
                    className="w-full bg-gradient-to-r from-accent to-accent-secondary hover:from-accent-secondary hover:to-accent border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Open Full Case Study
                  </Button>
                </Link>
                {project.demoUrl && (
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      className="px-4 hover:bg-accent/10 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Button>
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
      </AnimatePresence>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setLightboxImage(undefined)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-[min(90vw,900px)] h-[min(90vh,90vw)] rounded-2xl overflow-hidden bg-slate-900 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxImage(undefined)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-110"
                aria-label="Close lightbox"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Loading spinner */}
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              {/* Optimized image */}
              <Image
                src={lightboxImage}
                alt="Project screenshot"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 900px"
                quality={75}
                priority
                onLoad={() => setImageLoading(false)}
                onLoadingComplete={() => setImageLoading(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
