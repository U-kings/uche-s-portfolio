// Hero section with name, profession, and call-to-action buttons
// Customize the name, title, and bio with your own information

import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-background"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <p className="text-accent font-semibold mb-2">
              Hi, I'm Uchenna Igbokwe
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Software Engineer | Digital Solutions Architect & Innovator
              {/* Software Engineer | Architect of Innovative Digital Solutions */}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Full-stack and mobile engineer specializing in crafting scalable
              web and mobile applications. Leveraging technologies like Next.js
              and React Native, I transform complex ideas into high-performance
              digital products built on clean architecture and intuitive user
              experiences.
              {/* I specialize in building high-quality mobile and web applications
              using modern technologies. From React Native to Next.js, I bring
              ideas to life with clean code and intuitive design. */}
            </p>

            {/* Location and stats */}
            <div className="flex gap-6 mb-8 flex-wrap">
              <div>
                <p className="text-muted-foreground text-sm">Location</p>
                <p className="font-semibold">Lagos, Nigeria</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Repositories</p>
                <p className="font-semibold">24 repositories</p>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-border rounded-lg hover:border-accent font-semibold"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-xl border border-border">
              <Image
                src="/uche-profile.png"
                alt="Uchenna Igbokwe"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
