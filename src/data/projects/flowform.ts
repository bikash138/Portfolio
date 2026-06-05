import FlowFormIcon from "@/assets/project-icons/FlowformIcon";
import flowformBanner from "@/assets/project-banners/flowform-banner.webp";
import { techIcons } from "../tech-icons";
import type { Project } from "./project.types";

export const flowform: Project = {
  title: "Flowform",
  slug: "flowform",
  description:
    "Flowform is a form-builder SaaS platform for creating structured forms for official data collection and conversational forms for engaging marketing experiences.",
  preview: { src: flowformBanner, alt: "Ship0 preview" },
  icon: FlowFormIcon,
  tags: [
    techIcons.Nextjs,
    techIcons.Zustand,
    techIcons.tRPC,
    techIcons.BetterAuth,
    techIcons.PostgreSQL,
    techIcons.Redis,
  ],
  link: "https://www.flowform.in",
  github: "https://github.com/bikash138/Flowform",
  aboutProject: `
  Flowform is a form-builder SaaS platform for creating structured forms for official data collection and conversational forms for engaging marketing experiences.\n\n
  Here teams can create, publish, and analyze forms from a single workspace. The editor supports 12 question types — short text, long text, email, number, phone, URL, dropdown, radio, checkbox, rating, date, and yes/no.\n\n
  Form settings give creators control over access type (public, unlisted, or password-protected), progress bar style (bar, steps, or percentage), response limits, automatic close dates, and custom navbar branding with a logo. Pro tiers unlock redirect-on-completion, confirmation emails with six branded templates, and watermark removal.\n\n
  The response pipeline captures each submission with per-question answers, respondent email, device type, and geographic data including country, continent, city, and timezone. An analytics summary per form tracks views, starts, submissions, average completion time, and device and geography breakdowns, all viewable in a dedicated analytics dashboard. Workspaces support team collaboration with role-based access control, member invitations, and plan-based feature gating across free, pro, and pro max tiers.
  `,
  challenges: [
    "Hardening the response pipeline against bot submissions and fraudulent entries required building validation layers that filtered out noise without disrupting the experience for legitimate respondents.",
    "Handling form versioning was a subtle but critical problem — whenever question options changed, historical response data had to remain interpretable so that analytics stayed accurate and consistent across revisions.",
    "Building the form editor canvas was the most demanding UI challenge. It involved carefully orchestrating a large number of interdependent state variables and event handlers to keep the editor responsive, predictable, and free of race conditions.",
    "Designing the analytics data flow required deliberate architectural decisions: determining which metrics should pass through Redis for eventual consistency and which demanded immediate database writes — striking the right balance between read performance and data freshness.",
  ],
};
