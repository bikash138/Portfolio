"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMounted } from "@/lib/use-mounted";
import GitHubCalendar from "react-github-calendar";
import Link from "next/link";
import { Github, AlertCircle } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./GitHubActivity.module.css";

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
  const mounted = useMounted();
  const calendarContainer = useRef<HTMLDivElement>(null);
  const [calendarWidth, setCalendarWidth] = useState(0);

  useEffect(() => {
    const container = calendarContainer.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      setCalendarWidth(Math.floor(entry.contentRect.width));
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const blockMargin = calendarWidth > 720 ? 4 : calendarWidth > 480 ? 2 : 1;
  // Reserve space for up to 54 weeks, including years that span partial weeks.
  const blockSize = calendarWidth
    ? Math.max(2, Math.min(12, Math.floor(calendarWidth / 54) - blockMargin))
    : 12;

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section id="github" className="py-16">
      <div>
        <div className="mb-12 flex items-center justify-between gap-2 sm:gap-4">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-left md:text-4xl">
            GitHub Activity
          </h2>
          <Link
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub profile"
            className="text-muted-foreground hover:text-foreground border-border flex shrink-0 items-center justify-center rounded-lg border-2 border-dotted p-2 transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>

        <div className="bg-card border-border min-w-0 rounded-xl border-2 border-dotted p-3 sm:p-6">
          <div ref={calendarContainer} className={`${styles.calendar} min-w-0`}>
            <CalendarErrorBoundary>
              <GitHubCalendar
                username={GITHUB_USERNAME}
                theme={mounted && isDark ? darkTheme : lightTheme}
                colorScheme={mounted && isDark ? "dark" : "light"}
                blockSize={blockSize}
                blockMargin={blockMargin}
                fontSize={calendarWidth && calendarWidth < 480 ? 12 : 14}
                labels={{ totalCount: "{{count}} contributions" }}
                hideColorLegend
                throwOnError
              />
            </CalendarErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
