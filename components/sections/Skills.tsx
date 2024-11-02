import Container from "../layout/Container";

type SkillCategory = {
  name: string;
  description: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Core Technologies",
    description: "Primary tools and languages I use every day",
    skills: ["TypeScript", "React", "Next.js", "Node.js", "JavaScript"],
  },
  {
    name: "Frontend Expertise",
    description: "Creating responsive and intuitive user interfaces",
    skills: [
      "TailwindCSS",
      "Framer Motion",
      "Shadcn/UI",
      "Redux",
      "React Query",
      "Zustand",
      "SWR",
      "Material UI",
    ],
  },
  {
    name: "Backend & Infrastructure",
    description: "Building scalable and reliable systems",
    skills: [
      "Express.js",
      "Prisma",
      "Firebase",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    name: "Development & Tools",
    description: "Optimizing workflow and development process",
    skills: ["Git", "CI/CD", "Testing", "Performance", "Analytics"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <Container>
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-emerald-500/10 blur-3xl rounded-full" />
          <div className="absolute left-0 bottom-1/4 w-1/3 h-1/3 bg-emerald-500/10 blur-3xl rounded-full" />
        </div>

        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <p className="text-emerald-400 font-mono text-sm tracking-wider">
            05. PLAYER ATTRIBUTES
          </p>
          <h2 className="text-4xl font-bold text-zinc-100">
            Technical Arsenal
          </h2>
          <div className="w-16 h-1 bg-emerald-500/20 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden p-8 bg-zinc-900/30 rounded-2xl border border-zinc-800/50 transition-all duration-300 hover:border-emerald-500/50 hover:bg-zinc-900/50"
            >
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-zinc-400">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[13px] text-zinc-300 transition-all duration-300 group-hover:text-emerald-300"
                    >
                      {skill}
                      <span className="inline-block w-[3px] h-[3px] ml-2 rounded-full bg-zinc-700 group-hover:bg-emerald-500/50" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3">
            <p className="text-sm font-mono text-zinc-400">
              Constantly evolving and adapting to new technologies
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
