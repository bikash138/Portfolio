import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import DetailPage from "@/components/DetailPage";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import { breadcrumbSchema, personId, websiteId } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";

type Props = {
  params: Promise<{ projectSlug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ projectSlug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  if (!project) return { title: "Page Not Found" };
  return pageMetadata({
    title: `${project.title} | Bikash Shaw`,
    description: project.description,
    path: `/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  if (!project) notFound();
  const url = absoluteUrl(`/${project.slug}`);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${url}#webpage`,
              url,
              name: project.title,
              description: project.description,
              isPartOf: { "@id": websiteId },
              mainEntity: { "@id": `${url}#project` },
            },
            {
              "@type": "SoftwareSourceCode",
              "@id": `${url}#project`,
              name: project.title,
              description: project.description,
              url,
              author: { "@id": personId },
              codeRepository: project.github,
              ...(project.link ? { sameAs: project.link } : {}),
              ...(project.preview
                ? { image: absoluteUrl(project.preview.src.src) }
                : {}),
              keywords: project.tags.map((tag) => tag.name),
            },
            breadcrumbSchema(project.title, `/${project.slug}`),
          ],
        }}
      />
      <DetailPage kind="project" item={project} />
    </>
  );
}
