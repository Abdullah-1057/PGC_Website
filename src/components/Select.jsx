import { forwardRef } from 'react';

const Select = forwardRef(({ 
  label, 
  error, 
  children,
  className = '', 
  ...props 
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-brand-secondary-700">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={`
          block w-full px-3 py-2 border border-brand-muted-300 rounded-md
          focus:outline-none focus:ring-2 focus:ring-brand-primary-500 
          focus:border-brand-primary-500 bg-white
          ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
