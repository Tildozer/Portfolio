import React from "react";
import Image from "next/image";

type Props = {
  alt: string;
  src: string;
  description: string;
};

const CertContainer = ({ alt, src, description }: Props) => {
  return (
    <div className="mt-4 flex flex-col sm:text-lg md:text-xl">
      <span className="self-center pb-4 pl-2 sm:text-end">{description}</span>
      <Image
        className="rounded-lg border-2 border-black pb-2 shadow-lg shadow-black dark:border-slate-900"
        src={src}
        width={800}
        height={400}
        alt={alt}
      />
    </div>
  );
};

export default CertContainer;
