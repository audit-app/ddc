"use client"

import { useState } from "react"
import { Search, Sparkles } from "lucide-react"
import SearchModal from "@/components/search-modal"

export default function Hero() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-5"
        style={{
          backgroundImage:
            "url(https://bo.skokka.com/static/assets/default-d-es.d7302948f39d202db50a.webp)",
        }}
      />

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20 dark:opacity-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-20 dark:opacity-10"></div>

      {/* Content */}
      <div className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Plataforma Discreta y Segura</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight tracking-tight">
              Encuentra Compañía en{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Bolivia
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-3 text-balance max-w-2xl mx-auto">
              Conecta de forma segura y directa. Tu privacidad es nuestra prioridad.
            </p>
            <p className="text-base text-muted-foreground/80 max-w-xl mx-auto">
              Email, teléfono o WhatsApp - Tú controlas tu información de contacto
            </p>
          </div>

          {/* Search Button */}
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="group w-full px-6 py-4 bg-card/80 backdrop-blur-md rounded-2xl shadow-lg border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base text-muted-foreground group-hover:text-foreground transition-colors text-left">
                Buscar por nombre, ciudad o servicios...
              </span>
              <kbd className="hidden sm:inline-flex ml-auto px-2 py-1 text-xs font-semibold text-muted-foreground bg-muted rounded border border-border">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* SearchModal Modal */}
          <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </div>
      </div>
    </div>
  )
}
