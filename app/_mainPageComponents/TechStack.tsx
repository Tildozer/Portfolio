import { useEffect, useState } from "react";
import type { TechnicalSkill } from "@/types";
import { TechIcon } from ".";
import axios from "axios";

const TechStack = () => {
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
    <div className="mb-20">
      <h3 className="bg-orange-600 pb-2 pl-2 text-black transition-all duration-500 dark:bg-blue-900 dark:text-yellow-500 md:text-3xl">
        Languages & libraries:
      </h3>
      <div className="grid min-h-[9.25rem] w-full grid-flow-col grid-rows-3 content-start gap-4 self-center overflow-x-scroll border-2 border-l-0 border-r-0 border-solid border-slate-950 bg-orange-200 p-4 text-6xl text-yellow-500 transition-all duration-500 dark:bg-slate-900 dark:text-black">
        {techs.length
          ? techs.map((skill) => <TechIcon key={skill.id} tech={skill} />)
          : null}
      </div>
    </div>
  );
};

export default TechStack;
