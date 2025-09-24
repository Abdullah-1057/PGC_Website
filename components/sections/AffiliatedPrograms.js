'use client'

import { motion } from 'framer-motion'
import Container from '../Container'
import Section from '../Section'
import Reveal from '../Reveal'

const ucpPrograms = [
  {
    name: 'ADP Accounting & Finance',
    duration: '2 Years',
    credits: 66,
    description: 'Professional proficiency in accounting and finance fields',
    careerProspects: ['Accounts Department', 'Audit Firms', 'Banks', 'Financial Consultancy'],
    fee: 346460,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 5060
  },
  {
    name: 'ADP Business Administration',
    duration: '2 Years',
    credits: 66,
    description: 'Comprehensive business and entrepreneurship education',
    careerProspects: ['Marketing Agencies', 'Human Resource', 'Sales', 'Corporate Sector'],
    fee: 346460,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 5060
  },
  {
    name: 'ADP Computer Science',
    duration: '2 Years',
    credits: 75,
    description: 'Advanced computer science and technology skills',
    careerProspects: ['Software Development', 'Data Centers', 'Network Companies', 'IT Administration'],
    fee: 462950,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 6006
  },
  {
    name: 'ADP Botany, Zoology & Chemistry',
    duration: '2 Years',
    credits: 71,
    description: 'Modern branches of pure science specialization',
    careerProspects: ['Research', 'Environmental Organizations', 'Science Labs', 'Pharmaceutical Industries'],
    fee: 335834,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 4554
  },
  {
    name: 'ADP Double Math & Physics',
    duration: '2 Years',
    credits: 70,
    description: 'Professional understanding of Mathematics and Physics',
    careerProspects: ['Research', 'Banking', 'Data Analysis', 'Meteorology'],
    fee: 294860,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 4428
  }
]

const gcPrograms = [
  {
    name: 'BS Computer Science',
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

const additionalPrograms = [
  {
    name: 'ADP Psychology',
    duration: '2 Years',
    credits: 63,
    description: 'Comprehensive psychology education and training',
    careerProspects: ['Counseling', 'Mental Health', 'Research', 'Social Work'],
    fee: 284219,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 4313
  },
  {
    name: 'ADP English Language & Literature',
    duration: '2 Years',
    credits: 66,
    description: 'Advanced English language and literature studies',
    careerProspects: ['Teaching', 'Writing', 'Publishing', 'Media'],
    fee: 297158,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 4313
  },
  {
    name: 'ADP Business Analytics',
    duration: '2 Years',
    credits: 64,
    description: 'Data-driven business decision making and analytics',
    careerProspects: ['Data Analysis', 'Business Intelligence', 'Consulting', 'Research'],
    fee: 336340,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 5060
  },
  {
    name: 'ADP Biochemistry',
    duration: '2 Years',
    credits: 70,
    description: 'Interdisciplinary study of biological and chemical processes',
    careerProspects: ['Research', 'Pharmaceutical', 'Medical Labs', 'Biotechnology'],
    fee: 330580,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 4554
  },
  {
    name: 'ADP Biotechnology',
    duration: '2 Years',
    credits: 70,
    description: 'Application of biological systems in technology',
    careerProspects: ['Biotech Industry', 'Research', 'Medical Technology', 'Agriculture'],
    fee: 330580,
    registrationFee: 2500,
    admissionFee: 10000,
    feePerCredit: 4554
  }
]

export default function AffiliatedPrograms() {
  const allPrograms = [...ucpPrograms, ...gcPrograms, ...additionalPrograms]

  return (
    <Section background="brand-muted-50" padding="sm">
      <Container>
        <Reveal>
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-brand-primary-100 text-brand-primary-700 rounded-full text-sm font-semibold mb-6"
            >
              🎓 Affiliated Programs
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-500 mb-6">
              University Affiliated Programs
            </h2>
            <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of university-affiliated programs designed 
              to prepare you for higher education and professional success.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {allPrograms.map((program, index) => (
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
                <h3 className="text-xl font-bold text-brand-secondary-500 mb-2 group-hover:text-brand-primary-500 transition-colors">
                  {program.name}
                </h3>
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
                  
                  {/* Discount and Contact Section */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-green-600 text-sm font-medium">
                      Discounts are available
                    </span>
                    <a
                      href="/contact"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      Contact Us
                    </a>
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
                    <a
                      href="/contact"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
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
              </a>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
