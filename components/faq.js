"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    question: "How does the AI music generator work?",
    answer:
      "Our AI uses advanced neural networks trained on millions of songs across various genres. You provide text descriptions or select parameters like genre, mood, and tempo, and the AI generates original music that matches your specifications.",
  },
  {
    question: "Do I own the rights to the music I create?",
    answer:
      "Yes! All paid plans include full commercial rights to the music you generate. You can use it in your videos, podcasts, games, or any commercial project without additional licensing fees.",
  },
  {
    question: "What audio formats can I export?",
    answer:
      "Export options vary by plan. The Starter plan includes MP3 (128kbps), Creator plan adds WAV and high-quality MP3 (320kbps), and Studio plan includes FLAC and MIDI exports for maximum flexibility.",
  },
  {
    question: "Can I edit the AI-generated music?",
    answer:
      "Our built-in editor lets you adjust tempo, key, instruments, and mix levels. You can also export individual stems to edit in your preferred DAW (Digital Audio Workstation).",
  },
  {
    question: "How long does it take to generate a track?",
    answer:
      "Most tracks are generated in 30-60 seconds, depending on complexity and current server load. Studio plan subscribers get priority processing for faster generation times.",
  },
  {
    question: "Is there a limit to how many tracks I can generate?",
    answer:
      "Limits depend on your plan. Starter allows 10 tracks/month, Creator offers 500 tracks/month, and Studio provides unlimited generation. Unused tracks do not roll over to the next month.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel anytime from your account settings. You'll retain access to your plan benefits until the end of your current billing period. All previously generated tracks remain available for download.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with the service, contact our support team within 14 days of your purchase for a full refund.",
  },
]

export function Faq() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 })
  const [accordionRef, accordionVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="faq" className="border-b border-border bg-background py-24">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div
          ref={accordionRef}
          className={`mx-auto max-w-3xl transition-all duration-1000 delay-200 ${
            accordionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
