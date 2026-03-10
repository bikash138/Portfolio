import self from "@/assets/self.webp";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socialLinks } from "@/data/social";

const Hero = () => {
  return (
    <section id="home" className="flex pt-8 pb-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full">
        <div className="order-1 md:order-2 shrink-0 w-32 h-32 md:w-40 md:h-40 overflow-hidden border-2 border-border relative rounded-lg">
          <Image
            alt="self picture"
            src={self.src}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="order-2 md:order-1 text-center md:text-left flex-1 mt-4 md:mt-8 mr-0 md:mr-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight">
            Bikash Shaw
          </h1>
          <p className="text-lg md:text-xl text-amber-700/80 dark:text-amber-400/80 mb-6 font-bold">
            Full Stack Developer
          </p>

          <p className="text-lg md:text-xl mb-6 text-muted-foreground leading-relaxed">
            I mostly enjoys{" "}
            <span className="text-primary font-medium">building</span> scalable{" "}
            <span className="text-primary font-medium">backend systems</span>{" "}
            using TypeScript. Currently, I&apos;m learning backend topics while{" "}
            <span className="text-primary font-medium">building</span> projects
            and{" "}
            <span className="text-primary font-medium">documenting</span> through
            blogs. I would love to{" "}
            <span className="text-primary font-medium">collaborate</span> with
            people with similar mindset.
          </p>

          <p className="text-base mb-3 text-muted-foreground">
            Let&apos;s connect:
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
            {socialLinks.map(
              ({ href, icon: Icon, label, external, iconClassName }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <Link
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="border-2 border-dotted border-border rounded-lg p-2.5 text-muted-foreground hover:text-foreground transition-colors inline-flex"
                      aria-label={label}
                    >
                      <Icon className={`w-4 h-4 ${iconClassName ?? ""}`} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
