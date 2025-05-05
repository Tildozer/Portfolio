import { useEffect, useState } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import Draggable from "react-draggable";

const Sherlock = () => {
  const [zIndex, setZIndex] = useState(0);

  const {
    state: { maxZIndex },
    setters: { setMaxZIndex },
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
      bounds={{ left: -265, top: -180, right: 280, bottom: 145 }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute right-[20%] top-[22%] h-[38rem] w-[54rem] animate-expandBox bg-green-500 text-6xl hover:cursor-grab"
        style={{ zIndex: zIndex }}
      >
        Sherlock
      </div>
    </Draggable>
  );
};

export default Sherlock;
