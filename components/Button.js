'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-gradient-to-r from-brand-primary-500 to-brand-primary-600 text-white hover:from-brand-primary-600 hover:to-brand-primary-700 shadow-medium hover:shadow-glow',
  secondary: 'bg-gradient-to-r from-brand-secondary-100 to-brand-secondary-200 text-brand-secondary-500 hover:from-brand-secondary-200 hover:to-brand-secondary-300 shadow-soft',
  outline: 'border-2 border-brand-primary-500 text-brand-primary-500 hover:bg-brand-primary-500 hover:text-white hover:shadow-glow',
  ghost: 'text-brand-secondary-500 hover:bg-brand-muted-100 hover:text-brand-primary-500',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  disabled = false,
  className = '',
  type = 'button',
  ...props 
}) {
  const baseClasses = cn(
    'inline-flex items-center justify-center font-semibold rounded-xl',
    'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary-500',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
    'transform hover:scale-105 active:scale-95',
    variants[variant],
    sizes[size],
    className
  )

  const MotionComponent = motion.button

  if (href) {
    return (
      <Link href={href} className={baseClasses} {...props}>
        <motion.span
          className="flex items-center justify-center w-full h-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.span>
      </Link>
    )
  }

  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
