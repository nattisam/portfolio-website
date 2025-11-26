export interface Project {
  id: string
  displayName: string
  shortDescription: string
  techStack: string[]
  imagePaths: string[]
  caseStudyUrl: string
  nodePosition: { x: number; y: number }
  category: 'frontend' | 'backend' | 'fullstack' | 'ai' | 'devops' | 'infrastructure' | 'research' | 'social' | 'ecommerce' | 'career'
  status: 'live' | 'production' | 'beta' | 'development' | 'prototype' | 'completed' | 'active' | 'ongoing' | 'current'
  demoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'toye',
    displayName: 'Toye',
    shortDescription: 'A comprehensive restaurant management platform with order processing, inventory management, and customer analytics. Features real-time order tracking, automated inventory optimization, and detailed business insights.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe', 'Socket.io'],
    status: 'live',
    imagePaths: [
      '/images/projects/toye/dashboard.png',
      '/images/projects/toye/orders.png',
      '/images/projects/toye/analytics.png'
    ],
    caseStudyUrl: '/projects/toye',
    demoUrl: 'https://toye-demo.vercel.app',
    nodePosition: { x: 250, y: 100 },
    category: 'fullstack'
  },
  {
    id: 'alikohub',
    displayName: 'AlikoHub',
    shortDescription: 'A collaborative development environment with real-time code sharing, integrated testing, and deployment pipelines. Built for modern development teams.',
    techStack: ['Next.js', 'Socket.io', 'Docker', 'Kubernetes', 'GraphQL'],
    status: 'beta',
    imagePaths: [
      '/images/projects/alikohub/editor.png',
      '/images/projects/alikohub/collaboration.png',
      '/images/projects/alikohub/deploy.png'
    ],
    caseStudyUrl: '/projects/alikohub',
    nodePosition: { x: 100, y: 250 },
    category: 'fullstack'
  },
  {
    id: 'ssgi',
    displayName: 'Space Science Journal System',
    shortDescription: 'Peer-reviewed journal management system for space science research with automated review workflows and publication pipeline.',
    techStack: ['Python', 'Django', 'PostgreSQL', 'LaTeX', 'Redis'],
    status: 'production',
    imagePaths: [
      '/images/projects/ssgi/submission.png',
      '/images/projects/ssgi/review.png',
      '/images/projects/ssgi/publication.png'
    ],
    caseStudyUrl: '/projects/ssgi',
    demoUrl: 'https://ssgi-research.org',
    nodePosition: { x: 400, y: 250 },
    category: 'backend'
  },
  {
    id: 'guade-ai',
    displayName: 'Guade AI',
    shortDescription: 'Intelligent automation platform for business process optimization using machine learning and advanced analytics.',
    techStack: ['TensorFlow', 'Python', 'FastAPI', 'React', 'PostgreSQL'],
    status: 'development',
    imagePaths: [
      '/images/projects/guade/dashboard.png',
      '/images/projects/guade/automation.png',
      '/images/projects/guade/analytics.png'
    ],
    caseStudyUrl: '/projects/guade-ai',
    nodePosition: { x: 600, y: 100 },
    category: 'ai'
  },
  {
    id: 'yipper',
    displayName: 'Yipper',
    shortDescription: 'Real-time social networking platform with advanced content moderation and recommendation algorithms.',
    techStack: ['Next.js', 'GraphQL', 'Redis', 'MongoDB', 'WebRTC'],
    status: 'prototype',
    imagePaths: [
      '/images/projects/yipper/feed.png',
      '/images/projects/yipper/chat.png',
      '/images/projects/yipper/moderation.png'
    ],
    caseStudyUrl: '/projects/yipper',
    nodePosition: { x: 50, y: 450 },
    category: 'fullstack'
  },
  {
    id: 'testvalley-clone',
    displayName: 'Testvalley Clone',
    shortDescription: 'Full-stack e-commerce platform with advanced search, filtering, and payment processing capabilities.',
    techStack: ['React', 'Express.js', 'MongoDB', 'Stripe', 'Algolia'],
    status: 'completed',
    imagePaths: [
      '/images/projects/testvalley/storefront.png',
      '/images/projects/testvalley/checkout.png',
      '/images/projects/testvalley/admin.png'
    ],
    caseStudyUrl: '/projects/testvalley-clone',
    nodePosition: { x: 350, y: 450 },
    category: 'ecommerce'
  },
  {
    id: 'devops',
    displayName: 'DevOps & Tooling',
    shortDescription: 'Comprehensive DevOps toolkit with CI/CD pipelines, monitoring, and automated deployment solutions.',
    techStack: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus'],
    status: 'active',
    imagePaths: [
      '/images/projects/devops/pipeline.png',
      '/images/projects/devops/monitoring.png',
      '/images/projects/devops/infrastructure.png'
    ],
    caseStudyUrl: '/projects/devops',
    nodePosition: { x: 650, y: 350 },
    category: 'devops'
  },
  {
    id: 'skills',
    displayName: 'Skills & Technologies',
    shortDescription: 'Personal technology stack and expertise catalog with learning paths and certifications.',
    techStack: ['Documentation', 'Learning Management', 'Certification Tracking'],
    status: 'ongoing',
    imagePaths: [
      '/images/projects/skills/overview.png',
      '/images/projects/skills/learning.png',
      '/images/projects/skills/certifications.png'
    ],
    caseStudyUrl: '/projects/skills',
    nodePosition: { x: 150, y: 600 },
    category: 'career'
  },
  {
    id: 'career',
    displayName: 'Career Timeline',
    shortDescription: 'Interactive timeline of professional experience, projects, and achievements throughout the career.',
    techStack: ['Career Development', 'Project Management', 'Professional Growth'],
    status: 'current',
    imagePaths: [
      '/images/projects/career/timeline.png',
      '/images/projects/career/achievements.png',
      '/images/projects/career/experience.png'
    ],
    caseStudyUrl: '/projects/career',
    nodePosition: { x: 550, y: 600 },
    category: 'career'
  },
]

// Utility functions for working with projects
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getAllProjects = (): Project[] => {
  return projects
}

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category)
}

export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return projects.filter(project => project.status === status)
}

export const getLiveProjects = (): Project[] => {
  return projects.filter(project => project.status === 'live' || project.status === 'production')
}

export const getTechStack = (): string[] => {
  const allTech = projects.flatMap(project => project.techStack)
  return [...new Set(allTech)].sort()
}
