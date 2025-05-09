import React, { useEffect } from "react";
import Image from "next/image";

const MenuBar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [timeInfo, setTimeInfo] = React.useState({
    day: "",
    time: "",
  });

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
        <span className="mr-6">File</span>
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
    </div>
  );
};

export default MenuBar;
