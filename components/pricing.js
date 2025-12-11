"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for trying out AI music generation",
    features: ["10 tracks per month", "Basic genres", "MP3 export (128kbps)", "Community support", "Standard quality"],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Creator",
    price: "29",
    description: "For serious musicians and content creators",
    features: [
      "500 tracks per month",
      "All genres & styles",
      "WAV & MP3 export (320kbps)",
      "Priority support",
      "Commercial license",
      "Multi-track stems",
      "Advanced customization",
    ],
    cta: "Start Creating",
    popular: true,
  },
  {
    name: "Studio",
    price: "99",
    description: "For professional studios and agencies",
    features: [
      "Unlimited tracks",
      "All features included",
      "FLAC & MIDI export",
      "Dedicated support",
      "White-label option",
      "API access",
      "Team collaboration",
      "Priority processing",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

function PricingCard({ plan, index }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className={`relative ${plan.popular ? "border-primary shadow-lg lg:scale-105" : ""}`}>
        {plan.popular && (
          <div className="absolute -top-4 left-0 right-0 flex justify-center">
            <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
          </div>
        )}
        <CardHeader className="text-center pb-8 pt-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
          <div className="mb-2">
            <span className="text-5xl font-bold text-foreground">${plan.price}</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <p className="text-sm text-muted-foreground">{plan.description}</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-6">
          <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
            {plan.cta}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export function Pricing() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <section id="pricing" className="border-b border-border bg-background py-24">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the plan that fits your creative needs. All plans include commercial rights.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
