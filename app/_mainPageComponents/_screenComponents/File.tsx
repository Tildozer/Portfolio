import { useLaptopInfo } from "@/app/_providers/LaptopInfoProvider";
import React from "react";

type Props = {
  setShowFileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const File = ({ setShowFileMenu }: Props) => {
  const { setters } = useLaptopInfo();

  const handleAboutFinder = () => {
    setters.setShowAboutFinder(true);
    setShowFileMenu(false);
  };

  const handleAll = (state: boolean) => {
    (Object.keys(setters) as Array<keyof typeof setters>).forEach((setter) => {
      if (setter !== "setMaxZIndex") setters[setter](state);
    });
    setShowFileMenu(false);
  };

  const handleHideFinder = () => {
    setters.setShowFinder(false);
    setShowFileMenu(false);
  };
  return (
    <div className="absolute left-[3.15rem] top-8 z-[2147483647] w-64 bg-macOsWindow shadow-lg shadow-black">
      <div className="h-2">{""}</div>
      <div
        className="h-8 pl-6 hover:cursor-pointer hover:bg-selected"
        onClick={handleAboutFinder}
      >
        About this Mac{" "}
      </div>
      <div className="h-2">{""}</div>
      <div className="h-8 pl-6">Preferences...</div>
      <div className="h-2">{""}</div>
      <div
        className="h-8 pl-6 hover:cursor-pointer hover:bg-selected"
        onClick={handleHideFinder}
      >
        Hide Finder
      </div>
      <div className="h-2">{""}</div>
      <div
        className="h-8 pl-6 hover:cursor-pointer hover:bg-selected"
        onClick={() => handleAll(false)}
      >
        Hide Others
      </div>
      <div className="h-2">{""}</div>
      <div
        className="h-8 pl-6 hover:cursor-pointer hover:bg-selected"
        onClick={() => handleAll(true)}
      >
        Show All
      </div>
      <div className="h-2">{""}</div>
    </div>
  );
};

export default File;
