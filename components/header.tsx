"use client"
import { User, Plus } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <>
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm dark:shadow-lg dark:shadow-primary/10 backdrop-blur-md dark:backdrop-blur-sm bg-card/95 dark:bg-card/90">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg dark:shadow-primary/50">
              <span className="text-primary-foreground font-bold text-sm">📋</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-primary dark:to-secondary dark:text-transparent">
              Tablón Discreto
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="text-muted-foreground hover:text-accent transition">
              <User className="w-5 h-5" />
            </button>
            <button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-primary/50 transition flex items-center gap-2 dark:shadow-md">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Publicar</span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
