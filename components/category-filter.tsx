"use client"

import { useState } from "react"
import { X, MapPin } from "lucide-react"

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
    <section className="py-16 sm:py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {category}
            </h2>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg ml-[52px]">
            Explora anuncios en tu ciudad preferida
          </p>
        </div>

        <div className="space-y-6">
          {/* Active filters display */}
          {selectedCities.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap p-4 bg-muted/30 rounded-xl border border-border/50">
              <span className="text-sm text-muted-foreground font-semibold">Filtros activos:</span>
              {selectedCities.map((cityId) => (
                <div
                  key={cityId}
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-3 py-1.5 rounded-lg text-sm font-medium"
                >
                  {cities.find((c) => c.id === cityId)?.label}
                  <button
                    onClick={() => toggleCity(cityId)}
                    className="hover:text-primary/70 transition-colors"
                    aria-label={`Eliminar filtro ${cities.find((c) => c.id === cityId)?.label}`}
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
              <button
                onClick={clearFilters}
                className="text-xs text-muted-foreground hover:text-foreground font-semibold transition-colors ml-2"
              >
                Limpiar todo
              </button>
            </div>
          )}

          {/* City filter buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => toggleCity(city.id)}
                className={`group px-4 py-3.5 rounded-xl font-semibold transition-all duration-200 text-sm border-2 ${
                  selectedCities.includes(city.id)
                    ? "border-primary bg-primary/10 text-primary shadow-md shadow-primary/10"
                    : "border-border bg-card hover:border-primary/30 text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  {selectedCities.includes(city.id) && <MapPin className="w-4 h-4" />}
                  {city.label}
                </span>
              </button>
            ))}
          </div>

          {/* Show all cities toggle */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowAllCities(!showAllCities)}
              className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/5"
            >
              {showAllCities ? "← Ocultar más ciudades" : "Mostrar más ciudades →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
