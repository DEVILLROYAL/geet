import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Showcase } from "@/components/showcase"
import { Stats } from "@/components/stats"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Team } from "@/components/team"
import { Faq } from "@/components/faq"
import { Newsletter } from "@/components/newsletter"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen dark">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Showcase />
        <Stats />
        <Pricing />
        <Testimonials />
        <Team />
        <Faq />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
