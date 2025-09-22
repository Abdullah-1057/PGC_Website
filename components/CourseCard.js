'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Card from './Card'

export default function CourseCard({ course }) {
  return (
    <Card className="p-8 h-full flex flex-col group card-hover">
      <div className="flex-1">
        <motion.div
          className="inline-block px-3 py-1 bg-brand-primary-100 text-brand-primary-700 rounded-full text-xs font-semibold mb-4"
          whileHover={{ scale: 1.05 }}
        >
          {course.category}
        </motion.div>
        
        <h3 className="text-2xl font-bold text-brand-secondary-500 mb-4 group-hover:text-brand-primary-500 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-brand-muted-600 mb-6 line-clamp-3 leading-relaxed">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-brand-muted-500 mb-6 p-4 bg-brand-muted-50 rounded-lg">
          <div className="flex items-center">
            <span className="text-brand-primary-500 mr-1">⏱️</span>
            <span className="font-medium">{course.duration}</span>
          </div>
          <div className="flex items-center">
            <span className="text-brand-primary-500 mr-1">💰</span>
            <span className="font-bold text-brand-secondary-500">
              {course.fee || '--'}
            </span>
          </div>
        </div>
      </div>
      
      <motion.div
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          href={`/courses/${course.slug}`}
          className="inline-flex items-center text-brand-primary-500 hover:text-brand-primary-600 font-semibold group/link"
        >
          <span>Explore Program</span>
          <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </motion.div>
    </Card>
  )
}
