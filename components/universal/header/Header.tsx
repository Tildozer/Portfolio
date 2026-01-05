"use client";
import { Nav, ThemeSwitch } from ".";

const Header = () => {
  return (
    <>
      <div className="flex min-h-20 w-screen flex-col bg-slate-900 text-orange-200 md:w-full md:flex-row md:justify-between md:text-lg dark:bg-black dark:text-blue-300">
        <div className="flex flex-row md:flex-col">
          <ThemeSwitch />
        </div>
        <Nav />
        <div className="order-0 flex flex-col pt-2 pb-2 pl-1 text-xl select-none md:order-2 md:mr-2 md:pl-0 lg:flex-row">
          <span className="pr-2">Anthony</span>
          <span>Thibodeaux</span>
        </div>
      </div>
    </>
  );
};

export default Header;
