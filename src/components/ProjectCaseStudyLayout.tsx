'use client'

import Link from 'next/link'

interface ProjectCaseStudyLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  technologies: string[]
  status: string
  projectId: string
}

export default function ProjectCaseStudyLayout({
  children,
  title,
  description,
  technologies,
  status,
  projectId
}: ProjectCaseStudyLayoutProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'live':
        return 'bg-green-500'
      case 'production':
        return 'bg-blue-500'
      case 'beta':
        return 'bg-yellow-500'
      case 'development':
        return 'bg-orange-500'
      case 'prototype':
        return 'bg-purple-500'
      case 'completed':
        return 'bg-gray-500'
      case 'active':
        return 'bg-cyan-500'
      case 'ongoing':
        return 'bg-indigo-500'
      case 'current':
        return 'bg-pink-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background-secondary/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>

            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(status)} text-white`}>
                {status}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Technologies Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-background-secondary/50 rounded-lg p-4 border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-background-tertiary text-foreground-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="prose prose-invert max-w-none">
              {/* Project Header */}
              <div className="mb-12 pb-8 border-b border-border">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                  {title}
                </h1>
                <p className="text-xl text-foreground-muted leading-relaxed">
                  {description}
                </p>
              </div>

              {/* MDX Content */}
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
