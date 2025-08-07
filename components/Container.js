import { cn } from '@/lib/utils'

export default function Container({ children, className = '', size = 'default' }) {
  const sizes = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-8xl',
  }

  return (
    <div className={cn(sizes[size], 'mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
