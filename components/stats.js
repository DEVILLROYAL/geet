"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const stats = [
  { value: "50K+", label: "Active Creators" },
  { value: "2M+", label: "Tracks Generated" },
  { value: "100+", label: "Music Genres" },
  { value: "99.9%", label: "Uptime" },
]

function StatCard({ stat, index }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="text-center">
        <CardContent className="p-8">
          <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </CardContent>
      </Card>
    </div>
  )
}

export function Stats() {
  return (
    <section className="border-b border-border bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
