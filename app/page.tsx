"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,.15) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Left Sidebar - Skills */}
      <aside className="fixed left-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="space-y-6"
        >
          {/* Skills */}
          <div className="space-y-4">
            <h4 className="text-sm font-light text-gray-400 uppercase tracking-wider">
              frontend
            </h4>
            <div className="space-y-2">
              <div className="text-sm font-light text-gray-600">
                react & next.js
              </div>
              <div className="text-sm font-light text-gray-600">typescript</div>
              <div className="text-sm font-light text-gray-600">
                tailwind css
              </div>
            </div>

            <h4 className="text-sm font-light text-gray-400 uppercase tracking-wider mt-6">
              backend
            </h4>
            <div className="space-y-2">
              <div className="text-sm font-light text-gray-600">node.js</div>
              <div className="text-sm font-light text-gray-600">python</div>
              <div className="text-sm font-light text-gray-600">postgresql</div>
            </div>

            <h4 className="text-sm font-light text-gray-400 uppercase tracking-wider mt-6">
              tools
            </h4>
            <div className="space-y-2">
              <div className="text-sm font-light text-gray-600">git</div>
              <div className="text-sm font-light text-gray-600">docker</div>
              <div className="text-sm font-light text-gray-600">aws</div>
            </div>
          </div>
        </motion.div>
      </aside>

      {/* Right Sidebar - Social Links */}
      <aside className="fixed right-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="space-y-6"
        >
          {/* Social Links */}
          <div className="space-y-4">
            <motion.a
              href="https://github.com/farukkandemir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-sm font-light text-gray-500 hover:text-black transition-colors group"
            >
              <span className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-black transition-colors"></span>
              <span>github</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/farukkandemir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-sm font-light text-gray-500 hover:text-black transition-colors group"
            >
              <span className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-black transition-colors"></span>
              <span>linkedin</span>
            </motion.a>
            <motion.a
              href="https://twitter.com/farukkandemir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-sm font-light text-gray-500 hover:text-black transition-colors group"
            >
              <span className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-black transition-colors"></span>
              <span>twitter</span>
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-8 h-px bg-gray-200"></div>

          {/* Contact */}
          <div className="space-y-2">
            <motion.a
              href="mailto:hello@farukkandemir.dev"
              className="flex items-center space-x-3 text-sm font-light text-gray-500 hover:text-black transition-colors group"
            >
              <span className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-black transition-colors"></span>
              <span>email</span>
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-8 h-px bg-gray-200"></div>

          {/* Scroll to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-3 text-sm font-light text-gray-500 hover:text-black transition-colors group cursor-pointer"
          >
            <span className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-black transition-colors"></span>
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
                className="text-2xl font-light tracking-wide text-gray-600 mb-2"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                faruk kandemir
              </h1>
              <div className="w-8 h-px bg-gray-300"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 tracking-tight">
              software engineer
              <br />
              problem solver & builder
            </h2>

            <p className="text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
              i build software that solves real problems, from concept to
              deployment, with a focus on performance, accessibility, and user
              experience
            </p>
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="mb-24">
          <div>
            <div className="flex items-center space-x-4 mb-12">
              <h3 className="text-3xl font-light tracking-tight">
                featured work
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
            </div>

            <div className="space-y-8">
              {/* Project */}
              <article className="group cursor-pointer">
                <h4 className="text-2xl font-light mb-2">Foot Notes</h4>
                <p className="text-gray-600 font-light leading-relaxed mb-4 max-w-lg">
                  A web app to track favorite soccer teams and players,
                  featuring interactive games and challenges for soccer fans.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-gray-500 font-light">
                    <span>Next.js</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>Tailwind</span>
                  </div>
                  <span className="text-sm text-gray-400 font-light">2024</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-24">
          <div>
            <div className="flex items-center space-x-4 mb-16">
              <h3 className="text-3xl font-light tracking-tight">experience</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xl font-light text-gray-900">
                    Full Stack Developer
                  </h4>
                  <span className="text-sm text-gray-400 font-light">
                    Oct 2024 — Present
                  </span>
                </div>
                <p className="text-base font-light text-gray-500 mb-4">
                  Enbasis
                </p>
                <div className="w-8 h-px bg-gray-200"></div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xl font-light text-gray-800">
                    Full Stack Developer
                  </h4>
                  <span className="text-sm text-gray-400 font-light">
                    Sep 2023 — Sep 2024
                  </span>
                </div>
                <p className="text-base font-light text-gray-500 mb-4">
                  Renoster
                </p>
                <div className="w-8 h-px bg-gray-200"></div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xl font-light text-gray-700">
                    Junior Full Stack Developer
                  </h4>
                  <span className="text-sm text-gray-400 font-light">
                    Jan 2023 — Dec 2024
                  </span>
                </div>
                <p className="text-base font-light text-gray-500">Aclymate</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer/Contact */}
      <footer
        id="contact"
        className="border-t border-gray-100 py-16 px-8 bg-gray-50/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex-1 h-px bg-gradient-to-l from-gray-200 to-transparent"></div>
              <h3 className="text-3xl font-light tracking-tight px-8">
                let's connect
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
            </div>

            <div className="space-y-8">
              <div className="flex justify-center">
                <a
                  href="mailto:hello@farukkandemir.dev"
                  className="inline-flex items-center space-x-3 text-lg text-gray-700 hover:text-black transition-colors font-light group"
                >
                  <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-black transition-colors"></div>
                  <span>hello@farukkandemir.dev</span>
                  <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-black transition-colors"></div>
                </a>
              </div>

              <div className="flex justify-center space-x-8">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-800 transition-all duration-300 font-light relative group"
                >
                  github
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-800 transition-all duration-300 font-light relative group"
                >
                  linkedin
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-800 transition-all duration-300 font-light relative group"
                >
                  twitter
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-400 font-light">
                  © 2024 faruk kandemir. all rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
