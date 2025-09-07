'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import Container from '../Container'
import Section from '../Section'
import Button from '../Button'
import Input from '../Input'
import Reveal from '../Reveal'

export default function AdmissionsCTA() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, type: 'quick-contact' }),
      })

      if (response.ok) {
        toast.success('Thank you! We\'ll contact you soon.')
        setEmail('')
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section background="primary" padding="lg">
      <Container>
        <div className="text-center text-white relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          <div className="relative z-10">
            <Reveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-8"
              >
                🚀 Start Your Journey
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Ready to Shape Your Future?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join thousands of successful students who chose PGC Jhang for their 
                intermediate education. Get started with your admission process today.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <motion.div 
                className="max-w-md mx-auto mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/40 backdrop-blur-sm form-input"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-brand-primary-500 hover:bg-white/90 hover:shadow-glow-lg px-8 whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-brand-primary-500 border-t-transparent rounded-full"
                      />
                    ) : (
                      'Get Info'
                    )}
                  </Button>
                </form>
                <p className="text-sm text-white/70 mt-4">
                  Get admission information and important updates directly in your inbox.
                </p>
              </motion.div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    href="/admissions" 
                    size="lg"
                    className="bg-white text-brand-primary-500 hover:bg-white/90 hover:shadow-glow-lg"
                  >
                    <span className="mr-2">📝</span>
                    Apply Now
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    href="/contact" 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-brand-primary-500 backdrop-blur-sm"
                  >
                    <span className="mr-2">💬</span>
                    Contact Us
                  </Button>
                </motion.div>
              </div>
            </Reveal>

            {/* Success Stories Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 pt-12 border-t border-white/20"
            >
              <p className="text-white/80 mb-6">Join our successful alumni at:</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                {[
                  'NUST', 'LUMS', 'FAST', 'UET', 'COMSATS', 'PIEAS'
                ].map((university, index) => (
                  <motion.div
                    key={university}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium"
                    animate={{ 
                      opacity: [0.7, 1, 0.7],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {university}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
