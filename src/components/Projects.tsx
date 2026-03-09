"use client";
import React, { useState } from "react";
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

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState(4);

  const handleMore = () => {
    setVisibleCards((prev) => prev + 2);
  };

  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-12">
          Projects I&apos;ve Built
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:items-stretch">
          {projects.slice(0, visibleCards).map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-2 border-dotted border-gray-900 hover:border-gray-800 transition-all duration-300 hover:bg-gray-900/70 overflow-hidden p-0 h-full"
            >
              {"preview" in project && project.preview && (
                <Link
                  href={project.link || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full aspect-video overflow-hidden rounded-t-xl bg-gray-800 hover:opacity-90 transition-opacity"
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
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 relative shrink-0">
                      {typeof project.icon === "object" &&
                      "src" in project.icon ? (
                        <Image
                          src={project.icon.src}
                          alt={project.icon.alt}
                          width={project.icon.width}
                          height={project.icon.height}
                        />
                      ) : (
                        <project.icon className="w-6 h-6" />
                      )}
                    </div>
                    <CardTitle className="text-white text-lg font-semibold truncate">
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
                      <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                    </Link>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                      </Link>
                    )}
                  </div>
                </div>
                <CardDescription className="text-gray-400 text-sm leading-relaxed line-clamp-3">
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
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800/80 p-1.5 cursor-default text-gray-300">
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
                            ) : tag.deviconClass ? (
                              <i className={`${tag.deviconClass} text-lg`} />
                            ) : null}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>{tag.name}</TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
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
