"use client";
import { Nav, ThemeSwitch } from ".";

const Header = () => {
  return (
    <>
      <div className="flex w-52 flex-col text-orange-600 transition-all duration-500 dark:text-yellow-500 md:w-full md:flex-row md:justify-between md:text-lg">
        <ThemeSwitch />
        <Nav />
        <div className="order-[0] flex select-none flex-col pb-2 pl-1 pt-2 text-xl md:order-2 md:mr-2 md:pl-0 lg:flex-row">
          <span className="pr-2">Anthony</span>
          <span>Thibodeaux</span>
        </div>
      </div>
    </>
  );
};

export default Header;
