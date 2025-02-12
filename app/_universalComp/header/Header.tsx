"use client";
import React from "react";
import { Nav, ThemeSwitch } from ".";

const Header = () => {
  return (
    <>
      <div className="flex w-52 flex-col text-orange-600 transition-all duration-500 dark:text-yellow-500 sm:w-full sm:flex-row sm:justify-between md:text-lg">
        <ThemeSwitch />
        <Nav />
        <div className="order-[0] flex select-none flex-col pt-2 text-3xl sm:order-2 sm:mr-2 sm:flex-row md:self-end">
          <span className="pr-2">Anthony</span>
          <span>Thibodeaux</span>
        </div>
      </div>
    </>
  );
};

export default Header;
