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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left relative"
          >
            {/* Name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1
                className="text-2xl font-light tracking-wide text-gray-600 mb-2"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                faruk kandemir
              </h1>
              <div className="w-8 h-px bg-gray-300"></div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 tracking-tight relative">
              software engineer
              <br />
              <span className="relative">
                problem solver & builder
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 right-0 h-px bg-black origin-left"
                />
              </span>
            </h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
                i build software that solves real problems, from concept to
                deployment, with a focus on performance, accessibility, and user
                experience
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Work */}
        <section id="work" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-12">
              <h3 className="text-3xl font-light tracking-tight">
                featured work
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
            </div>

            <div className="space-y-8">
              {/* Project */}
              <article className="group cursor-pointer">
                <h4 className="text-2xl font-light mb-2">
                  e-commerce platform
                </h4>
                <p className="text-gray-600 font-light leading-relaxed mb-4 max-w-lg">
                  full-stack e-commerce solution with modern react frontend and
                  node.js backend.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-gray-500 font-light">
                    <span>react</span>
                    <span>next.js</span>
                    <span>node.js</span>
                  </div>
                  <span className="text-sm text-gray-400 font-light">2024</span>
                </div>
              </article>

              {/* Project */}
              <article className="group cursor-pointer">
                <h4 className="text-2xl font-light mb-2">design system</h4>
                <p className="text-gray-600 font-light leading-relaxed mb-4 max-w-lg">
                  comprehensive design system built with react, typescript, and
                  tailwind css.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-gray-500 font-light">
                    <span>typescript</span>
                    <span>tailwind</span>
                    <span>storybook</span>
                  </div>
                  <span className="text-sm text-gray-400 font-light">2023</span>
                </div>
              </article>
            </div>
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-12">
              <h3 className="text-3xl font-light tracking-tight">about</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
            </div>

            <div className="max-w-2xl space-y-6 text-gray-700">
              <p className="text-lg font-light leading-relaxed">
                focused full stack developer with expertise in modern web
                technologies. passionate about creating efficient, scalable
                solutions and delivering exceptional user experiences.
              </p>
              <p className="text-lg font-light leading-relaxed">
                experienced in both frontend and backend development, with a
                keen eye for design and a commitment to writing clean,
                maintainable code.
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer/Contact */}
      <footer
        id="contact"
        className="border-t border-gray-100 py-16 px-8 bg-gray-50/30"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex-1 h-px bg-gradient-to-l from-gray-200 to-transparent"></div>
              <h3 className="text-3xl font-light tracking-tight px-8">
                let's connect
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
            </div>

            <div className="space-y-8">
              <div className="flex justify-center">
                <motion.a
                  href="mailto:hello@farukkandemir.dev"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 text-lg text-gray-700 hover:text-black transition-colors font-light group"
                >
                  <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-black transition-colors"></div>
                  <span>hello@farukkandemir.dev</span>
                  <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-black transition-colors"></div>
                </motion.a>
              </div>

              <div className="flex justify-center space-x-8">
                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-sm text-gray-500 hover:text-gray-800 transition-all duration-300 font-light relative group"
                >
                  github
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-sm text-gray-500 hover:text-gray-800 transition-all duration-300 font-light relative group"
                >
                  linkedin
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-sm text-gray-500 hover:text-gray-800 transition-all duration-300 font-light relative group"
                >
                  twitter
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-400 font-light">
                  © 2024 faruk kandemir. all rights reserved.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
