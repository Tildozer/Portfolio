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
        className="mb-2 rounded-lg border-2 border-black shadow-lg shadow-black dark:border-slate-900"
        src={src}
        width={800}
        height={400}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

export default CertContainer;
