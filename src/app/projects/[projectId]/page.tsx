'use client'

import Image, { type StaticImageData } from 'next/image'
import ProjectCaseStudyLayout from '@/components/ProjectCaseStudyLayout'
import { projectCaseStudies } from '@/lib/projectCaseStudies'
import { projects } from '@/lib/projects'

export default function ProjectCaseStudy({ params }: { params: { projectId: string } }) {
  const study = projectCaseStudies[params.projectId]
  const projectImages: (string | StaticImageData)[] =
    projects.find((project) => project.id === params.projectId)?.imagePaths ?? []

  if (!study) {
    return (
      <ProjectCaseStudyLayout
        title={`${params.projectId} – Nathan Samson Portfolio`}
        description="Case study coming soon."
        technologies={['TBD']}
        status="development"
        projectId={params.projectId}
      >
        <div className="prose prose-invert max-w-none">
          <p>This project is pending a case study. Check back soon!</p>
        </div>
      </ProjectCaseStudyLayout>
    )
  }

  return (
    <ProjectCaseStudyLayout
      title={study.title}
      description={study.description}
      technologies={study.technologies}
      status={study.status}
      projectId={params.projectId}
    >
      <div className="prose prose-invert max-w-none space-y-10">
        {projectImages.length > 0 && (
          <section>
            <h2>Snapshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectImages.slice(0, 3).map((imagePath, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-lg"
                >
                  <Image
                    src={imagePath}
                    alt={`${study.title} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABIklEQVR4nO3ZsW3DMAwA4NDuEXnWDiYFo3gQLyyZ4mVjV3GjoDJXn9xnBvAbOZWpSocrotpXmyhE8b+YkM3tBAAAAAAAAgHPu2eC0ibkZWm8/3eYJ4b16X7x/1b71Wr3v3OL/Px/+qlgAAAAAAAAAEzFy9UOAJt5Q9QvWnFrvGMUqLhZJj7+Vln8fPjS6ebIdE5G45S+55n1vce3u60n/1rdw3RCW5Jec2NkQ9teY8Zb3Njx+73jww5bfED8+zMZ36d45zxHc0WoqnLifehXCS7OkZV6jqXnWP1OxZ9A6n+PDBIAAAAAAAAAfYH4PRqymv/8iO4wAAAABJRU5ErkJggg=="
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2>Timeline</h2>
          <p>{study.timeline}</p>
        </section>

        <section>
          <h2>Highlights</h2>
          <ul>
            {study.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Implementation</h2>
          <p>{study.architecture}</p>
        </section>

        {study.results.length > 0 && (
          <section>
            <h2>Results</h2>
            <ul>
              {study.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {(study.repo || study.demo) && (
          <section>
            <h2>Links</h2>
            <div className="flex flex-wrap gap-3">
              {study.repo && (
                <a
                  href={study.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-accent text-black rounded-full font-semibold text-sm hover:bg-accent/90 transition"
                >
                  GitHub Repository
                </a>
              )}
              {study.demo && (
                <a
                  href={study.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-foreground text-foreground rounded-full font-semibold text-sm hover:bg-foreground hover:text-background transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </section>
        )}
      </div>
    </ProjectCaseStudyLayout>
  )
}

