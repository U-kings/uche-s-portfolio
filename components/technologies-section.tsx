// Technologies section showcasing tech stack

export function TechnologiesSection() {
  const technologies = [
    "React Native",
    "Flutter",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Django",
    "Java",
    "Firebase",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Technologies I Work With</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A diverse toolkit for building scalable and modern applications
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium hover:border-accent transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
