'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card } from '@/ui/card'
import { Button } from '@/ui/button'
import { projects, getStatusColor } from '@/lib/projects'

export default function ProjectsPage() {

  return (
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
          Projects
        </h1>
        <p className="text-xl text-foreground-muted mb-12 max-w-2xl">
          Explore detailed case studies of systems architecture projects, 
          engineering solutions, and technical implementations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:neon-border transition-all duration-300 flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)} animate-pulse`}></div>
                    <h2 className="text-2xl font-semibold text-accent">
                      {project.displayName}
                    </h2>
                  </div>
                  <p className="text-foreground-muted mb-4 flex-1">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-background-tertiary text-foreground-muted border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-background-tertiary text-foreground-muted border border-border">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(project.status)} text-white`}>
                      {project.status}
                    </span>
                    <span className="text-xs text-foreground-muted capitalize">
                      {project.category}
                    </span>
                  </div>
                  <Button
                    href={project.caseStudyUrl}
                    variant="ghost"
                    className="w-full"
                  >
                    Read Case Study →
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

