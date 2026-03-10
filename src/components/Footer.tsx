import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-muted-foreground text-sm">
          Developed by{" "}
          <Link
            href="https://x.com/Bikash__Shaw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-primary font-medium hover:underline hover:decoration-dotted hover:underline-offset-4 duration-200 transition-all">
              Bikash Shaw
            </span>
          </Link>
        </p>
        <p className="text-muted-foreground text-sm">India/Kolkata</p>
      </div>
    </footer>
  );
};

export default Footer;
