import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a simple SVG placeholder
const placeholderSVG = `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <rect width="100%" height="100%" fill="#f3f4f6"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" dominant-baseline="middle" fill="#9ca3af">
    Naveen Overseas
  </text>
  <text x="50%" y="55%" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" dominant-baseline="middle" fill="#9ca3af">
    Product Image
  </text>
</svg>
`;

// Ensure the images directory exists
const imagesDir = join(__dirname, '..', 'public', 'images');
if (!existsSync(imagesDir)) {
  mkdirSync(imagesDir, { recursive: true });
}

// Save the placeholder image
const placeholderPath = join(imagesDir, 'placeholder-product.jpg');
writeFileSync(placeholderPath.replace('.jpg', '.svg'), placeholderSVG);

console.log('✅ Created placeholder image at:', placeholderPath);

// Also create a few sample product placeholders
const products = [
  'valve-1.jpg',
  'valve-2.jpg',
  'gasket-1.jpg',
  'gasket-2.jpg',
  'flange-1.jpg'
];

products.forEach(product => {
  const filePath = join(imagesDir, product);
  writeFileSync(filePath.replace('.jpg', '.svg'), placeholderSVG);
  console.log(`✅ Created product image: ${product}`);
});

console.log('\n🎉 All placeholder images have been created!');
console.log('You can now use them in your components like this:');
console.log('<Image src="/images/valve-1.jpg" alt="Valve Product" className="w-full h-48" />');
