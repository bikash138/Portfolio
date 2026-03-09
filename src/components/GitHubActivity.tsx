"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import Link from "next/link";
import { Github } from "lucide-react";

const GITHUB_USERNAME = "bikash138";

const darkTheme = {
  dark: [
    "#161b22",
    "#0e4429",
    "#006d32",
    "#26a641",
    "#39d353",
  ],
};

const GitHubActivity = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            GitHub Activity
          </h2>
          <Link
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-2 border-dotted border-gray-500 rounded-lg px-3 py-2"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">View Profile</span>
          </Link>
        </div>

        <div className="rounded-xl bg-gray-900/50 border-2 border-dotted border-gray-800 p-6 overflow-x-auto">
          <GitHubCalendar
            username={GITHUB_USERNAME}
            theme={darkTheme}
            colorScheme="dark"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
