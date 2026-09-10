// Services/What I Do section showcasing main areas of expertise

import { Smartphone, Globe, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Building native and cross-platform mobile apps with React Native and Flutter",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating modern web applications with Next.js, React, and TypeScript",
    },
    {
      icon: Zap,
      title: "Full-Stack Solutions",
      description: "End-to-end development from backend APIs to frontend interfaces",
    },
  ]

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">What I Do</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I offer comprehensive development services across mobile and web platforms
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-background rounded-lg border border-border hover:border-accent transition-colors"
              >
                <Icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
