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
        <div className="text-muted-foreground flex flex-col items-center justify-center gap-3 py-8">
          <AlertCircle className="text-border h-8 w-8" />
          <p className="text-sm">GitHub activity unavailable right now.</p>
          <Link
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground text-xs underline underline-offset-4 transition-colors"
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
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-center text-3xl font-bold md:text-left md:text-4xl">
            GitHub Activity
          </h2>
          <Link
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground border-border flex items-center gap-2 rounded-lg border-2 border-dotted px-3 py-2 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="hidden text-sm sm:inline">View Profile</span>
          </Link>
        </div>

        <div className="bg-card border-border overflow-x-auto rounded-xl border-2 border-dotted p-6">
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
