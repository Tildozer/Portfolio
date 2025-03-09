import { useDarkMode } from "../../_providers/DarkModeProvider";
import { PiSunBold, PiMoonBold } from "react-icons/pi";

const ThemeSwitch = () => {
  const { darkMode, toggleDarkMode, slider } = useDarkMode();

  return (
    <div className="flex flex-row text-slate-900 dark:text-yellow-500 2xs:mr-4 lg:mr-28">
      <label
        onClick={toggleDarkMode}
        className="m-2 mt-3 h-2 w-12 rounded-md bg-slate-800 transition-all duration-500 dark:bg-slate-400"
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
      <span className="duration-250 ml-2 mt-1 w-20 select-none text-[.65rem] text-orange-200 transition-all dark:text-yellow-500">
        {darkMode ? "Dark" : "Light"} mode
      </span>
    </div>
  );
};

export default ThemeSwitch;
