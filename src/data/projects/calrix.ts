import CalrixIcon from "@/assets/project-icons/CalrixIcon";
import calrixBanner from "@/assets/project-banners/calrix-banner.webp";
import { techIcons } from "../tech-icons";
import type { Project } from "./project.types";

export const calrix: Project = {
  title: "Calrix",
  slug: "calrix",
  description:
    "Calrix is an agentic AI platform that reads, sorts, and ranks your gmail, drafts replies that sound like you, guards your google calendar, and chases down the replies you're still waiting on.",
  preview: { src: calrixBanner, alt: "Urbanease preview" },
  icon: CalrixIcon,
  tags: [
    techIcons.Nextjs,
    techIcons.Corsair,
    techIcons.AI_SDK,
    techIcons.Inngest,
    techIcons.BetterAuth,
    techIcons.Drizzle,
  ],
  link: "https://www.calrix.in",
  github: "https://github.com/bikash138/Calrix",
  aboutProject: `
  Calrix started as a hackathon project at the Chaicode × Corsair (YC 25) hackathon — built around a simple frustration: email is supposed to be a tool, but it ends up running you. After the hackathon, the project continued to evolve well beyond its original scope.\n\n
  At its core is a smart triage pipeline powered by Inngest and Corsair that continuously filters noisy email, ranks what remains by priority according to your personal preferences, and fires urgent push notifications for the messages that genuinely cannot wait, so your attention goes where it matters.\n\n
  Beyond the AI workflows, Calrix ships a full traditional email and calendar UI so you never have to leave the app. Inbox, composer, calendar views, and event management all live in one place, keeping context intact instead of scattering it across tabs.\n\n
  The centrepiece is a conversational assistant powered by the Corsair MCP server, which gives the bot direct tools to draft and send emails or create calendar events in a single chat turn. The assistant also carries a short-term memory seeded from your settings panel with working hours, meeting gaps, and communication preferences — so every suggestion already accounts for how you actually work, making Calrix feel like it knows you.\n\n
  Finally, a keyboard-first command center sits at the heart of the experience: a context-aware palette that lets you jump to any action — searching mail, scheduling a meeting, triggering a workflow — without lifting your hands off the keyboard.
  `,
  challenges: [
    "Prompt optimisation was an early cost problem — naive prompts were burning tokens on simple questions that needed only a word or two back. Getting the prompts tight enough to handle light queries cheaply without sacrificing quality on complex ones required careful layering and model selection per task.",
    "Building the contacts layer was trickier than expected — letting users address emails by just a name required resolving identities from prior threads, inferring the relationship each contact has with the user, and capturing the tone they typically use with them, so the assistant could draft replies that feel appropriate to that specific connection rather than generically polite.",
    "Building a context-aware command palette that could surface the right actions without the user manually spelling out their intent meant continuously inferring state from the current view, selected threads, and calendar context — and wiring that signal cleanly into every command without leaking UI concerns into the core logic.",
    "The hardest problem was making the agentic system feel effortless at runtime — low error rates, graceful degradation when a tool call fails mid-turn, and a memory layer that persists preferences faithfully enough that the assistant adapts to the user rather than the user adapting to it. Equally demanding was making it fast: minimising round-trips, streaming responses as they arrived, and parallelising tool calls wherever possible so the assistant never felt like it was thinking too long.",
  ],
};
