'use client'

import { motion } from 'framer-motion'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Section */}
        <section className="mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            Nathan Samson
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-3xl text-foreground-muted mb-8 font-mono"
          >
            Systems Architect
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-foreground-muted max-w-2xl leading-relaxed"
          >
            Crafting scalable, resilient systems that power the future. 
            Specializing in distributed architectures, cloud-native solutions, 
            and engineering excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex gap-4"
          >
            <Button href="/projects" variant="primary">
              View Projects
            </Button>
            <Button href="#about" variant="secondary">
              Learn More
            </Button>
          </motion.div>
        </section>

        {/* Featured Projects Preview */}
        <section id="projects" className="mb-24">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-3xl font-bold mb-8 text-foreground"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <Card className="h-full hover:neon-border transition-all duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-accent">
                      Project {i}
                    </h3>
                    <p className="text-foreground-muted mb-4">
                      A detailed case study showcasing systems architecture and engineering solutions.
                    </p>
                    <Button href={`/projects/project-${i}`} variant="ghost" size="sm">
                      Read Case Study →
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-3xl font-bold mb-8 text-foreground"
          >
            About
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-foreground-muted text-lg leading-relaxed">
              With a passion for building robust, scalable systems, I specialize in 
              architecting solutions that stand the test of time. My work focuses on 
              creating elegant, efficient systems that solve complex problems while 
              maintaining clarity and maintainability.
            </p>
          </motion.div>
        </section>
      </motion.div>
    </div>
  )
}

