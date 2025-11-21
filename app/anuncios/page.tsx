import type { Metadata } from "next"
import AnunciosClientPage from "./anuncios-client"

export const metadata: Metadata = {
  title: "Todos los Anuncios | Tablón de Anuncios para Adultos",
  description:
    "Explora todos los anuncios clasificados de nuestra plataforma. Busca por ciudad, categoría y encuentra exactamente lo que necesitas.",
  keywords: "anuncios, clasificados, buscar anuncios, encuentros, contacto directo",
  openGraph: {
    title: "Todos los Anuncios | Tablón de Anuncios",
    description: "Explora todos los anuncios clasificados de nuestra plataforma.",
    type: "website",
  },
}

export default function AnunciosPage() {
  return <AnunciosClientPage />
}
