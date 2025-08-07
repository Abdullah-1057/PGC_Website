const variants = {
  primary: 'bg-brand-primary-100 text-brand-primary-700',
  secondary: 'bg-brand-secondary-100 text-brand-secondary-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  danger: 'bg-red-100 text-red-700',
};

export default function Badge({ 
  children, 
  variant = 'primary', 
  className = '' 
}) {
  return (
    <span className={`
      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
      ${variants[variant]} ${className}
    `}>
      {children}
    </span>
  );
}
