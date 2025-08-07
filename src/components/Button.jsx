import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-brand-primary-500 text-white hover:bg-brand-primary-600 focus:ring-brand-primary-500',
  secondary: 'bg-brand-secondary-100 text-brand-secondary-900 hover:bg-brand-secondary-200 focus:ring-brand-secondary-500',
  outline: 'border-2 border-brand-primary-500 text-brand-primary-500 hover:bg-brand-primary-500 hover:text-white focus:ring-brand-primary-500',
  ghost: 'text-brand-secondary-700 hover:bg-brand-muted-100 focus:ring-brand-muted-500',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

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
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]} ${sizes[size]} ${className}
  `;

  const MotionComponent = motion.button;

  if (href) {
    return (
      <Link to={href} className={baseClasses} {...props}>
        <motion.span
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center w-full h-full"
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
