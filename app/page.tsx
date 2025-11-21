import Header from "@/components/header"
import Hero from "@/components/hero"
import CategoryCards from "@/components/category-cards"
import Footer from "@/components/footer"
import CategoryFilter from "@/components/category-filter"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CategoryCards />

      <section className="py-16 sm:py-20 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Explora Anuncios por{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Categoría
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Encuentra exactamente lo que buscas en tu ciudad
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/anuncios"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-xl font-semibold text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              Ver todos los anuncios
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <CategoryFilter category="Viajeras" />
      <Footer />
    </main>
  )
}
