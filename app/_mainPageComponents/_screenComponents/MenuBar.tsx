import React, { useEffect, useState } from "react";
import Image from "next/image";
import { File } from ".";

const MenuBar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [timeInfo, setTimeInfo] = useState({
    day: "",
    time: "",
  });
  const [showFileMenu, setShowFileMenu] = useState(true);

  const getCurrentDayAndTime = () => {
    const currentTime = new Date().toLocaleString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
    const currentDay = new Date(currentTime).getDay();
    const time = new Date(currentTime).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    setTimeInfo({ day: days[currentDay], time });
  };

  const handleClick = () => {
    setTimeout(() => {
      setShowFileMenu(false);
      window.removeEventListener("mouseup", handleClick);
    }, 10);
  };

  const handleFileMenuClick = () => {
    if (!showFileMenu) {
      console.log("File menu clicked");
      setShowFileMenu(true);
      window.addEventListener("mouseup", handleClick);
    } else {
      setShowFileMenu(false);
    }
  };

  useEffect(() => {
    getCurrentDayAndTime();

    const interval = setInterval(getCurrentDayAndTime, 3000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="z-[2147483647] flex h-8 w-full justify-between bg-[#efeef1] text-2xl text-black">
      <div className="flex">
        <Image
          className="filter-blue mr-4"
          src={
            "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/799adad3-96b8-4ecc-dab5-70884670e800/48"
          }
          height={32}
          width={32}
          alt="logo"
          draggable={false}
        />
        <span
          onClick={handleFileMenuClick}
          className={`mr-4 pl-2 pr-2 hover:cursor-pointer hover:bg-[#346cbe] hover:text-white ${showFileMenu ? "bg-[#346cbe] text-white" : ""}`}
        >
          File
        </span>
        <span className="mr-6">Edit</span>
        <span className="mr-6">Go</span>
        <span className="mr-6">View</span>
        <span className="mr-6">Help</span>
        <Image
          className="h-6 self-center"
          src={
            "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/b0bbd8fe-39ab-40b4-9a5c-4f290eeb5300/48"
          }
          height={16}
          width={48}
          alt="Location"
          draggable={false}
        />
      </div>

      <div className="mr-2 self-end">
        {timeInfo.day} {timeInfo.time}
      </div>
      {showFileMenu && <File />}
    </div>
  );
};

export default MenuBar;
