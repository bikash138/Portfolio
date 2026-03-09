"use client";

import React from "react";
import self from "@/assets/self.webp";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import TwitterX from "@/assets/TwitterX";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socialLinks = [
  { href: "https://github.com/bikash138", icon: Github, label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/bikash-shaw-5ab74727b/", icon: Linkedin, label: "LinkedIn", external: true },
  { href: "https://x.com/Bikash__Shaw", icon: TwitterX, label: "Twitter", external: true },
  { href: "mailto:bshaw1352@gmail.com", icon: Mail, label: "Email", external: false },
];

const Hero = () => {
  return (
    <section id="home" className="flex px-6 pt-32 pb-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-4xl mx-auto w-full p-5">
        <div className="order-1 md:order-2 shrink-0 w-32 h-32 md:w-40 md:h-40 overflow-hidden border-2 border-gray-800 relative rounded-lg">
          <Image
            alt="self picture"
            src={self.src}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="order-2 md:order-1 text-center md:text-left flex-1 mt-4 md:mt-8 mr-0 md:mr-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Bikash Shaw
          </h1>

          <p className="text-lg md:text-xl mb-6 text-gray-300 leading-relaxed">
            I love code and tech like others love their lattes, wrestling core
            engineering, and making stuff happen into URL. College? Nah,
            Internet&apos;s my guru. Finance terms get me hyped. Always smirking
            at the next bug.
          </p>

          <p className="text-base mb-3 text-gray-400">
            If you&apos;re working on something real, let&apos;s talk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
            {socialLinks.map(({ href, icon: Icon, label, external }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="border-2 border-dotted border-gray-500 rounded-lg p-2.5 text-gray-400 hover:text-white transition-colors inline-flex"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
