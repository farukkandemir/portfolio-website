"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { RevealSection } from "../ui/motion";

const Hero = () => {
  return (
    <RevealSection>
      <section
        id="home"
        className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-8 py-20"
      >
        {/* Soccer field background with enhanced visibility */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
          {/* Center circle - more visible */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-emerald-800/30 rounded-full">
            <div className="absolute inset-2 border-2 border-emerald-800/20 rounded-full" />
            <div className="absolute inset-4 border border-emerald-800/10 rounded-full" />
          </div>
          {/* Center line - enhanced */}
          <div className="absolute top-0 left-1/2 h-full w-px bg-emerald-800/30" />
          {/* Penalty areas with additional details */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[20%] border-2 border-emerald-800/30">
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[40%] h-[50%] border-2 border-emerald-800/20" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[20%] border-2 border-emerald-800/30">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[40%] h-[50%] border-2 border-emerald-800/20" />
          </div>
        </div>

        {/* Redesigned Social Links */}
        <div className="hidden md:flex fixed left-8 bottom-8 flex-col gap-6">
          <Link
            href="https://github.com/farukkandemir"
            target="_blank"
            className="group flex items-center gap-3 text-zinc-400 hover:text-emerald-300 transition-all duration-300"
          >
            <span className="relative px-3 py-2 bg-zinc-900/50 rounded-lg border border-zinc-800/50 backdrop-blur-sm">
              <Github className="h-5 w-5" />
              <span className="absolute left-[calc(100%+0.5rem)] top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-mono whitespace-nowrap bg-zinc-900/50 rounded-lg border border-zinc-800/50 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Follow on GitHub
              </span>
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/farukkandemir/"
            target="_blank"
            className="group flex items-center gap-3 text-zinc-400 hover:text-emerald-300 transition-all duration-300"
          >
            <span className="relative px-3 py-2 bg-zinc-900/50 rounded-lg border border-zinc-800/50 backdrop-blur-sm">
              <Linkedin className="h-5 w-5" />
              <span className="absolute left-[calc(100%+0.5rem)] top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-mono whitespace-nowrap bg-zinc-900/50 rounded-lg border border-zinc-800/50 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Connect on LinkedIn
              </span>
            </span>
          </Link>
          <div className="w-px h-24 mx-auto bg-zinc-800" />
        </div>

        {/* Redesigned Main Content */}
        <div className="relative w-full max-w-[60rem]">
          <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-6">
              {/* Title Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-12 bg-emerald-400/50" />
                  <p className="text-emerald-400 font-mono text-sm tracking-wider">
                    FULL STACK DEVELOPER
                  </p>
                </div>

                <div className="space-y-2">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                    <span className="text-zinc-100 block">Faruk Kandemir</span>
                    <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                      Software Engineer
                    </span>
                  </h1>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-xl">
                <p className="text-lg text-zinc-400 leading-relaxed">
                  A passionate developer specializing in building exceptional
                  digital experiences. Combining technical expertise with
                  creative problem-solving to deliver innovative solutions.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="/assets/resume.pdf" download>
                  <Button
                    size="lg"
                    className="group relative bg-emerald-600 hover:bg-emerald-700 text-zinc-100"
                    onClick={() => {
                      // window.open("/resume.pdf", "_blank");
                    }}
                  >
                    Download Resume
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column - Stats/Highlights */}
            <div className="lg:w-[240px] space-y-4">
              <div className="p-4 bg-zinc-900/50 backdrop-blur rounded-lg border border-zinc-800/50">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Experience</span>
                    <span className="font-mono text-emerald-400">2+ Years</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Projects</span>
                    <span className="font-mono text-emerald-400">50+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Stack</span>
                    <span className="font-mono text-emerald-400">
                      Full Stack
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <p className="text-xs font-mono text-center text-emerald-400">
                  AVAILABLE FOR PROJECTS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
};

export default Hero;
