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
import { projects } from "@/data/projects";
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
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-12">
          Projects I&apos;ve Built
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:items-stretch">
          {projects.slice(0, visibleCards).map((project, index) => (
            <Card
              key={index}
              className="bg-card border-2 border-dotted border-border hover:border-muted-foreground/25 transition-all duration-300 hover:bg-muted/25 dark:hover:bg-muted/40 overflow-hidden p-0 h-full"
            >
              {"preview" in project && project.preview && (
                <Link
                  href={project.link || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full aspect-video overflow-hidden rounded-t-xl"
                >
                  <Image
                    src={project.preview.src}
                    alt={project.preview.alt}
                    fill
                    className="object-cover"
                  />
                </Link>
              )}
              <CardHeader className="pb-2 pt-6 shrink-0 min-h-[140px]">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 bg-primary/20 rounded-lg text-primary relative shrink-0">
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
                        />
                      ) : (
                        <project.icon className="w-6 h-6" />
                      )}
                    </div>
                    <CardTitle className="text-foreground text-lg font-semibold truncate">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                    </Link>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                      </Link>
                    )}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="shrink-0 pt-0 pb-6">
                <div className="flex flex-nowrap gap-3 h-10 overflow-x-auto overflow-y-hidden">
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
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted p-1.5 cursor-default text-muted-foreground">
                            {IconComponent ? (
                              <IconComponent className="w-5 h-5" />
                            ) : imageSrc ? (
                              <Image
                                src={imageSrc}
                                alt={tag.name}
                                width={20}
                                height={20}
                                className="object-contain w-5 h-5"
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
                  className="inline-flex items-center gap-1 mt-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Read More
                  <span aria-hidden>→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        {visibleCards < projects.length && (
          <div className="flex justify-center mt-8">
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
