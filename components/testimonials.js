"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    quote:
      "This AI music generator has completely transformed my workflow. I can create background music for my videos in minutes instead of hours.",
    author: "Sarah Chen",
    role: "Content Creator",
    avatar: "SC",
  },
  {
    quote:
      "As a music producer, I was skeptical at first. But the quality and versatility of the AI-generated tracks are genuinely impressive.",
    author: "Marcus Rodriguez",
    role: "Music Producer",
    avatar: "MR",
  },
  {
    quote:
      "The perfect tool for indie game development. I've created entire soundtracks for my games without breaking the bank.",
    author: "Alex Kim",
    role: "Game Developer",
    avatar: "AK",
  },
  {
    quote:
      "I use it daily for creating ambient music for my meditation app. The AI understands mood and atmosphere perfectly.",
    author: "Priya Patel",
    role: "App Developer",
    avatar: "PP",
  },
  {
    quote:
      "Finally, a music generation tool that actually sounds professional. My clients can't tell it's AI-generated.",
    author: "James Wilson",
    role: "Advertising Agency",
    avatar: "JW",
  },
  {
    quote:
      "The ability to customize and fine-tune every aspect gives me creative control while saving hours of production time.",
    author: "Emma Thompson",
    role: "Film Scorer",
    avatar: "ET",
  },
]

function TestimonialCard({ testimonial, index }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="hover:shadow-lg transition-shadow h-full">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-primary/10 text-primary">{testimonial.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-foreground text-sm">{testimonial.author}</div>
              <div className="text-xs text-muted-foreground">{testimonial.role}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function Testimonials() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="border-b border-border bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Trusted by creators worldwide
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See what musicians, producers, and content creators are saying about our AI music generator.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
