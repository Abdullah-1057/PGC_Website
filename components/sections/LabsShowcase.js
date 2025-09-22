'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '../Container'
import Section from '../Section'
import Reveal from '../Reveal'
import Badge from '../Badge'
import { labsData } from '@/data/labs'

export default function LabsShowcase() {
  const [activeLab, setActiveLab] = useState(0)
  const [activeImage, setActiveImage] = useState(0)

  const currentLab = labsData[activeLab]
  const currentImage = activeImage === 0 ? currentLab.image : currentLab.image2

  return (
    <Section background="brand-muted-50" padding="lg">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-500 mb-6">
              Our Modern Laboratories
            </h2>
            <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto">
              Equipped with state-of-the-art facilities and modern equipment to provide 
              hands-on learning experiences for our students.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lab Selection */}
          <Reveal>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                {labsData.map((lab, index) => (
                  <motion.button
                    key={lab.id}
                    onClick={() => {
                      setActiveLab(index)
                      setActiveImage(0)
                    }}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeLab === index
                        ? 'bg-brand-primary-500 text-white shadow-lg'
                        : 'bg-white text-brand-secondary-500 border border-brand-muted-200 hover:border-brand-primary-300'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {lab.name}
                  </motion.button>
                ))}
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-brand-muted-200">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-brand-secondary-500">
                    {currentLab.name}
                  </h3>
                  <Badge variant="primary">Active</Badge>
                </div>
                
                <p className="text-brand-muted-600 mb-6 leading-relaxed">
                  {currentLab.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-brand-secondary-500 mb-3">
                    Available Programs:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentLab.programs.map((program, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-brand-primary-50 text-brand-primary-700 rounded-full text-sm font-medium"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-secondary-500 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {currentLab.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-brand-muted-600">
                        <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Lab Images */}
          <Reveal delay={0.2}>
            <div className="space-y-4">
              {/* Main Image */}
              <motion.div 
                className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg"
                key={currentImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={currentImage}
                  alt={`${currentLab.name} - Image ${activeImage + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge variant="primary" className="bg-white/90 text-brand-primary-700">
                    {currentLab.name}
                  </Badge>
                </div>
              </motion.div>

              {/* Image Thumbnails */}
              <div className="flex gap-3">
                {[currentLab.image, currentLab.image2].map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative h-20 w-full rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === index
                        ? 'border-brand-primary-500 shadow-lg'
                        : 'border-brand-muted-200 hover:border-brand-primary-300'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={image}
                      alt={`${currentLab.name} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    {activeImage === index && (
                      <div className="absolute inset-0 bg-brand-primary-500/20" />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Lab Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-brand-muted-200">
                  <div className="text-2xl font-bold text-brand-primary-500 mb-1">
                    {currentLab.features.length}
                  </div>
                  <div className="text-sm text-brand-muted-600">Features</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-brand-muted-200">
                  <div className="text-2xl font-bold text-brand-primary-500 mb-1">
                    {currentLab.programs.length}
                  </div>
                  <div className="text-sm text-brand-muted-600">Programs</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-brand-muted-200">
                  <div className="text-2xl font-bold text-brand-primary-500 mb-1">24/7</div>
                  <div className="text-sm text-brand-muted-600">Access</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Call to Action */}
        <Reveal delay={0.4}>
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-brand-muted-200">
              <h3 className="text-2xl font-bold text-brand-secondary-500 mb-4">
                Experience Our Facilities
              </h3>
              <p className="text-brand-muted-600 mb-6 max-w-2xl mx-auto">
                Schedule a campus tour to see our laboratories and facilities in person. 
                Our admissions team will be happy to show you around.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-brand-primary-500 text-white font-semibold rounded-lg hover:bg-brand-primary-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Campus Tour
                </motion.a>
                <motion.a
                  href="/admissions"
                  className="inline-flex items-center justify-center px-8 py-3 border border-brand-primary-500 text-brand-primary-500 font-semibold rounded-lg hover:bg-brand-primary-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
