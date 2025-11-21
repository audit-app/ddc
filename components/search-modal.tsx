"use client"

import { useState } from "react"
import { X, Search, ChevronDown, Sparkles, MapPin, SlidersHorizontal } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("Mujeres")
  const [selectedCity, setSelectedCity] = useState("Todas las ciudades")
  const [searchText, setSearchText] = useState("")
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null)
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})

  const categories = ["Mujeres", "Trans", "Hombres", "Parejas", "Masajes"]
  const cities = ["Todas las ciudades", "La Paz", "Santa Cruz", "Cochabamba", "El Alto", "Oruro", "Sucre", "Potosí"]

  const filters = [
    {
      id: "etnia",
      label: "Etnia",
      options: ["Latina", "Caucásica", "Boliviana", "Asiática", "Africana", "Árabe", "India"],
    },
    {
      id: "nacionalidad",
      label: "Nacionalidad",
      options: ["Boliviana", "Argentina", "Brasileña", "Colombiana", "Paraguaya", "Venezolana"],
    },
    {
      id: "edad",
      label: "Edad",
      options: ["18-25", "26-30", "31-35", "36-40", "40+"],
    },
    {
      id: "servicios",
      label: "Servicios",
      options: ["Masajes", "Acompañante", "Eventos", "Viajes", "Cena"],
    },
  ]

  const handleClearAll = () => {
    setSearchText("")
    setSelectedCategory("Mujeres")
    setSelectedCity("Todas las ciudades")
    setExpandedFilter(null)
    setSelectedFilters({})
  }

  const handleFilterToggle = (filterId: string, option: string) => {
    setSelectedFilters((prev) => {
      const filterOptions = prev[filterId] || []
      const updated = filterOptions.includes(option)
        ? filterOptions.filter((f) => f !== option)
        : [...filterOptions, option]
      return { ...prev, [filterId]: updated }
    })
  }

  const activeFiltersCount = Object.values(selectedFilters).flat().length

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className="!max-w-4xl sm:!max-w-4xl w-[95vw] p-0 bg-card/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-primary/10 rounded-3xl overflow-hidden"
      >
        {/* Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
          <div className="relative flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl rounded-xl border border-white/20">
              <Search className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Búsqueda avanzada</h2>
              <p className="text-xs text-muted-foreground">Encuentra exactamente lo que buscas</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="relative p-2 hover:bg-white/10 rounded-xl transition-all duration-300 text-muted-foreground hover:text-foreground group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto">

          {/* Search Input */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-0 group-focus-within:opacity-30 blur transition-opacity duration-300" />
            <div className="relative flex items-center bg-background/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group-focus-within:border-primary/50 transition-colors">
              <div className="pl-4">
                <Search className="w-5 h-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Buscar por nombre, servicio o descripción..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-4 py-4 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none font-medium"
              />
              {searchText && (
                <button
                  onClick={() => setSearchText("")}
                  className="pr-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category and City - Two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Category Select */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-primary" />
                Categoría
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3.5 bg-background/50 backdrop-blur-sm border border-white/10 rounded-xl text-foreground focus:outline-none focus:border-primary/50 appearance-none cursor-pointer font-medium transition-colors hover:border-primary/30"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-card text-foreground">
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* City Select */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-3 h-3 text-primary" />
                Ciudad
              </label>
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3.5 bg-background/50 backdrop-blur-sm border border-white/10 rounded-xl text-foreground focus:outline-none focus:border-primary/50 appearance-none cursor-pointer font-medium transition-colors hover:border-primary/30"
                >
                  {cities.map((city) => (
                    <option key={city} value={city} className="bg-card text-foreground">
                      {city}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Filters Header */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-primary/10 rounded-lg">
                <SlidersHorizontal className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-semibold">Filtros</span>
              {activeFiltersCount > 0 && (
                <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-bold rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </div>
            {activeFiltersCount > 0 && (
              <button
                onClick={() => setSelectedFilters({})}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {/* Filter Items - Single column */}
          <div className="space-y-3">
            {filters.map((filter) => {
              const isExpanded = expandedFilter === filter.id
              const selectedCount = selectedFilters[filter.id]?.length || 0

              return (
                <div
                  key={filter.id}
                  className={`rounded-xl border transition-all duration-300 ${
                    isExpanded
                      ? "bg-background/60 border-primary/30"
                      : "bg-background/30 border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => setExpandedFilter(isExpanded ? null : filter.id)}
                    className="w-full flex items-center justify-between p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-foreground font-medium">{filter.label}</span>
                      {selectedCount > 0 && (
                        <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                          {selectedCount}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Filter Options as Chips */}
                  {isExpanded && (
                    <div className="px-4 pb-4 flex flex-wrap gap-2">
                      {filter.options.map((option) => {
                        const isSelected = selectedFilters[filter.id]?.includes(option)
                        return (
                          <button
                            key={option}
                            onClick={() => handleFilterToggle(filter.id, option)}
                            className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                              isSelected
                                ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/20"
                                : "bg-background/50 text-foreground/80 border border-white/10 hover:border-primary/50 hover:text-primary"
                            }`}
                          >
                            {option}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="relative p-5 border-t border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
          <div className="relative flex gap-3">
            <button
              onClick={handleClearAll}
              className="flex-1 px-6 py-3.5 text-muted-foreground hover:text-foreground font-semibold rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              Limpiar todo
            </button>
            <button className="flex-1 relative group overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary to-secondary p-[1px] transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
              <div className="relative bg-gradient-to-r from-primary via-primary to-secondary rounded-xl px-6 py-3.5 flex items-center justify-center gap-2">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Search className="w-5 h-5 text-primary-foreground relative" />
                <span className="font-bold text-primary-foreground relative">Buscar</span>
              </div>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
