import { aurik } from "./aurik";
import { flowform } from "./flowform";
import { ship0 } from "./ship0";
import { urbanease } from "./urbanease";
import { calrix } from "./calrix";

export type { Project } from "./project.types";

export const projects = [calrix, aurik, flowform, ship0, urbanease];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
