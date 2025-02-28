import React from "react";
import Image from "next/image";

type Props = {
  alt: string;
  src: string;
  description: string;
};

const CertContainer = ({ alt, src, description }: Props) => {
  return (
    <div className="mt-4 flex flex-col">
      <span className="self-center text-end">{description}</span>
      <Image src={src} width={800} height={400} alt={alt} />
    </div>
  );
};

export default CertContainer;
