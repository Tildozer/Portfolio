import { ProjectLink } from "@/components/projects";
import { PrismaClient } from "@prisma/client";

export default async function Projects() {
  const prisma = new PrismaClient();
  const projects = await prisma.projects.findMany({
    include: {
      ProjectDescription: true,
    },
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-100 dark:bg-slate-900">
      <div className="flex flex-col items-stretch pb-20 pt-10 sm:pl-3">
        {projects.map((project) => (
          <ProjectLink key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

// export default Projects;
