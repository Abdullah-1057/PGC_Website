'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Container from '../Container'
import Section from '../Section'
import CourseCard from '../CourseCard'
import Reveal from '../Reveal'
import { coursesData } from '@/data/courses'

export default function ProgramsOverview() {
  const featuredCourses = coursesData.slice(0, 6)

  return (
    <Section background="white" padding="lg">
      <Container>
        <Reveal>
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-brand-primary-100 text-brand-primary-700 rounded-full text-sm font-semibold mb-6"
            >
              🎯 Choose Your Path
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-500 mb-6 heading-gradient">
              Academic Programs
            </h2>
            <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of intermediate programs designed 
              to prepare you for higher education and professional success.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: 'easeOut'
              }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/courses"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-primary-500 to-brand-accent-500 text-white font-semibold rounded-xl shadow-large hover:shadow-glow-lg transition-all duration-300 group"
              >
                <span>Explore All Programs</span>
                <motion.svg 
                  className="ml-3 h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
