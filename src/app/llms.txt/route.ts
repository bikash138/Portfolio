import { projects } from "@/data/projects";
import { sonyLogistics } from "@/data/experience/sony-logistics";
import { skills } from "@/data/skills";
import { socialLinks } from "@/data/social";
import { blogPosts } from "@/data/blog";
import { site, absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

// Optional plain-text directory; HTML pages remain the canonical source.
export function GET() {
  const text = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "This is Bikash Shaw's personal portfolio. The linked pages are the primary sources for project and experience details.",
    "",
    "## Profile",
    `- [Portfolio](${absoluteUrl("/")}): Full stack developer based in India.`,
    `- [Resume](${absoluteUrl("/resume")}): Professional experience, projects, and skills.`,
    `- Skills: ${skills.join(", ")}.`,
    "",
    "## Experience",
    `- [${sonyLogistics.title}](${absoluteUrl(`/${sonyLogistics.slug}`)}): ${sonyLogistics.position}, ${sonyLogistics.startLabel}–Present, ${sonyLogistics.location}.`,
    ...sonyLogistics.impact.map((point) => `- ${point.replace(/\*\*/g, "")}`),
    "",
    "## Projects",
    ...projects.map(
      (project) =>
        `- [${project.title}](${absoluteUrl(`/${project.slug}`)}): ${project.description}`
    ),
    "",
    "## Writing",
    ...blogPosts.map(
      (blog) => `- [${blog.title}](${blog.link}): ${blog.description}`
    ),
    "",
    "## Contact and profiles",
    ...socialLinks.map((link) => `- [${link.label}](${link.href})`),
    "",
  ].join("\n");

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
