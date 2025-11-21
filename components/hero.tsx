"use client"

import { useState } from "react"
import { Search, Sparkles } from "lucide-react"
import SearchModal from "@/components/search-modal"

export default function Hero() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/10">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-5"
        style={{
          backgroundImage:
            "url(https://bo.skokka.com/static/assets/default-d-es.d7302948f39d202db50a.webp)",
        }}
      />

      {/* Decorative gradient orbs - enhanced */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 dark:opacity-15 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl opacity-30 dark:opacity-15 animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>

      {/* Content */}
      <div className="relative py-24 sm:py-28 md:py-36 lg:py-44 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/30 shadow-lg shadow-primary/5 mb-8 hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-bold text-primary tracking-wide">Plataforma Discreta y Segura</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 text-balance leading-[1.1] tracking-tight">
              Encuentra Compañía en{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Bolivia
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-20 blur-lg -z-10"></div>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 text-balance max-w-3xl mx-auto font-medium">
              Conecta de forma segura y directa. Tu privacidad es nuestra prioridad.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground/70 max-w-2xl mx-auto">
              Email, teléfono o WhatsApp - Tú controlas tu información de contacto
            </p>
          </div>

          {/* Search Button - Enhanced glassmorphism */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="relative w-full px-6 py-5 bg-card/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 flex items-center gap-4"
              >
                <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl rounded-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base sm:text-lg text-muted-foreground group-hover:text-foreground transition-colors text-left font-medium">
                  Buscar por nombre, ciudad o servicios...
                </span>
                <kbd className="hidden sm:inline-flex ml-auto px-3 py-2 text-xs font-bold text-primary bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/30 shadow-sm">
                  ⌘K
                </kbd>
              </button>
            </div>
          </div>

          {/* SearchModal Modal */}
          <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </div>
      </div>
    </div>
  )
}
