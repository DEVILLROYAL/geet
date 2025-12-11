"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Linkedin, Twitter, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const team = [
  {
    name: "Deepak Yadav",
    role: "CEO & Co-Founder",
    bio: "Freelance MERN-Stack developer, passionate about web appkications.",
    avatar: "DY",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sofia Martinez",
    role: "CTO & Co-Founder",
    bio: "Audio engineering expert with 15 years experience in music technology.",
    avatar: "SM",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "David Park",
    role: "Head of AI Research",
    bio: "PhD in deep learning, previously led AI teams at Spotify and Apple Music.",
    avatar: "DP",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Lisa Johnson",
    role: "Head of Product",
    bio: "Product leader focused on creating intuitive experiences for creators.",
    avatar: "LJ",
    social: { linkedin: "#", twitter: "#" },
  },
]

function TeamMemberCard({ member, index }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="text-center hover:shadow-lg transition-shadow h-full">
        <CardContent className="p-6">
          <Avatar className="h-24 w-24 mx-auto mb-4">
            <AvatarFallback className="bg-primary/10 text-primary text-2xl">{member.avatar}</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
          <p className="text-sm text-primary mb-3">{member.role}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
          <div className="flex items-center justify-center gap-2">
            {member.social.linkedin && (
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
            )}
            {member.social.twitter && (
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
            )}
            {member.social.github && (
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function Team() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="border-b border-border bg-background py-24">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Meet our team</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A diverse team of engineers, musicians, and AI researchers united by a passion for music.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
