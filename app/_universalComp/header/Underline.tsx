"use client";

import React, { ReactNode, useEffect, useRef, MutableRefObject } from "react";
// import { gsap } from "gsap";
import { setHeaderEventListeners } from "../eventListeners";

interface Props {
  link: ReactNode;
  width: string;
}

const Underline = ({ link, width }: Props) => {
  const container: MutableRefObject<HTMLDivElement> = useRef(null!);
  const underline: MutableRefObject<HTMLDivElement> = useRef(null!);

  useEffect(() => {
    setHeaderEventListeners(container, underline, width);
  }, [width]);

  return (
    <div className="pl-4 sm:pl-0" ref={container}>
      {link}
      <div
        ref={underline}
        className="h-1 w-0 rounded-md bg-slate-800 dark:bg-slate-400"
      ></div>
    </div>
  );
};

export default Underline;
