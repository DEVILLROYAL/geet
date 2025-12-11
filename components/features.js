"use client"

import { Wand2, Zap, Download, Sliders, Music2, Layers, Headphones, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Wand2,
    title: "AI-Powered Generation",
    description: "Advanced neural networks create original music based on your preferences and style inputs.",
  },
  {
    icon: Zap,
    title: "Instant Creation",
    description: "Generate complete tracks in seconds. No music theory knowledge required to get started.",
  },
  {
    icon: Sliders,
    title: "Full Customization",
    description: "Fine-tune every aspect of your track with intuitive controls for tempo, mood, and genre.",
  },
  {
    icon: Layers,
    title: "Multi-Track Support",
    description: "Work with multiple layers and stems. Mix and match different instruments effortlessly.",
  },
  {
    icon: Music2,
    title: "100+ Genres",
    description: "From classical to EDM, hip-hop to jazz. Create any style of music you can imagine.",
  },
  {
    icon: Headphones,
    title: "Studio Quality",
    description: "Professional-grade audio output at 320kbps. Ready for streaming and distribution.",
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description: "Download in multiple formats: MP3, WAV, FLAC, and MIDI. Full commercial rights included.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description: "Our AI improves with every generation, learning from millions of tracks and styles.",
  },
]

function FeatureCard({ feature, index }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 })
  const Icon = feature.icon

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="group hover:shadow-lg transition-all hover:border-primary/50 h-full">
        <CardContent className="p-6">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
        </CardContent>
      </Card>
    </div>
  )
}

export function Features() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <section id="features" className="border-b border-border bg-background py-24">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Everything you need to create
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful features designed for musicians, producers, and content creators of all skill levels.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            return <FeatureCard key={index} feature={feature} index={index} />
          })}
        </div>
      </div>
    </section>
  )
}
