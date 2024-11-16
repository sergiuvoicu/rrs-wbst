import PageTitle from "@/src/components/pageTitle/pageTitle";
import { projects } from "@/utilities/projects";
import { useTranslations } from "next-intl";

interface IProjectPageURLParams {
   projectId: string
}

export async function generateStaticParams() {
   return projects.map((project) => ({
      projectId: project.id.toString(),
   }));
}
export default function ProjectPage({ params }: { params: IProjectPageURLParams }) {
   const t = useTranslations("homepage.projectsSection");

   const currentProject = projects.find(project => project.id.toString() === params.projectId)
   return (
      <div>
         <PageTitle
            title={t(currentProject?.nameIntlKey)}
            description={currentProject?.description ?? ""}
         />
      </div>
   );
}
