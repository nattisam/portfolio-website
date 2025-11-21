'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card } from '@/ui/card'
import { Button } from '@/ui/button'

export default function ProjectsPage() {
  const projects = [
    {
      id: 'project-1',
      title: 'Distributed System Architecture',
      description: 'A comprehensive case study on building scalable distributed systems.',
      tags: ['Architecture', 'Scalability', 'Cloud'],
    },
    {
      id: 'project-2',
      title: 'Microservices Platform',
      description: 'Design and implementation of a robust microservices platform.',
      tags: ['Microservices', 'Kubernetes', 'DevOps'],
    },
  ]

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
                  <h2 className="text-2xl font-semibold mb-3 text-accent">
                    {project.title}
                  </h2>
                  <p className="text-foreground-muted mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-background-tertiary text-foreground-muted border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    href={`/projects/${project.id}`}
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

