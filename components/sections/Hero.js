'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../Button'
import Container from '../Container'

export default function Hero() {
  return (
    <section className="mt-16 relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-900 via-brand-navy-950 to-brand-navy-900 opacity-95" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"
          animate={{ 
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/8 rounded-full blur-lg"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                🎓 Excellence Since 1958
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-white">Shape Your Future at</span>{' '}
              <span className="text-brand-primary-500 inline-block">
                PGC Jhang
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Join thousands of successful students in our comprehensive intermediate programs. 
              We don't just educate – we inspire, nurture, and unlock your true potential.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button 
                href="/admissions" 
                size="lg"
                className="bg-brand-primary-500 text-white hover:bg-brand-primary-600 hover:shadow-glow-lg transform hover:scale-105"
              >
                <span className="mr-2">🚀</span>
                Start Your Journey
              </Button>
              <Button 
                href="/courses" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-primary-500 backdrop-blur-sm"
              >
                <span className="mr-2">📚</span>
                Explore Programs
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { number: '65+', label: 'Years Excellence' },
                { number: '5000+', label: 'Students' },
                { number: '95%', label: 'Success Rate' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold text-brand-primary-500">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              className="flex justify-center space-x-6 mt-8 pt-6 border-t border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.a
                href="https://www.facebook.com/share/14K6ihC33SG/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full transition-all duration-300 group backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/punjabcollege.jhang?igsh=MXc1dWZocHZ4dXNnZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full transition-all duration-300 group backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@punjabcollegejhang?_t=ZS-90EXsafjMjk&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-black rounded-full transition-all duration-300 group backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-white group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.742 2h3.026c.203 1.4 1.068 2.66 2.3 3.43 1.02.64 2.211.963 3.432.93v3.11c-1.3.028-2.589-.26-3.748-.85-.49-.25-.95-.55-1.371-.89v6.88c0 3.77-3.057 6.81-6.828 6.81-1.816 0-3.548-.71-4.836-1.98A6.79 6.79 0 0 1 2.9 13.65c.25-3.55 3.31-6.33 6.868-6.33.47 0 .93.05 1.374.15v3.28a3.61 3.61 0 0 0-1.374-.28c-2 0-3.62 1.6-3.62 3.59 0 1.98 1.62 3.6 3.62 3.6 2 0 3.62-1.62 3.62-3.6V2z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://x.com/PGCJhang?t=gzWIvbBp_5Xbe0dBi0fTxg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-black rounded-full transition-all duration-300 group backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-white group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2H21l-6.48 7.4L22.5 22h-6.9l-4.3-5.7L6.2 22H3.4l6.94-7.94L1.5 2h7l3.9 5.2L18.244 2zm-2.42 18h2.1L8.27 4H6.1l9.724 16z"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image 
                  src="/Hero.jpeg"
                  alt="PGC Jhang Campus" 
                  width={800}
                  height={600}
                  className="w-full h-auto min-h-[500px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
              
              {/* Floating Achievement Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-2 left-2 sm:-bottom-8 sm:-left-8 glass rounded-2xl p-6 shadow-large"
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-3xl font-bold text-brand-primary-500 mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    #1
                  </motion.div>
                  <div className="text-sm text-white font-medium">
                    College in Region
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute top-2 right-2 sm:-top-8 sm:-right-8 glass rounded-2xl p-6 shadow-large"
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-3xl font-bold text-brand-primary-500 mb-1"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🏆
                  </motion.div>
                  <div className="text-sm text-white font-medium">
                    Award Winning
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-1/2 -right-4 w-8 h-8 bg-brand-primary-500 rounded-full opacity-80"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/4 -left-2 w-6 h-6 bg-white rounded-full opacity-60"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
