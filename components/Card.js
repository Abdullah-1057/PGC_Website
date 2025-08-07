'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) {
  const baseClasses = cn(
    'bg-white rounded-2xl shadow-soft border border-brand-muted-100',
    'transition-all duration-300',
    className
  )

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ 
          y: -8, 
          scale: 1.02,
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)'
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  )
}
