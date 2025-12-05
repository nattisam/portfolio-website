'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, Linkedin, Mail, Globe, Sparkles } from 'lucide-react'
import Image from 'next/image'
import nathan from '@/lib/images/about/nathan.JPG'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, type: "spring", damping: 25 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-slate-900/98 via-slate-800/98 to-slate-900/98 backdrop-blur-xl border border-cyan-400/20 rounded-3xl shadow-[0_0_80px_rgba(6,182,212,0.15)] z-50 overflow-hidden"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Close button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-800/90 hover:bg-slate-700/90 border border-cyan-400/30 transition-colors shadow-lg"
            >
              <X className="w-5 h-5 text-cyan-400" />
            </motion.button>

            {/* Content */}
            <div className="relative h-full overflow-y-auto p-6 md:p-8 lg:p-12 scrollbar-thin scrollbar-thumb-cyan-400/20 scrollbar-track-transparent">
              <div className="max-w-5xl mx-auto">
                {/* Profile Section with Photo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center mb-12"
                >
                  {/* Profile Photo */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", damping: 15 }}
                    className="relative mb-8 group"
                  >
                    {/* Animated ring around photo */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                    
                    {/* Photo container */}
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                      <Image
                        src={nathan}
                        alt="Nathan Samson"
                        fill
                        className="object-cover"
                        priority
                      /> 
                    </div>

                    {/* Status indicator */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-800 shadow-lg"
                    >
                      <div className="w-full h-full bg-green-300 rounded-full animate-ping opacity-75"></div>
                    </motion.div>
                  </motion.div>

                  {/* Name and Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Nathan Samson
                      </h1>
                      <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 animate-pulse" />
                    </div>
                    <p className="text-xl md:text-2xl text-slate-300 font-mono mb-4">
                      Software Engineer
                    </p>
                    
                    {/* Social Links */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center justify-center gap-4 mb-2"
                    >
                      <motion.a
                        href="https://github.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-400/20 hover:border-cyan-400/40 transition-all"
                      >
                        <Github className="w-5 h-5 text-cyan-400" />
                      </motion.a>
                      <motion.a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-blue-400/20 hover:border-blue-400/40 transition-all"
                      >
                        <Linkedin className="w-5 h-5 text-blue-400" />
                      </motion.a>
                      <motion.a
                        href="mailto:nattisam1@gmail.com"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-purple-400/20 hover:border-purple-400/40 transition-all"
                      >
                        <Mail className="w-5 h-5 text-purple-400" />
                      </motion.a>
                      <motion.a
                        href="https://yourwebsite.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-400/20 hover:border-cyan-400/40 transition-all"
                      >
                        <Globe className="w-5 h-5 text-cyan-400" />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* About Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid md:grid-cols-2 gap-6 mb-10"
                >
                  {/* About Me Card */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-cyan-400/20 hover:border-cyan-400/40 transition-all backdrop-blur-sm shadow-lg"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-t-2xl"></div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-cyan-400" />
                      About Me
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-4 text-base">
                      Passionate full-stack engineer with expertise in modern web technologies,
                      cloud infrastructure, and AI-driven solutions. I specialize in building
                      <span className="text-cyan-400 font-semibold"> scalable applications</span> that deliver exceptional user experiences.
                    </p>
                    <p className="text-slate-300 leading-relaxed text-base">
                      With a background in computer science and years of hands-on experience,
                      I enjoy tackling <span className="text-purple-400 font-semibold">complex challenges</span> and turning innovative ideas into
                      production-ready solutions.
                    </p>
                  </motion.div>

                  {/* Expertise Card */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-purple-400/20 hover:border-purple-400/40 transition-all backdrop-blur-sm shadow-lg"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-t-2xl"></div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      Expertise
                    </h2>
                    <div className="space-y-3.5">
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/30 transition-colors"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                        <span className="text-slate-200 text-base"><span className="font-semibold text-cyan-400">Frontend:</span> React, Next.js, TypeScript</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/30 transition-colors"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
                        <span className="text-slate-200 text-base"><span className="font-semibold text-purple-400">Backend:</span> Node.js, Python, Go</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/30 transition-colors"
                      >
                        <div className="w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(251,146,60,0.8)]"></div>
                        <span className="text-slate-200 text-base"><span className="font-semibold text-orange-400">AI/ML:</span> TensorFlow, OpenAI, Computer Vision</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/30 transition-colors"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                        <span className="text-slate-200 text-base"><span className="font-semibold text-blue-400">Cloud:</span> AWS, Docker, Kubernetes</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
                >
                  {[
                    { value: "50+", label: "Projects Completed", color: "cyan", delay: 0.1 },
                    { value: "5+", label: "Years Experience", color: "blue", delay: 0.2 },
                    { value: "10+", label: "Technologies", color: "purple", delay: 0.3 },
                    { value: "24/7", label: "Problem Solving", color: "pink", delay: 0.4 }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + stat.delay, type: "spring", damping: 15 }}
                      whileHover={{ y: -6, scale: 1.05 }}
                      className="relative text-center p-5 bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl border border-slate-700/50 hover:border-cyan-400/40 transition-all backdrop-blur-sm group overflow-hidden"
                    >
                      {/* Animated background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 + stat.delay, type: "spring" }}
                        className={`relative text-3xl md:text-4xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color === 'cyan' ? 'blue' : stat.color === 'blue' ? 'purple' : stat.color === 'purple' ? 'pink' : 'rose'}-400 bg-clip-text text-transparent mb-2`}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="relative text-xs md:text-sm text-slate-400 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 border border-cyan-400/20 backdrop-blur-sm shadow-xl overflow-hidden"
                >
                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-br-full"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-tl-full"></div>
                  
                  <div className="relative text-center">
                    <motion.h2
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-6 h-6 text-cyan-400" />
                      Let&apos;s Connect
                      <Sparkles className="w-6 h-6 text-purple-400" />
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="text-slate-300 mb-6 text-lg max-w-2xl mx-auto"
                    >
                      Interested in working together? I&apos;d love to hear about your project and explore how we can create something amazing.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="flex flex-wrap justify-center gap-4"
                    >
                      <motion.a
                        href="mailto:nathan@example.com"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl font-semibold transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 flex items-center gap-2"
                      >
                        <Mail className="w-5 h-5" />
                        Get In Touch
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </motion.a>
                      <motion.a
                        href="/projects"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3.5 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 rounded-xl font-semibold transition-all hover:border-cyan-400 flex items-center gap-2 backdrop-blur-sm"
                      >
                        <Globe className="w-5 h-5" />
                        View Projects
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

