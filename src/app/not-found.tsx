import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
        404
      </h1>
      <p className="text-xl text-foreground mb-8">Page not found</p>
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
