import Link from "next/link.js";
import React from "react";
import { Descriptions } from ".";
import { Project } from "./Projects";

type Props = {
  project: Project;
};

const ProjectLink = ({
  project: { id, projectLink, githubLink, descriptions, projectName },
}: Props) => {
  return (
    <div
      key={id}
      className="mb-6 animate-fadeInOnce rounded-md border-2 border-slate-400 bg-black text-yellow-500 shadow-lg shadow-black transition dark:bg-slate-500 dark:text-black dark:shadow-slate-500"
    >
      <div className="flex flex-col justify-between border-b-2 border-slate-400 p-4 xs:flex-row">
        <h1 className="text-xl text-orange-200 dark:text-yellow-500">
          {projectName}
        </h1>
        <span className="">
          <Link
            href={githubLink}
            target="_blank"
            className="text-orange-500 underline underline-offset-4 hover:text-blue-500 dark:text-cyan-500 dark:hover:text-yellow-500"
          >
            Repository
          </Link>
          <span className="text-orange-500 dark:text-cyan-500"> | </span>
          <Link
            href={projectLink}
            target="_blank"
            className="text-orange-500 underline underline-offset-4 hover:text-blue-500 dark:text-cyan-500 dark:hover:text-yellow-500"
          >
            Website
          </Link>
        </span>
      </div>
      <Descriptions descriptions={descriptions} />
    </div>
  );
};

export default ProjectLink;
