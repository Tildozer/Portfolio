import Link from "next/link.js";
import React from "react";
import { Descriptions } from ".";
import { Project } from "../page";

type Props = {
  project: Project;
};

const ProjectLink = ({
  project: { projectUrl, githubUrl, ProjectDescription, name },
}: Props) => {
  return (
    <div className="mb-16 animate-fadeInOnce text-sm text-black transition-all duration-500 dark:text-yellow-500 sm:text-lg md:text-xl">
      <div className="flex flex-col justify-between rounded-l-lg border-b-2 border-slate-500 bg-black p-4 transition-all duration-500 dark:bg-blue-900 xs:flex-row">
        <h1 className="text-xl text-orange-200 dark:text-yellow-300 sm:text-3xl">
          {name}
        </h1>
        <span className="text-lg text-orange-600 dark:text-yellow-500">
          <Link
            href={githubUrl}
            target="_blank"
            className="hover:text-blue-500 hover:underline hover:underline-offset-4 dark:hover:text-blue-300"
          >
            Repository
          </Link>
          <span> | </span>
          <Link
            href={projectUrl}
            target="_blank"
            className="hover:text-blue-500 hover:underline hover:underline-offset-4 dark:hover:text-blue-300"
          >
            Website
          </Link>
        </span>
      </div>
      <Descriptions descriptions={ProjectDescription} />
    </div>
  );
};

export default ProjectLink;
