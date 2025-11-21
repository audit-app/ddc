export interface Anuncio {
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

export const anunciosData: Anuncio[] = [
  {
    date: "09-11-2025",
    link: "https://bo.skokka.com/anuncio/argentina-de-lujo-bo5m8m5mr/",
    city: "Cochabamba",
    title: "ESTE ES EL TIULO",
    anuncio: "EST ES EL ANUNCIO",
    whatsapp: "75912236",
    precio: null,
    fotos: [
      "https://bo.skokka.com/image/post/ab/1d/ab1d4643f3f0420faf52ca0baa7d85c3.jpg",
      "https://bo.skokka.com/image/post/ed/3d/ed3d5384317e4f788fcfb3c5d887abeb.jpg",
      "https://bo.skokka.com/image/post/dd/a2/dda26fa35d014303a172d94c30a46886.jpg",
      "https://bo.skokka.com/image/post/d2/3c/d23c1050a95140a79c67e801fd1ec960.jpg",
      "https://bo.skokka.com/image/post/e0/15/e015ea0998664f6299f363b069b5d36c.jpg",
      "https://bo.skokka.com/image/post/78/17/781777ab11994ee393ded07ca4de86c9.jpg",
      "https://bo.skokka.com/image/post/d2/e3/d2e3edcc5cd7404389419391bba4dcd5.jpg",
      "https://bo.skokka.com/image/post/e0/e2/e0e2eadb4ab444fc884007297e9ca01b.jpg",
      "https://bo.skokka.com/image/post/4d/a1/4da194fd419a4bad8140cd55fb81dd87.jpg",
      "https://bo.skokka.com/image/post/9f/58/9f5885bda2334127ba4490fec97c652a.jpg",
    ],
    email: "contacto@example.com",
    edad: 25,
    servicios: ["Acompañante", "Encuentros", "Eventos"],
    ubicacion: "Centro",
    disponibilidad: "Lunes a Domingo",
    verificado: true,
    vistas: 1250,
  },
  {
    date: "08-11-2025",
    link: "https://bo.skokka.com/anuncio/ejemplo-2/",
    city: "La Paz",
    title: "Acompañante Premium",
    anuncio: "Profesional discreta y elegante",
    whatsapp: "76543210",
    precio: null,
    fotos: ["https://bo.skokka.com/image/post/ab/1d/ab1d4643f3f0420faf52ca0baa7d85c3.jpg"],
    email: "premium@example.com",
    edad: 28,
    servicios: ["Acompañante", "Citas"],
    ubicacion: "Zona Sur",
    disponibilidad: "Martes a Sábado",
    verificado: true,
    vistas: 856,
  },
]
