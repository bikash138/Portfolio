import ship0 from "@/assets/project-icons/ship0.png";
import ship0Dark from "@/assets/project-icons/ship0-dark.png";
import ship0Banner from "@/assets/project-banners/ship0-banner.webp";
import urbanease from "@/assets/project-icons/urbanease.png";
import urbaneaseBanner from "@/assets/project-banners/urbanease-banner.webp";
import React from "react";
import { techIcons } from "./tech-icons";
import type { TechIcon } from "./tech-icons";
import type { StaticImageData } from "next/image";

export type Project = {
  title: string;
  slug: string;
  description: string;
  preview?: { src: StaticImageData; alt: string };
  icon:
    | { src: StaticImageData; alt: string; width: number; height: number; srcLight?: StaticImageData; srcDark?: StaticImageData }
    | React.ComponentType<{ className?: string }>;
  tags: TechIcon[];
  link: string;
  github: string;
  aboutProject?: string;
  challenges?: string[];
  architectureImages?: { src: StaticImageData; alt: string }[];
};

export const projects: Project[] = [
  {
    title: "Ship0",
    slug: "ship0",
    description:
      "Ship0 is an AI-powered code generation platform that lets you build Next.js applications using simple prompts. It generates code with instant live previews, so you can iterate faster and copy the output directly into your project.",
    preview: { src: ship0Banner, alt: "Ship0 preview" },
    icon: {
      src: ship0,
      srcLight: ship0Dark,
      srcDark: ship0,
      alt: "ship0",
      width: 24,
      height: 24,
    },
    tags: [
      techIcons.Inngest,
      techIcons.E2B,
      techIcons.Nextjs,
      techIcons.Clerk,
      techIcons.Express,
      techIcons.PostgreSQL,
      techIcons.Docker,
    ],
    link: "https://ship0.bikashshaw.in",
    github: "https://github.com/bikash138/Ship0",
    aboutProject:
      "Ship0 is an AI-powered code generation platform that lets developers build Next.js applications using natural language prompts. The system uses E2B for secure, ephemeral sandbox environments where code is executed, and Inngest for managing background jobs and workflows. Users get instant live previews of their generated applications, with the ability to copy code directly into their projects.",
    challenges: [
      "Preventing Inngest functions from getting stuck for long periods while generating code.",
      "Managing ephemeral sandbox lifecycle and cleanup to prevent resource leaks",
      "Avoiding inngest functions to get stuck for long time while genrating code",
      "Learned using clerk billing with rate limiter to eliminate abusing of platform",
    ],
  },
  {
    title: "Urbanease",
    slug: "urbanease",
    description:
      "Urbanease is a platform where local service providers can list their services and the customers can book appointment of those services.",
    preview: { src: urbaneaseBanner, alt: "Urbanease preview" },
    icon: {
      src: urbanease,
      alt: "urbanease",
      width: 24,
      height: 24,
    },
    tags: [
      techIcons.Nextjs,
      techIcons.PostgreSQL,
      techIcons.Docker,
      techIcons["AWS S3"],
      techIcons.Express,
    ],
    link: "https://urbanease.bikashshaw.in",
    github: "https://github.com/bikash138/Urbanease",
    aboutProject:
      "Urbanease connects local service providers with customers who need to book appointments. Service providers can create profiles, list their services with pricing and availability, while customers browse, compare, and book slots. The platform handles scheduling conflicts, notifications, and supports multiple service categories. Data is persisted in PostgreSQL with file uploads (like service images) stored in AWS S3.",
    challenges: [
      "Creating slot system for the service providers",
      "Handling images optimization to reduce load time",
      "Implementing efficient search and filters across providers and services",
      "Building the maintainable and scalable backend structure with logging and obervability",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
