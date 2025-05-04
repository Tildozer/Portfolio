import React from "react";
import Image from "next/image";

interface Props {
  iconInfo: {
    src: string;
    alt: string;
  };
}

export const Icon = ({ iconInfo }: Props) => {
  return (
    <div className="group relative">
      <Image
        src={iconInfo.src}
        alt={"Finder"}
        width={128}
        height={128}
        quality={100}
        title={iconInfo.alt}
      />
      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-2 py-1 opacity-0 transition-opacity group-hover:opacity-100">
        {iconInfo.alt}
      </span>
    </div>
  );
};

export default Icon;
