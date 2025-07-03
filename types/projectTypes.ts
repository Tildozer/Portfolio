import { Projects, ProjectDescription } from "@prisma/client";

export type Project = Projects & {
  ProjectDescription: ProjectDescription[];
};
