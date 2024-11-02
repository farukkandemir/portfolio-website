import Container from "../layout/Container";

type StatType = {
  label: string;
  value: string;
};

type PlayStyleType = {
  label: string;
  value: string;
};

const stats: StatType[] = [
  { label: "Years", value: "2+" },
  { label: "Projects", value: "50+" },
  { label: "Stack", value: "Full" },
  { label: "Base", value: "Remote" },
];

const playingStyle: PlayStyleType[] = [
  { label: "Role", value: "Full Stack Developer" },
  { label: "Focus", value: "Modern Web Solutions" },
  { label: "Approach", value: "Problem Solver" },
  { label: "Strength", value: "Team Collaboration" },
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
              02. ABOUT
            </p>
            <h2 className="text-4xl font-bold text-zinc-100">Overview</h2>
            <div className="w-16 h-1 bg-emerald-500/20 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-[2fr,1fr] gap-12 items-start">
            {/* Profile Content */}
            <div className="space-y-8">
              {/* Bio */}
              <div className="prose prose-zinc dark:prose-invert max-w-none space-y-5">
                <p className="text-lg text-zinc-300 leading-relaxed">
                  A dedicated developer focused on creating efficient and
                  scalable web solutions. Passionate about learning new
                  technologies and implementing innovative approaches to solve
                  complex problems.
                </p>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Experienced in both independent development and collaborative
                  team environments, with a strong emphasis on writing clean,
                  maintainable code.
                </p>
              </div>

              {/* Attributes Grid */}
              <div className="grid grid-cols-2 gap-3">
                {playingStyle.map((style) => (
                  <div
                    key={style.label}
                    className="p-4 bg-zinc-900/50 rounded-lg border border-zinc-800/50"
                  >
                    <p className="text-sm font-mono text-zinc-400 mb-1">
                      {style.label}
                    </p>
                    <p className="text-zinc-300">{style.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="relative">
              <div className="sticky top-24 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="group relative overflow-hidden p-4 bg-zinc-900/50 rounded-xl border border-zinc-800/50"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative space-y-2">
                        <p className="text-3xl font-bold text-emerald-400">
                          {stat.value}
                        </p>
                        <p className="text-sm font-mono text-zinc-400">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Current Focus */}
                <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <h4 className="text-sm font-mono text-zinc-400">
                      NOW PLAYING
                    </h4>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    Currently focused on building scalable web applications and
                    exploring new technologies.
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
