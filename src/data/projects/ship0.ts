import ship0Icon from "@/assets/project-icons/ship0.png";
import ship0IconDark from "@/assets/project-icons/ship0-dark.png";
import ship0Banner from "@/assets/project-banners/ship0-banner.webp";
import { techIcons } from "../tech-icons";
import type { Project } from "./project.types";

export const ship0: Project = {
  title: "Ship0",
  slug: "ship0",
  description:
    "Ship0 is an AI-powered code generation platform that lets you build Next.js applications using simple prompts. It generates code with instant live previews, so you can iterate faster and copy the output directly into your project.",
  preview: { src: ship0Banner, alt: "Ship0 preview" },
  icon: {
    src: ship0Icon,
    srcLight: ship0IconDark,
    srcDark: ship0Icon,
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
};
