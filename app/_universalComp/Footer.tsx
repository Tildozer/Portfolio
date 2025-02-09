"use client";

import React, { useEffect, useRef } from "react";
import { PiGithubLogoDuotone, PiLinkedinLogoFill } from "react-icons/pi";
import { setFooterEventListeners } from "./eventListeners";
import Link from "next/link.js";

const Footer = () => {
  const footerContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFooterEventListeners(footerContainer);
  }, [footerContainer]);

  return (
    <div
      ref={footerContainer}
      className="fixed bottom-0 flex w-full items-center justify-center gap-1 bg-slate-200 border-t-2 border-t-slate-500 dark:border-t-slate-600 pb-4 pt-4 duration-500 dark:bg-blue-900 sm:gap-4"
    >
      <Link
        href={"https://github.com/Tildozer"}
        target="_blank"
        className="rounded-md bg-black p-2 text-3xl text-orange-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-md hover:shadow-black dark:bg-slate-600 dark:text-cyan-400 dark:hover:shadow-slate-300"
      >
        <PiGithubLogoDuotone />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/anthony-thibodeaux/"}
        target="_blank"
        className="rounded-md bg-black p-2 text-3xl text-[#0077b5] transition-all duration-500 hover:-translate-y-1 hover:shadow-md hover:shadow-black dark:bg-slate-600 dark:text-white dark:hover:shadow-slate-300"
      >
        <PiLinkedinLogoFill />
      </Link>
    </div>
  );
};

export default Footer;
