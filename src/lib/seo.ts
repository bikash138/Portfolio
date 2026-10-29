import type { Metadata } from "next";

export const site = {
  url: "https://www.bikashshaw.in",
  name: "Bikash Shaw",
  title: "Bikash Shaw | Full Stack Developer",
  description:
    "Bikash Shaw is a full stack developer, building TypeScript applications, backend systems, and AI features. Explore his projects and Sony Logistics work.",
};

export const absoluteUrl = (path: string) => new URL(path, site.url).href;

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: absoluteUrl("/opengraph-image.png"),
          width: 1200,
          height: 630,
          alt: "Bikash Shaw — Full Stack Developer portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@Bikash__Shaw",
      images: [absoluteUrl("/opengraph-image.png")],
    },
  };
}
