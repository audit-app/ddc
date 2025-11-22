"use client"

import { useState } from "react"
import { X, MapPin, Sparkles } from "lucide-react"
import Link from "next/link"

type City = "santa-cruz" | "cochabamba" | "la-paz" | "el-alto" | "sucre"

interface CategoryFilterProps {
  category?: string
}

export default function CategoryFilter({ category = "Viajeras" }: CategoryFilterProps) {
  const [selectedCities, setSelectedCities] = useState<City[]>([])

  const cities: { id: City; label: string; count: number }[] = [
    { id: "santa-cruz", label: "Santa Cruz", count: 85 },
    { id: "cochabamba", label: "Cochabamba", count: 62 },
    { id: "la-paz", label: "La Paz", count: 78 },
    { id: "el-alto", label: "El Alto", count: 34 },
    { id: "sucre", label: "Sucre", count: 21 },
  ]

  const toggleCity = (cityId: City) => {
    setSelectedCities((prev) => (prev.includes(cityId) ? prev.filter((id) => id !== cityId) : [...prev, cityId]))
  }

  const clearFilters = () => {
    setSelectedCities([])
  }

  return (
    <section className="py-20 sm:py-28 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">{category}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Filtra por <span className="text-primary">Ciudad</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Selecciona tu ciudad para encontrar anuncios cerca de ti
          </p>
        </div>

        {/* Active filters */}
        {selectedCities.length > 0 && (
          <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
            {selectedCities.map((cityId) => (
              <div
                key={cityId}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-3 py-1.5 rounded-full text-sm font-medium"
              >
                <MapPin className="w-3 h-3" />
                {cities.find((c) => c.id === cityId)?.label}
                <button
                  onClick={() => toggleCity(cityId)}
                  className="hover:text-primary/70 transition-colors ml-1"
                  aria-label={`Eliminar filtro`}
                >
                  <X size={14} />
                </button>
              </div>
            ))}
            <button
              onClick={clearFilters}
              className="text-xs text-muted-foreground hover:text-primary font-medium transition-colors px-2"
            >
              Limpiar
            </button>
          </div>
        )}

        {/* City cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => toggleCity(city.id)}
              className={`group relative p-5 rounded-2xl transition-all duration-300 text-left border ${
                selectedCities.includes(city.id)
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                  : "border-border/50 bg-card hover:border-primary/40 hover:shadow-lg"
              }`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                selectedCities.includes(city.id)
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted group-hover:bg-primary/10"
              }`}>
                <MapPin className={`w-5 h-5 ${selectedCities.includes(city.id) ? "" : "text-muted-foreground group-hover:text-primary"}`} />
              </div>

              {/* City name */}
              <h3 className={`font-bold mb-1 transition-colors ${
                selectedCities.includes(city.id) ? "text-primary" : "text-foreground group-hover:text-primary"
              }`}>
                {city.label}
              </h3>

              {/* Count */}
              <p className="text-xs text-muted-foreground">
                {city.count} anuncios
              </p>

              {/* Selected indicator */}
              {selectedCities.includes(city.id) && (
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href={`/anuncios${selectedCities.length > 0 ? `?ciudad=${selectedCities.join(',')}` : ''}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300"
          >
            Ver anuncios {selectedCities.length > 0 && `en ${selectedCities.length} ciudad${selectedCities.length > 1 ? 'es' : ''}`}
          </Link>
        </div>
      </div>
    </section>
  )
}
