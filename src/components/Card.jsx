import { motion } from 'framer-motion';

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) {
  const baseClasses = `
    bg-white rounded-xl shadow-sm border border-brand-muted-200
    ${className}
  `;

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ y: -4, shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
}
