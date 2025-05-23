import React, { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface Props {
  iconInfo: {
    src: string;
    alt: string;
    callback: () => void;
    state: boolean;
  };
}

export const Icon = ({ iconInfo }: Props) => {
  const image = React.useRef<HTMLImageElement>(null);

  const [inMotion, setInMotion] = useState(false);

  const handleClick = () => {
    if (!iconInfo.state) {
      if (inMotion) return;

      setInMotion(true);
      gsap.fromTo(
        image.current,
        {
          translateY: 0,
        },
        {
          translateY: -40,
          duration: 0.4,
          ease: "power1.out",
          repeat: 4,
          yoyo: true,
          onComplete: () => {
            gsap
              .to(image.current, {
                translateY: 0,
                duration: 0.4,
                ease: "power1.in",
              })
              .then(() => {
                iconInfo.callback();
                setInMotion(false);
              });
          },
        },
      );
    } else {
      iconInfo.callback();
    }
  };

  useEffect(() => {
    if (iconInfo.alt === "Sherlock") {
      setTimeout(() => {
        handleClick();
      }, 400);
    }
    if (iconInfo.alt === "Notes") {
      setTimeout(() => {
        handleClick();
      }, 800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="group relative select-none">
      <Image
        className="hover:cursor-pointer"
        onClick={handleClick}
        ref={image}
        src={iconInfo.src}
        alt={"Finder"}
        width={128}
        height={128}
        quality={100}
        priority
        title={iconInfo.alt}
        draggable={false}
      />
      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-2 py-1 opacity-0 transition-opacity group-hover:opacity-100">
        {iconInfo.alt}
      </span>
      {iconInfo.state && (
        <span className="absolute -bottom-0 left-1/2 h-2 w-2 rounded-full bg-slate-800 opacity-45"></span>
      )}
    </div>
  );
};

export default Icon;
