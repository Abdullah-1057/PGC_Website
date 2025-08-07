export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'default' 
}) {
  const backgrounds = {
    white: 'bg-white',
    muted: 'bg-brand-muted-50',
    primary: 'bg-gradient-to-br from-brand-primary-500 to-brand-accent-600',
    secondary: 'bg-brand-secondary-50',
  };

  const paddings = {
    sm: 'py-12',
    default: 'py-16 lg:py-24',
    lg: 'py-24 lg:py-32',
  };

  return (
    <section className={`${backgrounds[background]} ${paddings[padding]} ${className}`}>
      {children}
    </section>
  );
}
