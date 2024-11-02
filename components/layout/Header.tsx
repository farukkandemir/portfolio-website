"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ModeToggle } from "../modules/ModeToggle";
import { useState } from "react";
import {
  Home,
  User,
  Trophy,
  FolderGit2,
  Medal,
  Send,
  Menu,
  X,
} from "lucide-react";
import { Button } from "../ui/button";

const navigation = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Trophy },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Skills", href: "#skills", icon: Medal },
  { name: "Contact", href: "#contact", icon: Send },
] as const;

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const targetId = href?.replace("#", "");
    const elem = document.getElementById(targetId!);
    setActiveSection(targetId!);
    elem?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-4 sm:inset-x-8 top-6 z-50"
    >
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center">
        <div className="relative mt-6 flex items-center">
          {/* Main Navigation */}
          <div className="relative flex items-center">
            <div className="flex items-center gap-2">
              {navigation.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <motion.a
                      href={item.href}
                      onClick={handleClick}
                      className={`
                        relative px-4 py-2 flex items-center gap-2 font-mono text-sm uppercase tracking-wider
                        transition-colors duration-200 rounded-lg
                        ${
                          activeSection === item.href.replace("#", "")
                            ? "text-emerald-400 bg-zinc-900/50"
                            : "text-zinc-400 hover:text-emerald-300 hover:bg-zinc-900/30"
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-bold">{item.name}</span>

                      {activeSection === item.href.replace("#", "") && (
                        <motion.div
                          layoutId="navIndicator"
                          className="absolute inset-0 border-b-2 border-emerald-400 rounded-lg"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                    </motion.a>
                  </motion.div>
                );
              })}
            </div>

            {/* Theme Toggle */}
            {/* <div className="ml-6 pl-6 border-l border-zinc-800">
              <ModeToggle />
            </div> */}
          </div>

          {/* Background blur effect */}
          <div className="absolute inset-0 -z-10 bg-zinc-950/50 backdrop-blur-md rounded-2xl" />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between p-4 rounded-lg bg-zinc-900/85 backdrop-blur-xl backdrop-saturate-150 border border-zinc-800/50">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-400 hover:text-emerald-300"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          <ModeToggle />
        </div>

        {mobileMenuOpen && (
          <div className="mt-2 p-2 rounded-lg bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className={`
                  block px-4 py-2 text-sm font-medium rounded-lg
                  transition-colors duration-200 mb-1 last:mb-0
                  ${
                    activeSection === item.href.replace("#", "")
                      ? "text-emerald-400 bg-zinc-900/50"
                      : "text-zinc-400 hover:text-emerald-300 hover:bg-zinc-900/30"
                  }
                `}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
