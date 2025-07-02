import { useEffect, useState } from "react";
import { useLaptopInfo } from "@/components/providers/LaptopInfoProvider";
import { FinderFile, WindowBar } from ".";
import Image from "next/image";
import Draggable from "react-draggable";

const Finder = () => {
  const [zIndex, setZIndex] = useState(0);
  const {
    scale,
    state: { maxZIndex },
    setters: { setMaxZIndex, setShowFinder },
  } = useLaptopInfo();

  const handleMouseDown = () => {
    setZIndex(maxZIndex + 1);
    setMaxZIndex(maxZIndex + 1);
  };

  useEffect(() => {
    setZIndex(maxZIndex + 1);
    setMaxZIndex(maxZIndex + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Draggable
      scale={scale}
      bounds={{ left: -143, top: -65, right: 404, bottom: 225 }}
      onMouseDown={handleMouseDown}
      handle=".windowBar"
    >
      <div
        className="absolute left-[10%] top-[10%] h-[40rem] w-[54rem] animate-expandBox bg-white text-6xl text-black shadow-xl shadow-black"
        style={{ zIndex: zIndex }}
      >
        <WindowBar
          callback={() => setShowFinder(false)}
          className="justify-between"
        >
          <div className="flex">
            <Image
              src="https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/3140dbe2-c934-4a06-1a66-8189f07fb800/128"
              alt="home"
              height={24}
              width={36}
              draggable={false}
              priority
            />
            <span className="text-2xl">Finder</span>
          </div>
          <div className="mb-auto mr-4 mt-auto h-1/2 w-16 flex-wrap rounded-2xl bg-[#cbd0d9]"></div>
        </WindowBar>
        <div className="ml-4 mr-4 mt-8 grid grid-cols-4 gap-16">
          {["Applications", "Library", "Users"].map((name, idx) => (
            <FinderFile key={idx} name={name} />
          ))}
          <FinderFile
            name="Music"
            src="https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/77616182-f913-4e62-c1f0-713531b92200/128"
          />
          <FinderFile
            name="Pictures"
            src="https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/3d84f603-2f52-4acf-e9d3-318a7f48b800/128"
          />
          <FinderFile
            name="Videos"
            src="https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/b061ab29-3404-4dfb-b76e-3ab460c57900/128"
          />
          <FinderFile
            name="Documents"
            src="https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/aa207ed6-a398-478c-c114-9042b62ee300/128"
          />
        </div>
      </div>
    </Draggable>
  );
};

export default Finder;
