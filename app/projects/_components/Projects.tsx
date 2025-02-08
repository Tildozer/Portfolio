"use client";
import React, { useEffect, useState } from "react";
// import { useDarkMode } from "../../DarkModeProvider";
import { ProjectLink } from "./";

export interface Description {
  id: number;
  description: string;
}

export interface Project {
  id: number;
  projectLink: string;
  githubLink: string;
  projectName: string;
  descriptions: Description[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects([]);
  }, []);

  return (
    <div className="bg-color min-h-screen w-full overflow-x-hidden bg-slate-200 dark:bg-slate-900 dark:text-slate-400">
      <div className="flex w-full flex-col items-center justify-center pb-20 pl-3 pr-3">
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
