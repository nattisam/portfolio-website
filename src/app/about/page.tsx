'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-gradient"
        >
          About
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-foreground-muted text-lg leading-relaxed mb-6">
            With a passion for building robust, scalable systems, I specialize in 
            architecting solutions that stand the test of time. My work focuses on 
            creating elegant, efficient systems that solve complex problems while 
            maintaining clarity and maintainability.
          </p>
          <p className="text-foreground-muted text-lg leading-relaxed">
            Crafting scalable, resilient systems that power the future. 
            Specializing in distributed architectures, cloud-native solutions, 
            and engineering excellence.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

