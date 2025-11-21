"use client"
import { User, Plus, Heart } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 bg-gradient-to-br from-primary via-primary to-secondary rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Damas de Compañía
              </span>
              <span className="text-[10px] text-muted-foreground -mt-1">Bolivia</span>
            </div>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
              aria-label="Perfil de usuario"
            >
              <User className="w-5 h-5" />
            </button>
            <button className="group relative bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground px-4 sm:px-5 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <Plus className="w-4 h-4 relative z-10" />
              <span className="hidden sm:inline relative z-10">Publicar</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
