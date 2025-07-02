import { useEffect, useState } from "react";
import { useLaptopInfo } from "@/components/providers/LaptopInfoProvider";
import Draggable from "react-draggable";
import { WindowBar } from ".";

const VLC = () => {
  const {
    scale,
    state: { maxZIndex },
    setters: { setMaxZIndex, setShowVLC },
  } = useLaptopInfo();
  const [zIndex, setZIndex] = useState(0);
  const [enabledControls, setEnabledControls] = useState(true);

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
      bounds={{ left: -40, top: -260, right: 599, bottom: 65 }}
      onMouseDown={handleMouseDown}
      handle=".windowBar"
      onStart={() => setEnabledControls(false)}
      onStop={() => setEnabledControls(true)}
    >
      <div
        className="absolute left-[3%] top-[30%] h-[38rem] w-[48rem] animate-expandBox bg-white text-6xl text-black shadow-xl shadow-black"
        style={{ zIndex: zIndex }}
      >
        <WindowBar callback={() => setShowVLC(false)}>
          <span className="ml-auto mr-auto pr-24 text-2xl">VLC</span>
        </WindowBar>
        <iframe
          className={`select-none ${enabledControls && maxZIndex === zIndex ? "" : "pointer-events-none"}`}
          height="600"
          width="768px"
          src="https://www.youtube.com/embed/videoseries?si=G2_XWwFfk2n_Bc-_&amp;list=PLXR02kN_K75LZ2J23-wDY7EfFA5ycUTPZ&autoplay=1&mute=1&controls=1"
          onClick={handleMouseDown}
          loading="eager"
        />
      </div>
    </Draggable>
  );
};

export default VLC;
