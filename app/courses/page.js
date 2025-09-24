'use client'

import { useState } from 'react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import CourseCard from '@/components/CourseCard'
import Reveal from '@/components/Reveal'
import AffiliatedPrograms from '@/components/sections/AffiliatedPrograms'
import { coursesData } from '@/data/courses'

const categories = ['All', 'Pre-Medical', 'Pre-Engineering', 'Computer Science', 'Commerce', 'Arts', 'General Science']

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredCourses = selectedCategory === 'All' 
    ? coursesData 
    : coursesData.filter(course => course.category === selectedCategory)

  return (
    <div className="pt-16">
      <Section background="white" padding="lg">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-500 mb-6">
                Our Courses
              </h1>
              <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of intermediate programs designed 
                to prepare you for higher education and professional success.
              </p>
            </div>
          </Reveal>

          {/* Category Filter */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-brand-primary-500 text-white'
                      : 'bg-brand-muted-100 text-brand-muted-700 hover:bg-brand-muted-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Reveal key={course.id} delay={index * 0.1}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Affiliated Programs Section */}
      <AffiliatedPrograms />
    </div>
  )
}
