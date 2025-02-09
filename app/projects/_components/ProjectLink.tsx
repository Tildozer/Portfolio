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
    <div className="mb-6 animate-fadeInOnce rounded-md border-2 border-slate-900 bg-slate-400 text-yellow-500 shadow-sm shadow-black transition-all duration-500 dark:border-slate-400 dark:bg-slate-500 dark:text-black dark:shadow-slate-500">
      <div className="flex flex-col justify-between border-b-2 border-slate-500 bg-black p-4 transition-all duration-500 dark:bg-blue-900 xs:flex-row">
        <h1 className="text-xl text-orange-200 dark:text-yellow-300">{name}</h1>
        <span className="text-orange-600 dark:text-yellow-500">
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
