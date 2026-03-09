import zivelle from "@/assets/project-icons/zivelle.png";
import ship0 from "@/assets/project-icons/ship0.png";
import ship0Banner from "@/assets/project-banners/ship0-banner.webp";
import urbanease from "@/assets/project-icons/urbanease.png";
import urbaneaseBanner from "@/assets/project-banners/urbanease-banner.webp";
import { Code } from "lucide-react";
import { techIcons } from "./tech-icons";

export const projects = [
  {
    title: "Ship0",
    description:
      "Ship0 is an AI-powered code generation platform that lets you build Next.js applications using simple prompts. It generates code with instant live previews, so you can iterate faster and copy the output directly into your project.",
    preview: { src: ship0Banner, alt: "Ship0 preview" },
    icon: {
      src: ship0,
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
  },
  {
    title: "Urbanease",
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
  },
  {
    title: "Zivelle",
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
  },
  {
    title: "Voxa",
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
  },
];
