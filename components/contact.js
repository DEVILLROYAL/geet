"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contactCards = [
  {
    icon: Mail,
    title: "Email us",
    description: "Our team will respond within 24 hours",
    link: "support@aimusicstudio.com",
    href: "mailto:support@aimusicstudio.com",
  },
  {
    icon: MessageSquare,
    title: "Live chat",
    description: "Available Mon-Fri, 9AM-6PM EST",
    action: true,
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Mon-Fri from 9AM to 6PM EST",
    link: "+1 (555) 123-4567",
    href: "tel:+1-555-123-4567",
  },
]

export function Contact() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 })
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.2 })
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="border-b border-border bg-background py-24">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Get in touch</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a question or need help? Our team is here to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            ref={formRef}
            className={`lg:col-span-2 transition-all duration-1000 ${
              formVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={6} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div
            ref={cardsRef}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {contactCards.map((card, index) => {
              const Icon = card.icon
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{card.description}</p>
                    {card.action ? (
                      <Button variant="outline" className="w-full bg-transparent">
                        Start Chat
                      </Button>
                    ) : (
                      <a href={card.href} className="text-sm text-primary hover:underline">
                        {card.link}
                      </a>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
