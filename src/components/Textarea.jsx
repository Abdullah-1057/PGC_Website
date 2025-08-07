import { forwardRef } from 'react';

const Textarea = forwardRef(({ 
  label, 
  error, 
  className = '', 
  rows = 4,
  ...props 
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-brand-secondary-700">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`
          block w-full px-3 py-2 border border-brand-muted-300 rounded-md
          placeholder-brand-muted-400 focus:outline-none focus:ring-2 
          focus:ring-brand-primary-500 focus:border-brand-primary-500
          ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
