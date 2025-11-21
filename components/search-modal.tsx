"use client"

import { useState } from "react"
import { X, Search, ChevronDown } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("Escorts")
  const [selectedCity, setSelectedCity] = useState("Todas las ciudades")
  const [searchText, setSearchText] = useState("")
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null)
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})

  const filters = [
    {
      id: "etnia",
      label: "Etnia",
      icon: "👤",
      options: ["Africana", "India", "Asiática", "Árabe", "Latina", "Caucásica", "Bolivianas"],
    },
    {
      id: "nacionalidad",
      label: "Nacionalidad",
      icon: "🚩",
      options: ["Bo Boliviana", "Py Paraguay", "Br Brasileña", "Co Colombiana", "Ar Argentina"],
    },
    {
      id: "pechos",
      label: "Pechos",
      icon: "🎀",
      options: ["Natural", "Silicona", "Grande", "Pequeño", "Medio"],
    },
    {
      id: "cabello",
      label: "Cabello",
      icon: "💇",
      options: ["Largo", "Corto", "Rubio", "Negro", "Castaño", "Rizado", "Liso"],
    },
  ]

  const handleClearAll = () => {
    setSearchText("")
    setSelectedCategory("Escorts")
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
      <DialogContent className="max-w-2xl w-full p-0 bg-white border-0 shadow-2xl rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Search className="w-6 h-6 text-gray-900" />
            <h2 className="text-2xl font-bold text-gray-900">Buscar</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition text-gray-600 hover:text-gray-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Category and City */}
          <div className="grid grid-cols-2 gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none cursor-pointer font-medium"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                paddingRight: "2.5rem",
              }}
            >
              <option>Escorts</option>
              <option>Guías Turísticos</option>
              <option>Servicios Especiales</option>
            </select>

            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none cursor-pointer font-medium"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                paddingRight: "2.5rem",
              }}
            >
              <option>Todas las ciudades</option>
              <option>La Paz</option>
              <option>Santa Cruz</option>
              <option>Cochabamba</option>
              <option>Oruro</option>
              <option>Sucre</option>
              <option>Potosí</option>
            </select>
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Buscar aquí...."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 font-medium"
          />

          {/* Filters Header */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-gray-800 font-semibold flex items-center gap-2">⚙️ Filtros</span>
          </div>

          {/* Filter Items */}
          <div className="space-y-4">
            {filters.map((filter) => (
              <div key={filter.id} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setExpandedFilter(expandedFilter === filter.id ? null : filter.id)}
                  className="w-full flex items-center justify-between group py-2"
                >
                  <div className="flex items-center gap-2 text-gray-900 font-semibold">
                    <span>{filter.icon}</span>
                    <span>{filter.label}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-pink-600 transition-transform duration-300 ${
                      expandedFilter === filter.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Filter Options as Chips */}
                {expandedFilter === filter.id && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {filter.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleFilterToggle(filter.id, option)}
                        className={`px-4 py-2 rounded-full border-2 font-medium transition-all duration-200 ${
                          selectedFilters[filter.id]?.includes(option)
                            ? "bg-pink-600 text-white border-pink-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-pink-600"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Show All Link */}
          <button className="text-pink-600 font-semibold text-sm hover:underline flex items-center gap-1 pt-2">
            + Mostrar todo
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex gap-3">
          <button
            onClick={handleClearAll}
            className="flex-1 text-pink-600 hover:text-pink-700 font-bold py-3 rounded-lg hover:bg-pink-50 transition text-sm"
          >
            ELIMINAR TODOS
          </button>
          <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            BUSCAR
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
