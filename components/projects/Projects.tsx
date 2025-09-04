"use server";
import { ProjectLink } from ".";
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
    <div className="pl-6 text-black dark:text-yellow-500">
      <div className="">
        <ul className="">
          {projects.map((project) => (
            <ProjectLink key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </div>
  );
}
