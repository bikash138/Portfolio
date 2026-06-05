import React from "react";
import type { TechIcon } from "../tech-icons";
import type { StaticImageData } from "next/image";

export type Project = {
  title: string;
  slug: string;
  description: string;
  preview?: { src: StaticImageData; alt: string };
  icon:
    | {
        src: StaticImageData;
        alt: string;
        width: number;
        height: number;
        srcLight?: StaticImageData;
        srcDark?: StaticImageData;
      }
    | React.ComponentType<{ className?: string }>;
  tags: TechIcon[];
  link: string;
  github: string;
  aboutProject?: string;
  challenges?: string[];
  architectureImages?: { src: StaticImageData; alt: string }[];
};
