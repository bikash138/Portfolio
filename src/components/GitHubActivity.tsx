"use client";

import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import Link from "next/link";
import { Github } from "lucide-react";
import { useTheme } from "next-themes";

const GITHUB_USERNAME = "bikash138";

const lightTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
};

const darkTheme = {
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const GitHubActivity = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section className="py-16">
      <div>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            GitHub Activity
          </h2>
          <Link
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors border-2 border-dotted border-border rounded-lg px-3 py-2"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">View Profile</span>
          </Link>
        </div>

        <div className="rounded-xl bg-card border-2 border-dotted border-border p-6 overflow-x-auto">
          {mounted && (
            <GitHubCalendar
              username={GITHUB_USERNAME}
              theme={isDark ? darkTheme : lightTheme}
              colorScheme={isDark ? "dark" : "light"}
              blockSize={12}
              blockMargin={4}
              fontSize={14}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
