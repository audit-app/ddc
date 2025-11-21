"use client"

import { useState } from "react"
import { X } from "lucide-react"

type City = "santa-cruz" | "cochabamba" | "la-paz" | "el-alto" | "sucre"

interface CategoryFilterProps {
  category?: string
}

export default function CategoryFilter({ category = "Viajeras" }: CategoryFilterProps) {
  const [selectedCities, setSelectedCities] = useState<City[]>([])
  const [showAllCities, setShowAllCities] = useState(false)

  const cities: { id: City; label: string }[] = [
    { id: "santa-cruz", label: "Santa Cruz" },
    { id: "cochabamba", label: "Cochabamba" },
    { id: "la-paz", label: "La Paz" },
    { id: "el-alto", label: "El Alto" },
    { id: "sucre", label: "Sucre" },
  ]

  const toggleCity = (cityId: City) => {
    setSelectedCities((prev) => (prev.includes(cityId) ? prev.filter((id) => id !== cityId) : [...prev, cityId]))
  }

  const clearFilters = () => {
    setSelectedCities([])
  }

  return (
    <section className="w-full bg-background py-16 md:py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-6 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground text-xs font-bold">👯</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-primary dark:to-secondary dark:text-transparent">
              {category}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg ml-9">Explora anuncios en tu ciudad preferida</p>
        </div>

        <div className="space-y-6">
          {/* Active filters display */}
          {selectedCities.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-muted-foreground font-semibold">Filtros activos:</span>
              {selectedCities.map((cityId) => (
                <div
                  key={cityId}
                  className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 border border-primary/30 dark:border-primary/40 text-foreground px-4 py-2 rounded-full text-sm font-medium"
                >
                  {cities.find((c) => c.id === cityId)?.label}
                  <button onClick={() => toggleCity(cityId)} className="hover:text-primary transition-colors">
                    <X size={16} />
                  </button>
                </div>
              ))}
              <button
                onClick={clearFilters}
                className="text-xs text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                Limpiar todo
              </button>
            </div>
          )}

          {/* City filter buttons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => toggleCity(city.id)}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-200 text-sm border-2 ${
                  selectedCities.includes(city.id)
                    ? "border-accent bg-accent/15 dark:bg-accent/20 text-accent"
                    : "border-border bg-card hover:border-accent/50 dark:hover:border-accent/60 text-foreground hover:text-accent"
                }`}
              >
                {city.label}
              </button>
            ))}
          </div>

          {/* Show all cities toggle */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowAllCities(!showAllCities)}
              className="text-sm text-accent hover:text-accent/80 font-semibold transition-colors flex items-center gap-2"
            >
              {showAllCities ? "← Ocultar más ciudades" : "Mostrar más ciudades →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
