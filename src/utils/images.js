// This file is auto-generated. Run 'node scripts/download-images.js' to download images.
// You can import and use these images in your components like this:
// import { images } from '@/utils/images';
// <img src={images.officeTeam.src} alt={images.officeTeam.alt} />

try {
  // Try to load the manifest file
  const imageManifest = require('../../public/images/manifest.json');
  
  // Create an object with named exports for each image
  const images = imageManifest.reduce((acc, img) => {
    const key = img.name
      .split('-')
      .map((word, i) => 
        i === 0 
          ? word 
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('');
    
    return {
      ...acc,
      [key]: {
        src: img.src,
        alt: img.alt,
        name: img.name
      }
    };
  }, {});
  
  module.exports = { images };
} catch (error) {
  console.error('Error loading images. Please run: node scripts/download-images.js');
  module.exports = { images: {} };
}
