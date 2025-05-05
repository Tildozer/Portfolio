import {
  TbBrandCss3,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandCpp,
  TbError404Off,
} from "react-icons/tb";
import {
  SiJavascript,
  SiHtml5,
  SiFlutter,
  SiJest,
  SiDart,
} from "react-icons/si";
import Link from "next/link.js";
import { TechnicalSkill } from "@/types";

type Props = {
  tech: TechnicalSkill;
};
const giveIconBackground = (name: string): string => {
  switch (name) {
    case "Typescript":
    case "CSS":
      return "bg-white rounded-lg";
    case "Dart":
      return "bg-white rounded-lg p-1";
    case "Javascript":
      return "bg-black rounded-lg";
    default:
      return "";
  }
};

const setIcon = (iconName: string) => {
  switch (iconName) {
    case "TbBrandTypescript":
      return <TbBrandTypescript />;
    case "TbBrandCss3":
      return <TbBrandCss3 />;
    case "TbBrandTailwind":
      return <TbBrandTailwind />;
    case "TbBrandCpp":
      return <TbBrandCpp />;
    case "SiJavascript":
      return <SiJavascript />;
    case "SiHtml5":
      return <SiHtml5 />;
    case "SiFlutter":
      return <SiFlutter />;
    case "SiJest":
      return <SiJest />;
    case "SiDart":
      return <SiDart />;
    default:
      return <TbError404Off />;
  }
};

const TechIcon = ({ tech: { id, name, iconName, color, url } }: Props) => {
  return (
    <Link
      href={url}
      target="_blank"
      key={id}
      className={`group flex h-24 min-w-24 flex-col items-center justify-center break-all rounded-md border-2 border-solid border-slate-600 bg-black p-2 shadow-sm shadow-black transition-all duration-500 hover:-translate-y-3 hover:border-yellow-500 hover:shadow-md hover:shadow-black dark:bg-slate-500 md:h-36`}
    >
      <span
        className={`text-${color} ${giveIconBackground(
          name,
        )} transition duration-500 group-hover:animate-wiggle`}
      >
        {setIcon(iconName)}
      </span>
      <span className="pt-1 text-xs transition-transform duration-500 group-hover:scale-110 md:text-lg lg:text-xl">
        {name}
      </span>
    </Link>
  );
};

export default TechIcon;
