'use client'

import ProjectCaseStudyLayout from '@/components/ProjectCaseStudyLayout'

export default function ProjectCaseStudy({ params }: { params: { projectId: string } }) {
  return (
    <ProjectCaseStudyLayout
      title={`${params.projectId} – Nathan Samson Portfolio`}
      description={`Case study for ${params.projectId} project.`}
      technologies={['TBD']}
      status="development"
      projectId={params.projectId}
    >
      <div className="prose prose-invert max-w-none">
        <h1>{params.projectId} Case Study</h1>
        <p>This is a sample project case study page. You can customize this content for each project.</p>

        <h2>Overview</h2>
        <p>This project demonstrates the power of modern web development for creating rich, interactive case studies.</p>

        <h2>Architecture</h2>
        <p>The system is built with modern technologies and best practices.</p>

        <h2>Results</h2>
        <p>Outstanding results achieved through careful planning and execution.</p>
      </div>
    </ProjectCaseStudyLayout>
  )
}
