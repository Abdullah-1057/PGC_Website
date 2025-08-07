'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Card from './Card'
import Badge from './Badge'

export default function EventCard({ event }) {
  const eventDate = new Date(event.date)
  
  return (
    <Card className="p-6 group card-hover">
      <div className="flex items-start justify-between mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Badge variant="primary" className="text-xs font-semibold">
            {event.category}
          </Badge>
        </motion.div>
        
        <motion.div 
          className="text-right bg-brand-primary-50 rounded-xl p-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-2xl font-bold text-brand-primary-500">
            {eventDate.getDate()}
          </div>
          <div className="text-sm text-brand-primary-600 font-medium">
            {eventDate.toLocaleDateString('en-PK', { month: 'short' })}
          </div>
        </motion.div>
      </div>
      
      <h3 className="text-xl font-bold text-brand-secondary-900 mb-3 group-hover:text-brand-primary-500 transition-colors">
        {event.title}
      </h3>
      
      <p className="text-brand-muted-600 mb-6 line-clamp-2 leading-relaxed">
        {event.description}
      </p>
      
      <div className="flex items-center text-sm text-brand-muted-500 mb-6 space-x-4">
        <div className="flex items-center">
          <CalendarIcon className="h-4 w-4 mr-2 text-brand-primary-500" />
          <span>
            {eventDate.toLocaleDateString('en-PK', { 
              weekday: 'short', 
              month: 'short', 
              day: 'numeric' 
            })}
          </span>
        </div>
        <div className="flex items-center">
          <MapPinIcon className="h-4 w-4 mr-2 text-brand-primary-500" />
          <span>{event.location}</span>
        </div>
      </div>
      
      <motion.div
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          href={`/events/${event.slug}`}
          className="inline-flex items-center text-brand-primary-500 hover:text-brand-primary-600 font-semibold group/link"
        >
          <span>Learn More</span>
          <motion.svg 
            className="ml-2 h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        </Link>
      </motion.div>
    </Card>
  )
}
