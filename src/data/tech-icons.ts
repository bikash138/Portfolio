import React from "react";
import Inngest from "@/assets/tech-icons/Inngest";
import e2bIcon from "@/assets/tech-icons/e2b.png";
import Langchain from "@/assets/tech-icons/Langchain";
import Langgraph from "@/assets/tech-icons/Langgraph";
import rzp from "@/assets/tech-icons/razorpay.png"
import clerk from "@/assets/tech-icons/clerk.ico"
import webrtc from "@/assets/tech-icons/webrtc.png"
import turborepo from "@/assets/tech-icons/turborepo.png";

export type TechIcon = {
  name: string;
  deviconClass?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image?: string | { src: string };
};

export const techIcons: Record<string, TechIcon> = {
  Inngest: {
    name: "Inngest",
    icon: Inngest,
  },
  E2B: {
    name: "E2B",
    image: e2bIcon,
  },
  Nextjs: {
    name: "Next.js",
    deviconClass: "devicon-nextjs-plain",
  },
  Clerk: { name: "Clerk", image: clerk },
  Express: {
    name: "Express",
    deviconClass: "devicon-express-original",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    deviconClass: "devicon-postgresql-plain colored",
  },
  Docker: { name: "Docker", deviconClass: "devicon-docker-plain colored" },
  AWS: {
    name: "AWS",
    deviconClass: "devicon-amazonwebservices-plain-wordmark colored",
  },
  "AWS S3": {
    name: "AWS S3",
    deviconClass: "devicon-amazonwebservices-plain-wordmark colored",
  },
  Redis: { name: "Redis", deviconClass: "devicon-redis-plain colored" },
  Razorpay: { name: "Razorpay", image: rzp },
  Python: { name: "Python", deviconClass: "devicon-python-plain colored" },
  Langchain: {
    name: "Langchain",
    icon: Langchain,
  },
  Langgraph: {
    name: "Langgraph",
    icon: Langgraph,
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    deviconClass: "devicon-tailwindcss-plain colored",
  },
  Websockets: {
    name: "Websockets",
    deviconClass: "devicon-javascript-plain colored",
  },
  WebRTC: { name: "WebRTC", image: webrtc },
  Turborepo: {
    name: "Turborepo",
    image: turborepo,
  },
  JavaScript: { name: "JavaScript", deviconClass: "devicon-javascript-plain colored" },
  TypeScript: { name: "TypeScript", deviconClass: "devicon-typescript-plain colored" },
  "C++": { name: "C++", deviconClass: "devicon-cplusplus-plain colored" },
  React: { name: "React", deviconClass: "devicon-react-original colored" },
  Prisma: { name: "Prisma", deviconClass: "devicon-prisma-plain" },
  MongoDB: { name: "MongoDB", deviconClass: "devicon-mongodb-plain colored" },
  Nodejs: { name: "Node.js", deviconClass: "devicon-nodejs-plain colored" },
  Git: { name: "Git", deviconClass: "devicon-git-plain colored" },
};
