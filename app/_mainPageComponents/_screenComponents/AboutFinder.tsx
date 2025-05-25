import { useEffect, useState } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import { WindowBar } from "./";
import Draggable from "react-draggable";

const AboutFinder = () => {
  const [zIndex, setZIndex] = useState(0);
  const {
    scale,
    state: { maxZIndex },
    setters: { setMaxZIndex, setShowAboutFinder },
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
      bounds={{ left: -422, top: -256, right: 570, bottom: 190 }}
      onMouseDown={handleMouseDown}
      handle=".windowBar"
    >
      <div
        className="absolute left-[30%] top-[30%] h-[30rem] w-[26rem] animate-expandBox bg-white text-6xl text-black shadow-xl shadow-black"
        style={{ zIndex: zIndex }}
      >
        <WindowBar
          callback={() => setShowAboutFinder(false)}
        >
          <span className="mb-auto ml-8 mt-auto text-xl">
            About this Developer
          </span>
        </WindowBar>
      </div>
    </Draggable>
  );
};

export default AboutFinder;
