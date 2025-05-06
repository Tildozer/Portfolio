import { useState, useEffect } from "react";
import Image from "next/image";

const MainWindowIcons = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  useEffect(() => {
    const handleOutsideClick = () => {
      setSelectedIcon(null);
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleIconClick = (ev: React.MouseEvent, icon: string) => {
    ev.stopPropagation();
    setSelectedIcon(icon);
  };

  return (
    <div className="icon-text-shadow absolute right-4 top-14 flex flex-col gap-4 text-3xl text-white">
      <div
        className={`rounded p-2 ${selectedIcon === "macos" ? "bg-blue-500 bg-opacity-50" : ""}`}
        onClick={(ev) => handleIconClick(ev, "macos")}
      >
        <Image
          className="ml-auto mr-auto"
          src="https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/400b6a26-1a73-46b4-f348-9548b0c6ac00/128"
          alt="Install Disk"
          height={100}
          width={100}
          draggable={false}
        />
        <span>Mac OS X</span>
        <br />
        <span>Install CD</span>
      </div>
      <div
        className={`rounded p-2 ${selectedIcon === "desktop" ? "bg-blue-500 bg-opacity-50" : ""}`}
        onClick={(ev) => handleIconClick(ev, "desktop")}
      >
        <Image
          className="ml-auto mr-auto"
          src="https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/65d0e862-12a0-486f-fadd-d37625390a00/128"
          alt="Desktop Folder"
          height={100}
          width={100}
          draggable={false}
        />
        <span>Desktop</span>
      </div>
      <div
        className={`rounded p-2 ${selectedIcon === "usb" ? "bg-blue-500 bg-opacity-50" : ""}`}
        onClick={(ev) => handleIconClick(ev, "usb")}
      >
        <Image
          className="ml-auto mr-auto"
          src="https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/7677032a-a2e8-4b31-1ff2-343bd4a61600/128"
          alt="USB Drive"
          height={100}
          width={100}
          draggable={false}
        />
        <span>USB Drive</span>
      </div>
    </div>
  );
};

export default MainWindowIcons;
