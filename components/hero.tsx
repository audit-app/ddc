"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Sparkles, Shield, Star, Users } from "lucide-react"
import SearchModal from "@/components/search-modal"

export default function Hero() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center" aria-label="Sección principal">
      {/* Background Image - Full coverage */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-40" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-secondary/20 rounded-full blur-[100px] opacity-30" aria-hidden="true" />

      {/* Content */}
      <div className="relative w-full py-20 sm:py-24 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/30 shadow-lg shadow-primary/5 mb-6">
                <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-primary">Plataforma Verificada</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
                Encuentra{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Compañía
                </span>
                <br />
                en Bolivia
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Conecta de forma segura y directa con perfiles verificados.
                Tu privacidad es nuestra prioridad absoluta.
              </p>

              {/* Search Button */}
              <div className="max-w-lg mx-auto lg:mx-0 mb-8">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Abrir búsqueda avanzada"
                  className="relative w-full px-5 py-4 bg-card/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-white/10 hover:border-primary/40 hover:shadow-primary/10 transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg shadow-primary/20">
                    <Search className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <span className="text-base text-muted-foreground group-hover:text-foreground transition-colors text-left font-medium flex-1">
                    Buscar por ciudad, nombre...
                  </span>
                  <kbd className="hidden sm:inline-flex px-3 py-1.5 text-xs font-bold text-primary bg-primary/10 rounded-lg border border-primary/20" aria-hidden="true">
                    ⌘K
                  </kbd>
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <span>100% Discreto</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <span>Verificados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <span>+500 Anuncios</span>
                </div>
              </div>
            </div>

            {/* Right Column - Featured Images Grid */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main featured image */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                  <Image
                    src="https://bo.skokka.com/static/assets/womenseekmen_repr.09bc5c7b4ed7201892f6.jpg"
                    alt="Anuncios destacados"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-bold text-foreground">Perfiles Destacados</p>
                          <p className="text-sm text-muted-foreground">Nuevos cada día</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-2xl opacity-20 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SearchModal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </section>
  )
}
