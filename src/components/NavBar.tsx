"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useMounted } from "@/lib/use-mounted";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/#experience" },
  { label: "Blog", href: "/#blog" },
  { label: "Resume", href: "/resume" },
];

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <div className="bg-background/80 border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-xl">
      <div className="px-4 md:px-20">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <nav
            aria-label="Main navigation"
            className="flex min-w-0 flex-1 items-center justify-between gap-2 sm:flex-none sm:justify-start sm:gap-8"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/resume"
                  ? pathname === "/resume"
                  : pathname === "/" && link.href === "/";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-medium whitespace-nowrap transition-colors sm:text-sm ${
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

          <div className="flex shrink-0 items-center">
            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer rounded-lg p-2 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
