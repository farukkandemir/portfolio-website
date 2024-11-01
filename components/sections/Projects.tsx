import Container from "../layout/Container";
import { Button } from "../ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

type ProjectType = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

const projects: ProjectType[] = [
  {
    title: "Aclymate",
    description:
      "A climate tech platform helping businesses track and reduce their carbon emissions. Built with modern web technologies focusing on performance and user experience.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    liveUrl: "https://aclymate.com",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "Description of another significant project showcasing different technical skills and problem-solving abilities.",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <p className="text-emerald-400 font-mono text-sm tracking-wider">
            04. MATCH HIGHLIGHTS
          </p>
          <h2 className="text-4xl font-bold text-zinc-100">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-emerald-500/20 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative grid grid-cols-1 gap-8 ${
                index % 2 === 0
                  ? "lg:grid-cols-[2fr,1fr]"
                  : "lg:grid-cols-[1fr,2fr]"
              }`}
            >
              {/* Project Image/Gradient Placeholder */}
              <div
                className={`relative aspect-[16/9] overflow-hidden rounded-xl border border-zinc-800/50 ${
                  index % 2 === 1 && "lg:order-2"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-zinc-950/50" />
                <div className="absolute inset-0 backdrop-blur-[2px]" />
                {/* Optional pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4px_4px] opacity-5" />
              </div>

              {/* Project Info */}
              <div
                className={`flex flex-col justify-center ${
                  index % 2 === 1 ? "lg:order-1 lg:text-right" : ""
                }`}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono text-emerald-300 bg-emerald-500/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div
                    className={`flex items-center gap-4 ${
                      index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.liveUrl && (
                      <Button asChild variant="ghost" className="group/btn">
                        <Link href={project.liveUrl} target="_blank">
                          Visit Site
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild variant="ghost" size="icon">
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-5 w-5" />
                        </Link>
                      </Button>
                    )}
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

export default Projects;
