"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronLeft, ChevronRight, Copy, Check, AlertCircle, Eye, MapPin, Calendar, Badge } from "lucide-react"

interface Anuncio {
  title: string
  anuncio: string
  fotos: string[]
  whatsapp: string
  email?: string
  city: string
  date: string
  verificado?: boolean
  vistas?: number
  edad?: number
  ubicacion?: string
  servicios?: string[]
  disponibilidad?: string
  precio?: number
  link: string
}

export default function AnuncioDetailClient({ anuncio, anuncioId }: { anuncio: Anuncio; anuncioId: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % anuncio.fotos.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + anuncio.fotos.length) % anuncio.fotos.length)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header con botón atrás */}
          <Link
            href="/anuncios"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Volver a anuncios</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Galería de imágenes - Columna izquierda */}
            <div className="lg:col-span-2">
              <div className="relative w-full aspect-square bg-card rounded-2xl overflow-hidden mb-4">
                <img
                  src={anuncio.fotos[currentImageIndex] || "/placeholder.svg"}
                  alt={`${anuncio.title} - Imagen ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {anuncio.fotos.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight size={24} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                      {currentImageIndex + 1} / {anuncio.fotos.length}
                    </div>
                  </>
                )}
              </div>

              {/* Miniaturas */}
              {anuncio.fotos.length > 1 && (
                <div className="grid grid-cols-6 gap-2">
                  {anuncio.fotos.map((foto, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-full aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex ? "border-primary" : "border-primary/20 hover:border-primary/40"
                      }`}
                    >
                      <img
                        src={foto || "/placeholder.svg"}
                        alt={`Miniatura ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="bg-card rounded-2xl p-6 mt-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Información del anuncio</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {anuncio.verificado && (
                    <div className="flex items-center gap-2">
                      <Badge className="bg-primary/20 text-primary" size={16} />
                      <div>
                        <p className="text-xs text-muted-foreground">Verificado</p>
                        <p className="font-semibold text-foreground text-sm">Perfil verificado</p>
                      </div>
                    </div>
                  )}
                  {anuncio.vistas && (
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Vistas</p>
                        <p className="font-semibold text-foreground text-sm">{anuncio.vistas}</p>
                      </div>
                    </div>
                  )}
                  {anuncio.edad && (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-primary rounded-full" />
                      <div>
                        <p className="text-xs text-muted-foreground">Edad</p>
                        <p className="font-semibold text-foreground text-sm">{anuncio.edad} años</p>
                      </div>
                    </div>
                  )}
                  {anuncio.ubicacion && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Ubicación</p>
                        <p className="font-semibold text-foreground text-sm">{anuncio.ubicacion}</p>
                      </div>
                    </div>
                  )}
                </div>

                {anuncio.servicios && anuncio.servicios.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">Servicios ofrecidos:</p>
                    <div className="flex flex-wrap gap-2">
                      {anuncio.servicios.map((servicio, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {servicio}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-card border border-primary/20 rounded-2xl p-6 mt-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-bold text-foreground">Consejos de seguridad</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground/70 ml-8">
                  <li className="list-disc">Realiza todas las transacciones en lugar seguro y público</li>
                  <li className="list-disc">Verifica la identidad del contacto antes de proceder</li>
                  <li className="list-disc">Nunca adelantes dinero sin confirmación previa</li>
                  <li className="list-disc">Comunica tu ubicación a un contacto de confianza</li>
                  <li className="list-disc">
                    Si consideras que este anuncio es inapropiado, reporta a{" "}
                    <a href="mailto:abuse@skokka.com" className="text-primary font-semibold hover:underline">
                      abuse@skokka.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Barra lateral derecha - Información de contacto y acciones */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="bg-card rounded-2xl p-6">
                  <h1 className="text-2xl font-bold text-foreground mb-2">{anuncio.title}</h1>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                    <MapPin size={16} />
                    {anuncio.city}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar size={16} />
                    {anuncio.date}
                  </div>
                  <p className="text-foreground/70 text-sm">{anuncio.anuncio}</p>
                </div>

                {anuncio.disponibilidad && (
                  <div className="bg-primary/10 rounded-2xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">Disponibilidad</p>
                    <p className="font-semibold text-foreground">{anuncio.disponibilidad}</p>
                  </div>
                )}

                {anuncio.precio && (
                  <div className="bg-primary/15 rounded-2xl p-6">
                    <p className="text-xs text-muted-foreground mb-2">Precio</p>
                    <p className="text-3xl font-bold text-primary">
                      {new Intl.NumberFormat("es-BO", {
                        style: "currency",
                        currency: "BOB",
                      }).format(anuncio.precio)}
                    </p>
                  </div>
                )}

                <div className="bg-card rounded-2xl p-6 space-y-4">
                  <h2 className="text-lg font-bold text-foreground">Información de contacto</h2>

                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-xl">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">WhatsApp</p>
                      <p className="font-semibold text-foreground">{anuncio.whatsapp}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(anuncio.whatsapp)}
                      className="p-2 hover:bg-primary/20 rounded-lg transition-colors"
                      aria-label="Copiar WhatsApp"
                    >
                      {copied ? (
                        <Check size={20} className="text-primary" />
                      ) : (
                        <Copy size={20} className="text-muted-foreground" />
                      )}
                    </button>
                  </div>

                  {anuncio.email && (
                    <div className="flex items-center justify-between p-3 bg-primary/5 rounded-xl">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Email</p>
                        <p className="font-semibold text-foreground text-sm break-all">{anuncio.email}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(anuncio.email || "")}
                        className="p-2 hover:bg-primary/20 rounded-lg transition-colors"
                        aria-label="Copiar email"
                      >
                        <Copy size={20} className="text-muted-foreground" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <a
                    href={`https://wa.me/${anuncio.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-xl transition-colors text-center block"
                  >
                    Contactar por WhatsApp
                  </a>

                  {anuncio.email && (
                    <a
                      href={`mailto:${anuncio.email}`}
                      className="w-full bg-primary/20 hover:bg-primary/30 text-foreground font-semibold py-3 px-4 rounded-xl transition-colors text-center"
                    >
                      Enviar Email
                    </a>
                  )}
                </div>

                <div className="bg-card rounded-2xl p-4">
                  <p className="text-sm font-semibold text-foreground mb-3">Compartir anuncio</p>
                  <div className="flex gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(anuncio.link)}&text=${encodeURIComponent(anuncio.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-muted hover:bg-muted/80 text-foreground py-2 px-3 rounded-lg transition-colors text-center text-sm font-semibold"
                    >
                      X
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(anuncio.title + " " + anuncio.link)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary py-2 px-3 rounded-lg transition-colors text-center text-sm font-semibold"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Otros anuncios en <span className="text-primary">{anuncio.city}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Cards are now standalone divs with proper semantic structure */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
