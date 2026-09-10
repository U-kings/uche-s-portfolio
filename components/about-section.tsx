"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code2, Server, Smartphone, User, Laptop } from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      category: "Frontend",
      icon: <Code2 className="h-4 w-4 text-gray-400" />, // Project Accent Color
      items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend",
      icon: <Server className="h-4 w-4 text-gray-400" />, // Project Accent Color
      items: ["Node.js", "MongoDB", "Java", "API Design"],
    },
    {
      category: "Mobile & Tools",
      icon: <Smartphone className="h-4 w-4 text-gray-400" />, // Project Accent Color
      items: ["React Native", "Git", "UI/UX Design"],
      // items: ["Android Dev","React Native", "Git", "Problem Solving", "UI/UX Design"],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 w-full bg-background text-foreground transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-12">
          {/* Visual Anchor using your project accent color */}
          <User className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Profile Card */}
          <div className="md:col-span-4 flex justify-left md:justify-center w-full">
            {/* Hover state transitions directly into your project's accent outline */}
            <Card className="w-full max-w-70 md:max-w-none aspect-square overflow-hidden bg-muted/40 border-dashed border-2 flex flex-col items-center justify-center p-6 text-center group hover:border-primary/60 hover:shadow-md transition-all duration-300">
              <div className="p-4 rounded-full bg-background shadow-sm border mb-4 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                <Laptop className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Uchenna</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Software Engineer
              </p>
            </Card>
          </div>

          {/* Right Column: Bio Narrative & Stack */}
          <div className="md:col-span-8 space-y-6">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a results-driven{" "}
                <strong className="text-foreground font-semibold">
                  Software Engineering from Nigeria
                </strong>{" "}
                with a solid foundation in full-lifecycle development—spanning
                research, system design, and implementation. With a passion for
                translating complex business and UX requirements into scalable
                web and mobile applications, I focus on building digital
                solutions that solve real-world problems and bring people
                together.
              </p>
              <p>
                My full-stack experience includes working with{" "}
                <strong className="text-foreground font-medium">
                  React.js, Next.js, Node.js, MongoDB, Prisma, Java, and Android
                  development
                </strong>
                . As a detail-oriented problem solver, I am motivated to deliver
                clean, efficient, and highly compliant software structures while
                constantly adopting new technologies to drive project success.
              </p>
              <p>
                When I'm not programming, I enjoy exploring innovative tech
                concepts, optimizing my development workflows, and experimenting
                with side projects designed to generate tangible, real-world
                value.
              </p>
            </div>

            <Separator className="my-6" />

            {/* Technical Stack with Accent Highlights */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Skills & Expertise
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {skills.map(({ category, icon, items }) => (
                  <div key={category} className="space-y-3">
                    <div className="flex items-center gap-2 font-medium text-sm text-foreground">
                      {icon}
                      <span>{category}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="font-normal text-xs px-2 py-0.5 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
