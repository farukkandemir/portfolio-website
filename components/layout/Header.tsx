import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "../modules/ModeToggle";

const navigation = [
  { name: "Home", href: "#home", position: "ST" },
  { name: "About", href: "#about", position: "CAM" },
  { name: "Experience", href: "#experience", position: "CM" },
  { name: "Projects", href: "#projects", position: "CDM" },
  { name: "Contact", href: "#contact", position: "CB" },
] as const;

const Header = () => {
  return (
    <header className="fixed inset-x-4 sm:inset-x-8 top-6 z-50 flex justify-center">
      <nav className="flex items-center gap-1 px-3 py-2 rounded-full bg-zinc-900/85 backdrop-blur-xl backdrop-saturate-150 border border-zinc-800/50 shadow-lg overflow-x-auto max-w-full no-scrollbar">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative px-3 py-2 text-sm font-medium text-zinc-400 rounded-full transition-all hover:text-emerald-300 hover:bg-zinc-800/50 whitespace-nowrap"
          >
            <span className="relative z-10">{item.name}</span>
            <span className="absolute -top-3 -right-1 text-[10px] font-mono text-emerald-500/70 group-hover:text-emerald-400">
              {item.position}
            </span>
          </Link>
        ))}
        <div className="w-px h-4 bg-zinc-800 mx-1" />
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;
