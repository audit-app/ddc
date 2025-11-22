const fs = require('fs');
const path = require('path');

const libDir = path.join(__dirname, '..', 'lib');

// Get all JSON files that match the pattern anuncio_*.json
const jsonFiles = fs.readdirSync(libDir)
  .filter(file => file.startsWith('anuncio_') && file.endsWith('.json'))
  .sort();

console.log(`Found ${jsonFiles.length} JSON files`);

// Read and parse all JSON files
const anuncios = [];
const usedIds = new Set();

// Function to generate a unique slug from the link
function generateId(link, city, index) {
  // Extract slug from link
  const match = link.match(/\/anuncio\/([^/]+)\/?$/);
  if (match) {
    let slug = match[1].replace(/-bo\w+$/, ''); // Remove the -bo... suffix
    // Ensure uniqueness
    let finalSlug = slug;
    let counter = 1;
    while (usedIds.has(finalSlug)) {
      finalSlug = `${slug}-${counter}`;
      counter++;
    }
    usedIds.add(finalSlug);
    return finalSlug;
  }
  // Fallback to city + index
  const fallbackId = `${city.toLowerCase()}-${index}`;
  usedIds.add(fallbackId);
  return fallbackId;
}

// Function to normalize city names
function normalizeCity(city) {
  const cityMap = {
    'LaPaz': 'La Paz',
    'SantaCruz': 'Santa Cruz',
    'ElAlto': 'El Alto',
    'oruro': 'Oruro',
    'Oruro': 'Oruro',
    'Cochabamba': 'Cochabamba',
    'Sucre': 'Sucre',
  };
  return cityMap[city] || city;
}

// Generate random but realistic mock data
function generateMockData(index) {
  const edades = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 35];
  const serviciosList = [
    ['Acompañante', 'Encuentros'],
    ['Masajes', 'Acompañante'],
    ['Encuentros', 'Eventos'],
    ['Acompañante', 'Viajes'],
    ['Masajes', 'Encuentros', 'Acompañante'],
    ['Acompañante'],
    ['Encuentros', 'Citas'],
    ['Masajes'],
  ];
  const disponibilidades = [
    'Lunes a Domingo',
    'Lunes a Viernes',
    'Lunes a Sábado',
    'Martes a Domingo',
    'Fines de semana',
    '24 horas',
    'Tardes y noches',
    'Mañanas y tardes',
  ];
  const ubicaciones = [
    'Centro',
    'Zona Sur',
    'Zona Norte',
    'Zona Oeste',
    'Zona Este',
    'Miraflores',
    'Sopocachi',
    'San Miguel',
    'Calacoto',
    'Obrajes',
  ];

  return {
    edad: edades[Math.floor(Math.random() * edades.length)],
    servicios: serviciosList[Math.floor(Math.random() * serviciosList.length)],
    disponibilidad: disponibilidades[Math.floor(Math.random() * disponibilidades.length)],
    ubicacion: ubicaciones[Math.floor(Math.random() * ubicaciones.length)],
    verificado: Math.random() > 0.6, // 40% verified
    vistas: Math.floor(Math.random() * 2000) + 100,
  };
}

jsonFiles.forEach((file, index) => {
  try {
    const filePath = path.join(libDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);

    // Generate unique ID
    const id = generateId(data.link, data.city, index);

    // Add mock data for missing fields
    const mockData = generateMockData(index);

    const anuncio = {
      id,
      date: data.date,
      link: data.link,
      city: normalizeCity(data.city),
      title: data.title,
      anuncio: data.anuncio,
      whatsapp: data.whatsapp,
      precio: data.precio || null,
      fotos: data.fotos || [],
      // Add mock data
      edad: data.edad || mockData.edad,
      servicios: data.servicios || mockData.servicios,
      ubicacion: data.ubicacion || mockData.ubicacion,
      disponibilidad: data.disponibilidad || mockData.disponibilidad,
      verificado: data.verificado !== undefined ? data.verificado : mockData.verificado,
      vistas: data.vistas || mockData.vistas,
    };

    anuncios.push(anuncio);
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
});

console.log(`Processed ${anuncios.length} anuncios`);

// Sort by date (newest first) and then by city
anuncios.sort((a, b) => {
  const dateA = a.date.split('-').reverse().join('-');
  const dateB = b.date.split('-').reverse().join('-');
  if (dateB !== dateA) return dateB.localeCompare(dateA);
  return a.city.localeCompare(b.city);
});

// Generate TypeScript file
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

// Write the new file
const outputPath = path.join(libDir, 'anuncios-data.ts');
fs.writeFileSync(outputPath, tsContent);
console.log(`Generated ${outputPath}`);
console.log(`Total anuncios: ${anuncios.length}`);

// Log city distribution
const cityCount = {};
anuncios.forEach(a => {
  cityCount[a.city] = (cityCount[a.city] || 0) + 1;
});
console.log('Anuncios by city:', cityCount);
