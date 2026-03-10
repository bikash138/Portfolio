import zivelle from "@/assets/project-icons/zivelle.png";
import ship0 from "@/assets/project-icons/ship0.png";
import ship0Dark from "@/assets/project-icons/ship0-dark.png";
import ship0Banner from "@/assets/project-banners/ship0-banner.webp";
import urbanease from "@/assets/project-icons/urbanease.png";
import urbaneaseBanner from "@/assets/project-banners/urbanease-banner.webp";
import React from "react";
import { Code } from "lucide-react";
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
      "Ship0 is an AI-powered code generation platform that lets developers build Next.js applications using natural language prompts. The system uses E2B for secure, ephemeral sandbox environments where code is executed, and Inngest for managing background jobs and workflows. Users get instant live previews of their generated applications, with the ability to copy code directly into their projects. The architecture separates the prompt ingestion, code generation, sandbox execution, and preview delivery into distinct services for scalability.",
    challenges: [
      "Managing ephemeral sandbox lifecycle and cleanup to prevent resource leaks",
      "Synchronizing live preview updates with minimal latency as code changes",
      "Handling variable prompt lengths and code generation outputs reliably",
      "Securing sandbox execution to prevent malicious code from escaping",
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
      "Preventing double-booking and handling timezone differences for appointments",
      "Designing a flexible schema for varied service types and pricing models",
      "Implementing efficient search and filters across providers and services",
      "Managing file uploads and CDN delivery for service images",
    ],
  },
  {
    title: "Zivelle",
    slug: "zivelle",
    description:
      "Built a full-stack e-commerce platform with a seller dashboard for inventory and order management, enabling smooth buying and selling experiences.",
    preview: { src: zivelle, alt: "Zivelle preview" },
    icon: {
      src: zivelle,
      alt: "zivelle",
      width: 24,
      height: 24,
    },
    tags: [
      techIcons.Nextjs,
      techIcons.Redis,
      techIcons.PostgreSQL,
      techIcons.Docker,
      techIcons["AWS S3"],
      techIcons.Razorpay,
    ],
    link: "https://zivelle.bikashshaw.in",
    github: "https://github.com/bikash138/Zivelle",
    aboutProject:
      "Zivelle is a full-stack e-commerce platform with separate flows for buyers and sellers. Sellers manage inventory and orders through a dedicated dashboard, while buyers browse products, add to cart, and complete checkout. Redis is used for caching and session management. Payment integration with Razorpay handles orders securely. AWS S3 stores product images. The system supports product variants, stock management, and order tracking.",
    challenges: [
      "Keeping inventory counts consistent during high-concurrency checkout",
      "Integrating Razorpay webhooks for reliable payment status updates",
      "Designing a scalable cart and checkout flow with Redis",
      "Building a flexible product variant model for different categories",
    ],
  },
  {
    title: "Voxa",
    slug: "voxa",
    description:
      "A real-time chat application enabling users to create rooms and send messages, with video calling feature.",
    icon: Code,
    tags: [
      techIcons.Nextjs,
      techIcons["Tailwind CSS"],
      techIcons.Websockets,
      techIcons.WebRTC,
      techIcons.Turborepo,
    ],
    link: "",
    github: "https://github.com/bikash138/Voxa",
    aboutProject:
      "Voxa is a real-time chat application built with WebSockets for messaging and WebRTC for video calls. Users create rooms and invite others to join. Messages are delivered instantly. The video calling feature uses WebRTC for peer-to-peer connections with fallback for NAT traversal. The app is organized as a Turborepo monorepo for shared code between client and server.",
    challenges: [
      "Establishing stable WebRTC connections across different network conditions",
      "Scaling WebSocket connections for multiple concurrent rooms",
      "Handling reconnection and message sync when users drop and rejoin",
      "Coordinating signaling between WebSocket and WebRTC flows",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
