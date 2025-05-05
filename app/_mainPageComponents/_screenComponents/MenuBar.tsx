import React from "react";
import Image from "next/image";

const MenuBar = () => {
  return (
    <div className="z-[2147483647] flex h-8 w-full gap-6 bg-[#efeef1] text-2xl text-black">
      <Image
        className="filter-blue"
        src={
          "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/799adad3-96b8-4ecc-dab5-70884670e800/48"
        }
        height={32}
        width={32}
        alt="logo"
      />
      <span>Finder</span>
      <span>File</span>
      <span>Edit</span>
      <span>Go</span>
      <span>View</span>
      <span>Help</span>
      <Image
        className="h-6 self-center"
        src={
          "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/b0bbd8fe-39ab-40b4-9a5c-4f290eeb5300/48"
        }
        height={16}
        width={48}
        alt="Location"
      />
    </div>
  );
};

export default MenuBar;
