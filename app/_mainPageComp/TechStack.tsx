import React, { useEffect, useState } from "react";
import { useDarkMode } from "../_providers/DarkModeProvider";
import type { TechnicalSkill } from "./TechIcon";
import { TechIcon } from "./";

const TechStack = () => {
  const { techStackContainer } = useDarkMode();
  const [techs, setTechs] = useState<TechnicalSkill[] | []>([]);
  // const getTechStack = async () => {
  //   setTechs(await fetchAllTechs());
  // };

  useEffect(() => {
    // getTechStack();
    setTechs([]);
  }, []);

  // const makeTechStack = (techs: TechnicalSkills[]) => {
  //   return techs.map(({ id, name, iconName, color, url }) => {
  //     return (null);
  // };

  return (
    <div>
      <h3>Languges & libraries:</h3>
      <div
        ref={techStackContainer}
        className="grid max-h-96 min-h-[9.25rem] w-full grid-flow-col grid-rows-3 content-start gap-2 self-center overflow-x-scroll border-2 border-l-0 border-r-0 border-solid border-slate-950 bg-orange-200 p-4 text-6xl text-yellow-500 dark:bg-blue-900 dark:text-black sm:grid-rows-1 sm:justify-start lg:justify-center lg:overflow-hidden"
      >
        {techs.length
          ? techs.map((skill) => <TechIcon key={skill.id} tech={skill} />)
          : null}
      </div>
    </div>
  );
};

export default TechStack;
