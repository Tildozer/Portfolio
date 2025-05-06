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
      className={`flex flex-col items-center break-all`}
    >
      <span
        className={`text-${color} ${iconName === "TbBrandCpp" ? "bg-black dark:bg-slate-900" : ""} text-8xl`}
        draggable={false}
      >
        {setIcon(iconName)}
      </span>
      <span className="text-2xl">{name}</span>
    </Link>
  );
};

export default TechIcon;
