"use client";

import React from "react";
import { Underline } from ".";
import Link from "next/link.js";
import { LinkSettings } from "./Nav.jsx";
import { usePathname } from "next/navigation.js";
import { useRef, MutableRefObject, useEffect } from "react";
import { setHeaderEventListeners } from "../eventListeners";

type Props = {
  link: LinkSettings;
};

const NavLink = ({ link: { name, path } }: Props) => {
  const container: MutableRefObject<HTMLAnchorElement> = useRef(null!);
  const underline: MutableRefObject<HTMLDivElement> = useRef(null!);

  const pathname = usePathname();

  useEffect(() => {
    setHeaderEventListeners(container, underline);
  }, []);

  return (
    <Link
      href={path}
      ref={container}
      className={`${pathname === path ? "text-orange-200 dark:text-blue-300" : "text-yellow-500 hover:text-orange-600 hover:dark:text-blue-500"} transition-all duration-500`}
    >
      {name}
      <Underline underline={underline} />
    </Link>
  );
};

export default NavLink;
