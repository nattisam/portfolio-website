import { Metadata } from 'next'

export async function generateMetadata({ 
  params 
}: { 
  params: { projectId: string } 
}): Promise<Metadata> {
  return {
    title: `${params.projectId} – Nathan Samson Portfolio`,
    description: `Case study for ${params.projectId}`,
  }
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
        {children}
      </div>
    </div>
  )
}

