"use client";

import { motion } from "framer-motion";
import { ModeToggle } from "@/components/modules/ModeToggle";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Mobile Navigation Component
function MobileNavigation() {
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="space-y-4">
      {/* Skills Section */}
      <motion.div
        className="relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
        <div className="relative bg-card/90 backdrop-blur-xl rounded-2xl border border-border/30 shadow-lg overflow-hidden">
          <button
            onClick={() => setSkillsOpen(!skillsOpen)}
            className="w-full px-5 py-4 flex items-center justify-between text-sm font-light tracking-wide transition-all duration-300 hover:bg-muted/20"
          >
            <span className="text-foreground">skills</span>
            <motion.div
              animate={{ rotate: skillsOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: skillsOpen ? "auto" : 0,
              opacity: skillsOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-5">
              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-light text-primary tracking-wider mb-3">
                    core technologies
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="text-xs font-light text-muted-foreground">
                      typescript & javascript
                    </div>
                    <div className="text-xs font-light text-muted-foreground">
                      react & next.js
                    </div>
                    <div className="text-xs font-light text-muted-foreground">
                      node.js
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <div>
                  <h4 className="text-xs font-light text-primary tracking-wider mb-3">
                    frontend expertise
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="text-xs font-light text-muted-foreground">
                      tailwind css
                    </div>
                    <div className="text-xs font-light text-muted-foreground">
                      framer motion
                    </div>
                    <div className="text-xs font-light text-muted-foreground">
                      shadcn/ui
                    </div>
                    <div className="text-xs font-light text-muted-foreground">
                      redux & zustand
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <div>
                  <h4 className="text-xs font-light text-primary tracking-wider mb-3">
                    backend & infrastructure
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="text-xs font-light text-muted-foreground">
                      express.js
                    </div>
                    <div className="text-xs font-light text-muted-foreground">
                      prisma
                    </div>
                    <div className="text-xs font-light text-muted-foreground">
                      mongodb & postgresql
                    </div>
                    <div className="text-xs font-light text-muted-foreground">
                      rest apis
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <div>
                  <h4 className="text-xs font-light text-primary tracking-wider mb-3">
                    development tools
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="text-xs font-light text-muted-foreground">
                      git
                    </div>
                    <div className="text-xs font-light text-muted-foreground">
                      docker
                    </div>
                    <div className="text-xs font-light text-muted-foreground">
                      aws
                    </div>
                    <div className="text-xs font-light text-muted-foreground">
                      ci/cd
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
        <div className="relative bg-card/90 backdrop-blur-xl rounded-2xl border border-border/30 shadow-lg overflow-hidden">
          <button
            onClick={() => setContactOpen(!contactOpen)}
            className="w-full px-5 py-4 flex items-center justify-between text-sm font-light tracking-wide transition-all duration-300 hover:bg-muted/20"
          >
            <span className="text-foreground">connect</span>
            <motion.div
              animate={{ rotate: contactOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: contactOpen ? "auto" : 0,
              opacity: contactOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4">
              <div className="space-y-3">
                <a
                  href="https://github.com/farukkandemir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sm font-light text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors" />
                  <span>github</span>
                </a>
                <a
                  href="https://linkedin.com/in/farukkandemir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sm font-light text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors" />
                  <span>linkedin</span>
                </a>
                <a
                  href="https://twitter.com/farukkandemir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sm font-light text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors" />
                  <span>twitter</span>
                </a>
                <a
                  href="mailto:farukkandemir.dev@gmail.com"
                  className="flex items-center space-x-3 text-sm font-light text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors" />
                  <span>email</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ModeToggle />
      </div>

      {/* Mobile Navigation - Skills & Contact */}
      <div className="lg:hidden">
        <div className="fixed bottom-6 left-6 right-6 z-40">
          <MobileNavigation />
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.08) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Left Sidebar - Skills */}
      <aside className="fixed left-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Skills */}
          <div className="space-y-4">
            <h4 className="text-sm font-light text-muted-foreground tracking-wider">
              core technologies
            </h4>
            <div className="space-y-2">
              <div className="text-sm font-light text-muted-foreground">
                typescript & javascript
              </div>
              <div className="text-sm font-light text-muted-foreground">
                react & next.js
              </div>
              <div className="text-sm font-light text-muted-foreground">
                node.js
              </div>
            </div>

            <h4 className="text-sm font-light text-muted-foreground tracking-wider mt-6">
              frontend expertise
            </h4>
            <div className="space-y-2">
              <div className="text-sm font-light text-muted-foreground">
                tailwind css
              </div>
              <div className="text-sm font-light text-muted-foreground">
                framer motion
              </div>
              <div className="text-sm font-light text-muted-foreground">
                shadcn/ui
              </div>
              <div className="text-sm font-light text-muted-foreground">
                redux & zustand
              </div>
            </div>

            <h4 className="text-sm font-light text-muted-foreground tracking-wider mt-6">
              backend & infrastructure
            </h4>
            <div className="space-y-2">
              <div className="text-sm font-light text-muted-foreground">
                express.js
              </div>
              <div className="text-sm font-light text-muted-foreground">
                prisma
              </div>
              <div className="text-sm font-light text-muted-foreground">
                mongodb & postgresql
              </div>
              <div className="text-sm font-light text-muted-foreground">
                rest apis
              </div>
            </div>

            <h4 className="text-sm font-light text-muted-foreground tracking-wider mt-6">
              development tools
            </h4>
            <div className="space-y-2">
              <div className="text-sm font-light text-muted-foreground">
                git
              </div>
              <div className="text-sm font-light text-muted-foreground">
                docker
              </div>
              <div className="text-sm font-light text-muted-foreground">
                aws
              </div>
              <div className="text-sm font-light text-muted-foreground">
                ci/cd
              </div>
            </div>
          </div>
        </motion.div>
      </aside>

      {/* Right Sidebar - Social Links */}
      <aside className="fixed right-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="space-y-6"
        >
          {/* Social Links */}
          <div className="space-y-4">
            <motion.a
              href="https://github.com/farukkandemir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-sm font-light text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="w-2 h-2 bg-muted rounded-full group-hover:bg-primary transition-colors"></span>
              <span>github</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/farukkandemir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-sm font-light text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="w-2 h-2 bg-muted rounded-full group-hover:bg-primary transition-colors"></span>
              <span>linkedin</span>
            </motion.a>
            <motion.a
              href="https://twitter.com/farukkandemir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-sm font-light text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="w-2 h-2 bg-muted rounded-full group-hover:bg-primary transition-colors"></span>
              <span>twitter</span>
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-8 h-px bg-border"></div>

          {/* Contact */}
          <div className="space-y-2">
            <motion.a
              href="mailto:hello@farukkandemir.dev"
              className="flex items-center space-x-3 text-sm font-light text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="w-2 h-2 bg-muted rounded-full group-hover:bg-primary transition-colors"></span>
              <span>email</span>
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-8 h-px bg-border"></div>

          {/* Scroll to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-3 text-sm font-light text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
          >
            <span className="w-2 h-2 bg-muted rounded-full group-hover:bg-primary transition-colors"></span>
            <span>top</span>
          </motion.button>
        </motion.div>
      </aside>

      <main className="relative max-w-6xl mx-auto px-8 py-20 lg:px-32">
        {/* Hero Headline */}
        <section className="mb-24">
          <div className="text-left relative">
            {/* Name */}
            <div className="mb-8">
              <h1
                className="text-2xl font-light tracking-wide text-muted-foreground mb-2"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                faruk kandemir
              </h1>
              <div className="w-8 h-px bg-muted"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 tracking-tight">
              full stack developer
              <br />
              problem solver & builder
            </h1>

            <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
              i build software that solves real problems, from concept to
              deployment, with a focus on performance, accessibility, and user
              experience
            </p>
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="mb-24" aria-labelledby="work-heading">
          <div>
            <div className="flex items-center space-x-4 mb-12">
              <h2
                id="work-heading"
                className="text-3xl font-light tracking-tight"
              >
                featured work
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
            </div>

            <div className="space-y-8">
              {/* Project */}
              <a
                href="https://cinemora.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <article className="cursor-pointer">
                  <h4 className="text-2xl font-light mb-2 group-hover:text-foreground transition-colors">
                    Cinemora
                  </h4>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4 max-w-lg">
                    A movie organization platform with personal collections,
                    watching lists, and smart organization features for movie
                    enthusiasts.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-sm text-muted-foreground font-light">
                      <span>TanStack Start</span>
                      <span>TypeScript</span>
                      <span>Shadcn</span>
                      <span>Supabase</span>
                      <span>Tailwind</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-light">
                      2025
                    </span>
                  </div>
                </article>
              </a>

              {/* Project */}
              <a
                href="https://chantify.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <article className="cursor-pointer">
                  <h4 className="text-2xl font-light mb-2 group-hover:text-foreground transition-colors">
                    Foot Notes
                  </h4>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4 max-w-lg">
                    A web app to track favorite soccer teams and players,
                    featuring interactive games and challenges for soccer fans.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-sm text-muted-foreground font-light">
                      <span>Next.js</span>
                      <span>TypeScript</span>
                      <span>Node.js</span>
                      <span>MongoDB</span>
                      <span>Tailwind</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-light">
                      2024
                    </span>
                  </div>
                </article>
              </a>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mb-24"
          aria-labelledby="experience-heading"
        >
          <div>
            <div className="flex items-center space-x-4 mb-16">
              <h2
                id="experience-heading"
                className="text-3xl font-light tracking-tight"
              >
                experience
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xl font-light text-foreground">
                    Full Stack Developer
                  </h4>
                  <span className="text-sm text-muted-foreground font-light">
                    Oct 2025 — Present
                  </span>
                </div>
                <p className="text-base font-light text-muted-foreground mb-4">
                  Enbasis
                </p>
                <div className="w-8 h-px bg-border"></div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xl font-light text-foreground">
                    Full Stack Developer
                  </h4>
                  <span className="text-sm text-muted-foreground font-light">
                    Sep 2023 — Sep 2024
                  </span>
                </div>
                <p className="text-base font-light text-muted-foreground mb-4">
                  Renoster
                </p>
                <div className="w-8 h-px bg-border"></div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xl font-light text-foreground">
                    Junior Full Stack Developer
                  </h4>
                  <span className="text-sm text-muted-foreground font-light">
                    Jan 2023 — Dec 2024
                  </span>
                </div>
                <p className="text-base font-light text-muted-foreground">
                  Aclymate
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer/Contact */}
      <footer
        id="contact"
        className="py-16 px-8 lg:px-32 relative max-w-6xl mx-auto"
        role="contentinfo"
      >
        <div className="text-left">
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-3xl font-light tracking-tight">
              let&apos;s connect
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <a
                href="mailto:farukkandemir.dev@gmail.com"
                className="text-lg text-foreground hover:text-primary transition-colors font-light"
              >
                farukkandemir.dev@gmail.com
              </a>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground font-light">
                © 2025 faruk kandemir. all rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
