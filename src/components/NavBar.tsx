"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Project", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Resume", href: "/resume" },
];

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="px-4 md:px-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between md:border-l-4 md:border-r-4 border-dotted border-border">
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/resume"
                ? pathname === "/resume"
                : pathname === "/" && link.href === "/";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

          <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
