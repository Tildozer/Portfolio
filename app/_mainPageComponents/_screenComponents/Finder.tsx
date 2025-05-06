import { useEffect, useState } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import { WindowBar } from "./";
import Image from "next/image";
import Draggable from "react-draggable";

const Finder = () => {
  const [zIndex, setZIndex] = useState(0);
  const {
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
      scale={0.4}
      bounds={{ left: -143, top: -65, right: 403, bottom: 225 }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute left-[10%] top-[10%] h-[40rem] w-[54rem] animate-expandBox bg-white text-6xl text-black shadow-xl shadow-black hover:cursor-grab active:cursor-grabbing"
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
              height={36}
              width={36}
            />
            <span className="text-2xl">Finder</span>
          </div>
          <div className="mb-auto mr-4 mt-auto h-1/2 w-16 rounded-2xl bg-[#cbd0d9]"></div>
        </WindowBar>
      </div>
    </Draggable>
  );
};

export default Finder;
