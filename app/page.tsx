import Header from "@/components/header"
import Hero from "@/components/hero"
import CategoryCards from "@/components/category-cards"
import Footer from "@/components/footer"
import CategoryFilter from "@/components/category-filter"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CategoryCards />

      <section className="py-12 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-6xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Explora Anuncios por Categoría
          </h2>
          <p className="text-lg text-muted-foreground">Encuentra exactamente lo que buscas en tu ciudad</p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/anuncios"
            className="text-accent hover:text-accent/80 font-semibold flex items-center gap-2 group"
          >
            Ver todos los anuncios
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      <CategoryFilter category="Viajeras" />
      <Footer />
    </main>
  )
}
