'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'

const ucpPrograms = [
  {
    name: 'ADP Accounting & Finance',
    university: 'UCP',
    duration: '2 Years',
    credits: 67,
    description: 'A two-years and four-semesters degree programme that provides professional proficiency in the fields of accounting and finance. It enables students to start their career in almost every walk of life.',
    careerProspects: ['Accounts Department', 'Audit Firms', 'Banks', 'Debt Collection Agencies', 'Financial Consultancy Firms', 'Corporate Sector', 'Industry'],
    fee: 249200,
    registrationFee: 8000,
    admissionFee: 8000,
    feePerCredit: 3600,
    slug: 'adp-accounting-and-finance'
  },
  {
    name: 'ADP Business Administration',
    university: 'UCP',
    duration: '2 Years',
    credits: 70,
    description: 'A two-years and four-semesters degree programme that offers students the opportunity to kickstart their career in the fields related to business and entrepreneurship.',
    careerProspects: ['Education Sector', 'Marketing Agencies', 'Human Resource', 'Administration', 'Sales', 'Retail & Production', 'Services Industry'],
    fee: 253000,
    registrationFee: 8000,
    admissionFee: 8000,
    feePerCredit: 3500,
    slug: 'adp-business-administration'
  },
  {
    name: 'ADP Computer Science',
    university: 'UCP',
    duration: '2 Years',
    credits: 66,
    description: 'ADP Computer Science is a two-years and four-semesters degree programme that equips students with the right resources to excel in the fields of computer science and technology.',
    careerProspects: ['Software Development', 'Data Centers', 'Network Companies', 'Call Centers', 'Database Agencies', 'Administration', 'Management Information System', 'Corporate Sector'],
    fee: 258800,
    registrationFee: 8000,
    admissionFee: 8000,
    feePerCredit: 3800,
    slug: 'adp-computer-science'
  },
  {
    name: 'ADP Botany, Zoology & Chemistry',
    university: 'UCP',
    duration: '2 Years',
    credits: 74,
    description: 'A two-years and four-semesters degree programme that covers the most modern branches of pure science. It is a diversified programme that can lead to specialization in Botany, Zoology or Chemistry.',
    careerProspects: ['Research', 'Environmental Welfare Org.', 'Science Labs', 'Archaeology Department', 'Forestry', 'Veterinary Hospital', 'Museums', 'Fertilizer & Chemical Industries', 'Pharmaceutical Industries'],
    fee: 259600,
    registrationFee: 8000,
    admissionFee: 8000,
    feePerCredit: 3400,
    slug: 'adp-botany-zoology-and-chemistry'
  },
  {
    name: 'ADP Double Math & Physics',
    university: 'UCP',
    duration: '2 Years',
    credits: 76,
    description: 'A two-years and four-semesters degree programme that offers professional understanding of Mathematics and Physics. After completing this programme students can further specialize and excel in their relevant field.',
    careerProspects: ['Research', 'Banking', 'Insurance', 'Data Analyst', 'Meteorology Dept'],
    fee: 258800,
    registrationFee: 8000,
    admissionFee: 8000,
    feePerCredit: 3300,
    slug: 'adp-double-math-and-physics'
  }
]

const additionalPrograms = [
  {
    name: 'ADP Psychology',
    university: 'UCP',
    duration: '2 Years',
    credits: 63,
    description: 'Comprehensive psychology education and training',
    careerProspects: ['Counseling', 'Mental Health', 'Research', 'Social Work'],
    fee: 284219,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 4313,
    slug: 'adp-psychology'
  },
  {
    name: 'ADP English Language & Literature',
    university: 'UCP',
    duration: '2 Years',
    credits: 66,
    description: 'Advanced English language and literature studies',
    careerProspects: ['Teaching', 'Writing', 'Publishing', 'Media'],
    fee: 297158,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 4313,
    slug: 'adp-english-language-and-literature'
  },
  {
    name: 'ADP Business Analytics',
    university: 'UCP',
    duration: '2 Years',
    credits: 64,
    description: 'Data-driven business decision making and analytics',
    careerProspects: ['Data Analysis', 'Business Intelligence', 'Consulting', 'Research'],
    fee: 336340,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 5060,
    slug: 'adp-business-analytics'
  },
  {
    name: 'ADP Biochemistry',
    university: 'UCP',
    duration: '2 Years',
    credits: 70,
    description: 'Interdisciplinary study of biological and chemical processes',
    careerProspects: ['Research', 'Pharmaceutical', 'Medical Labs', 'Biotechnology'],
    fee: 330580,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 4554,
    slug: 'adp-biochemistry'
  },
  {
    name: 'ADP Biotechnology',
    university: 'UCP',
    duration: '2 Years',
    credits: 70,
    description: 'Application of biological systems in technology',
    careerProspects: ['Biotech Industry', 'Research', 'Medical Technology', 'Agriculture'],
    fee: 330580,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 4554,
    slug: 'adp-biotechnology'
  }
]

