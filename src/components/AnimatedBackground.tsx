'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 2 + 0.5
        this.opacity = Math.random() * 0.6 + 0.2
        this.color = `hsl(${200 + Math.random() * 60}, 70%, ${50 + Math.random() * 30}%)`
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        // Subtle opacity pulsing
        this.opacity += Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.01
        this.opacity = Math.max(0.1, Math.min(0.8, this.opacity))
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = this.color
        ctx.fill()
        ctx.restore()
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = 150

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.1)' // Very subtle fade
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Gradient base layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-900" />

      {/* Animated mesh overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%, 120% 120%, 80% 80%',
          animation: 'float 20s ease-in-out infinite'
        }}
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* CSS animation for floating effect */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-0.5deg); }
        }
      `}</style>
    </div>
  )
}

