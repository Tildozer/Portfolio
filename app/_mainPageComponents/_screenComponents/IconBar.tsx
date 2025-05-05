import React from "react";
import { Icon } from ".";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";

const IconBar = () => {
  const { iconInfo } = useLaptopInfo();
  return (
    <div className="h-1/8 horizontal-lines icon-text-shadow z-40 mt-auto flex w-[60%] gap-1 self-center bg-[#a1b2d2] bg-opacity-70 text-4xl text-white">
      {iconInfo.map((icon, index) => (
        <Icon key={index} iconInfo={icon} />
      ))}
      <span className="ml-4 w-1 bg-[#c4d9ff]"></span>
    </div>
  );
};

export default IconBar;
