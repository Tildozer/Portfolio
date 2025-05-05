import { useEffect, useState } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import Draggable from "react-draggable";

const VLC = () => {
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
      bounds={{ left: -40, top: -260, right: 595, bottom: 65 }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute left-[3%] top-[30%] h-[38rem] w-[48rem] animate-expandBox bg-yellow-200 text-6xl hover:cursor-grab"
        style={{ zIndex: zIndex }}
      >
        VLC
      </div>
    </Draggable>
  );
};

export default VLC;
