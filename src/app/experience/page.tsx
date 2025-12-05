'use client'

import { motion } from 'framer-motion'
import { Card } from '@/ui/card'
import { Button } from '@/ui/button'
import { MapPin } from 'lucide-react'

const experiences = [
  {
    id: 'toye',
    company: 'Toye Business OS (Multi-Platform SaaS Ecosystem)',
    position: 'Software Engineer',
    period: '07/2025 – Present',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Architected a multi-tenant system that exposes HR, Payroll, and Inventory services through centralized APIs with modular services and dashboards.',
    achievements: [
      'Engineered NestJS + Prisma + PostgreSQL backend delivering 30% faster API responses under enterprise loads.',
      'Built the Executive HQ dashboard (Next.js + Tailwind) for real-time KPI analytics and cross-company insight.',
      'Containerized services with Docker/Redis and load-balanced via NGINX while GitHub Actions handle CI/CD.',
      'Implemented async worker queues for payroll processing, boosting throughput 45% and introducing automatic rollback safeguards.'
    ],
    technologies: ['NestJS', 'Prisma', 'PostgreSQL', 'Next.js', 'Tailwind CSS', 'Docker', 'Redis', 'NGINX', 'GitHub Actions']
  },
  {
    id: 'alikohub',
    company: 'AlikoHub',
    position: 'Project Manager / Lead Software Engineer',
    period: '05/2025 – Present',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Led a five-person development team delivering a platform that merges education, consulting, and construction verticals with shared services.',
    achievements: [
      'Built backend APIs (Node.js, Laravel, PostgreSQL) ensuring concurrent-safe access with zero race conditions.',
      'Reduced milestone slippage by 28.5% through disciplined ClickUp/GitHub Projects planning and retrospectives.',
      'Outlined AWS deployment (EC2, RDS, S3) with NGINX load balancing and GitHub Actions pipelines for scalable releases.',
      'Refined and standardized frontend components, achieving 40% faster production render speeds.'
    ],
    technologies: ['Node.js', 'Laravel', 'PostgreSQL', 'AWS', 'EC2', 'RDS', 'S3', 'NGINX', 'GitHub Actions']
  },
  {
    id: 'ssgi',
    company: 'Space Science and Geospatial Institute (SSGI)',
    position: 'Software Engineer Intern',
    period: '06/2024 – 09/2024',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Engineered a secure journal platform on Open Journal Systems for 200+ researchers with role-based publishing workflows.',
    achievements: [
      'Deployed OJS on Ubuntu within VirtualBox-protected environments, maintaining 99.9% uptime.',
      'Prepared documentation that accelerated new user onboarding from 35 to 140 per week.',
      'Set up SMTP automation for role-based submission notifications, increasing throughput by 60%.',
      'Awarded Top-Performing Intern 2024 for leadership and full-cycle delivery.'
    ],
    technologies: ['Open Journal Systems', 'Apache', 'MySQL', 'Ubuntu', 'VirtualBox']
  }
]

const skills = [
  { category: 'Backend & APIs', technologies: ['Node.js', 'NestJS', 'Laravel', 'PostgreSQL', 'Redis'] },
  { category: 'Frontend & Dashboards', technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vite'] },
  { category: 'Cloud & Automation', technologies: ['AWS', 'Docker', 'NGINX', 'GitHub Actions', 'CI/CD'] },
  { category: 'Security & Reliability', technologies: ['MFA', 'Audit Logging', 'Worker Queues', 'Observability'] }
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
            >
              Professional Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-foreground-muted leading-relaxed"
            >
              Systems architecture, engineering leadership, and measurable impact across enterprise SaaS and research deployments.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-secondary/10" />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-10">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-background-secondary/80 border border-border rounded-3xl p-8 shadow-xl space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-bold text-gradient">{experience.company}</h3>
                    <p className="text-xl text-foreground-muted">{experience.position}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-widest text-foreground-muted">{experience.period}</div>
                    <div className="text-sm text-foreground-muted flex items-center gap-1 justify-end">
                      <MapPin className="w-4 h-4 text-accent" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <p className="text-foreground-muted">{experience.description}</p>

                <ul className="space-y-2 text-foreground-muted list-disc pl-6">
                  {experience.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full border border-border bg-background-tertiary text-foreground-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-secondary/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-16 text-center"
            >
              Technical Expertise
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <h3 className="text-xl font-bold text-foreground mb-4">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-2 text-sm rounded-lg bg-background-tertiary text-foreground border border-border hover:border-accent/50 hover:text-accent transition-all duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Let’s Build Something Together</h2>
            <p className="text-xl text-foreground-muted mb-8 leading-relaxed">
              Ready to architect scalable systems or discuss engineering leadership? I’m open for collaborations and new challenges.
            </p>
            <Button href="/contact" variant="primary" size="md">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

