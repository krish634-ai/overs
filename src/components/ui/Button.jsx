import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = '',
  as: Component = 'button',
  ...props
}, ref) => {
  // Base styles for all buttons
  const baseStyles = 'relative inline-flex items-center justify-center font-sans font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed';
  
  // Variant styles
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 shadow-md hover:shadow-lg',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500',
    outline: 'border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-primary-500',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-primary-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    success: 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500',
    accent: 'bg-accent-600 hover:bg-accent-700 text-white focus:ring-accent-500',
  };

  // Size styles
  const sizes = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  // Icon sizes
  const iconSizes = {
    xs: 'h-3.5 w-3.5',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-7 w-7',
  };

  return (
    <Component
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader2 className={`animate-spin ${iconSizes[size]}`} />
        </span>
      )}
      <span className={`flex items-center ${isLoading ? 'invisible' : 'visible'}`}>
        {LeftIcon && (
          <LeftIcon 
            className={`${children ? 'mr-2' : ''} ${iconSizes[size]}`} 
            aria-hidden="true" 
          />
        )}
        {children}
        {RightIcon && (
          <RightIcon 
            className={`${children ? 'ml-2' : ''} ${iconSizes[size]}`} 
            aria-hidden="true" 
          />
        )}
      </span>
    </Component>
  );
});

// Add display name for better debugging
Button.displayName = 'Button';

// Motion variant for framer-motion integration
const MotionButton = motion(Button);

// Export both static and motion versions
export { Button, MotionButton };
export default Button;
