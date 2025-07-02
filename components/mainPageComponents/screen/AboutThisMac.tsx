import { useEffect, useState } from "react";
import { useLaptopInfo } from "@/components/providers/LaptopInfoProvider";
import { WindowBar } from ".";
import Image from "next/image";
import Draggable from "react-draggable";

const AboutFinder = () => {
  const [zIndex, setZIndex] = useState(0);
  const {
    scale,
    state: { maxZIndex },
    setters: { setMaxZIndex, setShowAboutFinder },
  } = useLaptopInfo();

  const date = new Date();
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
        className="absolute left-[30%] top-[30%] h-[30rem] w-[26rem] animate-expandBox bg-macOsWindow text-6xl text-black shadow-xl shadow-black"
        style={{ zIndex: zIndex }}
      >
        <WindowBar callback={() => setShowAboutFinder(false)}>
          <span className="mb-auto ml-8 mt-auto text-xl">
            About this Developer
          </span>
        </WindowBar>
        <div className="mx-2 text-2xl">
          <Image
            className="mx-auto mt-4 rounded-lg"
            src="https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/5aa9bb40-eddf-47eb-1399-8fd4adf3d600/350"
            alt="Developer Image"
            height={150}
            width={150}
            draggable={false}
          />
          <span>
            I am a hard working developer who is ready to help you, or your team
            make you ideas become a reality!
          </span>
          <br />
          <span>
            I have been developing for {date.getFullYear() - 2022} years, and
            know anything can be done with a little planing
          </span>
        </div>
      </div>
    </Draggable>
  );
};

export default AboutFinder;
