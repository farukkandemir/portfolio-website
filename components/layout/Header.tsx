import { cn } from "@/lib/utils";
import Container from "./Container";
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
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xl backdrop-saturate-150" />
      <Container className="flex h-20">
        <div className="relative flex flex-1 items-center justify-between">
          <Link
            href="#"
            className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            Your Name
          </Link>

          <nav className="flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </Link>
            ))}
            <div className="pl-2 border-l border-border">
              <ModeToggle />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
