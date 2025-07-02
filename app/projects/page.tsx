import { ProjectLink } from "./_components";
import { PrismaClient } from "@prisma/client";

const Projects = async () => {
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
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-100 transition-all duration-500 dark:bg-slate-900">
      <div className="flex flex-col items-stretch pb-20 pt-10 sm:pl-3">
        {projects.length ? (
          projects.map((project) => (
            <ProjectLink key={project.id} project={project} />
          ))
        ) : (
          <div className="h-[110vh] w-full"></div>
        )}
      </div>
    </div>
  );
};

export default Projects;
