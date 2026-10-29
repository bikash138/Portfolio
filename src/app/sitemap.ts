import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { sonyLogistics } from "@/data/experience/sony-logistics";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/resume",
    `/${sonyLogistics.slug}`,
    ...projects.map((project) => `/${project.slug}`),
  ].map((path) => ({ url: absoluteUrl(path) }));
}
