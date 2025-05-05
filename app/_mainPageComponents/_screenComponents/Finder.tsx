import { useEffect, useState } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import Draggable from "react-draggable";

const Finder = () => {
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
      bounds={{ left: -143, top: -65, right: 403, bottom: 225 }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute left-[10%] top-[10%] h-[40rem] w-[54rem] animate-expandBox bg-red-500 text-6xl hover:cursor-grab"
        style={{ zIndex: zIndex }}
      >
        Finder
      </div>
    </Draggable>
  );
};

export default Finder;
