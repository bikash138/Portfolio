import sonyLogisticsIcon from "@/assets/experience-icons/sony-logistics.svg";
import sonyLogisticsBanner from "@/assets/experience-icons/sony-logistics-banner.webp";
import type { Project } from "@/data/projects";
import { techIcons } from "@/data/tech-icons";

export type Experience = Pick<
  Project,
  "title" | "slug" | "icon" | "preview" | "tags" | "link"
> & {
  position: string;
  location: string;
  startDate: string;
  startLabel: string;
  impact: string[];
  contributions: string[];
};

export const sonyLogistics: Experience = {
  title: "Sony Logistics",
  slug: "sony-logistics",
  position: "Software Engineer",
  location: "Remote",
  startDate: "2026-09",
  startLabel: "September 2026",
  preview: {
    src: sonyLogisticsBanner,
    alt: "Sony Logistics banner",
  },
  icon: {
    src: sonyLogisticsIcon,
    alt: "Sony Logistics logo",
    width: 48,
    height: 48,
  },
  link: "https://www.sonylogistics.in",
  impact: [
    "Delivered an internal fleet management platform used by **7 vendors** to manage **30+ trucks**.",
    "**Replaced** Excel and paper-based expense, billing, and salary workflows with a **unified platform**.",
    "Built the company website, leading to **e-commerce enquiries** across states and **15+** vehicle partnership requests.",
  ],
  contributions: [
    "Developed **210+ type-safe tRPC endpoints** powering **4 role-based portals** for company management, vendors, drivers, and platform administrators.",
    "Implemented **Playwright-based PDF bill generation**, **AI-assisted form autofill**, fuel card management, and staff management for company and vendor teams with **fine-grained access controls**.",
    "Built a **CI/CD pipeline** to test the application, publish Docker images to GHCR, and deploy to staging before releasing to production, with **Better Stack logging** and **heartbeat monitoring** for operational visibility.",
  ],
  tags: [
    techIcons.Nodejs,
    techIcons.Nextjs,
    techIcons.PostgreSQL,
    techIcons.Turborepo,
    techIcons.Docker,
    techIcons.BetterStack,
  ],
};
