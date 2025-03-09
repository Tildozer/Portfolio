import Link from "next/link.js";
import { useEffect, useState } from "react";
import { Descriptions } from ".";
import { Project } from "../page";

type Props = {
  project: Project;
  i: number;
};

const ProjectLink = ({
  project: { projectUrl, githubUrl, ProjectDescription, name },
  i,
}: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(
      () => {
        setMounted(true);
      },
      750 * i + 200,
    );
  }, [i]);

  return (
    <div
      className={`mb-16 animate-fadeInOnce text-sm text-black transition-all duration-500 dark:text-yellow-500 sm:text-lg md:text-xl ${mounted ? "" : "hidden"}`}
    >
      <div className="flex flex-col justify-between border-b-2 border-slate-500 bg-black p-4 transition-all duration-500 dark:bg-blue-900 xs:flex-row sm:rounded-l-lg">
        <h1 className="text-xl text-orange-200 dark:text-yellow-300 sm:text-3xl">
          {name}
        </h1>
        <span className="text-lg text-orange-600 dark:text-yellow-500">
          {githubUrl ? (
            <>
              <Link
                href={githubUrl}
                target="_blank"
                className="hover:text-blue-500 hover:underline hover:underline-offset-4 dark:hover:text-blue-300"
              >
                Repository
              </Link>
              <span> | </span>
            </>
          ) : null}
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
