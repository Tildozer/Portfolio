"use client";
import React, { useEffect, useState } from "react";
import { ProjectLink } from "./_components";
import axios from "axios";

export interface Description {
  id: number;
  description: string;
}

export interface Project {
  id: number;
  projectUrl: string;
  githubUrl: string;
  name: string;
  ProjectDescription: Description[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    const { data: projectArr } = await axios.get("/api/projects");
    console.log(projectArr);

    setProjects(projectArr);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="bg-color min-h-screen w-full overflow-x-hidden bg-slate-100 dark:bg-slate-900 dark:text-slate-400">
      <div className="flex w-full flex-col items-center justify-center pb-20 pl-3 pr-3 pt-10">
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
