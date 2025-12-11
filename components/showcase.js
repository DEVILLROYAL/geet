"use client"

import { Play, Pause } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const tracks = [
  {
    title: "Neon Dreams",
    genre: "Synthwave",
    duration: "3:45",
    image: "/synthwave-neon-aesthetic-album-art.jpg",
    color: "bg-primary/20",
  },
  {
    title: "Coffee Shop Jazz",
    genre: "Jazz",
    duration: "4:12",
    image: "/cozy-coffee-shop-jazz-aesthetic.jpg",
    color: "bg-accent/20",
  },
  {
    title: "Digital Horizon",
    genre: "Electronic",
    duration: "3:28",
    image: "/futuristic-digital-landscape.jpg",
    color: "bg-chart-3/20",
  },
  {
    title: "Acoustic Sunset",
    genre: "Folk",
    duration: "3:55",
    image: "/warm-sunset-acoustic-guitar.jpg",
    color: "bg-chart-4/20",
  },
  {
    title: "Bass Drop",
    genre: "EDM",
    duration: "3:33",
    image: "/edm-festival-energy-lights.jpg",
    color: "bg-chart-5/20",
  },
  {
    title: "Lo-Fi Study",
    genre: "Lo-Fi",
    duration: "4:01",
    image: "/cozy-study-room-lo-fi-aesthetic.jpg",
    color: "bg-primary/20",
  },
]

function TrackCard({ track, index, playing, setPlaying }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="group overflow-hidden hover:shadow-lg transition-all">
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={track.image || "/placeholder.svg"}
              alt={track.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 ${track.color} backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center`}
            >
              <Button
                size="icon"
                className="h-16 w-16 rounded-full"
                onClick={() => setPlaying(playing === index ? null : index)}
              >
                {playing === index ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
              </Button>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-foreground">{track.title}</h3>
              <span className="text-sm text-muted-foreground">{track.duration}</span>
            </div>
            <Badge variant="secondary">{track.genre}</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function Showcase() {
  const [playing, setPlaying] = useState(null)
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <section id="showcase" className="border-b border-border bg-background py-24">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Hear what's possible</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Listen to tracks created entirely by AI. Each one generated in under a minute.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <TrackCard key={index} track={track} index={index} playing={playing} setPlaying={setPlaying} />
          ))}
        </div>
      </div>
    </section>
  )
}
