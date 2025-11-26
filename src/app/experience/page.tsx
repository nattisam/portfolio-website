'use client'

import { motion } from 'framer-motion'
import { Card } from '@/ui/card'
import { Button } from '@/ui/button'
import { Calendar, MapPin, Building, Award, Code, Users } from 'lucide-react'

const experiences = [
  {
    id: 'current',
    company: 'Independent Systems Architect',
    position: 'Senior Systems Architect',
    period: '2024 - Present',
    location: 'Remote',
    type: 'Full-time',
    description: 'Leading architecture design and implementation for enterprise-scale distributed systems. Specializing in cloud-native solutions, microservices architecture, and DevOps practices.',
    achievements: [
      'Architected and deployed 3+ production systems serving 100K+ users',
      'Reduced system downtime by 95% through improved monitoring and automation',
      'Mentored 5+ junior architects and developers',
      'Established DevOps practices that improved deployment frequency by 300%'
    ],
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'Python', 'Go', 'React'],
    icon: Building
  },
  {
    id: 'startup',
    company: 'TechFlow Solutions',
    position: 'Lead Backend Architect',
    period: '2022 - 2024',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Led the technical architecture for a Series A startup building AI-powered workflow automation tools. Designed scalable systems handling millions of API requests daily.',
    achievements: [
      'Designed and implemented microservices architecture scaling to 10M+ requests/day',
      'Reduced API response times by 70% through performance optimization',
      'Built and led a team of 8 engineers across frontend and backend',
      'Implemented CI/CD pipelines reducing deployment time from days to minutes'
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'GraphQL'],
    icon: Code
  },
  {
    id: 'enterprise',
    company: 'GlobalTech Corporation',
    position: 'Senior Software Engineer',
    period: '2020 - 2022',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Developed and maintained critical enterprise systems serving Fortune 500 clients. Focused on high-reliability systems and performance optimization.',
    achievements: [
      'Maintained 99.99% uptime for critical financial systems',
      'Optimized database queries reducing response times by 80%',
      'Led migration from monolithic to microservices architecture',
      'Implemented automated testing reducing bug rates by 60%'
    ],
    technologies: ['Java', 'Spring Boot', 'Oracle', 'Kubernetes', 'Jenkins'],
    icon: Users
  },
  {
    id: 'early',
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    period: '2018 - 2020',
    location: 'Austin, TX',
    type: 'Full-time',
    description: 'Built MVPs and prototypes for early-stage startups. Gained experience in rapid prototyping, user feedback iteration, and scaling from zero to production.',
    achievements: [
      'Shipped 5+ MVPs from concept to production in 3 months each',
      'Built systems scaling from 0 to 10K+ users',
      'Established development processes and best practices',
      'Conducted user interviews and iterated based on feedback'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    icon: Award
  }
]

