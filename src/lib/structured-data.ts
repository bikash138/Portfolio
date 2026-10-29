import { site, absoluteUrl } from "@/lib/seo";
import { socialLinks } from "@/data/social";
import { skills } from "@/data/skills";
import portrait from "@/assets/self.webp";

export const personId = absoluteUrl("/#person");
export const websiteId = absoluteUrl("/#website");

export const identitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      url: site.url,
      image: absoluteUrl(portrait.src),
      jobTitle: "Full Stack Developer",
      description: site.description,
      homeLocation: {
        "@type": "Place",
        name: "Kolkata, India",
      },
      worksFor: {
        "@type": "Organization",
        name: "Sony Logistics",
        url: "https://www.sonylogistics.in",
      },
      knowsAbout: skills,
      sameAs: socialLinks
        .filter((link) => link.external)
        .map((link) => link.href),
    },
  ],
};

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: absoluteUrl(path),
      },
    ],
  };
}
