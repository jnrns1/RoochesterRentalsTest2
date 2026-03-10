import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Properties } from "@/components/properties"
import { Amenities } from "@/components/amenities"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Properties />
      <Amenities />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
