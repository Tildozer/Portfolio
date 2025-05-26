import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  src?: string;
};

const FinderFile = ({
  name,
  src = "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/65d0e862-12a0-486f-fadd-d37625390a00/128",
}: Props) => {
  return (
    <div className="flex flex-col">
      <Image
        className="ml-auto mr-auto"
        src={src}
        alt="Desktop Folder"
        height={75}
        width={75}
        draggable={false}
        priority
      />
      <span className="text-center text-xl">{name}</span>
    </div>
  );
};

export default FinderFile;
