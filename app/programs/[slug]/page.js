'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import { motion } from 'framer-motion'

// Program data - ADP Programs only
const programData = {
  'adp-accounting-and-finance': {
    name: 'ADP Accounting & Finance',
    university: 'UCP',
    duration: '2 Years',
    credits: 67,
    description: 'A two-years and four-semesters degree programme that provides professional proficiency in the fields of accounting and finance. It enables students to start their career in almost every walk of life.',
    careerProspects: ['Accounts Department', 'Audit Firms', 'Banks', 'Debt Collection Agencies', 'Financial Consultancy Firms', 'Corporate Sector', 'Industry'],
    fee: 249200,
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
  'adp-business-administration': {
    name: 'ADP Business Administration',
    university: 'UCP',
    duration: '2 Years',
    credits: 70,
    description: 'A two-years and four-semesters degree programme that offers students the opportunity to kickstart their career in the fields related to business and entrepreneurship.',
    careerProspects: ['Education Sector', 'Marketing Agencies', 'Human Resource', 'Administration', 'Sales', 'Retail & Production', 'Services Industry'],
    fee: 253000,
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
  'adp-computer-science': {
    name: 'ADP Computer Science',
    university: 'UCP',
    duration: '2 Years',
    credits: 66,
    description: 'ADP Computer Science is a two-years and four-semesters degree programme that equips students with the right resources to excel in the fields of computer science and technology.',
    careerProspects: ['Software Development', 'Data Centers', 'Network Companies', 'Call Centers', 'Database Agencies', 'Administration', 'Management Information System', 'Corporate Sector'],
    fee: 258800,
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
  'adp-botany-zoology-and-chemistry': {
    name: 'ADP Botany, Zoology & Chemistry',
    university: 'UCP',
    duration: '2 Years',
    credits: 74,
    description: 'A two-years and four-semesters degree programme that covers the most modern branches of pure science. It is a diversified programme that can lead to specialization in Botany, Zoology or Chemistry.',
    careerProspects: ['Research', 'Environmental Welfare Org.', 'Science Labs', 'Archaeology Department', 'Forestry', 'Veterinary Hospital', 'Museums', 'Fertilizer & Chemical Industries', 'Pharmaceutical Industries'],
    fee: 259600,
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
        credits: 18,
        subjects: ['Mathematics-I', 'Plant Systematics, Anatomy & Development', 'Plant Systematics, Anatomy & Develop. Lab', 'Animal Diversity-I (Invertebrates)', 'Animal Diversity-I (Invertebrates) Lab', 'Biological Techniques', 'Biological Techniques Lab', 'Organic Chemistry', 'Organic Chemistry Lab']
      },
      {
        title: 'Semester IV',
        credits: 20,
        subjects: ['Cell Biology, Genetics & Evolution', 'Cell Biology, Genetics & Evolution Lab', 'Physical Chemistry', 'Physical Chemistry Lab', 'Analytical Chemistry', 'Analytical Chemistry Lab', 'Technical Writing & Presentation Skills', 'Animal Diversity-II (Chordates)', 'Animal Diversity-II (Chordates) Lab', 'Project / Internship']
      }
    ]
  },
  'adp-double-math-and-physics': {
    name: 'ADP Double Math & Physics',
    university: 'UCP',
    duration: '2 Years',
    credits: 76,
    description: 'A two-years and four-semesters degree programme that offers professional understanding of Mathematics and Physics. After completing this programme students can further specialize and excel in their relevant field.',
    careerProspects: ['Research', 'Banking', 'Insurance', 'Data Analyst', 'Meteorology Dept'],
    fee: 258800,
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
  },
  'adp-psychology': {
    name: 'ADP Psychology',
    university: 'UCP',
    duration: '2 Years',
    credits: 63,
    description: 'Comprehensive psychology education and training covering cognitive, behavioral, and social aspects of human psychology.',
    careerProspects: ['Counseling', 'Mental Health', 'Research', 'Social Work', 'Clinical Psychology', 'Educational Psychology', 'Organizational Psychology'],
    fee: 284219,
    semesters: [
      {
        title: 'Semester I',
        credits: 16,
        subjects: ['Introduction to Psychology', 'General Psychology', 'Functional English', 'Pakistan & Islamic Studies/Ethics', 'Introduction to Computer']
      },
      {
        title: 'Semester II',
        credits: 16,
        subjects: ['Developmental Psychology', 'Social Psychology', 'English Advanced Writing', 'Statistics for Psychology', 'Communication Skills']
      },
      {
        title: 'Semester III',
        credits: 16,
        subjects: ['Abnormal Psychology', 'Cognitive Psychology', 'Research Methods in Psychology', 'Educational Psychology', 'Industrial Psychology']
      },
      {
        title: 'Semester IV',
        credits: 15,
        subjects: ['Clinical Psychology', 'Psychological Testing & Assessment', 'Behavioral Psychology', 'Thesis/Research Project', 'Internship']
      }
    ]
  },
  'adp-english-language-and-literature': {
    name: 'ADP English Language & Literature',
    university: 'UCP',
    duration: '2 Years',
    credits: 66,
    description: 'Advanced English language and literature studies covering classical and modern literary works, linguistics, and critical analysis.',
    careerProspects: ['Teaching', 'Writing', 'Publishing', 'Media', 'Translation', 'Content Writing', 'Editorial Work', 'Journalism'],
    fee: 297158,
    semesters: [
      {
        title: 'Semester I',
        credits: 17,
        subjects: ['Introduction to Literature', 'English Grammar & Composition', 'Classical Poetry', 'Functional English', 'Pakistan & Islamic Studies/Ethics']
      },
      {
        title: 'Semester II',
        credits: 17,
        subjects: ['Modern Poetry', 'Prose & Essay Writing', 'English Advanced Writing', 'Introduction to Linguistics', 'Communication Skills']
      },
      {
        title: 'Semester III',
        credits: 16,
        subjects: ['Drama & Theater', 'Novel & Fiction', 'Literary Criticism', 'Comparative Literature', 'Research Methods']
      },
      {
        title: 'Semester IV',
        credits: 16,
        subjects: ['Contemporary Literature', 'Translation Studies', 'Creative Writing', 'Thesis/Research Project', 'Internship']
      }
    ]
  },
  'adp-business-analytics': {
    name: 'ADP Business Analytics',
    university: 'UCP',
    duration: '2 Years',
    credits: 64,
    description: 'Data-driven business decision making and analytics program combining business knowledge with advanced analytical tools and techniques.',
    careerProspects: ['Data Analysis', 'Business Intelligence', 'Consulting', 'Research', 'Market Research', 'Operations Research', 'Financial Analysis'],
    fee: 336340,
    semesters: [
      {
        title: 'Semester I',
        credits: 16,
        subjects: ['Introduction to Business Analytics', 'Business Statistics', 'Functional English', 'Introduction to Computer', 'Pakistan & Islamic Studies/Ethics']
      },
      {
        title: 'Semester II',
        credits: 16,
        subjects: ['Data Mining Techniques', 'Business Mathematics', 'English Advanced Writing', 'Database Management', 'Communication Skills']
      },
      {
        title: 'Semester III',
        credits: 16,
        subjects: ['Predictive Analytics', 'Business Intelligence Tools', 'Research Methods', 'Financial Analytics', 'Marketing Analytics']
      },
      {
        title: 'Semester IV',
        credits: 16,
        subjects: ['Advanced Analytics', 'Big Data Analytics', 'Analytics Project Management', 'Thesis/Research Project', 'Internship']
      }
    ]
  },
  'adp-biochemistry': {
    name: 'ADP Biochemistry',
    university: 'UCP',
    duration: '2 Years',
    credits: 70,
    description: 'Interdisciplinary study of biological and chemical processes, combining biology and chemistry to understand life at the molecular level.',
    careerProspects: ['Research', 'Pharmaceutical', 'Medical Labs', 'Biotechnology', 'Clinical Research', 'Food Industry', 'Environmental Science'],
    fee: 330580,
    semesters: [
      {
        title: 'Semester I',
        credits: 18,
        subjects: ['General Biochemistry', 'Organic Chemistry', 'Cell Biology', 'Functional English', 'Pakistan & Islamic Studies/Ethics']
      },
      {
        title: 'Semester II',
        credits: 18,
        subjects: ['Protein Biochemistry', 'Enzyme Kinetics', 'Molecular Biology', 'English Advanced Writing', 'Communication Skills']
      },
      {
        title: 'Semester III',
        credits: 17,
        subjects: ['Metabolic Biochemistry', 'Clinical Biochemistry', 'Immunology', 'Research Methods', 'Bioinformatics']
      },
      {
        title: 'Semester IV',
        credits: 17,
        subjects: ['Advanced Biochemistry', 'Biotechnology Applications', 'Pharmaceutical Biochemistry', 'Thesis/Research Project', 'Internship']
      }
    ]
  },
  'adp-biotechnology': {
    name: 'ADP Biotechnology',
    university: 'UCP',
    duration: '2 Years',
    credits: 70,
    description: 'Application of biological systems in technology, combining biology with engineering principles for industrial and medical applications.',
    careerProspects: ['Biotech Industry', 'Research', 'Medical Technology', 'Agriculture', 'Pharmaceutical', 'Environmental Biotechnology', 'Food Biotechnology'],
    fee: 330580,
    semesters: [
      {
        title: 'Semester I',
        credits: 18,
        subjects: ['Introduction to Biotechnology', 'Cell Biology', 'Molecular Biology', 'Functional English', 'Pakistan & Islamic Studies/Ethics']
      },
      {
        title: 'Semester II',
        credits: 18,
        subjects: ['Genetic Engineering', 'Microbiology', 'Biochemistry', 'English Advanced Writing', 'Communication Skills']
      },
      {
        title: 'Semester III',
        credits: 17,
        subjects: ['Industrial Biotechnology', 'Agricultural Biotechnology', 'Medical Biotechnology', 'Research Methods', 'Bioinformatics']
      },
      {
        title: 'Semester IV',
        credits: 17,
        subjects: ['Environmental Biotechnology', 'Pharmaceutical Biotechnology', 'Biotech Applications', 'Thesis/Research Project', 'Internship']
      }
    ]
  }
}

export default function ProgramDetail() {
  const params = useParams()
  const programSlug = params.slug
  const program = programData[programSlug]
  const [activeSemester, setActiveSemester] = useState(0)

  if (!program) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-brand-secondary-500 mb-4">Program Not Found</h1>
            <Link href="/courses" className="inline-flex items-center px-6 py-3 bg-brand-primary-500 text-white rounded-lg hover:bg-brand-primary-600 transition-colors">
              View All Programs
            </Link>
          </div>
        </Container>
      </div>
    )
  }

  const currentSemester = program.semesters[activeSemester]

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <Section background="gradient" padding="xs">
        <Container>
          <Reveal>
            <div className="text-center mb-4">
              <div className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
                🎓 University Affiliated Program
              </div>
              <h1 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">
                {program.name}
              </h1>
              <p className="text-base text-white/90 max-w-3xl mx-auto leading-relaxed">
                {program.description}
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Program Outline Section */}
      <Section background="white" padding="sm">
        <Container>
          <Reveal>
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-brand-secondary-500 mb-2">
                Program Outline
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Semester Navigation */}
            <Reveal>
              <div className="lg:col-span-1">
                <h3 className="text-lg font-bold text-brand-secondary-500 mb-4">Semesters</h3>
                <div className="space-y-2">
                  {program.semesters.map((semester, index) => (
                    <motion.button
                      key={semester.title}
                      onClick={() => setActiveSemester(index)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                        activeSemester === index
                          ? 'bg-brand-primary-500 text-white shadow-lg'
                          : 'bg-brand-muted-50 text-brand-secondary-500 hover:bg-brand-muted-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{semester.title}</span>
                        <span className={`text-sm ${
                          activeSemester === index ? 'text-white/80' : 'text-brand-muted-600'
                        }`}>
                          {semester.credits} Credits
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Semester Details */}
            <Reveal delay={0.2}>
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg border border-brand-muted-200 p-6">
                  <h3 className="text-xl font-bold text-brand-secondary-500 mb-4">
                    {currentSemester.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {currentSemester.subjects.map((subject, index) => (
                      <div
                        key={subject}
                        className="flex items-center p-2 bg-brand-muted-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-brand-primary-500 rounded-full mr-3" />
                        <span className="text-brand-secondary-500 font-medium">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Program Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Reveal delay={0.3}>
              <div className="bg-white rounded-xl shadow-lg border border-brand-muted-200 p-6">
                <h3 className="text-lg font-bold text-brand-secondary-500 mb-3">Program Information</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-brand-muted-600">Duration:</span>
                    <p className="text-brand-secondary-500 font-semibold">{program.duration}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-brand-muted-600">University:</span>
                    <p className="text-brand-secondary-500 font-semibold">{program.university}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-brand-muted-600">Total Credits:</span>
                    <p className="text-brand-secondary-500 font-semibold">{program.credits}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="bg-white rounded-xl shadow-lg border border-brand-muted-200 p-6">
                <h3 className="text-lg font-bold text-brand-secondary-500 mb-3">Fee Structure</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-brand-muted-600">Total Fee:</span>
                    <p className="text-2xl font-bold text-brand-primary-500">
                      PKR {program.fee.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-green-600 text-sm font-medium">
                      Discounts are available
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="bg-white rounded-xl shadow-lg border border-brand-muted-200 p-6">
                <h3 className="text-lg font-bold text-brand-secondary-500 mb-3">Career Prospects</h3>
                <div className="space-y-2">
                  {program.careerProspects.slice(0, 4).map((prospect, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-brand-accent-500 rounded-full mr-3" />
                      <span className="text-sm text-brand-secondary-500">{prospect}</span>
                    </div>
                  ))}
                  {program.careerProspects.length > 4 && (
                    <p className="text-xs text-brand-muted-500 mt-2">
                      +{program.careerProspects.length - 4} more career options
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Discount and Contact Section */}
          <div className="bg-brand-muted-50 rounded-xl p-6">
            <div className="flex items-center justify-between">
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
        </Container>
      </Section>

      {/* Call to Action */}
      <Section background="brand-muted-50" padding="lg">
        <Container>
          <Reveal>
            <div className="text-center">
              <div className="bg-gradient-to-r from-brand-primary-500 to-brand-accent-500 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center px-8 py-4 bg-white text-brand-primary-500 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Apply Now
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-brand-primary-500 transition-colors"
                  >
                    Get More Information
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </div>
  )
}