const gcPrograms = [
  {
    name: 'BS Computer Science',
    university: 'GCUF',
    duration: '4 Years',
    credits: 130,
    description: 'Comprehensive computer science program with advanced topics',
    careerProspects: ['Software Development', 'AI/ML', 'Data Science', 'IT Management'],
    fee: 0, // Fee not provided in data
    registrationFee: 0,
    admissionFee: 0,
    feePerCredit: 0
  },
  {
    name: 'BBA (Business Administration)',
    university: 'GCUF',
    duration: '4 Years',
    credits: 120,
    description: 'NBEAC-HEC Accredited comprehensive business education',
    careerProspects: ['Management', 'Marketing', 'Finance', 'Entrepreneurship'],
    fee: 0, // Fee not provided in data
    registrationFee: 0,
    admissionFee: 0,
    feePerCredit: 0
  }
]

const categories = ['All', 'UCP', 'GCUF']

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const allUcpPrograms = [...ucpPrograms, ...additionalPrograms]
  const allGcufPrograms = gcPrograms

  const filteredPrograms = selectedCategory === 'All' 
    ? [...allUcpPrograms, ...allGcufPrograms]
    : selectedCategory === 'UCP' 
      ? allUcpPrograms 
      : allGcufPrograms

  return (
    <div className="pt-16">
      <Section background="white" padding="lg">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 bg-brand-primary-100 text-brand-primary-700 rounded-full text-sm font-semibold mb-6"
              >
                🎓 Affiliated Programs
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-500 mb-6">
                University Affiliated Programs
              </h1>
              <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto">
                Explore our comprehensive range of university-affiliated programs designed 
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

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: 'easeOut'
                }}
                className="bg-white rounded-xl shadow-lg border border-brand-muted-200 p-4 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-brand-secondary-500 group-hover:text-brand-primary-500 transition-colors">
                      {program.name}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      program.university === 'UCP' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {program.university}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-brand-muted-600 mb-3">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {program.duration}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {program.credits} Credits
                    </span>
                  </div>
                  <p className="text-brand-muted-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-brand-secondary-500 mb-2">Career Prospects:</h4>
                  <div className="flex flex-wrap gap-1">
                    {program.careerProspects.slice(0, 3).map((prospect, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-brand-primary-50 text-brand-primary-700 text-xs rounded-full"
                      >
                        {prospect}
                      </span>
                    ))}
                    {program.careerProspects.length > 3 && (
                      <span className="px-2 py-1 bg-brand-muted-100 text-brand-muted-600 text-xs rounded-full">
                        +{program.careerProspects.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {program.fee > 0 && (
                  <div className="border-t border-brand-muted-200 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-brand-muted-600">Total Fee:</span>
                      <span className="text-lg font-bold text-brand-primary-500">
                        PKR {program.fee.toLocaleString()}
                      </span>
                    </div>
                    
                    {/* Discount Message */}
                    <div className="text-center mb-4">
                      <span className="text-green-600 text-sm font-medium">
                        Discounts are available
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-center gap-3">
                      <Link
                        href={`/programs/${program.slug}`}
                        className="inline-flex items-center px-4 py-2 bg-brand-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-brand-primary-600 transition-colors duration-200"
                      >
                        View Program Details
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                )}

                {program.fee === 0 && (
                  <div className="border-t border-brand-muted-200 pt-4">
                    <div className="text-center mb-4">
                      <span className="text-sm text-brand-muted-600">
                        Fee structure available on inquiry
                      </span>
                    </div>
                    
                    {/* Discount and Contact Section for programs without fee */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-green-600 text-sm font-medium">
                        Discounts are available
                      </span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section background="brand-muted-50" padding="lg">
        <Container>
          <Reveal>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/admissions"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-primary-500 to-brand-accent-500 text-white font-semibold rounded-xl shadow-large hover:shadow-glow-lg transition-all duration-300 group"
                >
                  <span>Apply for Programs</span>
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
    </div>
  )
}
