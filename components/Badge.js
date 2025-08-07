import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-brand-primary-100 text-brand-primary-700 border-brand-primary-200',
  secondary: 'bg-brand-secondary-100 text-brand-secondary-700 border-brand-secondary-200',
  success: 'bg-green-100 text-green-700 border-green-200',
  warning: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  danger: 'bg-red-100 text-red-700 border-red-200',
}

export default function Badge({ 
  children, 
  variant = 'primary', 
  className = '' 
}) {
  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border',
      'transition-all duration-200 hover:scale-105',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}
