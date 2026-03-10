import { Github, Linkedin, Mail } from "lucide-react";
import TwitterX from "@/assets/TwitterX";

export const socialLinks = [
  {
    href: "https://github.com/bikash138",
    icon: Github,
    label: "GitHub",
    external: true,
    iconClassName: "text-foreground",
  },
  {
    href: "https://www.linkedin.com/in/bikash-shaw-5ab74727b/",
    icon: Linkedin,
    label: "LinkedIn",
    external: true,
    iconClassName: "text-[#0A66C2]",
  },
  {
    href: "https://x.com/Bikash__Shaw",
    icon: TwitterX,
    label: "Twitter",
    external: true,
    iconClassName: "text-foreground",
  },
  {
    href: "mailto:bshaw1352@gmail.com",
    icon: Mail,
    label: "Email",
    external: false,
    iconClassName: "text-red-600",
  },
];
