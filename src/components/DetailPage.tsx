import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import type { Experience } from "@/data/experience/sony-logistics";
import { DevIcon } from "@/components/DevIcon";
import type { TechIcon } from "@/data/tech-icons";

type Props =
  | { kind: "project"; item: Project }
  | { kind: "experience"; item: Experience };

function HighlightedText({ text }: { text: string }) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="text-foreground/75 font-bold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    )
  );
}

export default function DetailPage({ kind, item }: Props) {
  const isExperience = kind === "experience";
  const project =
    kind === "project"
      ? item
      : {
          ...item,
          aboutProject: item.impact.join("\n\n"),
          challenges: item.contributions,
          description: item.impact.join("\n\n"),
          github: undefined,
        };
  const aboutProject = project.aboutProject ?? project.description;
  const challenges = project.challenges ?? [];
  const architectureImages =
    "architectureImages" in project ? (project.architectureImages ?? []) : [];

  return (
    <article className="py-12 pb-20">
      <Link
        href={isExperience ? "/#experience" : "/#projects"}
        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        {isExperience ? "Back" : "Back to Projects"}
      </Link>

      <header className="mb-12">
        {project.preview ? (
          <div className="border-border bg-muted relative aspect-video w-full overflow-hidden rounded-xl border-2 border-dotted">
            <Image
              src={project.preview.src}
              alt={project.preview.alt}
              fill
              className="object-cover"
              placeholder="blur"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        ) : (
          <div className="border-border bg-muted flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border-2 border-dotted">
            {typeof project.icon === "object" &&
            project.icon !== null &&
            "src" in project.icon ? (
              <Image
                src={project.icon.src}
                alt={project.icon.alt}
                width={120}
                height={120}
                className={
                  isExperience ? "dark:brightness-0 dark:invert" : "opacity-50"
                }
              />
            ) : (
              (() => {
                const IconComponent = project.icon as React.ComponentType<{
                  className?: string;
                }>;
                return (
                  <IconComponent className="text-muted-foreground/50 h-24 w-24" />
                );
              })()
            )}
          </div>
        )}

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {project.title}
            </h1>
            {kind === "experience" && (
              <p className="text-muted-foreground mt-2 text-sm">
                {item.position} · {item.startLabel}–Present · {item.location}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground border-border inline-flex items-center gap-2 rounded-lg border-2 border-dotted px-3 py-2 text-sm transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                {isExperience ? "Visit Site" : "Live demo"}
              </Link>
            )}
            {!isExperience && project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground border-border inline-flex items-center gap-2 rounded-lg border-2 border-dotted px-3 py-2 text-sm transition-colors"
              >
                <Github className="h-4 w-4" />
                Source
              </Link>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-none">
        <section className="mb-16">
          <h2 className="border-border mb-6 border-b pb-2 text-2xl font-bold tracking-tight">
            {isExperience ? "Impact" : "About Project"}
          </h2>
          {kind === "experience" ? (
            <ul className="text-muted-foreground marker:text-primary list-outside list-disc space-y-3 pl-5 text-lg leading-relaxed text-pretty">
              {item.impact.map((point, i) => (
                <li key={i}>
                  <HighlightedText text={point} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="space-y-4">
              {aboutProject.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          )}

          {architectureImages.length > 0 && (
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-semibold">Architecture</h3>
              <div className="grid gap-6">
                {architectureImages.map((img, i) => (
                  <div
                    key={i}
                    className="border-border bg-muted relative aspect-video w-full overflow-hidden rounded-xl border-2 border-dotted"
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
            <h2 className="border-border mb-6 border-b pb-2 text-2xl font-bold tracking-tight">
              {isExperience ? "Contributions" : "Challenges"}
            </h2>
            <ul className="text-muted-foreground marker:text-primary list-outside list-disc space-y-3 pl-5 text-lg leading-relaxed text-pretty">
              {challenges.map((challenge, i) => (
                <li key={i}>
                  {isExperience ? (
                    <HighlightedText text={challenge} />
                  ) : (
                    challenge
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="border-border mb-6 border-b pb-2 text-2xl font-bold tracking-tight">
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
                  className="bg-muted border-border text-muted-foreground flex items-center gap-2 rounded-lg border-2 border-dotted px-4 py-2"
                >
                  {IconComponent ? (
                    <IconComponent className="h-5 w-5 shrink-0" />
                  ) : imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={tag.name}
                      width={20}
                      height={20}
                      className="h-5 w-5 shrink-0 object-contain"
                    />
                  ) : tag.deviconClass || tag.deviconClassLight ? (
                    <DevIcon iconConfig={tag} className="shrink-0 text-lg" />
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
