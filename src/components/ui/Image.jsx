import React from 'react';

export default function Image({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/placeholder-image.jpg',
  ...props 
}) {
  // Handle missing images with a placeholder
  const handleError = (e) => {
    if (src !== placeholder) {
      e.target.src = placeholder;
    }
  };

  return (
    <img 
      src={src || placeholder} 
      alt={alt || 'Image'} 
      className={`w-full h-full object-cover ${className}`} 
      onError={handleError}
      loading="lazy"
      {...props} 
    />
  );
}
