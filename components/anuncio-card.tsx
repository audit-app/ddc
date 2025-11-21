"use client"

import Image from "next/image"
import { MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Anuncio } from "@/lib/anuncios-data"

interface AnuncioCardProps {
  anuncio: Anuncio
  onOpen: (anuncio: Anuncio) => void
}

export default function AnuncioCard({ anuncio, onOpen }: AnuncioCardProps) {
  return (
    <div
      onClick={() => onOpen(anuncio)}
      className="group cursor-pointer overflow-hidden rounded-xl border border-accent/20 bg-background/50 backdrop-blur-sm transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 dark:bg-background/30"
    >
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden bg-muted">
        {anuncio.fotos.length > 0 ? (
          <Image
            src={anuncio.fotos[0] || "/placeholder.svg"}
            alt={anuncio.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
            <span className="text-muted-foreground">Sin imagen</span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <h3 className="line-clamp-2 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
            {anuncio.title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">{anuncio.anuncio}</p>
        </div>

        {/* Info */}
        <div className="space-y-2 pt-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{anuncio.city}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{anuncio.date}</span>
          </div>
        </div>

        {/* Botón */}
        <Button
          onClick={(e) => {
            e.stopPropagation()
            onOpen(anuncio)
          }}
          className="mt-2 w-full rounded-lg bg-accent hover:bg-accent/90 text-primary-foreground"
        >
          Ver Detalle
        </Button>
      </div>
    </div>
  )
}
