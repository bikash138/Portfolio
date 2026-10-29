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
      <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
        <div className="border-border relative order-1 h-32 w-32 shrink-0 overflow-hidden rounded-lg border-2 md:order-2 md:h-40 md:w-40">
          <Image
            alt="Bikash Shaw, full stack developer"
            src={self}
            fill
            className="object-cover"
            loading="eager"
            placeholder="blur"
          />
        </div>
        <div className="order-2 mt-4 mr-0 flex-1 text-center md:order-1 md:mt-8 md:mr-12 md:text-left">
          <h1 className="from-foreground to-muted-foreground mb-2 bg-linear-to-r bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:text-6xl">
            Bikash Shaw
          </h1>
          <p className="mb-6 text-lg font-bold text-amber-700/80 md:text-xl dark:text-amber-400/80">
            Full Stack Developer
          </p>

          <p className="text-muted-foreground mb-6 text-lg leading-relaxed md:text-xl">
            I&apos;m a full stack developer based in India, focused on{" "}
            <span className="text-primary font-medium">building</span> scalable{" "}
            <span className="text-primary font-medium">backend systems</span>{" "}
            with <span className="text-primary font-medium">applied AI</span>{" "}
            using TypeScript, Node.js, and Next.js. As a software engineer at{" "}
            <Link
              href="/sony-logistics"
              className="text-primary font-medium hover:underline"
            >
              Sony Logistics
            </Link>
            , I build tools for logistics operations. I also share my work
            through open-source projects and technical blogs.
          </p>

          <p className="text-muted-foreground mb-3 text-base">
            Let&apos;s connect:
          </p>
          <div className="mb-10 flex flex-wrap justify-center gap-4 md:justify-start">
            {socialLinks.map(
              ({ href, icon: Icon, label, external, iconClassName }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <Link
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="border-border text-muted-foreground hover:text-foreground inline-flex rounded-lg border-2 border-dotted p-2.5 transition-colors"
                      aria-label={label}
                    >
                      <Icon className={`h-4 w-4 ${iconClassName ?? ""}`} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
