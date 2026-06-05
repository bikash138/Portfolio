import urbaneaseIcon from "@/assets/project-icons/urbanease.png";
import urbaneaseBanner from "@/assets/project-banners/urbanease-banner.webp";
import { techIcons } from "../tech-icons";
import type { Project } from "./project.types";

export const urbanease: Project = {
  title: "Urbanease",
  slug: "urbanease",
  description:
    "Urbanease is a platform where local service providers can list their services and the customers can book appointment of those services.",
  preview: { src: urbaneaseBanner, alt: "Urbanease preview" },
  icon: {
    src: urbaneaseIcon,
    alt: "urbanease",
    width: 24,
    height: 24,
  },
  tags: [
    techIcons.Nextjs,
    techIcons.PostgreSQL,
    techIcons.Docker,
    techIcons.AWS_S3,
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
};
