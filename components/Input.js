'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const Input = forwardRef(({ 
  label, 
  error, 
  className = '', 
  type = 'text',
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-brand-secondary-700">
          {label}
        </label>
      )}
      <motion.input
        ref={ref}
        type={type}
        className={cn(
          'block w-full px-4 py-3 border border-brand-muted-300 rounded-xl',
          'placeholder-brand-muted-400 focus:outline-none focus:ring-2',
          'focus:ring-brand-primary-500 focus:border-brand-primary-500',
          'transition-all duration-300 form-input',
          error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : '',
          className
        )}
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        {...props}
      />
      {error && (
        <motion.p 
          className="text-sm text-red-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
