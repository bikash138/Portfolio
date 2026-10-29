import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-foreground mb-4 text-6xl font-bold md:text-8xl">
        404
      </h1>
      <p className="text-foreground mb-8 text-xl">Page not found</p>
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground text-sm transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
