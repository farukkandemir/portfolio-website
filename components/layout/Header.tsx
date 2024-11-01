import { cn } from "@/lib/utils";
import Container from "./Container";
import Link from "next/link";
import { ModeToggle } from "../modules/ModeToggle";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link
            href="#"
            className="font-medium hover:opacity-75 transition"
            aria-label="Home"
          >
            Your Name
          </Link>

          <nav className="flex items-center gap-6">
            <ModeToggle />
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:opacity-75 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
