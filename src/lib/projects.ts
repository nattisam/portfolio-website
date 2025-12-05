import type { StaticImageData } from 'next/image'

import genbegnaSs1 from '@/lib/images/projects/genbegna/genbegna-ss1.png'
import genbegnaSs2 from '@/lib/images/projects/genbegna/genbegna-ss2.png'
import genbegnaSs3 from '@/lib/images/projects/genbegna/genbegna-ss3.png'

export interface Project {
  id: string
  displayName: string
  shortDescription: string
  techStack: string[]
  imagePaths: (string | StaticImageData)[]
  caseStudyUrl: string
  nodePosition: { x: number; y: number }
  category: 'frontend' | 'backend' | 'fullstack' | 'ai' | 'devops' | 'infrastructure' | 'research' | 'mobile' | 'ecommerce' | 'career' | 'algorithms' | 'gamedev'
  status: 'live' | 'production' | 'beta' | 'development' | 'prototype' | 'completed' | 'active' | 'ongoing' | 'current'
  demoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'toye',
    displayName: 'Toye Business OS',
    shortDescription: 'Multi-tenant SaaS platform supporting HR, Payroll, and Inventory Management with real-time analytics and executive dashboards.',
    techStack: ['NestJS', 'Prisma', 'PostgreSQL', 'Next.js', 'Tailwind CSS', 'Docker', 'Redis', 'NGINX'],
    status: 'ongoing',
    imagePaths: [
      '/images/projects/toye/dashboard.png',
      '/images/projects/toye/analytics.png',
      '/images/projects/toye/hr.png'
    ],
    caseStudyUrl: '/projects/toye',
    nodePosition: { x: 300, y: 80 },
    category: 'fullstack'
  },
  {
    id: 'alikohub',
    displayName: 'AlikoHub',
    shortDescription: 'Multi-service platform integrating education, consulting, and construction management with AWS deployment and CI/CD pipelines.',
    techStack: ['Node.js', 'Laravel', 'PostgreSQL', 'AWS', 'EC2', 'RDS', 'S3', 'NGINX', 'GitHub Actions'],
    status: 'ongoing',
    imagePaths: [
      '/images/projects/alikohub/dashboard.png',
      '/images/projects/alikohub/services.png',
      '/images/projects/alikohub/deployment.png'
    ],
    caseStudyUrl: '/projects/alikohub',
    nodePosition: { x: 80, y: 300 },
    category: 'fullstack'
  },
  {
    id: 'ssgi',
    displayName: 'SSGI Journal Platform',
    shortDescription: 'Secure journal management system for 200+ researchers with OJS deployment, SMTP automation, and 99.9% uptime.',
    techStack: ['Open Journal Systems', 'Apache', 'MySQL', 'Ubuntu', 'VirtualBox'],
    status: 'active',
    imagePaths: [
      '/images/projects/ssgi/dashboard.png',
      '/images/projects/ssgi/submission.png',
      '/images/projects/ssgi/security.png'
    ],
    caseStudyUrl: '/projects/ssgi',
    nodePosition: { x: 520, y: 300 },
    category: 'backend'
  },
  {
    id: 'guade-ai',
    displayName: 'Guade AI',
    shortDescription: 'AI-powered children\'s cognitive skill app with real-time facial emotion analysis, parental dashboards, and TensorFlow CNN model.',
    techStack: ['Flutter', 'TensorFlow', 'Keras', 'FastAPI', 'Next.js', 'Gemini API'],
    status: 'completed',
    imagePaths: [
      '/images/projects/guade/emotion-analysis.png',
      '/images/projects/guade/dashboard.png',
      '/images/projects/guade/learning.png'
    ],
    caseStudyUrl: '/projects/guade-ai',
    demoUrl: 'https://github.com/AASTUSoftwareEngineeringDepartment/Buddy',
    nodePosition: { x: 760, y: 80 },
    category: 'mobile'
  },
  {
    id: 'yipper',
    displayName: 'Yipper',
    shortDescription: 'Full-stack microblogging platform with real-time posting, user feeds, and optimized performance achieving sub-100ms API latency.',
    techStack: ['Node.js', 'Express', 'SQLite', 'JavaScript', 'HTML', 'CSS'],
    status: 'active',
    imagePaths: [
      '/images/projects/yipper/feed.png',
      '/images/projects/yipper/posting.png',
      '/images/projects/yipper/profile.png'
    ],
    caseStudyUrl: '/projects/yipper',
    demoUrl: 'https://github.com/nattisam/yipper.git',
    nodePosition: { x: 100, y: 520 },
    category: 'fullstack'
  },
  {
    id: 'testvalley-clone',
    displayName: 'Testvalley Clone',
    shortDescription: 'UI/UX replication project with responsive design, lazy loading, and 95+ Lighthouse accessibility score.',
    techStack: ['React', 'JSON', 'CSS', 'GitHub Pages'],
    status: 'completed',
    imagePaths: [
      '/images/projects/testvalley/homepage.png',
      '/images/projects/testvalley/products.png',
      '/images/projects/testvalley/responsive.png'
    ],
    caseStudyUrl: '/projects/testvalley-clone',
    demoUrl: 'https://github.com/nattisam/TestvalleyWebClone',
    nodePosition: { x: 400, y: 520 },
    category: 'frontend'
  },
  {
    id: 'assister',
    displayName: 'Assister',
    shortDescription: 'AI-powered refugee aid platform with LLM symptom checker, multilingual emergency alerts, and geolocation services.',
    techStack: ['React Native', 'Firebase', 'MongoDB', 'OpenAI API'],
    status: 'production',
    imagePaths: [
      '/images/projects/assister/chat.png',
      '/images/projects/assister/symptoms.png',
      '/images/projects/assister/alerts.png'
    ],
    caseStudyUrl: '/projects/assister',
    demoUrl: 'https://github.com/nattisam/Refugee-Assister',
    nodePosition: { x: 640, y: 400 },
    category: 'ai'
  },
  {
    id: 'nateshoeshop',
    displayName: 'Nate Shoe Shop',
    shortDescription: 'React-based e-commerce demo with advanced filtering, cart functionality, and Lighthouse performance score >90.',
    techStack: ['React', 'SASS', 'Vercel'],
    status: 'live',
    imagePaths: [
      '/images/projects/shoeshop/storefront.png',
      '/images/projects/shoeshop/filtering.png',
      '/images/projects/shoeshop/cart.png'
    ],
    caseStudyUrl: '/projects/nateshoeshop',
    demoUrl: 'https://nateshoeshop.vercel.app/',
    nodePosition: { x: 250, y: 650 },
    category: 'frontend'
  },
  {
    id: 'user-auth',
    displayName: 'Secure Auth System',
    shortDescription: 'Node.js authentication system with Passport.js, bcrypt hashing, and CSRF protection achieving <80ms response times.',
    techStack: ['Node.js', 'Express', 'Passport.js', 'bcrypt', 'EJS'],
    status: 'active',
    imagePaths: [
      '/images/projects/auth/login.png',
      '/images/projects/auth/registration.png',
      '/images/projects/auth/security.png'
    ],
    caseStudyUrl: '/projects/user-auth',
    demoUrl: 'https://github.com/nattisam/UserAuthentication',
    nodePosition: { x: 50, y: 720 },
    category: 'backend'
  },
  {
    id: 'ball-breaker',
    displayName: 'Ball Breaker Game',
    shortDescription: 'OpenGL arcade game with collision physics, paddle controls, and optimized 60 FPS rendering performance.',
    techStack: ['C++', 'OpenGL'],
    status: 'completed',
    imagePaths: [
      '/images/projects/ballbreaker/gameplay.png',
      '/images/projects/ballbreaker/physics.png',
      '/images/projects/ballbreaker/controls.png'
    ],
    caseStudyUrl: '/projects/ball-breaker',
    demoUrl: 'https://github.com/nattisam/BallBreakerGame',
    nodePosition: { x: 850, y: 550 },
    category: 'gamedev'
  },
  {
    id: 'genbegna',
    displayName: 'Genbegna',
    shortDescription:
      'Access platform handling construction projects, files, and contractors with multi-layered security.',
    techStack: [
      'Node.js',
      'Express',
      'SQLite (better-sqlite3)',
      'bcrypt',
    ],
    status: 'active',
    imagePaths: [genbegnaSs1, genbegnaSs2, genbegnaSs3],
    caseStudyUrl: '/projects/genbegna',
    demoUrl: 'https://github.com/nattisam/genbegna',
    nodePosition: { x: 900, y: 240 },
    category: 'backend'
  },
  {
    id: 'bst-implementation',
    displayName: 'Binary Search Tree',
    shortDescription: 'C++ BST implementation with O(log n) operations, recursive traversal, and memory-safe dynamic allocation.',
    techStack: ['C++', 'Makefile'],
    status: 'completed',
    imagePaths: [
      '/images/projects/bst/structure.png',
      '/images/projects/bst/operations.png',
      '/images/projects/bst/performance.png'
    ],
    caseStudyUrl: '/projects/bst-implementation',
    demoUrl: 'https://github.com/nattisam/BinarySearchTreeImplementation',
    nodePosition: { x: 700, y: 720 },
    category: 'algorithms'
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

// Utility functions for status styling
export const getStatusColor = (status: string) => {
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

export const getStatusGlow = (status: string) => {
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

// Type exports for convenience
export type ProjectCategory = Project['category']
export type ProjectStatus = Project['status']
