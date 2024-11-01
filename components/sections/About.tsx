import Container from "../layout/Container";

type StatType = {
  label: string;
  value: string;
  icon?: string;
};

const stats: StatType[] = [
  { label: "Experience", value: "5+ Years", icon: "🏆" },
  { label: "Projects", value: "50+", icon: "⚽" },
  { label: "Position", value: "Full Stack", icon: "👕" },
  { label: "Team", value: "Remote", icon: "🌍" },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-emerald-500/10 blur-3xl rounded-full" />
          <div className="absolute left-0 bottom-1/4 w-1/3 h-1/3 bg-emerald-500/10 blur-3xl rounded-full" />
        </div>

        <div className="relative space-y-12">
          {/* Section Title */}
          <div className="flex flex-col items-center text-center space-y-4">
            <p className="text-emerald-400 font-mono text-sm tracking-wider">
              02. PLAYER PROFILE
            </p>
            <h2 className="text-4xl font-bold text-zinc-100">
              About The Player
            </h2>
            <div className="w-16 h-1 bg-emerald-500/20 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-start">
            {/* Profile Content */}
            <div className="space-y-8">
              <div className="prose prose-zinc dark:prose-invert max-w-none space-y-4">
                <p className="text-zinc-400 leading-relaxed text-lg">
                  A passionate developer with a strong foundation in modern web
                  technologies. Like a versatile midfielder, I adapt quickly to
                  new challenges and consistently deliver high-quality results.
                </p>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  My playing style combines creative problem-solving with
                  technical excellence, making me effective in both independent
                  projects and team collaborations.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4 p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                <h3 className="text-lg font-semibold text-zinc-100 font-mono">
                  Technical Skills
                </h3>
                <ul className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "TailwindCSS",
                    "PostgreSQL",
                    "Python",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2 text-zinc-400 bg-zinc-900/50 p-2 rounded-lg border border-zinc-800/50"
                    >
                      <span className="text-emerald-400">▹</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats Card */}
            <div className="lg:w-[380px] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-xl -rotate-1" />
              <div className="relative p-6 bg-zinc-900/95 border border-zinc-800/50 rounded-xl shadow-xl">
                {/* Player Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="space-y-2 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-zinc-400 font-mono">
                          {stat.label}
                        </p>
                        <span className="text-xl">{stat.icon}</span>
                      </div>
                      <p className="text-2xl font-bold text-emerald-400">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                  <h4 className="text-sm font-mono text-zinc-400 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                    CURRENT FOCUS
                  </h4>
                  <p className="text-zinc-300 leading-relaxed">
                    Mastering modern web frameworks and exploring new
                    technologies to enhance development workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
