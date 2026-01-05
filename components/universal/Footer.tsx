"use client";
import { useEffect, useRef } from "react";
import { setFooterEventListeners } from "./eventListeners";
import Links from "./Links";

const Footer = () => {
  const footerContainer = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    setFooterEventListeners(footerContainer);
  }, [footerContainer]);

  return (
    <div
      ref={footerContainer}
      className="fixed bottom-0 z-50 flex w-full items-center justify-center gap-1 border-t-2 border-t-slate-500 bg-slate-200 pb-4 pt-4 dark:border-t-slate-600 dark:bg-blue-900 sm:gap-4"
    >
      <Links />
    </div>
  );
};

export default Footer;
