'use client'

import { motion } from 'framer-motion'
import { Card } from '@/ui/card'
import { Code, Database, Cloud, Cpu, Smartphone, Gamepad2, GitBranch, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Python', level: 95, experience: '4+ years' },
      { name: 'JavaScript', level: 90, experience: '5+ years' },
      { name: 'TypeScript', level: 85, experience: '3+ years' },
      { name: 'Java', level: 80, experience: '3+ years' },
      { name: 'C++', level: 75, experience: '2+ years' },
      { name: 'SQL', level: 85, experience: '4+ years' },
      { name: 'PHP', level: 70, experience: '2+ years' },
      { name: 'HTML/CSS', level: 90, experience: '5+ years' }
    ]
  },
  {
    title: 'Backend & APIs',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 90, experience: '4+ years' },
      { name: 'Express.js', level: 88, experience: '4+ years' },
      { name: 'NestJS', level: 85, experience: '2+ years' },
      { name: 'FastAPI', level: 82, experience: '2+ years' },
      { name: 'RESTful APIs', level: 90, experience: '4+ years' },
      { name: 'Microservices', level: 85, experience: '3+ years' },
      { name: 'Async Processing', level: 88, experience: '3+ years' },
      { name: 'Prisma ORM', level: 80, experience: '2+ years' }
    ]
  },
  {
    title: 'Frontend',
    icon: Smartphone,
    skills: [
      { name: 'React', level: 88, experience: '4+ years' },
      { name: 'Vue.js', level: 75, experience: '2+ years' },
      { name: 'Next.js', level: 85, experience: '3+ years' },
      { name: 'Tailwind CSS', level: 90, experience: '3+ years' },
      { name: 'SASS', level: 80, experience: '3+ years' },
      { name: 'React Router', level: 85, experience: '3+ years' },
      { name: 'Responsive Design', level: 90, experience: '4+ years' }
    ]
  },
  {
    title: 'AI & ML',
    icon: Cpu,
    skills: [
      { name: 'TensorFlow', level: 85, experience: '2+ years' },
      { name: 'Keras', level: 82, experience: '2+ years' },
      { name: 'Gemini API', level: 80, experience: '1+ year' },
      { name: 'OpenAI API', level: 78, experience: '1+ year' },
      { name: 'Model Deployment', level: 75, experience: '2+ years' },
      { name: 'Data Preprocessing', level: 80, experience: '2+ years' }
    ]
  },
  {
    title: 'Infrastructure & DevOps',
    icon: Cloud,
    skills: [
      { name: 'Docker', level: 85, experience: '3+ years' },
      { name: 'NGINX', level: 80, experience: '3+ years' },
      { name: 'AWS (EC2, RDS, S3)', level: 82, experience: '3+ years' },
      { name: 'PostgreSQL', level: 88, experience: '4+ years' },
      { name: 'MySQL', level: 85, experience: '4+ years' },
      { name: 'Redis', level: 80, experience: '3+ years' },
      { name: 'Linux (Ubuntu)', level: 82, experience: '4+ years' },
      { name: 'CI/CD (GitHub Actions)', level: 85, experience: '3+ years' }
    ]
  },
  {
    title: 'Mobile & Game Dev',
    icon: Smartphone,
    skills: [
      { name: 'React Native', level: 75, experience: '1+ year' },
      { name: 'Flutter', level: 70, experience: '1+ year' },
      { name: 'Firebase', level: 78, experience: '2+ years' },
      { name: 'OpenGL', level: 65, experience: '1+ year' }
    ]
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 90, experience: '5+ years' },
      { name: 'GitHub', level: 88, experience: '5+ years' },
      { name: 'VS Code', level: 90, experience: '4+ years' },
      { name: 'Postman', level: 85, experience: '4+ years' },
      { name: 'ClickUp', level: 80, experience: '2+ years' },
      { name: 'Jira', level: 75, experience: '2+ years' },
      { name: 'Figma', level: 70, experience: '2+ years' }
    ]
  },
  {
    title: 'Core Competencies',
    icon: GitBranch,
    skills: [
      { name: 'System Design', level: 88, experience: '4+ years' },
      { name: 'API Architecture', level: 90, experience: '4+ years' },
      { name: 'Performance Optimization', level: 85, experience: '3+ years' },
      { name: 'Code Refactoring', level: 82, experience: '3+ years' },
      { name: 'Technical Documentation', level: 85, experience: '4+ years' },
      { name: 'Team Mentorship', level: 80, experience: '3+ years' }
    ]
  }
]

const achievements = [
  {
    title: 'Top-Performing Intern',
    organization: 'Space Science & Geospatial Institute',
    year: '2024',
    description: 'Awarded for leading complete development and deployment of internal journal management system'
  },
  {
    title: 'Leadership Appreciation',
    organization: 'AlikoHub',
    year: '2025',
    description: 'Recognized for outstanding project leadership and full-stack development excellence'
  },
  {
    title: 'Certificate of Recognition',
    organization: 'Ayat MKC Church',
    year: '2025',
    description: 'Awarded for voluntary service and technical excellence in website development'
  },
  {
    title: 'Top 20 of 500+ Participants',
    organization: 'A2SV Generative AI Hackathon',
    year: '2023',
    description: 'Recognition for innovative AI-driven application development'
  },
  {
    title: 'Certificate of Achievement',
    organization: 'Hospitality Hackathon Ethiopia',
    year: '2025',
    description: 'Commended for creativity and technical contribution in hospitality technology'
  }
]

export default function SkillsPage() {
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
              Technical Skills
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-foreground-muted leading-relaxed"
            >
              A comprehensive overview of my technical expertise, tools, and competencies
              developed through 6+ years of professional software engineering experience.
            </motion.p>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-secondary/10" />
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            <span className="text-xs text-foreground-muted">{skill.experience}</span>
                          </div>
                          <div className="w-full bg-background-tertiary rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2, duration: 0.8 }}
                              className="bg-gradient-to-r from-accent to-accent-secondary h-2 rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-background-secondary/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Recognition & Achievements</h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Awards and recognitions received throughout my career for technical excellence,
              leadership, and community contributions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">Award</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                      <p className="text-sm text-accent">{achievement.year}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground-muted mb-3">{achievement.organization}</p>
                  <p className="text-sm text-foreground-muted">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning & Growth */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Continuous Learning</h2>
            <p className="text-xl text-foreground-muted mb-12 leading-relaxed">
              Technology evolves rapidly, and I stay current by continuously learning and adapting.
              Here are some areas I&apos;m currently exploring and improving upon.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Advanced AI/ML</h3>
                <p className="text-foreground-muted text-sm">
                  Deepening expertise in large language models, computer vision, and AI system optimization.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-accent-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cloud Architecture</h3>
                <p className="text-foreground-muted text-sm">
                  Expanding knowledge in serverless computing, Kubernetes orchestration, and cloud-native patterns.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-tertiary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Gamepad2 className="w-8 h-8 text-accent-tertiary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Emerging Technologies</h3>
                <p className="text-foreground-muted text-sm">
                  Exploring Web3, blockchain development, and immersive technologies like AR/VR.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}



