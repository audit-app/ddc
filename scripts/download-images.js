const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const dataPath = path.join(__dirname, '..', 'lib', 'anuncios-data.ts');
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'anuncios');

// Read the current data file
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Extract the anunciosData array from the TypeScript file
const arrayMatch = dataContent.match(/export const anunciosData: Anuncio\[\] = (\[[\s\S]*?\])\n\n\/\/ Helper/);
if (!arrayMatch) {
  console.error('Could not find anunciosData in file');
  process.exit(1);
}

const anuncios = JSON.parse(arrayMatch[1]);
console.log(`Found ${anuncios.length} anuncios`);

// Collect all unique image URLs
const imageUrls = new Set();
anuncios.forEach(anuncio => {
  anuncio.fotos.forEach(url => imageUrls.add(url));
});

console.log(`Found ${imageUrls.size} unique images to download`);

// Function to download a single image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const request = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://bo.skokka.com/'
      }
    }, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        downloadImage(redirectUrl, filepath).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve(filepath);
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    });

    request.on('error', reject);
    request.setTimeout(30000, () => {
      request.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

// Extract filename from URL
function getFilename(url) {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 1];
}

// Create URL to local path mapping
const urlMapping = {};

async function downloadAllImages() {
  const urls = Array.from(imageUrls);
  let downloaded = 0;
  let failed = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const filename = getFilename(url);
    const localPath = path.join(imagesDir, filename);
    const publicPath = `/images/anuncios/${filename}`;

    // Check if already downloaded
    if (fs.existsSync(localPath)) {
      urlMapping[url] = publicPath;
      downloaded++;
      console.log(`[${i + 1}/${urls.length}] Already exists: ${filename}`);
      continue;
    }

    try {
      await downloadImage(url, localPath);
      urlMapping[url] = publicPath;
      downloaded++;
      console.log(`[${i + 1}/${urls.length}] Downloaded: ${filename}`);

      // Small delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 100));
    } catch (err) {
      failed++;
      console.error(`[${i + 1}/${urls.length}] Failed: ${filename} - ${err.message}`);
      // Keep original URL if download fails
      urlMapping[url] = url;
    }
  }

  console.log(`\nDownload complete: ${downloaded} downloaded, ${failed} failed`);
  return urlMapping;
}

async function updateDataFile(mapping) {
  // Update each anuncio's fotos array
  anuncios.forEach(anuncio => {
    anuncio.fotos = anuncio.fotos.map(url => mapping[url] || url);
  });

  // Generate the new TypeScript content
  const tsContent = `export interface Anuncio {
  id: string
  date: string
  link: string
  city: string
  title: string
  anuncio: string
  whatsapp: string
  precio: number | null
  fotos: string[]
  email?: string
  telefono?: string
  edad?: number
  servicios?: string[]
  ubicacion?: string
  disponibilidad?: string
  verificado?: boolean
  vistas?: number
}

export const anunciosData: Anuncio[] = ${JSON.stringify(anuncios, null, 2)}

// Helper function to find anuncio by ID
export function getAnuncioById(id: string): Anuncio | undefined {
  return anunciosData.find(a => a.id === id)
}

// Helper function to get anuncios by city
export function getAnunciosByCity(city: string): Anuncio[] {
  return anunciosData.filter(a => a.city === city)
}

// Get all unique cities
export function getCities(): string[] {
  return [...new Set(anunciosData.map(a => a.city))].sort()
}

// Get anuncios count by city
export function getAnunciosCountByCity(): Record<string, number> {
  return anunciosData.reduce((acc, a) => {
    acc[a.city] = (acc[a.city] || 0) + 1
    return acc
  }, {} as Record<string, number>)
}
`;

  fs.writeFileSync(dataPath, tsContent);
  console.log('Updated anuncios-data.ts with local paths');
}

// Main
async function main() {
  console.log('Starting image download...\n');
  const mapping = await downloadAllImages();
  await updateDataFile(mapping);
  console.log('\nDone!');
}

main().catch(console.error);
