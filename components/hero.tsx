"use client"

import { useState } from "react"
import { Upload } from "lucide-react"
import SearchModal from "@/components/search-modal"

export default function Hero() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=600&width=1200&query=elegant%20dark%20professional%20background%20with%20subtle%20purple%20tones)",
        }}
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-[#1A2332]/95 dark:via-[#4A2545]/90 dark:to-[#8B4789]/85 bg-gradient-to-br from-blue-50/90 via-purple-50/85 to-pink-50/80" />

      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/15 to-accent/10 dark:from-primary/10 dark:to-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-secondary/15 to-primary/10 dark:from-secondary/10 dark:to-primary/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative py-24 md:py-32 lg:py-40 px-4 min-h-[500px] flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center mb-6">
              <div className="text-5xl">📢</div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
              Publica tu Anuncio
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-2 text-balance font-medium">
              Plataforma discreta para publicar anuncios con tu contacto directo
            </p>
            <p className="text-base md:text-lg text-foreground/70">
              Email, teléfono o WhatsApp - Tú controlas tu información de contacto
            </p>
          </div>

          {/* Search Button */}
          <div className="mb-12 max-w-2xl mx-auto">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full px-6 py-3.5 bg-card/90 dark:bg-card/80 backdrop-blur-sm rounded-xl shadow-lg border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-200 flex items-center gap-3 group"
            >
              <svg
                className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-foreground/60 group-hover:text-foreground transition-colors">
                Buscar anuncios por nombre, ubicación o descripción...
              </span>
            </button>
          </div>

          {/* SearchModal Modal */}
          <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-accent/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-md dark:shadow-lg dark:shadow-primary/25">
          <Upload className="w-5 h-5" />
          Publicar Anuncio Gratis
        </button>
        <button className="px-8 py-4 border-2 border-accent text-accent dark:text-accent font-semibold rounded-full hover:bg-accent/10 dark:hover:bg-accent/15 transition-all">
          Ver Anuncios
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-14 flex flex-col sm:flex-row gap-8 justify-center text-center">
        <div>
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            10K+
          </div>
          <div className="text-sm text-foreground/70 mt-1">Anuncios Activos</div>
        </div>
        <div>
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            100%
          </div>
          <div className="text-sm text-foreground/70 mt-1">Verificación</div>
        </div>
        <div>
          <div className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            🔒
          </div>
          <div className="text-sm text-foreground/70 mt-1">Datos Privados</div>
        </div>
      </div>
    </div>
  )
}
