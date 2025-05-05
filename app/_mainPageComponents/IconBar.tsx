import React from "react";
import { Icon } from ".";

type Props = {
  iconInfo: {
    src: string;
    alt: string;
    callback: () => void;
  }[];
};

const IconBar = ({ iconInfo }: Props) => {
  return (
    <div className="h-1/8 horizontal-lines icon-text-shadow mt-auto flex w-[60%] gap-1 bg-[#a1b2d2] bg-opacity-70 text-4xl text-white">
      {iconInfo.map((icon, index) => (
        <Icon key={index} iconInfo={icon} />
      ))}
      <span className="ml-4 w-1 bg-[#c4d9ff]"></span>
    </div>
  );
};

export default IconBar;
