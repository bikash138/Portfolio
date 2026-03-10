import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { DevIcon } from "@/components/DevIcon";
import type { TechIcon } from "@/data/tech-icons";

type Props = {
  params: Promise<{ projectSlug: string }>;
};

export function generateStaticParams() {
  return projects.map((p: Project) => ({ projectSlug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  if (!project) return { title: "Project Not Found" };
  return { title: `${project.title} | Bikash Shaw` };
}

export default async function ProjectPage({ params }: Props) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);

  if (!project) notFound();

  const aboutProject = project.aboutProject ?? project.description;
  const challenges = project.challenges ?? [];
  const architectureImages = project.architectureImages ?? [];

  return (
    <article className="py-12 pb-20">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to projects
      </Link>

      <header className="mb-12">
        {project.preview ? (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-dotted border-border bg-muted">
            <Image
              src={project.preview.src}
              alt={project.preview.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        ) : (
          <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-dotted border-border bg-muted flex items-center justify-center">
            {typeof project.icon === "object" && project.icon !== null && "src" in project.icon ? (
              <Image
                src={project.icon.src}
                alt={project.icon.alt}
                width={120}
                height={120}
                className="opacity-50"
              />
            ) : (
              (() => {
                const IconComponent = project.icon as React.ComponentType<{ className?: string }>;
                return <IconComponent className="w-24 h-24 text-muted-foreground/50" />;
              })()
            )}
          </div>
        )}

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {project.title}
          </h1>
          <div className="flex items-center gap-3">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border-2 border-dotted border-border rounded-lg px-3 py-2"
              >
                <ExternalLink className="w-4 h-4" />
                Live demo
              </Link>
            )}
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border-2 border-dotted border-border rounded-lg px-3 py-2"
            >
              <Github className="w-4 h-4" />
              Source
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-none">
        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-6 border-b border-border pb-2">
            About Project
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {aboutProject}
          </p>

          {architectureImages.length > 0 && (
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-semibold">Architecture</h3>
              <div className="grid gap-6">
                {architectureImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-dotted border-border bg-muted"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 896px) 100vw, 896px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {challenges.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6 border-b border-border pb-2">
              Challenges
            </h2>
            <ul className="space-y-3 list-disc list-inside text-muted-foreground leading-relaxed text-lg marker:text-primary">
              {challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6 border-b border-border pb-2">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag: TechIcon, index: number) => {
              const IconComponent = tag.icon;
              const imageSrc = tag.image
                ? typeof tag.image === "string"
                  ? tag.image
                  : tag.image.src
                : null;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted border-2 border-dotted border-border text-muted-foreground"
                >
                  {IconComponent ? (
                    <IconComponent className="w-5 h-5 shrink-0" />
                  ) : imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={tag.name}
                      width={20}
                      height={20}
                      className="object-contain w-5 h-5 shrink-0"
                    />
                  ) : tag.deviconClass || tag.deviconClassLight ? (
                    <DevIcon iconConfig={tag} className="text-lg shrink-0" />
                  ) : null}
                  <span className="text-sm font-medium">{tag.name}</span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </article>
  );
}
