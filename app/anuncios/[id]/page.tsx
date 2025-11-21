import type { Metadata } from "next"
import { anunciosData } from "@/lib/anuncios-data"
import AnuncioDetailClient from "./anuncio-detail-client"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const anuncio = anunciosData[Number.parseInt(params.id)]

  if (!anuncio) {
    return {
      title: "Anuncio no encontrado",
      description: "El anuncio que buscas no existe o ha sido eliminado.",
    }
  }

  const imageUrl = anuncio.fotos[0] || "/adult-classified.jpg"

  return {
    title: `${anuncio.title} | Tablón de Anuncios`,
    description: anuncio.anuncio.substring(0, 155),
    keywords: [anuncio.title, anuncio.city, "anuncio", "contacto directo"].join(", "),
    openGraph: {
      title: anuncio.title,
      description: anuncio.anuncio.substring(0, 155),
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 1200,
          alt: anuncio.title,
        },
        {
          url: imageUrl,
          width: 630,
          height: 630,
          alt: anuncio.title,
        },
      ],
      locale: "es_BO",
    },
    twitter: {
      card: "summary_large_image",
      title: anuncio.title,
      description: anuncio.anuncio.substring(0, 155),
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://skokka.com/anuncios/${params.id}`,
    },
  }
}

export default function AnuncioDetailPage({ params }: { params: { id: string } }) {
  const anuncio = anunciosData[Number.parseInt(params.id)]

  if (!anuncio) {
    return (
      <main>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Anuncio no encontrado</h1>
            <p className="text-muted-foreground">El anuncio que buscas no existe o ha sido eliminado.</p>
          </div>
        </div>
      </main>
    )
  }

  return <AnuncioDetailClient anuncio={anuncio} anuncioId={params.id} />
}
