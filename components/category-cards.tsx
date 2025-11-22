"use client"

import Image from "next/image"
import { Heart, Users, Sparkles, User, MapPin, ChevronRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Mujeres",
    slug: "mujeres",
    description:
      "Encuentros con mujeres verificadas. Acompañantes, masajes y servicios personalizados con total discreción.",
    image: "https://bo.skokka.com/static/assets/womenseekmen_repr.09bc5c7b4ed7201892f6.jpg",
    icon: Heart,
    stats: "500+ anuncios",
    locations: [
      { city: "La Paz", count: 180 },
      { city: "Cochabamba", count: 150 },
      { city: "Santa Cruz", count: 170 },
    ],
  },
  {
    id: 2,
    name: "Trans",
    slug: "trans",
    description:
      "Anuncios de trans y travestis en Bolivia. Compañía auténtica con perfiles verificados y contacto seguro.",
    image: "/images/category-trans.jpg",
    icon: Sparkles,
    stats: "150+ anuncios",
    locations: [
      { city: "Santa Cruz", count: 65 },
      { city: "La Paz", count: 45 },
      { city: "Cochabamba", count: 40 },
    ],
  },
  {
    id: 3,
    name: "Hombres",
    slug: "hombres",
    description: "Servicios masculinos para encuentros discretos. Gigolos y acompañantes profesionales en tu zona.",
    image: "/images/category-hombres.jpg",
    icon: User,
    stats: "80+ anuncios",
    locations: [
      { city: "La Paz", count: 35 },
      { city: "Santa Cruz", count: 28 },
      { city: "El Alto", count: 17 },
    ],
  },
  {
    id: 4,
    name: "Parejas",
    slug: "parejas",
    description: "Parejas liberales y swingers. Encuentros únicos y experiencias compartidas en un ambiente seguro.",
    image: "/images/category-parejas.jpg",
    icon: Users,
    stats: "60+ anuncios",
    locations: [
      { city: "Santa Cruz", count: 25 },
      { city: "Cochabamba", count: 20 },
      { city: "La Paz", count: 15 },
    ],
  },
]

export default function CategoryCards() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Tu privacidad, nuestra prioridad</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Encuentros discretos en{" "}
            <span className="text-primary">tu ciudad</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plataforma segura y elegante para conectar de forma privada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-primary rounded-3xl opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500" />

                {/* Card container */}
                <div className="relative bg-card/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-primary/5 rounded-3xl overflow-hidden">

                  {/* Image section - prominent */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={`Categoría ${category.name} - Anuncios clasificados`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                    {/* Stats badge on image */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-xl border border-white/20 shadow-lg">
                      <span className="text-xs font-bold text-primary">{category.stats}</span>
                    </div>

                    {/* Icon badge on image */}
                    <div className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-background/80 backdrop-blur-xl border border-white/20 shadow-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Title overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground drop-shadow-lg">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>

                    {/* Locations list - like original style */}
                    <div className="space-y-2">
                      {category.locations.map((location, idx) => (
                        <Link
                          key={idx}
                          href={`/anuncios?categoria=${category.slug}&ciudad=${location.city.toLowerCase().replace(' ', '-')}`}
                          className="group/item flex items-center justify-between p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                              <MapPin className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-foreground/90 group-hover/item:text-primary transition-colors">
                              {location.city}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                              {location.count} anuncios
                            </span>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/item:text-primary group-hover/item:translate-x-0.5 transition-all" />
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* CTA button */}
                    <Link
                      href={`/anuncios?categoria=${category.slug}`}
                      className="w-full block rounded-xl bg-primary px-6 py-3.5 text-center transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                    >
                      <span className="text-sm font-bold text-primary-foreground tracking-wide">
                        Ver todos en {category.name}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
