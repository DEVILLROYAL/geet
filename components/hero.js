"use client"

import { Button } from "@/components/ui/button"
import { Play, Sparkles, Mic } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]" />

      <div className="container relative mx-auto px-4 py-24 lg:py-32">
        <div
          ref={heroRef}
          className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Sparkles className="mr-1 h-3 w-3" />
            Powered by Advanced AI
          </Badge>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Create Professional Music with AI
          </h1>

          <p className="mb-8 text-pretty text-lg text-muted-foreground sm:text-xl lg:text-2xl leading-relaxed">
            Transform your ideas into studio-quality tracks in minutes. Our AI-powered music generator helps artists,
            producers, and creators bring their musical vision to life.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2 text-base">
              <Play className="h-5 w-5" />
              Start Creating Free
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base bg-transparent">
              <Mic className="h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 border-2 border-background" />
                <div className="h-8 w-8 rounded-full bg-accent/20 border-2 border-background" />
                <div className="h-8 w-8 rounded-full bg-chart-3/20 border-2 border-background" />
              </div>
              <span>50K+ creators</span>
            </div>
            <div>★★★★★ 4.9/5 rating</div>
            <div>No credit card required</div>
          </div>
        </div>

        <div
          ref={imageRef}
          className={`mt-16 mx-auto max-w-5xl transition-all duration-1000 delay-300 ${
            imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative aspect-video rounded-xl border border-border bg-card/50 backdrop-blur overflow-hidden shadow-2xl">
            <img
              src="/ai-music-production-interface-with-waveforms-and-c.jpg"
              alt="AI Music Generator Interface"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
