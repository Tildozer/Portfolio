import React from "react";
import { PiGithubLogoDuotone, PiLinkedinLogoFill } from "react-icons/pi";
import Link from "next/link.js";

const Links = () => {
  return (
    <div className="flex-rows flex">
      <Link
        href={"https://github.com/Tildozer"}
        target="_blank"
        className="rounded-md p-2 text-3xl text-orange-600 hover:text-cyan-400 dark:text-cyan-400 dark:hover:text-orange-600"
      >
        <PiGithubLogoDuotone />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/anthony-thibodeaux/"}
        target="_blank"
        className="rounded-md p-2 text-3xl text-[#0077b5] hover:text-white dark:text-white dark:hover:text-[#0077b5]"
      >
        <PiLinkedinLogoFill />
      </Link>
    </div>
  );
};

export default Links;
