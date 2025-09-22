'use client'

import { motion } from 'framer-motion'
import Card from './Card'
import Reveal from './Reveal'

export default function FeatureCard({ feature, index }) {
  const IconComponent = feature.icon
  
  return (
    <Reveal delay={index * 0.15}>
      <Card className="p-8 text-center h-full group card-hover">
        <motion.div 
          className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 shadow-medium`}
          whileHover={{ 
            scale: 1.1,
            rotate: 5
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconComponent className="h-8 w-8 text-white" />
        </motion.div>
        
        <h3 className="text-xl font-bold text-brand-secondary-500 mb-4 group-hover:text-brand-primary-500 transition-colors">
          {feature.title}
        </h3>
        
        <p className="text-brand-muted-600 leading-relaxed">
          {feature.description}
        </p>

        <motion.div
          className="mt-6 pt-4 border-t border-brand-muted-100 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-brand-primary-500 font-medium text-sm">
            Learn More →
          </span>
        </motion.div>
      </Card>
    </Reveal>
  )
}
