"use server";

import { PrismaClient } from "@prisma/client";
import { ProjectsCarousel } from ".";

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
      <ProjectsCarousel projects={projects} />
    </div>
  );
}
