import { useEffect, useState } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import Draggable from "react-draggable";
import { WindowBar } from ".";

const Sherlock = () => {
  const [zIndex, setZIndex] = useState(0);

  const {
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
      scale={0.4}
      bounds={{ left: -30, top: -20, right: 515, bottom: 300 }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute left-[2%] top-[5%] h-[38rem] w-[54rem] animate-expandBox bg-white text-6xl text-black shadow-xl shadow-black hover:cursor-grab active:cursor-grabbing"
        style={{ zIndex: zIndex }}
      >
        <WindowBar callback={() => setShowSherlock(false)} />
        Sherlock
      </div>
    </Draggable>
  );
};

export default Sherlock;
