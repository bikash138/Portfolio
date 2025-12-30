import zivelle from "@/assets/project icons/zivelle.png";
import ship0 from "@/assets/project icons/ship0.png";
import { Bird, Code } from "lucide-react";

export const projects = [
  {
    title: "Ship0",
    description:
      "Ship0 is an AI-powered code generation platform that lets you build Next.js applications using simple prompts. It generates code with instant live previews, so you can iterate faster and copy the output directly into your project.",
    icon: {
      src: ship0,
      alt: "ship0",
      width: 24,
      height: 24,
    },
    tags: [
      "Inngest",
      "E2B",
      "Nextjs",
      "Clerk",
      "Express",
      "PostgreSQL",
      "Docker",
    ],
    link: "https://ship0.bikashdev.com",
    github: "https://github.com/bikash138/Ship0",
  },
  {
    title: "Zivelle",
    description:
      "Built a full-stack e-commerce platform with a seller dashboard for inventory and order management, enabling smooth buying and selling experiences.",
    icon: {
      src: zivelle,
      alt: "zivelle",
      width: 24,
      height: 24,
    },
    tags: ["Nextjs", "Redis", "PostgreSQL", "Docker", "AWS S3", "Razorpay"],
    link: "https://zivelle.bikashdev.com",
    github: "https://github.com/bikash138/Zivelle",
  },
  {
    title: "Voice Enabled Cursor",
    description:
      "Built a voice-enabled CLI Cursor that lets users write code hands-free with simple voice commands!",
    icon: Bird,
    tags: ["Python", "Langchain", "Langgraph"],
    link: "",
    github: "https://github.com/bikash138/Voice-Enabled-Cursor",
  },
  {
    title: "Voxa",
    description:
      "A real-time chat application enabling users to create rooms and send messages, with video calling feature.",
    icon: Code,
    tags: ["Nextjs", "Tailwind CSS", "Websockets", "WebRTC", "Turborepo"],
    link: "",
    github: "https://github.com/bikash138/Voxa",
  },
];
