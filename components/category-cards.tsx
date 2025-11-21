"use client"

const categories = [
  {
    id: 1,
    name: "Anuncios Destacados",
    description:
      "Publica tu anuncio con visibilidad premium. Incluye fotos, descripción y tu contacto directo de forma segura y discreta.",
    image: "/sophisticated-adults-meeting.jpg",
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
    items: [
      { type: "Encriptado", location: "Protegido" },
      { type: "Privado", location: "Confidencial" },
      { type: "Verificado", location: "Confiable" },
    ],
  },
]

export default function CategoryCards() {
  return (
    <section className="bg-background py-16 md:py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-primary dark:to-secondary dark:text-transparent mb-3 text-balance">
            Cómo Funciona Nuestro Tablón
          </h2>
          <p className="text-lg text-muted-foreground">Publica, busca y conecta de forma segura y discreta</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-accent/50 dark:hover:border-accent/70 hover:shadow-lg dark:hover:shadow-accent/20 transition-all duration-300"
            >
              {/* Header Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    <h3 className="text-lg font-bold text-primary-foreground">{category.name}</h3>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="p-6 border-b border-border/50">
                <p className="text-sm text-foreground/75 leading-relaxed">{category.description}</p>
              </div>

              {/* Items List */}
              <div className="p-6 space-y-3">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 hover:from-primary/10 hover:to-secondary/10 dark:hover:from-primary/15 dark:hover:to-secondary/15 rounded-lg transition cursor-pointer group/item border border-border/30 dark:border-border/50"
                  >
                    <div>
                      <p className="text-xs text-muted-foreground font-medium mb-0.5 uppercase tracking-wide">
                        {item.type}
                      </p>
                      <p className="text-sm font-semibold text-foreground group-hover/item:text-accent transition">
                        {item.location}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-muted-foreground group-hover/item:text-accent transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-6">
                <button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 dark:hover:from-primary/95 dark:hover:to-secondary/95 text-primary-foreground font-bold py-3 rounded-lg transition transform hover:scale-105 duration-200 shadow-md dark:shadow-lg dark:shadow-primary/20">
                  Conocer Más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
