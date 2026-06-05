"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { projects } from "@/data/projects/index";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DevIcon } from "@/components/DevIcon";

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleMore = () => {
    setVisibleCards((prev) => prev + 2);
  };

  return (
    <section id="projects" className="py-16">
      <div>
        <h2 className="mb-12 text-center text-3xl font-bold md:text-left md:text-4xl">
          Projects I&apos;ve Built
        </h2>

        <div className="grid gap-8 md:grid-cols-2 md:items-stretch">
          {projects.slice(0, visibleCards).map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-muted-foreground/25 hover:bg-muted/25 dark:hover:bg-muted/40 h-full overflow-hidden border-2 border-dotted p-0 transition-all duration-300"
            >
              {"preview" in project && project.preview && (
                <Link
                  href={project.link || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video w-full overflow-hidden rounded-t-xl"
                >
                  <Image
                    src={project.preview.src}
                    alt={project.preview.alt}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    quality={75}
                  />
                </Link>
              )}
              <CardHeader className="min-h-[140px] shrink-0 pt-6 pb-2">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="bg-primary/20 text-primary relative shrink-0 rounded-lg p-2">
                      {typeof project.icon === "object" &&
                      "src" in project.icon ? (
                        <Image
                          src={
                            "srcLight" in project.icon &&
                            "srcDark" in project.icon &&
                            mounted
                              ? resolvedTheme === "dark"
                                ? project.icon.srcDark!
                                : project.icon.srcLight!
                              : project.icon.src
                          }
                          alt={project.icon.alt}
                          width={project.icon.width}
                          height={project.icon.height}
                          placeholder="blur"
                          quality={75}
                        />
                      ) : (
                        <project.icon className="h-6 w-6" />
                      )}
                    </div>
                    <CardTitle className="text-foreground truncate text-lg font-semibold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="text-muted-foreground hover:text-foreground h-5 w-5 cursor-pointer transition-colors" />
                    </Link>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="text-muted-foreground hover:text-foreground h-5 w-5 cursor-pointer transition-colors" />
                      </Link>
                    )}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="shrink-0 pt-0 pb-6">
                <div className="flex h-10 flex-nowrap gap-3 overflow-x-auto overflow-y-hidden">
                  {project.tags.map((tag, tagIndex) => {
                    const IconComponent = tag.icon;
                    const imageSrc = tag.image
                      ? typeof tag.image === "string"
                        ? tag.image
                        : tag.image.src
                      : null;
                    return (
                      <Tooltip key={tagIndex}>
                        <TooltipTrigger asChild>
                          <div className="bg-muted text-muted-foreground flex h-8 w-8 cursor-default items-center justify-center rounded-lg p-1.5">
                            {IconComponent ? (
                              <IconComponent className="h-5 w-5" />
                            ) : imageSrc ? (
                              <Image
                                src={imageSrc}
                                alt={tag.name}
                                width={20}
                                height={20}
                                className="h-5 w-5 object-contain"
                              />
                            ) : tag.deviconClass || tag.deviconClassLight ? (
                              <DevIcon iconConfig={tag} className="text-lg" />
                            ) : null}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>{tag.name}</TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
                <Link
                  href={`/${project.slug}`}
                  className="text-muted-foreground hover:text-primary mt-4 inline-flex items-center gap-1 text-sm transition-colors"
                >
                  Read More
                  <span aria-hidden>→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        {visibleCards < projects.length && (
          <div className="mt-8 flex justify-center">
            <Button onClick={handleMore} className="cursor-pointer">
              Load More...
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
