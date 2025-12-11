"use client"

import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "01",
    title: "Describe Your Vision",
    description: "Tell our AI what kind of music you want to create. Choose genre, mood, tempo, and instruments.",
    image: "/music-input-interface-with-text-prompts.jpg",
  },
  {
    number: "02",
    title: "AI Creates Your Track",
    description: "Our advanced algorithms compose a unique track based on your specifications in seconds.",
    image: "/ai-processing-waveforms-and-audio-visualization.jpg",
  },
  {
    number: "03",
    title: "Refine & Export",
    description: "Fine-tune your creation with our editor, then download in your preferred format with full rights.",
    image: "/music-editing-interface-with-export-options.jpg",
  },
]

function StepCard({ step, index }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
            <div className={`flex flex-col justify-center p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
              <div className="mb-4 text-6xl font-bold text-primary/20">{step.number}</div>
              <h3 className="mb-4 text-3xl font-bold text-foreground">{step.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{step.description}</p>
              <div className="flex items-center gap-2 text-primary font-medium">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            <div
              className={`relative aspect-square lg:aspect-auto ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
            >
              <img src={step.image || "/placeholder.svg"} alt={step.title} className="h-full w-full object-cover" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function HowItWorks() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <section id="how-it-works" className="border-b border-border bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Three steps to your perfect track
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our streamlined process makes music creation accessible to everyone, from beginners to professionals.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
