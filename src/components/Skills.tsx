import { skills, getSkillIcon } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { DevIcon } from "@/components/DevIcon";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="py-16">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-12">
          Skills & Tools
        </h2>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
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
                className="bg-muted text-muted-foreground hover:bg-accent px-3 py-2 text-sm transition-colors border-2 border-dotted border-border flex items-center gap-2 rounded-lg"
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
                ) : iconConfig?.deviconClass ||
                  iconConfig?.deviconClassLight ? (
                  <DevIcon
                    iconConfig={iconConfig}
                    className="text-base shrink-0"
                  />
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

export default Skills;
