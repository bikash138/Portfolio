"use client";

import { skills, getSkillIcon } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-12">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3 justify-start">
          {skills.map((skill, index) => {
            const iconConfig = getSkillIcon(skill);
            const IconComponent = iconConfig?.icon;
            const imageSrc = iconConfig?.image
              ? typeof iconConfig.image === "string"
                ? iconConfig.image
                : iconConfig.image.src
              : null;

            return (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-2 text-sm transition-colors border-2 border-dotted border-gray-600 flex items-center gap-2 rounded-lg"
              >
                {IconComponent ? (
                  <IconComponent className="w-4 h-4 shrink-0" />
                ) : imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={skill}
                    width={16}
                    height={16}
                    className="object-contain shrink-0"
                  />
                ) : iconConfig?.deviconClass ? (
                  <i className={`${iconConfig.deviconClass} text-base shrink-0`} />
                ) : null}
                {skill}
              </Badge>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills