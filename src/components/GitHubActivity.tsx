"use client";

import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import Link from "next/link";
import { Github, AlertCircle } from "lucide-react";
import { useTheme } from "next-themes";

const GITHUB_USERNAME = "bikash138";

const lightTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
};

const darkTheme = {
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

class CalendarErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center gap-3 py-8 text-muted-foreground">
          <AlertCircle className="w-8 h-8 text-border" />
          <p className="text-sm">GitHub activity unavailable right now.</p>
          <Link
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline underline-offset-4 hover:text-foreground transition-colors"
          >
            View profile on GitHub
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}


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
            <span className="hidden sm:inline text-sm">View Profile</span>
          </Link>
        </div>

        <div className="rounded-xl bg-card border-2 border-dotted border-border p-6 overflow-x-auto">
          <CalendarErrorBoundary>
            <GitHubCalendar
              username={GITHUB_USERNAME}
              theme={mounted && isDark ? darkTheme : lightTheme}
              colorScheme={mounted && isDark ? "dark" : "light"}
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              throwOnError
            />
          </CalendarErrorBoundary>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
