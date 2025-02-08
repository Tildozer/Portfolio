"use client";
import React from "react";
import { Nav, ThemeSwitch } from ".";

const Header = () => {
  return (
    <>
      <div className="flex w-52 flex-col font-Playfair text-white dark:text-yellow-500 sm:w-full sm:flex-row sm:justify-between">
        <ThemeSwitch />
        <Nav />
        <div className="order-[0] flex select-none flex-col pt-2 font-Bebas text-3xl 2xs:flex-row xs:self-end sm:order-2 sm:mr-2">
          <span className="pr-2">Anthony</span>
          <span>Thibodeaux</span>
        </div>
      </div>
    </>
  );
};

export default Header;
