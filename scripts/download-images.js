const fs = require('fs');
const path = require('path');
const https = require('https');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Image URLs from Unsplash (free to use)
const images = [
  {
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    name: 'office-team.jpg',
    alt: 'Professional team in office'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    name: 'business-meeting.jpg',
    alt: 'Business meeting'
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    name: 'data-analysis.jpg',
    alt: 'Data analysis'
  },
  {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    name: 'planning.jpg',
    alt: 'Planning and strategy'
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    name: 'customer-service.jpg',
    alt: 'Customer service'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    name: 'financial-graph.jpg',
    alt: 'Financial growth graph'
  },
  {
    url: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    name: 'global-connections.jpg',
    alt: 'Global business connections'
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    name: 'consulting.jpg',
    alt: 'Business consulting'
  },
  {
    url: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    name: 'teamwork.jpg',
    alt: 'Teamwork and collaboration'
  },
  {
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    name: 'strategy.jpg',
    alt: 'Business strategy meeting'
  }
];

// Function to download image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Create an images.json file with image metadata
async function createImageManifest() {
  const manifest = images.map(img => ({
    src: `/images/${img.name}`,
    alt: img.alt,
    name: path.basename(img.name, path.extname(img.name))
  }));
  
  fs.writeFileSync(
    path.join(imagesDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('Created image manifest');
}

// Download all images
async function downloadAllImages() {
  try {
    const downloadPromises = images.map(img => {
      const filepath = path.join(imagesDir, img.name);
      return downloadImage(img.url, filepath);
    });
    
    await Promise.all(downloadPromises);
    await createImageManifest();
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

downloadAllImages();
