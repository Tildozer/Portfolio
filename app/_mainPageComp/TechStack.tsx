import React, { useEffect, useState } from "react";
import { useDarkMode } from "../_providers/DarkModeProvider";
import type { TechnicalSkill } from "./TechIcon";
import { TechIcon } from "./";
import axios from "axios";

const TechStack = () => {
  const { techStackContainer } = useDarkMode();
  const [techs, setTechs] = useState<TechnicalSkill[] | []>([]);

  const getTechStack = async () => {
    try {
      const { data: skills } = await axios.get("/api/techstack");

      setTechs(skills);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTechStack();
  }, []);

  return (
    <div>
      <h3 className="bg-slate-100 text-black transition-all duration-500 dark:bg-slate-900 dark:text-yellow-500">
        Languages & libraries:
      </h3>
      <div
        ref={techStackContainer}
        className="grid max-h-96 min-h-[9.25rem] w-full grid-flow-col grid-rows-3 content-start gap-2 self-center overflow-x-scroll border-2 border-l-0 border-r-0 border-solid border-slate-950 bg-orange-500 p-4 text-6xl text-yellow-500 transition-all duration-500 dark:bg-blue-900 dark:text-black sm:grid-rows-1 sm:justify-start lg:justify-center lg:overflow-hidden"
      >
        {techs.length
          ? techs.map((skill) => <TechIcon key={skill.id} tech={skill} />)
          : null}
      </div>
    </div>
  );
};

export default TechStack;