const skills = [
  { category: 'Backend', technologies: ['Node.js', 'Python', 'Go', 'Java', 'PostgreSQL', 'Redis', 'GraphQL'] },
  { category: 'Frontend', technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
  { category: 'Cloud & DevOps', technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
  { category: 'Architecture', technologies: ['Microservices', 'System Design', 'API Design', 'Scalability'] }
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
              Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-foreground-muted leading-relaxed"
            >
              A journey through systems architecture, engineering leadership, and technical innovation
            </motion.p>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-secondary/10" />
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-20 text-center"
            >
              Journey Through Time
            </motion.h2>

            {/* Custom Timeline */}
            <div className="relative">
              {/* Central Timeline Axis */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-accent opacity-30" />

              {/* Timeline Items */}
              <div className="space-y-32">
                {/* SSGI Internship */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/50">
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-25" />
                  </div>

                  {/* Content Container */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="lg:pr-12 lg:text-right">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-background-secondary/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 shadow-xl"
                      >
                        <div className="flex items-center justify-end gap-3 mb-4">
                          <div className="text-right">
                            <h3 className="text-2xl font-bold text-accent">Space Science & Geospatial Institute</h3>
                            <p className="text-foreground-muted">Software Engineer Intern</p>
                          </div>
                          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                            <Award className="w-6 h-6 text-accent" />
                          </div>
                        </div>

                        <div className="space-y-4 text-foreground-muted">
                          <p>Engineered and deployed a secure internal journal management platform using Open Journal Systems, enabling 200+ researchers to publish and access scientific works.</p>

                          <div className="space-y-2">
                            <div className="flex items-center justify-end gap-2">
                              <span className="text-sm">OJS Platform Deployment</span>
                              <div className="w-2 h-2 bg-accent rounded-full" />
                            </div>
                            <div className="flex items-center justify-end gap-2">
                              <span className="text-sm">SMTP Mail Automation</span>
                              <div className="w-2 h-2 bg-accent rounded-full" />
                            </div>
                            <div className="flex items-center justify-end gap-2">
                              <span className="text-sm">99.9% Uptime Achievement</span>
                              <div className="w-2 h-2 bg-accent rounded-full" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Right Side - Date */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="lg:pl-12"
                    >
                      <div className="text-6xl font-bold text-gradient mb-2">2024</div>
                      <div className="text-foreground-muted">Jun - Sep</div>
                      <div className="flex items-center gap-2 mt-4">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span className="text-sm text-foreground-muted">Addis Ababa, Ethiopia</span>
                      </div>
                      <div className="mt-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium inline-block">
                        Top-Performing Intern 2024
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* AASTU Education */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 w-4 h-4 bg-accent-secondary rounded-full shadow-lg shadow-accent-secondary/50">
                    <div className="absolute inset-0 bg-accent-secondary rounded-full animate-ping opacity-25" />
                  </div>

                  {/* Content Container */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Right Side - Date */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="lg:pr-12 lg:text-right"
                    >
                      <div className="text-6xl font-bold text-gradient mb-2">2016-2026</div>
                      <div className="text-foreground-muted">Bachelor's Degree</div>
                      <div className="flex items-center gap-2 mt-4 justify-end">
                        <span className="text-sm text-foreground-muted">Addis Ababa, Ethiopia</span>
                        <MapPin className="w-4 h-4 text-accent-secondary" />
                      </div>
                    </motion.div>

                    {/* Left Side - Content */}
                    <div className="lg:pl-12">
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-background-secondary/50 backdrop-blur-sm border border-accent-secondary/20 rounded-2xl p-8 shadow-xl"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-accent-secondary/10 rounded-xl flex items-center justify-center">
                            <Code className="w-6 h-6 text-accent-secondary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-accent-secondary">Addis Ababa Science & Technology University</h3>
                            <p className="text-foreground-muted">BSc Software Engineering</p>
                          </div>
                        </div>

                        <div className="space-y-4 text-foreground-muted">
                          <p>Comprehensive engineering education with focus on systems design, algorithms, and practical software development.</p>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-accent-secondary rounded-full" />
                              <span className="text-sm">Data Structures & Algorithms</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-accent-secondary rounded-full" />
                              <span className="text-sm">Software Architecture</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-accent-secondary rounded-full" />
                              <span className="text-sm">Database Systems</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-accent-secondary rounded-full" />
                              <span className="text-sm">Cybersecurity & Distributed Systems</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Toye Experience */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 w-4 h-4 bg-accent-tertiary rounded-full shadow-lg shadow-accent-tertiary/50">
                    <div className="absolute inset-0 bg-accent-tertiary rounded-full animate-ping opacity-25" />
                  </div>

                  {/* Content Container */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="lg:pr-12 lg:text-right">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-background-secondary/50 backdrop-blur-sm border border-accent-tertiary/20 rounded-2xl p-8 shadow-xl"
                      >
                        <div className="flex items-center justify-end gap-3 mb-4">
                          <div className="text-right">
                            <h3 className="text-2xl font-bold text-accent-tertiary">Toye Business OS</h3>
                            <p className="text-foreground-muted">Software Engineer</p>
                          </div>
                          <div className="w-12 h-12 bg-accent-tertiary/10 rounded-xl flex items-center justify-center">
                            <Building className="w-6 h-6 text-accent-tertiary" />
                          </div>
                        </div>

                        <div className="space-y-4 text-foreground-muted">
                          <p>Architected a multi-tenant SaaS platform supporting HR, Payroll, and Inventory Management modules with centralized APIs and modular architecture.</p>

                          <div className="space-y-2">
                            <div className="flex items-center justify-end gap-2">
                              <span className="text-sm">NestJS + Prisma Backend</span>
                              <div className="w-2 h-2 bg-accent-tertiary rounded-full" />
                            </div>
                            <div className="flex items-center justify-end gap-2">
                              <span className="text-sm">30% Faster API Response Times</span>
                              <div className="w-2 h-2 bg-accent-tertiary rounded-full" />
                            </div>
                            <div className="flex items-center justify-end gap-2">
                              <span className="text-sm">Asynchronous Worker Queues</span>
                              <div className="w-2 h-2 bg-accent-tertiary rounded-full" />
                            </div>
                          </div>

                          <Button href="/projects/toye" variant="ghost" size="sm" className="mt-4">
                            View Case Study →
                          </Button>
                        </div>
                      </motion.div>
                    </div>

                    {/* Right Side - Date */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="lg:pl-12"
                    >
                      <div className="text-6xl font-bold text-gradient mb-2">2025</div>
                      <div className="text-foreground-muted">Jul - Oct</div>
                      <div className="flex items-center gap-2 mt-4">
                        <MapPin className="w-4 h-4 text-accent-tertiary" />
                        <span className="text-sm text-foreground-muted">Addis Ababa, Ethiopia</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* AlikoHub Experience */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 w-5 h-5 bg-accent rounded-full shadow-lg shadow-accent/50">
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-25" />
                  </div>

                  {/* Content Container */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Right Side - Date */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="lg:pr-12 lg:text-right"
                    >
                      <div className="text-6xl font-bold text-gradient mb-2">2025</div>
                      <div className="text-foreground-muted">May - Sep</div>
                      <div className="flex items-center gap-2 mt-4 justify-end">
                        <span className="text-sm text-foreground-muted">Addis Ababa, Ethiopia</span>
                        <MapPin className="w-4 h-4 text-accent" />
                      </div>
                      <div className="mt-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium inline-block">
                        Leadership Appreciation 2025
                      </div>
                    </motion.div>

                    {/* Left Side - Content */}
                    <div className="lg:pl-12">
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-background-secondary/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 shadow-xl"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                            <Users className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-accent">AlikoHub</h3>
                            <p className="text-foreground-muted">Project Manager / Lead Software Engineer</p>
                          </div>
                        </div>

                        <div className="space-y-4 text-foreground-muted">
                          <p>Led a 5-member development team to design and build AlikoHub, a platform merging education, consulting, and construction services.</p>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-accent rounded-full" />
                              <span className="text-sm">AWS Deployment (EC2, RDS, S3)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-accent rounded-full" />
                              <span className="text-sm">28.5% Reduction in Milestone Delays</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-accent rounded-full" />
                              <span className="text-sm">40% Performance Improvement</span>
                            </div>
                          </div>

                          <Button href="/projects/alikohub" variant="ghost" size="sm" className="mt-4">
                            View Case Study →
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {skillGroup.category}
                    </h3>
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

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Let's Build Something Together
            </h2>
            <p className="text-xl text-foreground-muted mb-8 leading-relaxed">
              Ready to architect scalable systems or discuss engineering leadership?
              I'd love to hear about your next big project.
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
