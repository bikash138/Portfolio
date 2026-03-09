import { techIcons } from "./tech-icons";

export const skills = [
  "JavaScript",
  "TypeScript",
  "C++",
  "Next.js",
  "React",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Turborepo",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "Express.js",
  "Git",
];

const skillToTechKey: Record<string, string> = {
  "Next.js": "Nextjs",
  "Express.js": "Express",
  "Node.js": "Nodejs",
  "Tailwind CSS": "Tailwind CSS",
  "C++": "C++",
};

export const getSkillIcon = (skill: string) => {
  const key = skillToTechKey[skill] ?? skill;
  return techIcons[key];
};