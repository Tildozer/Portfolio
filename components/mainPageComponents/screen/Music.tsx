import { useEffect, useState } from "react";
import { useLaptopInfo } from "@/components/providers/LaptopInfoProvider";
import Draggable from "react-draggable";
import { WindowBar } from ".";

const Music = () => {
  const [zIndex, setZIndex] = useState(0);
  const [enabledControls, setEnabledControls] = useState(true);
  const {
    scale,
    state: { maxZIndex },
    setters: { setMaxZIndex, setShowMusic },
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

  // Set scale based on device type

  return (
    <Draggable
      scale={scale}
      bounds={{ left: -30, top: -20, right: 740, bottom: 400 }}
      onMouseDown={handleMouseDown}
      handle=".windowBar"
      onStart={() => setEnabledControls(false)}
      onStop={() => setEnabledControls(true)}
    >
      <div
        className="absolute left-[2%] top-[5%] h-[32rem] w-[40rem] animate-expandBox bg-[#1f1f1f] text-6xl text-black shadow-xl shadow-black"
        style={{ zIndex: zIndex }}
        id="embed-iframe"
      >
        <WindowBar callback={() => setShowMusic(false)}>
          <span className="ml-auto mr-auto h-full pb-2 pr-24 text-start text-2xl">
            Music
          </span>
        </WindowBar>
        <iframe
          className={`select-none ${enabledControls && maxZIndex === zIndex ? "" : "pointer-events-none"}`}
          src="https://open.spotify.com/embed/playlist/60b6PwC0C2V8KId3092rEN?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
        ></iframe>
      </div>
    </Draggable>
  );
};

export default Music;
