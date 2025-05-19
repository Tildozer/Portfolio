import { useEffect, useState } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import Draggable from "react-draggable";
import { TechStack, WindowBar } from ".";

const Sherlock = () => {
  const [zIndex, setZIndex] = useState(0);

  const {
    scale,
    state: { maxZIndex },
    setters: { setMaxZIndex, setShowSherlock },
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
      bounds={{ left: -28, top: -20, right: 517, bottom: 300 }}
      onMouseDown={handleMouseDown}
      handle=".windowBar"
    >
      <div
        className="absolute left-[2%] top-[5%] h-[38rem] w-[54rem] animate-expandBox overflow-scroll overflow-x-hidden bg-white text-6xl text-black shadow-xl shadow-black"
        style={{ zIndex: zIndex }}
      >
        <WindowBar
          callback={() => setShowSherlock(false)}
          className="justify-between"
        >
          <div className="flex">
            <span className="text-2xl">Sherlock</span>
          </div>
          <div className="mb-auto mr-4 mt-auto h-1/2 w-16 rounded-2xl bg-[#cbd0d9]"></div>
        </WindowBar>
        <TechStack />
      </div>
    </Draggable>
  );
};

export default Sherlock;
