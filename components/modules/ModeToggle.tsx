"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-sm font-light text-muted-foreground hover:text-primary transition-colors cursor-pointer"
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}
