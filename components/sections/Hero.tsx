import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative py-32 md:py-48">
      <Container className="relative">
        <div className="flex flex-col items-start space-y-8">
          <div className="space-y-4 max-w-[50rem]">
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

          <div className="flex items-center gap-4">
            <Button size="lg" className="group">
              View my projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="flex items-center gap-4 ml-4">
              <Link
                href="https://github.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
