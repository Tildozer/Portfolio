import React from "react";
import { Icon } from ".";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";

const IconBar = () => {
  const { iconInfo } = useLaptopInfo();
  return (
    <div className="h-1/8 icon-text-shadow z-[2147483647] mt-auto flex w-[60%] gap-1 self-center bg-[#a1b2d2] bg-opacity-70 text-4xl text-white">
      {iconInfo.map((icon, index) => (
        <Icon key={index} iconInfo={icon} />
      ))}
      <span className="ml-4 mr-4 w-1 bg-[#c4d9ff]"></span>
      <Icon
        iconInfo={{
          src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/13b74e59-5787-4636-2773-b545bd457100/128",
          alt: "Trash",
          callback: () => null,
          state: false,
        }}
      />
    </div>
  );
};

export default IconBar;
