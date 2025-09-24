'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Container from '../Container'
import Section from '../Section'
import Reveal from '../Reveal'

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
    semesters: [
      {
        title: 'Semester I',
        credits: 18,
        subjects: ['Accounting-1', 'Functional English', 'Fundamentals of Computing and E-Commerce', 'Business Mathematics', 'Introduction to Economics', 'Introduction to Business']
      },
      {
        title: 'Semester II', 
        credits: 18,
        subjects: ['Business Law', 'English Advanced Writing', 'Business Finance', 'Accounting-II', 'Introduction to Management', 'Fundamentals of Marketing']
      },
      {
        title: 'Semester III',
        credits: 14,
        subjects: ['Pakistan and Islamic Studies/Ethics', 'Auditing Principles & Practices', 'Fundamentals of Cost Accounting', 'Communication Skills', 'Financial Management']
      },
      {
        title: 'Semester IV',
        credits: 17,
        subjects: ['Taxation Management', 'Financial Analysis', 'Investment Fundamentals', 'Development Economics', 'Advanced Cost & Management Accounting']
      }
    ]
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
    semesters: [
      {
        title: 'Semester I',
        credits: 18,
        subjects: ['Introduction to Financial Accounting', 'Basic English Writing Skills', 'Introduction to Information Technology', 'Basic Mathematics', 'Principles of Marketing', 'Principles of Management']
      },
      {
        title: 'Semester II',
        credits: 18,
        subjects: ['Advanced English Writing', 'Introduction to Business', 'Microeconomics for Business', 'Business Statistics', 'Business Law', 'Fundamentals of Management & Organization']
      },
      {
        title: 'Semester III',
        credits: 13,
        subjects: ['Pakistan and Islamic Studies/Ethics', 'Business Finance', 'Management Information System', 'College Mathematics', 'Communication Skills']
      },
      {
        title: 'Semester IV',
        credits: 21,
        subjects: ['Principles of Macroeconomics', 'Managerial Accounting', 'Elective-I', 'Elective-II', 'Principles of Business Ethics', 'Quantitative Analysis']
      }
    ]
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
    semesters: [
      {
        title: 'Semester I',
        credits: 18,
        subjects: ['Introduction to Computer Science (C++)', 'Introduction to Logic', 'Functional English', 'Calculus-I', 'Introduction to Financial Accounting', 'Pakistan & Islamic Studies/Ethics']
      },
      {
        title: 'Semester II',
        credits: 18,
        subjects: ['English Advanced Writing', 'Programming Fundamentals', 'Database Management Systems', 'Calculus-II', 'Ethics and Professional Practices', 'Web Programming']
      },
      {
        title: 'Semester III',
        credits: 15,
        subjects: ['Object Oriented Programming', 'Data Structures & Algorithms', 'Technology Entrepreneurship', 'Communication Skills', 'Project-I']
      },
      {
        title: 'Semester IV',
        credits: 15,
        subjects: ['Operating Systems', 'Introduction to Management Information Systems', 'Web Applications Development', 'Mobile Applications', 'Project-II']
      }
    ]
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
    semesters: [
      {
        title: 'Semester I',
        credits: 18,
        subjects: ['Functional English', 'Introduction to Computer', 'Inorganic Chemistry', 'Inorganic Chemistry Lab', 'Principles of Animal Life', 'Principles of Animal Life Lab', 'Diversity of Plants', 'Diversity of Plants Lab']
      },
      {
        title: 'Semester II',
        credits: 18,
        subjects: ['Communication Skills', 'Pakistan & Islamic Studies/Ethics', 'Animal Form & Function', 'Animal Form & Function Lab', 'Mycology & Plant Pathology', 'Mycology & Plant Pathology Lab', 'Plant Physiology & Ecology', 'Plant Physiology & Ecology Lab', 'Applied Chemistry']
      },
      {
        title: 'Semester III',
        credits: 17,
        subjects: ['Mathematics-I', 'Plant Systematics, Anatomy & Development', 'Plant Systematics, Anatomy & Develop. Lab', 'Animal Diversity-I (Invertebrates)', 'Animal Diversity-I (Invertebrates) Lab', 'Biological Techniques', 'Biological Techniques Lab', 'Organic Chemistry', 'Organic Chemistry Lab']
      },
      {
        title: 'Semester IV',
        credits: 21,
        subjects: ['Cell Biology, Genetics & Evolution', 'Cell Biology, Genetics & Evolution Lab', 'Physical Chemistry', 'Physical Chemistry Lab', 'Analytical Chemistry', 'Analytical Chemistry Lab', 'Technical Writing & Presentation Skills', 'Animal Diversity-II (Chordates)', 'Animal Diversity-II (Chordates) Lab', 'Project / Internship']
      }
    ]
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
    semesters: [
      {
        title: 'Semester I',
        credits: 19,
        subjects: ['Calculus-I', 'Functional English', 'Pakistan & Islamic Studies/Ethics', 'Mechanics', 'Lab-I (Measurement, Mechanics and Fluids)', 'Statistics']
      },
      {
        title: 'Semester II',
        credits: 18,
        subjects: ['Calculus-II', 'Electricity & Magnetism', 'Linear Algebra', 'Modern Physics', 'Introduction to Computer', 'Lab-II (Electricity & Magnetism)']
      },
      {
        title: 'Semester III',
        credits: 19,
        subjects: ['Waves & Oscillations', 'Lab-III (Waves & Oscillations)', 'Ordinary Differential Equations', 'Algebra (Group Theory)', 'Heat & Thermodynamics', 'Classical Mechanics', 'Communication']
      },
      {
        title: 'Semester IV',
        credits: 20,
        subjects: ['Calculus-III', 'Optics', 'Lab-IV (Optics)', 'Elements of Set Theory & Mathematical Logic', 'Affine & Euclidean Geometry', 'Technical Writing & Presentation Skills', 'Project']
      }
    ]
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
    feePerCredit: 4313
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
    feePerCredit: 4313
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
    feePerCredit: 5060
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
    feePerCredit: 4554
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
    feePerCredit: 4554
  }
]

export default function AffiliatedPrograms() {
  const allUcpPrograms = [...ucpPrograms, ...additionalPrograms]
  const allGcufPrograms = gcPrograms

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

        {/* UCP Programs Section */}
        <Reveal delay={0.2}>
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-sm">U</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-secondary-500">University of Central Punjab (UCP)</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allUcpPrograms.map((program, index) => (
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
                  
                  {/* Centered View Course Outline Button */}
                  <div className="flex justify-center mb-4">
                    <Link
                      href={`/courses/${program.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and').replace(/,/g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/\./g, '').replace(/--+/g, '-')}`}
                      className="inline-flex items-center px-4 py-2 bg-brand-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-brand-primary-600 transition-colors duration-200"
                    >
                      View Course Outline
                    </Link>
                  </div>

                  {/* Discount and Contact Section */}
                  <div className="space-y-3">
                    <div className="text-center">
                      <span className="text-green-600 text-sm font-medium">
                        Discounts are available
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        Contact Us
                      </Link>
                    </div>
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
          </div>
        </Reveal>

        {/* GCUF Programs Section */}
        <Reveal delay={0.4}>
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-sm">G</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-secondary-500">Government College University Faisalabad (GCUF)</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allGcufPrograms.map((program, index) => (
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
                      
                      {/* Discount and Contact Section */}
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
          </div>
        </Reveal>

        <Reveal delay={0.6}>
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
  )
}
