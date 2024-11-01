import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-8 py-20"
    >
      {/* Soccer field background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-emerald-900/20 rounded-full" />
        {/* Center line */}
        <div className="absolute top-0 left-1/2 h-full w-px bg-emerald-900/20" />
        {/* Penalty areas */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[20%] border-2 border-emerald-900/20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[20%] border-2 border-emerald-900/20" />
      </div>

      {/* Social links styled as match stats */}
      <div className="hidden md:flex fixed left-8 bottom-8 flex-col gap-4 bg-zinc-900/90 p-4 rounded-lg backdrop-blur border border-zinc-800/50">
        <p className="text-xs font-mono text-emerald-400">SOCIAL LINKS</p>
        <Link
          href="https://github.com"
          target="_blank"
          className="text-zinc-400 hover:text-emerald-300 transition-colors"
        >
          <Github className="h-5 w-5" />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="text-zinc-400 hover:text-emerald-300 transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
      </div>

      {/* Main content */}
      <div className="w-full max-w-[50rem] space-y-8 bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 p-8 rounded-lg backdrop-blur border border-zinc-800/50 shadow-xl">
        <div className="space-y-4">
          <p className="text-emerald-400 font-mono text-sm md:text-base">
            STARTING XI
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-100">
            Your Name.
            <br />
            <span className="text-zinc-400">Full Stack Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-[40rem]">
            Playing in the position of a Full Stack Developer, specializing in
            building exceptional digital experiences. Currently in top form,
            focused on creating accessible, human-centered products.
          </p>
        </div>

        <Button
          size="lg"
          className="group bg-emerald-600 hover:bg-emerald-700 text-zinc-100 border-emerald-500/20 shadow-lg"
        >
          View Match Highlights
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
