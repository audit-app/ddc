import Link from "next/link"
import { Mail, Phone, Shield, Upload } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Section - Logo and Description */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground">📋</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-primary dark:to-secondary dark:text-transparent">
                Tablón Discreto
              </span>
              <div className="inline-block bg-accent/20 border border-accent/50 px-3 py-1 rounded text-xs font-semibold text-accent ml-2">
                PRIVADO
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plataforma segura para publicar y encontrar anuncios discretos. Contacto directo, máxima privacidad y
              verificación completa. Tu información está protegida.
            </p>
          </div>

          {/* Right Section - Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-3 text-sm">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-accent hover:text-accent/80 text-sm transition">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-accent hover:text-accent/80 text-sm transition">
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-foreground mb-3 text-sm">Soporte</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-accent hover:text-accent/80 text-sm transition">
                    Contáctanos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-accent hover:text-accent/80 text-sm transition">
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-accent hover:text-accent/80 text-sm transition">
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
                  <Link href="#" className="text-accent hover:text-accent/80 text-sm transition">
                    Reporte de Abuso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-accent hover:text-accent/80 text-sm transition">
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
                  <Link href="#" className="text-accent hover:text-accent/80 text-sm transition">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-accent hover:text-accent/80 text-sm transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA and Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-border">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Comienza Ahora</h3>
            <button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-2.5 px-4 rounded-lg transition flex items-center justify-center gap-2 shadow-md dark:shadow-lg">
              <Upload className="w-4 h-4" />
              PUBLICAR ANUNCIO
            </button>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Contactos Soportados</h3>
            <div className="text-sm text-muted-foreground flex items-center gap-4">
              <span className="flex items-center gap-1">
                ✓ <Mail className="w-4 h-4" /> Email
              </span>
              <span className="flex items-center gap-1">
                ✓ <Phone className="w-4 h-4" /> Teléfono
              </span>
              <span className="flex items-center gap-1">
                ✓ <Shield className="w-4 h-4" /> Privado
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/40 dark:bg-gradient-to-r dark:from-primary/10 dark:to-secondary/10 border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex gap-4 order-2 md:order-1">
            <a href="#" className="text-muted-foreground hover:text-accent transition" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition" aria-label="Soporte">
              <Shield size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground order-1 md:order-2">
            © 2025 Tablón Discreto. Plataforma segura para anuncios de adultos.
          </p>

          {/* Back to Top */}
          <button className="text-xs text-muted-foreground hover:text-accent transition order-3">↑ Arriba</button>
        </div>
      </div>
    </footer>
  )
}
