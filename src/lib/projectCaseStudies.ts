export type CaseStudyContent = {
  title: string
  description: string
  technologies: string[]
  status: string
  timeline: string
  highlights: string[]
  architecture: string
  results: string[]
  repo?: string
  demo?: string
}

export const projectCaseStudies: Record<string, CaseStudyContent> = {
  toye: {
    title: 'Toye Business OS',
    description:
      'Modern SaaS that consolidates orders, inventory, payments, and analytics for restaurants with real-time instrumentation.',
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'Docker'
    ],
    status: 'ongoing',
    timeline: '07/2025 – Present',
    highlights: [
      'Unified order, inventory, and payment workflows inside a sleek dashboard for admins and diners.',
      'Real-time order tracking via Socket.io with kitchen and delivery partner visibility.',
      'Automated inventory planning and reorder suggestions to keep stock fresh without manual spreadsheets.'
    ],
    architecture:
      'Small fleet of Node.js services behind an API gateway, PostgreSQL-backed storage, Redis cache, and containerized delivery on AWS EKS with Stripe for payments.',
    results: [
      '500+ restaurants onboarded worldwide',
      '99.9% uptime with <200ms API latency',
      '45% reduction in operational overhead for partner restaurants'
    ],
    repo: 'https://github.com/nattisam/toye'
  },
  alikohub: {
    title: 'AlikoHub Platform',
    description:
      'A multi-service digital platform integrating education, consulting, and construction services, built for African communities. Managed development as Project Manager, contributed to backend/frontend engineering, and conducted systematic QA testing.',
    technologies: [
      'ClickUp',
      'NestJS',
      'Laravel',
      'PostgreSQL',
      'AWS',
      'GitHub Actions'
    ],
    status: 'ongoing',
    timeline: '06/2025 – Present',
    highlights: [
      'Led a team of 5 developers across frontend, backend, and UI/UX.',
      'Performed manual and automated testing, validating flows and ensuring defect-free releases.',
      'Designed the full project roadmap, sprint cycles, and task allocation using ClickUp.'
    ],
    architecture:
      'Laravel backend with PostgreSQL, AWS EC2/RDS for hosting, NGINX for reverse proxy, and GitHub Actions for CI/CD pipelines.',
    results: [
      'Delivered AlikoHub’s first production-ready multi-service platform.',
      'Established clear development pipelines and testing protocols for future teams.',
      'Improved cross-team collaboration through well-defined documentation and project structures.'
    ],
    repo: 'https://github.com/nattisam/alikohub'
  },
  genbegna: {
    title: 'Genbegna — Real Estate & Construction Access Platform',
    description:
      'Secure platform for managing construction projects, files, and contractors with layered access control and MFA.',
    technologies: ['Node.js', 'Express', 'SQLite (better-sqlite3)', 'React', 'Vite', 'Speakeasy', 'bcrypt', 'JWT'],
    status: 'active',
    timeline: '11/2025 – 12/2025',
    highlights: [
      'Incremental MAC/RBAC/RuBAC/DAC/ABAC checks layered at every service boundary.',
      'MFA-gated auth with email verification, password policy, lockout, and audit logging per role change.',
      'REST APIs log IP/agent metadata and cascade access decisions for projects, files, and users.'
    ],
    architecture:
      'Node.js + Express backend on SQLite (better-sqlite3) with DAC history tooling, daily backups, and React/Vite frontend featuring blueprint UI, MFA toggles, and token refresh stored in localStorage.',
    results: ['Documented stack with layered controls for compliance audits', 'Reusable MFA workflow across all entry points'],
    repo: 'https://github.com/nattisam/genbegna'
  },
  'guade-ai': {
    title: "Guade — AI-Powered Children's Cognitive Skill App",
    description:
      'AI learning app that tracks children’s emotional signals and pairs them with parental insights and research-backed guidance.',
    technologies: ['Flutter', 'TensorFlow', 'Keras', 'FastAPI', 'Next.js', 'Gemini API'],
    status: 'completed',
    timeline: '10/2024 – 07/2025',
    highlights: [
      'Real-time facial emotion analysis powered by a TensorFlow CNN trained on curated expression data.',
      'Parental dashboard surfaces learning analytics, progress tracking, and intervention cues.',
      'Documented project and training approach in a full research write-up to explain ethics and methodology.'
    ],
    architecture:
      'Flutter frontends call FastAPI services that score TensorFlow models, store session data, and push analytics to a Next.js dashboard; backend also orchestrates Gemini-based guidance prompts.',
    results: ['7% accuracy threshold achieved for emotion classification', 'Research paper covering ethics + AI training workflow'],
    repo: 'https://github.com/AASTUSoftwareEngineeringDepartment/Buddy'
  },
  yipper: {
    title: 'Yipper — Full-Stack Microblogging Web App',
    description:
      'Twitter-inspired experience with short posts (“Yips”), likes, and curated feeds, all built on a lightweight vanilla stack.',
    technologies: ['Node.js', 'Express', 'SQLite', 'JavaScript', 'HTML', 'CSS', 'Multer'],
    status: 'active',
    timeline: '09/2024 – 10/2024',
    highlights: [
      'RESTful backend in Node/Express with SQLite persistence and parameterized queries for security.',
      'Vanilla JS front-end with dynamic DOM updates, fetch-based interactions, and client-side caching.',
      'Performance-oriented APIs measured to stay under 100ms per request.'
    ],
    architecture:
      'Simple Node.js API layer talks to SQLite for posts/users, Multer handles media uploads, and the frontend renders feeds/upvotes via async fetch calls.',
    results: ['Sub-100ms API responses confirmed through profiling', 'Modular structure aligned with academic coding standards'],
    repo: 'https://github.com/nattisam/yipper'
  },
  'user-auth': {
    title: 'User Authentication System',
    description:
      'Secure authentication module with hashed credentials, Passport.js session flows, and CSRF protection.',
    technologies: ['Node.js', 'Express', 'Passport.js', 'EJS', 'bcrypt'],
    status: 'active',
    timeline: '01/2024 – 02/2024',
    highlights: [
      'Registration/login with bcrypt-hashed credentials and Passport.js local strategy.',
      'Session management layered with CSRF safeguards and cache-friendly middleware for faster auth flows.',
      'Modular MVC architecture to keep auth logic testable and scalable.'
    ],
    architecture:
      'Express routes delegate to Passport middleware, controllers enforce CSRF tokens, and views rendered with EJS keep UI light while exposing status feedback to users.',
    results: ['Authentication latency kept below 80ms', 'Reusable auth module for future apps'],
    repo: 'https://github.com/nattisam/UserAuthentication'
  },
  'ball-breaker': {
    title: 'Ball Breaker Game — OpenGL Arcade Game',
    description: 'Classic paddle-and-brick arcade experience with smooth physics and difficulty scaling.',
    technologies: ['C++', 'OpenGL'],
    status: 'completed',
    timeline: '01/2024 – 02/2024',
    highlights: [
      'Frame-based physics loop delivers consistent 60 FPS gameplay.',
      'Collision detection and paddle control tuned for responsive feel.',
      'Procedural brick waves and adjustable difficulty keep play engaging.'
    ],
    architecture:
      'Single C++ application leverages OpenGL rendering, state machines for level flow, and tightly-controlled memory management for performance.',
    results: ['60 FPS gameplay with dynamic brick generation', 'Reusable engine for future arcade builds'],
    repo: 'https://github.com/nattisam/BallBreakerGame'
  },
  'nateshoeshop': {
    title: 'Nate Shoe Shop — React E-Commerce Demo',
    description:
      'React storefront with filterable catalog, persistent cart, and polished UI transitions tailored for high Lighthouse scores.',
    technologies: ['React', 'SASS', 'Vercel'],
    status: 'live',
    timeline: '11/2023 – 01/2024',
    highlights: [
      'Dynamic filtering by size, price, color, and brand powered by React state.',
      'Cart and wishlist persisted in localStorage to survive reloads.',
      'Lighthouse score >90 thanks to optimized data fetching and bundling.'
    ],
    architecture:
      'React components and hooks manage catalog state while SASS provides responsive theming; deployed on Vercel for fast global delivery.',
    results: ['Lighthouse >90', 'Smooth transitions validated on mobile and desktop'],
    demo: 'https://nateshoeshop.vercel.app/'
  },
  assister: {
    title: 'Assister — AI Refugee Aid Platform',
    description:
      'Mobile aid platform combining AI chatbots, geolocation, and health data to support refugees in multilingual contexts.',
    technologies: ['React Native', 'Firebase', 'MongoDB', 'OpenAI API'],
    status: 'production',
    timeline: '06/2023 – 11/2023',
    highlights: [
      'AI-driven symptom checker harnessing LLMs for 86% diagnostic accuracy.',
      'Automated multilingual emergency alerts with geofencing triggers.',
      'Firebase Cloud Functions orchestrate asynchronous workflows and notifications.'
    ],
    architecture:
      'React Native front-end connects to Firebase-authenticated APIs, MongoDB stores cases, and OpenAI backs the conversational assistant.',
    results: ['86% symptom accuracy', 'Event-driven Firebase backend with scalable alerts'],
    repo: 'https://github.com/nattisam/Refugee-Assister'
  },
  'bst-implementation': {
    title: 'Binary Search Tree Implementation (C++)',
    description: 'C++ BST with insertion, deletion, traversal, and robust dynamic memory safety.',
    technologies: ['C++', 'Makefile'],
    status: 'completed',
    timeline: '02/2024',
    highlights: [
      'Recursive insertion/deletion with pointer-safe memory management.',
      'Inorder traversal yields sorted output for verification.',
      'Makefile orchestrates builds and ensures reproducible compilation.'
    ],
    architecture:
      'Header and implementation files define BST nodes, balancing helpers, and test harnesses, all compiled through Makefile targets.',
    results: ['Logarithmic operations in average case', 'Dry-run ready for performance demos'],
    repo: 'https://github.com/nattisam/BinarySearchTreeImplementation'
  },
  ssgi: {
    title: 'SSGI Journal Platform',
    description: 'Secure journal management system for 200+ researchers with OJS',
    technologies: ['OJS', 'Linux', 'Apache', 'VirtualBox'],
    status: 'completed',
    timeline: '06/2024 – 09/2024',
    highlights: [
      'Fully deployed on a Linux-based virtualized environment using VirtualBox.',
      'Secure role-based access for authors, editors, and reviewers.',
      'Custom configuration of Apache, MySQL, and OJS plugins for optimized performance.'
    ],
    architecture:
      'Deployed OJS in a Linux virtualized environment, configured Apache and MySQL databases, set directory-level permissions, and enabled secure intranet-only access.',
    results: ['99.9% uptime on the virtual machine', 'Streamlined publication management for 200+ researchers'],
  }
}

