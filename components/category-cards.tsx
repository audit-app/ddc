"use client"

import { Shield, Star, MessageCircle, CheckCircle2, ChevronRight } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Anuncios Destacados",
    description:
      "Publica tu anuncio con visibilidad premium. Incluye fotos, descripción y tu contacto directo de forma segura y discreta.",
    image: "https://bo.skokka.com/static/assets/womenseekmen_repr.09bc5c7b4ed7201892f6.jpg",
    icon: Star,
    items: [
      { type: "Publicar", location: "Contacto directo" },
      { type: "Destacar", location: "Mayor visibilidad" },
      { type: "Verificado", location: "Sello de confianza" },
    ],
  },
  {
    id: 2,
    name: "Categorías de Anuncios",
    description:
      "Organiza tu anuncio en la categoría correcta. Encuentra exactamente lo que buscas de forma rápida y segura.",
    image: "/travel-companions-adventure.jpg",
    icon: CheckCircle2,
    items: [
      { type: "Encuentros", location: "Categoría popular" },
      { type: "Viajes", location: "Compañía de viaje" },
      { type: "Servicios", location: "Varios" },
    ],
  },
  {
    id: 3,
    name: "Contacto Directo",
    description: "Controla tu información. Comparte email, teléfono o WhatsApp. Solo tú decides quién te contacta.",
    image: "/exclusive-events-networking.jpg",
    icon: MessageCircle,
    items: [
      { type: "Email", location: "Privado" },
      { type: "Teléfono", location: "Directo" },
      { type: "WhatsApp", location: "Inmediato" },
    ],
  },
  {
    id: 4,
    name: "Seguridad y Privacidad",
    description: "Tu privacidad es nuestra prioridad. Anuncios protegidos, datos encriptados y comunidad verificada.",
    image: "/premium-dating-connections.jpg",
    icon: Shield,
    items: [
      { type: "Encriptado", location: "Protegido" },
      { type: "Privado", location: "Confidencial" },
      { type: "Verificado", location: "Confiable" },
    ],
  },
]

export default function CategoryCards() {
  return (
    <section className="py-20 sm:py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Encuentros discretos en{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              tu ciudad
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Publica, busca y conecta de forma segura y discreta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Header Image */}
                <div className="relative h-52 overflow-hidden bg-muted">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                  </div>
                </div>

                {/* Description Section */}
                <div className="p-6 border-b border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                </div>

                {/* Items List */}
                <div className="p-6 space-y-2">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="group/item flex items-center justify-between p-3 bg-muted/30 hover:bg-primary/5 rounded-lg transition-all duration-200 cursor-pointer border border-transparent hover:border-primary/20"
                    >
                      <div>
                        <p className="text-xs text-muted-foreground font-medium mb-0.5 uppercase tracking-wide">
                          {item.type}
                        </p>
                        <p className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors">
                          {item.location}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover/item:text-primary group-hover/item:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="px-6 pb-6">
                  <button className="group/btn relative w-full bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/20 overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative z-10">Conocer Más</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
