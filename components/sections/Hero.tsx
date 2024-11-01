import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-8 py-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Social links - positioned absolutely */}
      <div className="hidden md:flex fixed left-8 bottom-8 flex-col gap-6">
        <Link
          href="https://github.com"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-5 w-5" />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
        <div className="w-px h-24 bg-border mx-auto" />
      </div>

      {/* Main content */}
      <div className="w-full max-w-[50rem] space-y-8">
        <div className="space-y-4">
          <p className="text-primary font-mono text-sm md:text-base">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Your Name.
            <br />
            <span className="text-muted-foreground">
              I build things for the web.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[40rem]">
            I&apos;m a software engineer specializing in building exceptional
            digital experiences. Currently, I&apos;m focused on building
            accessible, human-centered products.
          </p>
        </div>

        <Button size="lg" className="group">
          View my projects
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
