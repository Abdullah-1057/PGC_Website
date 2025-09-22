'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  BeakerIcon, 
  BookOpenIcon, 
  UserGroupIcon, 
  TrophyIcon 
} from '@heroicons/react/24/outline'
import Container from '../Container'
import Section from '../Section'
import FeatureCard from '../FeatureCard'
import Reveal from '../Reveal'

const features = [
  {
    title: 'Modern Labs & Library',
    description: 'State-of-the-art science laboratories and comprehensive digital library resources.',
    icon: BeakerIcon,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Expert Faculty',
    description: 'Highly qualified teachers with advanced degrees and years of teaching excellence.',
    icon: BookOpenIcon,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Holistic Development',
    description: 'Sports, debates, cultural events, and leadership programs for complete growth.',
    icon: UserGroupIcon,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Outstanding Results',
    description: 'Consistent top performance in board exams and university entrance tests.',
    icon: TrophyIcon,
    color: 'from-yellow-500 to-orange-500',
  },
]

export default function WhyPGC() {
  return (
    <Section background="muted" padding="lg">
      <Container>
        <Reveal>
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-brand-accent-100 text-brand-accent-700 rounded-full text-sm font-semibold mb-6"
            >
              ⭐ Why Choose Us
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-500 mb-6 heading-gradient">
              Excellence in Every Aspect
            </h2>
            <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto leading-relaxed">
              We provide a comprehensive educational experience that goes beyond textbooks, 
              preparing students for success in academics and life.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: 'easeOut'
              }}
            >
              <FeatureCard feature={feature} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Additional Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-brand-primary-500 to-brand-accent-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Join Our Success Story?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of successful alumni who started their journey at PGC Jhang
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-white text-brand-primary-500 font-semibold rounded-xl shadow-large hover:shadow-glow-lg transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
