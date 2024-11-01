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
          <div className="absolute left-1/2 top-0 h-full w-px bg-emerald-900/20" />
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

        {/* Experience Timeline */}
        <div className="relative space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-8 lg:gap-16"
            >
              {/* Timeline Marker */}
              <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-emerald-500 bg-zinc-950" />

              {/* Company Info */}
              <div className="lg:text-right space-y-2">
                <h3 className="text-xl font-bold text-zinc-100">
                  {exp.company}
                </h3>
                <p className="font-mono text-sm text-emerald-400">
                  {exp.duration}
                </p>
                <p className="text-zinc-400">{exp.location}</p>
              </div>

              {/* Role Details */}
              <div className="space-y-4 p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                <h4 className="text-lg font-semibold text-zinc-100">
                  {exp.role}
                </h4>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2 text-zinc-400">
                      <span className="text-emerald-400 shrink-0">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
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
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
