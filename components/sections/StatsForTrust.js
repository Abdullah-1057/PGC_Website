'use client'

import { motion } from 'framer-motion'
import Container from '../Container'
import Section from '../Section'
import Counter from '../Counter'
import Reveal from '../Reveal'

const stats = [
  { label: 'Years of Excellence', value: 65, suffix: '+', icon: '🏛️' },
  { label: 'Students Enrolled', value: 5000, suffix: '+', icon: '👨‍🎓' },
  { label: 'Expert Faculty', value: 150, suffix: '+', icon: '👩‍🏫' },
  { label: 'Success Rate', value: 95, suffix: '%', icon: '🎯' },
]

export default function StatsForTrust() {
  return (
    <Section background="primary" padding="lg">
      <Container>
        <div className="text-center text-white">
          <Reveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6"
            >
              📊 Our Impact
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-white/90 mb-20 max-w-3xl mx-auto leading-relaxed">
              Our track record speaks for itself. Join the legacy of excellence 
              that has shaped countless successful careers across Pakistan.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.15}>
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className="text-5xl md:text-6xl font-bold font-display mb-3 text-yellow-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      delay: index * 0.1 + 0.5 
                    }}
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </motion.div>
                  <div className="text-lg text-white/80 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 pt-16 border-t border-white/20"
          >
            <blockquote className="text-2xl font-medium italic mb-6 max-w-4xl mx-auto">
              "PGC Jhang didn't just give me an education, it gave me the confidence 
              and skills to pursue my dreams in medicine."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Dr. Ahmad Hassan</div>
                <div className="text-white/70 text-sm">Class of 2018, Now at CMH Jhang</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
