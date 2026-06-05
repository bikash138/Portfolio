import { skills, getSkillIcon } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { DevIcon } from "@/components/DevIcon";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="py-16">
      <div>
        <h2 className="mb-12 text-center text-3xl font-bold md:text-left md:text-4xl">
          Skills & Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
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
                className="bg-muted text-muted-foreground hover:bg-accent border-border flex items-center gap-2 rounded-lg border-2 border-dotted px-3 py-2 text-sm transition-colors"
              >
                {IconComponent ? (
                  <IconComponent className="h-4 w-4 shrink-0" />
                ) : imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={skill}
                    width={16}
                    height={16}
                    className="shrink-0 object-contain"
                  />
                ) : iconConfig?.deviconClass ||
                  iconConfig?.deviconClassLight ? (
                  <DevIcon
                    iconConfig={iconConfig}
                    className="shrink-0 text-base"
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
