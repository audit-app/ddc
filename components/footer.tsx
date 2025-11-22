"use client"

import Link from "next/link"
import { Mail, Phone, Shield, Upload, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Left Section - Logo and Description */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">
                  Damas de Compañía
                </span>
                <span className="text-[10px] text-muted-foreground -mt-1">Bolivia</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Plataforma segura para publicar y encontrar anuncios discretos. Contacto directo, máxima privacidad y
              verificación completa. Tu información está protegida.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary">100% Discreto y Seguro</span>
            </div>
          </div>

          {/* Right Section - Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-3 text-sm">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-foreground mb-3 text-sm">Soporte</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <h3 className="font-semibold text-foreground mb-3 text-sm">Seguridad</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    Reportar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    Verificación
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-3 text-sm">Compañía</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    Novedades
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-border/40">
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-2">Comienza Ahora</h3>
            <p className="text-sm text-muted-foreground mb-4">Publica tu anuncio de forma segura</p>
            <button className="w-full bg-primary text-primary-foreground font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
              <Upload className="w-4 h-4" />
              PUBLICAR ANUNCIO
            </button>
          </div>
          <div className="p-6 bg-card rounded-2xl border border-border/50">
            <h3 className="font-semibold text-foreground mb-2">Contactos Soportados</h3>
            <p className="text-sm text-muted-foreground mb-4">Elige cómo quieres conectar</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-lg">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">Email</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-lg">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">Teléfono</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-lg">
                <Shield className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex gap-3 order-2 sm:order-1">
              <a
                href="#"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                aria-label="Soporte"
              >
                <Shield size={18} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground order-1 sm:order-2">
              © 2025 Damas de Compañía Bolivia. Todos los derechos reservados.
            </p>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs text-muted-foreground hover:text-primary transition-colors order-3 flex items-center gap-1 px-3 py-1.5 hover:bg-primary/10 rounded-lg"
            >
              ↑ Arriba
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
