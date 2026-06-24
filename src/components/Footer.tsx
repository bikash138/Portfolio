import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-center sm:flex-row md:text-left">
        <p className="text-muted-foreground text-sm">
          Developed by{" "}
          <Link
            href="https://x.com/Bikash__Shaw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-primary font-medium transition-all duration-200 hover:underline hover:decoration-dotted hover:underline-offset-4">
              Bikash Shaw
            </span>
          </Link>
        </p>
        <p className="text-muted-foreground text-sm">Kolkata/India</p>
      </div>
    </footer>
  );
};

export default Footer;
