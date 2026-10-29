import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Skills from "@/components/Skills";
import GitHubActivity from "@/components/GitHubActivity";
import Education from "@/components/Education";
import GradientSeparator from "@/components/GradientSeparator";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, site, absoluteUrl } from "@/lib/seo";
import { personId, websiteId } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
});

function App() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": absoluteUrl("/#profile"),
          url: absoluteUrl("/"),
          name: site.title,
          description: site.description,
          mainEntity: { "@id": personId },
          isPartOf: { "@id": websiteId },
        }}
      />
      <Hero />
      <GradientSeparator />
      <Projects />
      <GradientSeparator />
      <Blog />
      <GradientSeparator />
      <Skills />
      <GradientSeparator />
      <GitHubActivity />
      <GradientSeparator />
      <Education />
    </>
  );
}

export default App;
