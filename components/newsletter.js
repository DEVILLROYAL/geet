"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Newsletter() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="border-b border-border bg-primary/5 py-24">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Stay in the loop</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Get the latest updates on new features, music production tips, and exclusive offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
