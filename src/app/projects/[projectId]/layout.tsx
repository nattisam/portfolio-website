import { Metadata } from 'next'

export async function generateMetadata({
  params
}: {
  params: { projectId: string }
}): Promise<Metadata> {
  const projectTitles: Record<string, string> = {
    'toye': 'Toye – Restaurant SaaS Platform',
    'alikohub': 'AlikoHub – Developer Platform',
    'ssgi': 'Space Science Journal System',
    'guade-ai': 'Guade AI Platform',
    'yipper': 'Yipper Social Platform',
    'testvalley-clone': 'Testvalley E-commerce Clone',
    'devops': 'DevOps & Tooling',
    'skills': 'Skills & Technologies',
    'career': 'Career Timeline'
  }

  const projectDescriptions: Record<string, string> = {
    'toye': 'A comprehensive restaurant management platform with order processing, inventory management, and customer analytics.',
    'alikohub': 'A collaborative development environment with real-time code sharing, integrated testing, and deployment pipelines.',
    'ssgi': 'Peer-reviewed journal management system for space science research with automated review workflows.',
    'guade-ai': 'Intelligent automation platform for business process optimization using machine learning.',
    'yipper': 'Real-time social networking platform with advanced content moderation and recommendation algorithms.',
    'testvalley-clone': 'Full-stack e-commerce platform with advanced search, filtering, and payment processing.',
    'devops': 'Comprehensive DevOps toolkit with CI/CD pipelines, monitoring, and automated deployment.',
    'skills': 'Personal technology stack and expertise catalog with learning paths and certifications.',
    'career': 'Interactive timeline of professional experience, projects, and achievements.'
  }

  return {
    title: projectTitles[params.projectId] || `${params.projectId} – Nathan Samson Portfolio`,
    description: projectDescriptions[params.projectId] || `Case study for ${params.projectId}`,
  }
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

