import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "../modules/ModeToggle";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

const Header = () => {
  return (
    <header className="fixed inset-x-4 sm:inset-x-8 top-6 z-50 flex justify-center">
      <nav className="flex items-center gap-1 px-3 py-2 rounded-full bg-background/60 backdrop-blur-xl backdrop-saturate-150 border border-border/50 shadow-lg overflow-x-auto max-w-full no-scrollbar">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative px-3 py-2 text-sm font-medium text-muted-foreground rounded-full transition-colors hover:text-foreground hover:bg-muted whitespace-nowrap"
          >
            {item.name}
          </Link>
        ))}
        <div className="w-px h-4 bg-border mx-1" />
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;
