'use client'

import { motion } from 'framer-motion'
import { Card } from '@/ui/card'
import { Button } from '@/ui/button'
import { Mail, MessageCircle, Calendar, MapPin, Github, Linkedin } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Best for detailed discussions and project inquiries',
    value: 'nattisam1@gmail.com',
    href: 'mailto:nattisam1@gmail.com',
    primary: true
  },
  {
    icon: MessageCircle,
    title: 'Phone',
    description: 'Direct contact for urgent matters',
    value: '+251 944 280 082',
    href: 'tel:+251944280082',
    primary: false
  },
  {
    icon: Calendar,
    title: 'LinkedIn',
    description: 'Professional network and detailed profile',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/nattisam',
    primary: false
  }
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/nattisam', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nattisam', label: 'LinkedIn' }
]

export default function ContactPage() {
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
              Let&apos;s Connect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-foreground-muted leading-relaxed mb-12"
            >
              Full Stack Software Engineer | AI Systems Developer | Platform Architect
              <br />
              Available for collaboration and new opportunities
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-background-tertiary border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-6 h-6 text-foreground-muted hover:text-accent transition-colors" />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-secondary/10" />
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-16 text-center"
            >
              Preferred Ways to Connect
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className={`p-8 h-full transition-all duration-300 hover:shadow-xl ${
                      method.primary ? 'border-accent/50 bg-accent/5' : 'hover:border-accent/30'
                    }`}>
                      <div className="text-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                            method.primary
                              ? 'bg-accent text-background'
                              : 'bg-background-tertiary text-accent'
                          }`}
                        >
                          <IconComponent className="w-8 h-8" />
                        </motion.div>

                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {method.title}
                        </h3>

                        <p className="text-foreground-muted mb-6 leading-relaxed">
                          {method.description}
                        </p>

                        <div className="mb-6">
                          <span className={`inline-block px-4 py-2 rounded-lg text-sm font-medium ${
                            method.primary
                              ? 'bg-accent text-background'
                              : 'bg-background-tertiary text-foreground'
                          }`}>
                            {method.value}
                          </span>
                        </div>

                        <Button
                          href={method.href}
                          variant={method.primary ? 'primary' : 'ghost'}
                          className={`w-full ${
                            method.primary
                              ? 'bg-accent hover:bg-accent/90'
                              : 'hover:bg-accent/10'
                          }`}
                        >
                          {method.primary ? 'Send Message' : 'Connect'}
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Availability */}
      <section className="py-24 bg-background-secondary/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8"
              >
                Current Status
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-foreground-muted">Remote-first, available globally</p>
                  <p className="text-sm text-foreground-muted mt-2">PST timezone</p>
                </Card>

                <Card className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Availability</h3>
                  <p className="text-foreground-muted">Open to new opportunities</p>
                  <p className="text-sm text-foreground-muted mt-2">2-4 week response time</p>
                </Card>
              </div>

              <div className="bg-background-tertiary border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  What I&apos;m Looking For
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Technical Leadership</h4>
                    <p className="text-sm text-foreground-muted">
                      Architecting scalable systems and leading engineering teams
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Innovation Projects</h4>
                    <p className="text-sm text-foreground-muted">
                      Building cutting-edge solutions with emerging technologies
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Consulting</h4>
                    <p className="text-sm text-foreground-muted">
                      Technical strategy and architecture reviews
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-16 text-center"
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  question: "What&apos;s your typical response time?",
                  answer: "I aim to respond to all inquiries within 24-48 hours. For urgent technical discussions, I can often respond much faster."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Absolutely! I&apos;ve worked with teams across multiple time zones and continents. Remote collaboration is my preference."
                },
                {
                  question: "What types of projects interest you most?",
                  answer: "I&apos;m particularly interested in scalable system architecture, DevOps transformations, and projects that push technical boundaries."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
