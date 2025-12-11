import React from 'react';
import Image from './Image';

const Card = ({ 
  children, 
  className = '',
  hoverEffect = true,
  ...props 
}) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-card overflow-hidden transition-all duration-300 ${
        hoverEffect ? 'hover:shadow-card-hover hover:-translate-y-1' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-6 pb-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-xl font-semibold text-gray-900 dark:text-white ${className}`} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`mt-1 text-gray-500 dark:text-gray-400 ${className}`} {...props}>
    {children}
  </p>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };

// Usage Example:
/*
<Card>
  <CardHeader>
    <CardTitle>Product Name</CardTitle>
    <CardDescription>Product description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <Image 
      src="/images/placeholder-product.jpg" 
      alt="Product" 
      className="w-full h-48 rounded-lg" 
    />
  </CardContent>
  <CardFooter className="flex justify-between items-center">
    <span className="text-lg font-semibold">$99.99</span>
    <Button>View Details</Button>
  </CardFooter>
</Card>
*/
