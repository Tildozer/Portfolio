import React from "react";
import { Icon } from ".";

// const handleClick = () => {}

const iconInfo = [
  {
    src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/c79c60e9-ef0b-47de-4d46-22931e476c00/128",
    alt: "Finder",
  },
  {
    src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/ed60bb9b-cc07-431d-c72a-ab88c9b88100/128",
    alt: "Sherlock",
  },
  {
    src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/16e58063-7c4a-4bed-99fa-80fd94911800/128",
    alt: "VLC",
  },
  {
    src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/379cffa3-1d23-4a5e-1b70-36f06c7f6500/128",
    alt: "Music",
  },
  {
    src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/5bbe86a1-b6d5-4ab5-c635-ace4a7d65400/48",
    alt: "Notes",
  },
];

const IconBar = () => {
  return (
    <div className="h-1/8 flex w-[60%] gap-1 self-end bg-[#a1b2d2] bg-opacity-70 text-3xl text-white">
      {iconInfo.map((icon, index) => (
        <Icon key={index} iconInfo={icon} />
      ))}
      <span className="ml-4 w-1 bg-[#c4d9ff]"></span>
    </div>
  );
};

export default IconBar;
