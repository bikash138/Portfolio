import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import DetailPage from "@/components/DetailPage";

type Props = {
  params: Promise<{ projectSlug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ projectSlug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  if (!project) return { title: "Project Not Found" };
  return { title: `${project.title} | Bikash Shaw` };
}

export default async function ProjectPage({ params }: Props) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  if (!project) notFound();
  return <DetailPage kind="project" item={project} />;
}
