"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Don't render until after hydration to prevent mismatch
  if (!mounted) {
    return (
      <button className="text-sm font-light text-muted-foreground hover:text-primary transition-colors cursor-pointer opacity-0">
        *
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-sm font-light text-muted-foreground hover:text-primary transition-colors cursor-pointer"
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}
