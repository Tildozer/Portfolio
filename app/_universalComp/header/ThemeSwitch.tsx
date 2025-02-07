import React from "react";
import { PiSunBold, PiMoonBold } from "react-icons/pi";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  slider: React.MutableRefObject<HTMLDivElement>;
};

const ThemeSwitch = ({ darkMode, toggleDarkMode, slider }: Props) => {
  return (
    <div className="flex flex-row text-[.45rem] text-slate-900 dark:text-yellow-500 2xs:mr-4">
      <label
        onClick={toggleDarkMode}
        className="m-2 mt-3 h-2 w-12 rounded-md bg-slate-800 dark:bg-slate-400"
      >
        <input
          className="absolute left-3 top-3 h-4 w-12 opacity-0 hover:cursor-pointer"
          name="toggle theme"
          type="checkBox"
        />
        <div
          ref={slider}
          className="absolute left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 text-lg hover:cursor-pointer dark:left-7 dark:bg-blue-900"
          onClick={toggleDarkMode}
        >
          {darkMode ? <PiMoonBold /> : <PiSunBold />}
        </div>
      </label>
      <span className="ml-2 mt-1 select-none text-[.65rem]">
        {darkMode ? "Dark" : "Light"} mode
      </span>
    </div>
  );
};

export default ThemeSwitch;
