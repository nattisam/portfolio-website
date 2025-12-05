import type { StaticImageData } from 'next/image'

import toyeSs1 from '@/lib/images/projects/toye/toye-ss1.png'
import toyeSs2 from '@/lib/images/projects/toye/toye-ss2.png'
import toyeSs3 from '@/lib/images/projects/toye/toye-ss3.png'
import alikohubSs1 from '@/lib/images/projects/alikohub/alikohub-ss1.png'
import alikohubSs2 from '@/lib/images/projects/alikohub/alikohub-ss2.png'
import alikohubSs3 from '@/lib/images/projects/alikohub/alikohub-ss3.png'
import ssgiSs1 from '@/lib/images/projects/ssgi/ssgi-ss1.png'
import ssgiSs2 from '@/lib/images/projects/ssgi/ssgi-ss2.png'
import ssgiSs3 from '@/lib/images/projects/ssgi/ssgi-ss3.png'
import guadeSs1 from '@/lib/images/projects/guade/guade-ss1.png'
import guadeSs2 from '@/lib/images/projects/guade/guade-ss2.png'
import guadeSs3 from '@/lib/images/projects/guade/guade-ss3.png'
import yipperSs1 from '@/lib/images/projects/yipper/yipper-ss1.png'
import yipperSs2 from '@/lib/images/projects/yipper/yipper-ss2.png'
import yipperSs3 from '@/lib/images/projects/yipper/yipper-ss3.png'
import assisterSs1 from '@/lib/images/projects/assister/assister-ss1.png'
import assisterSs2 from '@/lib/images/projects/assister/assister-ss2.png'
import assisterSs3 from '@/lib/images/projects/assister/assister-ss3.png'
import nateshoeshopSs1 from '@/lib/images/projects/nateshoeshop/nateshoeshop-ss1.png'
import nateshoeshopSs2 from '@/lib/images/projects/nateshoeshop/nateshoeshop-ss2.png'
import nateshoeshopSs3 from '@/lib/images/projects/nateshoeshop/nateshoeshop-ss3.png'
import userAuthSs1 from '@/lib/images/projects/userauth/userauth-ss1.png'
import userAuthSs2 from '@/lib/images/projects/userauth/userauth-ss2.png'
import userAuthSs3 from '@/lib/images/projects/userauth/userauth-ss3.png'
import ballBreakerSs1 from '@/lib/images/projects/ballbreaker/ballbreaker-ss1.png'
import ballBreakerSs2 from '@/lib/images/projects/ballbreaker/ballbreaker-ss2.png'
import ballBreakerSs3 from '@/lib/images/projects/ballbreaker/ballbreaker-ss3.png'
import bstSs1 from '@/lib/images/projects/bst/bst-ss1.png'
import bstSs2 from '@/lib/images/projects/bst/bst-ss2.png'
import bstSs3 from '@/lib/images/projects/bst/bst-ss3.png'
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
  category: 'frontend' | 'backend' | 'fullstack' | 'ai' | 'devops' | 'infrastructure' | 'project-management' | 'mobile' | 'ecommerce' | 'career' | 'algorithms' | 'gamedev'
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
    imagePaths: [toyeSs1, toyeSs2, toyeSs3],
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
    imagePaths: [alikohubSs1, alikohubSs2, alikohubSs3], // TODO: Change to actual images
    caseStudyUrl: '/projects/alikohub',
    nodePosition: { x: 80, y: 300 },
    category: 'project-management'
  },
  {
    id: 'ssgi',
    displayName: 'SSGI Journal Platform',
    shortDescription: 'Secure journal management system for 200+ researchers with OJS deployment, SMTP automation, and 99.9% uptime.',
    techStack: ['Open Journal Systems', 'Apache', 'MySQL', 'Ubuntu', 'VirtualBox'],
    status: 'active',
    imagePaths: [ssgiSs1, ssgiSs2, ssgiSs3], // TODO: Change to actual images
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
    imagePaths: [guadeSs1, guadeSs2, guadeSs3], // TODO: Change to actual images
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
    imagePaths: [yipperSs1, yipperSs2, yipperSs3], // TODO: Change to actual images
    caseStudyUrl: '/projects/yipper',
    demoUrl: 'https://github.com/nattisam/yipper.git',
    nodePosition: { x: 100, y: 520 },
    category: 'fullstack'
  },
  {
    id: 'assister',
    displayName: 'Assister',
    shortDescription: 'AI-powered refugee aid platform with LLM symptom checker, multilingual emergency alerts, and geolocation services.',
    techStack: ['React Native', 'Firebase', 'MongoDB', 'OpenAI API'],
    status: 'production',
    imagePaths: [assisterSs1, assisterSs2, assisterSs3], // TODO: Change to actual images
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
    imagePaths: [nateshoeshopSs1, nateshoeshopSs2, nateshoeshopSs3], // TODO: Change to actual images
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
    imagePaths: [userAuthSs1, userAuthSs2, userAuthSs3], // TODO: Change to actual images
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
    imagePaths: [ballBreakerSs1, ballBreakerSs2, ballBreakerSs3], // TODO: Change to actual images
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
    imagePaths: [bstSs1, bstSs2, bstSs3], // TODO: Change to actual images
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
