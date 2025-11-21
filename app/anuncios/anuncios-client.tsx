"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SearchModal from "@/components/search-modal"
import { anunciosData } from "@/lib/anuncios-data"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Filter, ChevronDown } from "lucide-react"

export default function AnunciosClientPage() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const cities = Array.from(new Set(anunciosData.map((a) => a.city)))

  const filteredAnuncios = useMemo(() => {
    return anunciosData.filter((anuncio) => {
      const matchesSearch =
        anuncio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        anuncio.anuncio.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCity = !selectedCity || anuncio.city === selectedCity
      return matchesSearch && matchesCity
    })
  }, [searchTerm, selectedCity])

  return (
    <main>
      <Header />
      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />

      <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-primary dark:to-secondary dark:text-transparent mb-2">
                  Todos los Anuncios
                </h1>
                <p className="text-lg text-muted-foreground">
                  {filteredAnuncios.length} anuncio{filteredAnuncios.length !== 1 ? "s" : ""} encontrado
                  {filteredAnuncios.length !== 1 ? "s" : ""}
                </p>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-accent/50 transition"
              >
                <Filter size={20} />
                <span className="text-sm font-semibold">Filtros</span>
              </button>
            </div>

            <div className={`${showFilters ? "block" : "hidden"} md:block space-y-4 mb-8 pb-8 border-b border-border`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative cursor-pointer" onClick={() => setIsSearchModalOpen(true)}>
                  <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <Input
                    placeholder="Buscar anuncios (click para abrir búsqueda avanzada)..."
                    value={searchTerm}
                    onChange={(e) => {
                      e.preventDefault()
                      setIsSearchModalOpen(true)
                    }}
                    onFocus={() => setIsSearchModalOpen(true)}
                    readOnly
                    className="pl-12 bg-card dark:bg-card border-border text-foreground placeholder-muted-foreground focus:ring-accent cursor-pointer"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-12 pr-4 py-2 rounded-lg bg-card dark:bg-card border border-border text-foreground cursor-pointer hover:border-accent/50 focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors"
                  >
                    <option value="">Todas las ciudades</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {filteredAnuncios.length > 0 ? (
              filteredAnuncios.map((anuncio, index) => (
                <Link key={index} href={`/anuncios/${index}`} className="group block">
                  <div className="flex gap-4 p-6 bg-card dark:bg-card rounded-2xl border border-border hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
                    {/* Image */}
                    <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-xl bg-muted">
                      <img
                        src={
                          anuncio.fotos[0] ||
                          "/placeholder.svg?height=160&width=160&query=adult%20classified%20placeholder" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt={anuncio.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3 gap-4">
                          <h2 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                            {anuncio.title}
                          </h2>
                          <span className="text-xs text-muted-foreground bg-primary/10 dark:bg-primary/15 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                            {anuncio.date}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{anuncio.anuncio}</p>
                        <div className="flex items-center gap-3 text-sm flex-wrap">
                          <span className="inline-flex items-center gap-1">
                            <MapPin size={16} className="text-accent" />
                            <span className="text-accent font-semibold">{anuncio.city}</span>
                          </span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">
                            {anuncio.fotos.length} foto{anuncio.fotos.length !== 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="text-sm font-semibold text-accent">WhatsApp: {anuncio.whatsapp}</div>
                        <span className="text-accent font-semibold group-hover:translate-x-1 transition-transform">
                          Ver detalle →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-xl font-semibold text-foreground mb-2">No se encontraron anuncios</p>
                <p className="text-muted-foreground">Intenta ajustar tus filtros de búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
