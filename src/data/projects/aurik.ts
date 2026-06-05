import AurikIcon from "@/assets/project-icons/AurikIcon";
import aurikBanner from "@/assets/project-banners/aurik-banner.webp";
import { techIcons } from "../tech-icons";
import type { Project } from "./project.types";

export const aurik: Project = {
  title: "Aurik",
  slug: "aurik",
  description:
    "Aurik is a self-hosted, OIDC-compliant identity platform built to understand OAuth 2.0 from the ground up — and to replace third-party auth services with a single reusable auth server across projects.",
  preview: { src: aurikBanner, alt: "Ship0 preview" },
  icon: AurikIcon,
  tags: [
    techIcons.Nextjs,
    techIcons.Express,
    techIcons.Prisma,
    techIcons.Turborepo,
    techIcons.AWS_S3,
    techIcons.Docker,
  ],
  link: "https://aurik.cloud",
  github: "https://github.com/bikash138/Aurik",
  aboutProject: `
  Aurik was built out of two motivations: a genuine curiosity about how OAuth actually works under the hood — inspired by the ubiquitous "Sign in with Google" button — and a practical desire to stop rewriting authentication for every new project. Rather than reaching for a third-party service, the goal was to build a self-hosted auth server once and reuse it across projects through "Sign in with Aurik."\n\n
  Aurik is an open-source OIDC-compliant identity platform implementing the full OAuth 2.0 specification — authorization code with PKCE, token exchange, UserInfo endpoint, and OIDC discovery on a dedicated Express auth service with SSO support.\n\n
  It is designed as a monorepo with a shared Prisma schema and a published @aurik/sdk for both React SPAs and Express SSR apps, alongside a Next.js dashboard for profile management and a developer console for OAuth client registration, scope consent configuration, email verification, and password reset.\n\n
  Security is built in at every layer — RS256 JWTs with JWKS key discovery, rotating signing keys, refresh token rotation with reuse detection, bcrypt password hashing, and Zod-validated request payloads across all endpoints.
  `,
  challenges: [
    "Building the @aurik/sdk required designing a clean abstraction that shields developers from the complexity of OAuth handshakes, while supporting both SPA and server-to-server integration patterns out of the box.",
    "Preserving OIDC authorization parameters across the multi-step redirect flow — from authorization through sign-in, consent, and callback — without losing state between hops demanded careful session and parameter design.",
    "Handling public key rotation was a deliberate architectural decision — giving app admins control over the key lifecycle while ensuring tokens remained verifiable and reliably refreshed at every stage.",
    "The deepest challenge was internalizing the full OAuth 2.0 specification: understanding the purpose and interplay of JWKS endpoints, scopes, PKCE, and compliant signing algorithms like RS256 before writing a single line of auth logic.",
  ],
};
