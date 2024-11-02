import Container from "../layout/Container";

type ExperienceType = {
  role: string;
  company: string;
  duration: string;
  location: string;
  achievements: string[];
  skills: string[];
};

const experiences: ExperienceType[] = [
  {
    role: "Founder & Full Stack Developer",
    company: "Aclymate",
    duration: "Jan 2023 - Present",
    location: "Remote",
    achievements: [
      "Founded and led development of innovative climate tech platform",
      "Architected and implemented core platform features using modern tech stack",
      "Established development processes and technical infrastructure",
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    role: "Senior Full Stack Developer",
    company: "Renoster",
    duration: "2023 - Present",
    location: "Remote",
    achievements: [
      "Led development of enterprise-level applications",
      "Implemented scalable architecture and microservices",
      "Collaborated with cross-functional teams to deliver high-impact features",
    ],
    skills: ["React", "TypeScript", "Node.js", "AWS", "Docker"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container>
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-emerald-500/10 blur-3xl rounded-full" />
          <div className="absolute left-0 bottom-1/4 w-1/3 h-1/3 bg-emerald-500/10 blur-3xl rounded-full" />
        </div>

        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <p className="text-emerald-400 font-mono text-sm tracking-wider">
            03. CAREER HISTORY
          </p>
          <h2 className="text-4xl font-bold text-zinc-100">
            Season Highlights
          </h2>
          <div className="w-16 h-1 bg-emerald-500/20 rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="relative space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-8"
            >
              {/* Enhanced Company Info - More Compact */}
              <div className="relative lg:text-right">
                <div className="sticky top-24">
                  {/* Company Card */}
                  <div className="relative p-4 bg-zinc-900/30 rounded-lg border border-zinc-800/50">
                    {/* Company Name with Accent */}
                    <div className="relative mb-3">
                      <div className="absolute -left-1 top-0 bottom-0 w-1 bg-emerald-500/20 rounded-full" />
                      <h3 className="text-xl font-bold text-zinc-100 pl-3">
                        {exp.company}
                      </h3>
                    </div>

                    {/* Duration and Location - Simplified */}
                    <div className="space-y-2">
                      <span className="inline-block px-2 py-1 text-sm font-mono text-emerald-400 bg-emerald-500/10 rounded-md">
                        {exp.duration}
                      </span>
                      <div className="flex items-center justify-end">
                        <span className="px-2 py-1 text-sm text-zinc-300 bg-zinc-800/50 rounded-md">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Role Details */}
              <div className="relative">
                {/* Connector Line */}
                <div className="absolute -left-4 top-0 bottom-0 w-px bg-zinc-800" />

                {/* Content */}
                <div className="relative pl-8 space-y-6">
                  {/* Role Title */}
                  <div className="relative">
                    {/* Connector Dot */}
                    <div className="absolute -left-[2.15rem] top-3 w-3 h-3 rounded-full bg-emerald-500/20 ring-2 ring-emerald-500/30" />
                    <h4 className="text-lg font-semibold text-zinc-100 bg-zinc-900/50 inline-block px-4 py-2 rounded-lg">
                      {exp.role}
                    </h4>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4 bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50">
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-zinc-400">
                          <span className="text-emerald-400 shrink-0">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="pt-4 border-t border-zinc-800/50">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs font-mono text-emerald-300 bg-emerald-500/10 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
