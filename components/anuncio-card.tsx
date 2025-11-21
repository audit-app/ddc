"use client"

import Image from "next/image"
import { MapPin, Calendar, Eye, CheckCircle2 } from "lucide-react"
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
      className="group cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      {/* Imagen */}
      <div className="relative h-56 overflow-hidden bg-muted">
        {anuncio.fotos.length > 0 ? (
          <>
            <Image
              src={anuncio.fotos[0] || "/placeholder.svg"}
              alt={anuncio.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {anuncio.verificado && (
              <div className="absolute top-3 right-3 px-2.5 py-1 bg-primary/90 backdrop-blur-sm rounded-lg border border-primary-foreground/20 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary-foreground" />
                <span className="text-xs font-semibold text-primary-foreground">Verificado</span>
              </div>
            )}
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <span className="text-muted-foreground text-sm">Sin imagen</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="p-5 space-y-4">
        <div className="space-y-2">
          <h3 className="line-clamp-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
            {anuncio.title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">{anuncio.anuncio}</p>
        </div>

        {/* Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-4">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium">{anuncio.city}</span>
          </div>
          {anuncio.vistas && (
            <div className="flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5" />
              <span>{anuncio.vistas}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span>{anuncio.date}</span>
          </div>
        </div>

        {/* Botón */}
        <Button
          onClick={(e) => {
            e.stopPropagation()
            onOpen(anuncio)
          }}
          className="w-full bg-gradient-to-r from-primary via-primary to-secondary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-semibold"
        >
          Ver Detalle
        </Button>
      </div>
    </div>
  )
}
