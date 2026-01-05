import React from "react";
import { PiGithubLogoDuotone, PiLinkedinLogoFill } from "react-icons/pi";
import Link from "next/link.js";

const Links = () => {
  return (
    <div className="flex-rows flex">
      <Link
        href={"https://github.com/Tildozer"}
        target="_blank"
        className="rounded-md p-2 text-3xl text-yellow-500 hover:text-orange-600 dark:text-blue-300 dark:hover:text-blue-500"
      >
        <PiGithubLogoDuotone />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/anthony-thibodeaux/"}
        target="_blank"
        className="rounded-md p-2 text-3xl text-white hover:text-[#0077b5] dark:text-[#0077b5] dark:hover:text-blue-600"
      >
        <PiLinkedinLogoFill />
      </Link>
    </div>
  );
};

export default Links;
