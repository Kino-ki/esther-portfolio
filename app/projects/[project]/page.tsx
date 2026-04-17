import { getProject } from "@/sanity/sanity-utils";
import ProjectContent from "./ProjectContent";

type Props = {
  params: { project: string };
};

export default async function ProjectPage({ params }: Props) {
  const projectData = await getProject(params.project);

  if (!projectData) {
    return <div>No project found</div>;
  }

  return <ProjectContent projectData={projectData} />;
}
