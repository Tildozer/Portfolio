import { useEffect, useState } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import Draggable from "react-draggable";

const Music = () => {
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
      bounds={{ left: -30, top: -20, right: 740, bottom: 400 }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute left-[2%] top-[5%] h-[32rem] w-[40rem] animate-expandBox bg-white text-6xl hover:cursor-grab"
        style={{ zIndex: zIndex }}
      >
        Music
      </div>
    </Draggable>
  );
};

export default Music;
