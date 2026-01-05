import { useDarkMode } from "../../providers/DarkModeProvider";
import { PiSunBold, PiMoonBold } from "react-icons/pi";

const ThemeSwitch = () => {
  const { darkMode, toggleDarkMode, slider } = useDarkMode();

  return (
    <div className="mr-4 flex flex-row text-slate-900 dark:text-yellow-500">
      <label
        onClick={toggleDarkMode}
        className="m-2 mt-3 h-2 w-12 rounded-md bg-slate-800 dark:bg-slate-400"
      >
        <input
          className="absolute top-3 left-3 h-4 w-12 opacity-0 hover:cursor-pointer"
          name="toggle theme"
          type="checkBox"
        />
        <div
          ref={slider}
          className="absolute top-1 left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 text-lg hover:cursor-pointer dark:left-7 dark:bg-blue-900"
          onClick={toggleDarkMode}
        >
          {darkMode ? <PiMoonBold /> : <PiSunBold />}
        </div>
      </label>
      <span className="mt-1 ml-2 w-20 pt-1.5 text-[.65rem] text-orange-200 select-none md:pt-0 dark:text-blue-300">
        {darkMode ? "Dark" : "Light"} mode
      </span>
    </div>
  );
};

export default ThemeSwitch;
