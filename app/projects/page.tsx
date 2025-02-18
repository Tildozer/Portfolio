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

    setProjects(projectArr);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-100 transition-all duration-500 dark:bg-slate-900">
      <div className="flex flex-col items-stretch pb-20 pt-10 sm:pl-3">
        {projects.length ? (
          projects.map((project, idx) => (
            <ProjectLink key={project.id} project={project} i={idx} />
          ))
        ) : (
          <div className="h-[110vh] w-full"></div>
        )}
      </div>
    </div>
  );
};

export default Projects;
