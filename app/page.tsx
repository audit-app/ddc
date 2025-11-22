import Header from "@/components/header"
import Hero from "@/components/hero"
import CategoryCards from "@/components/category-cards"
import Footer from "@/components/footer"
import CategoryFilter from "@/components/category-filter"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CategoryCards />
      <CategoryFilter category="Viajeras" />
      <Footer />
    </main>
  )
}
