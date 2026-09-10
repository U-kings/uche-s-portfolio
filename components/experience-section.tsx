// Experience section showing your work history and projects
// Update with your actual job titles, companies, dates, and descriptions

export function ExperienceSection() {
  const experience = [
    {
      id: 1,
      role: "Final Year Project – BHULink",
      company: "Private University Network",
      period: "2025 – Present",
      description:
        "Developing a university-exclusive social platform for academic updates, student interaction, and event sharing. Built with MERN stack, Next.js, Tailwind CSS, and MongoDB Atlas. Features include student feed, groups, events, real-time chat, notifications, and admin dashboard. Focused on privacy, security, and scalability for multi-campus expansion.",
    },
    {
      id: 2,
      role: "OSTA Job Portal",
      company: "Full-Stack Web Application",
      period: "2025",
      description:
        "Developed a role-based job portal for the Oromia Science and Technology Authority. Built with React.js (frontend), Node.js (backend), and MongoDB (database). Features include job posting, application management, dashboards for employers and job seekers, and comprehensive admin controls.",
    },
    {
      id: 3,
      role: "Equb & Idir Management App",
      company: "Android Development",
      period: "2024 – 2025",
      description:
        "Built an Android app in Java for managing Equb contributions and member interactions. Integrated SQLite and Firebase for data storage. Features include group creation, contribution tracking, winner selection, notifications, and detailed reports.",
    },
    {
      id: 4,
      role: "Telegram Bot – Ethiopian News Summarizer",
      company: "AI Integration Project",
      period: "2025",
      description:
        "Developed a Telegram bot that fetches top news articles, summarizes them using OpenAI API, and sends translations in Afaan Oromo. Automated daily news delivery for users, improving accessibility of information.",
    },
    {
      id: 5,
      role: "Personal & University Projects",
      company: "Web & Mobile Development",
      period: "2023 – 2025",
      description:
        "Built multiple web apps, scripts, and portfolio projects to strengthen coding and problem-solving skills. Hands-on experience with React.js, Node.js, MongoDB, Java, Android development, and Tailwind CSS.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Experience & Projects</h2>

        {/* Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline Line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-0 top-12 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/20" />
              )}

              {/* Timeline Item */}
              <div className="border-l-2 border-accent pl-8 pb-8">
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-2 w-5 h-5 bg-accent rounded-full border-4 border-background" />

                {/* Content */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-semibold">{exp.role}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground text-sm whitespace-nowrap ml-4">{exp.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
