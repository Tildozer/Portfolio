import { useEffect, useState } from "react";
import { IconBar, MenuBar, Finder, Music, Notes, VLC, Sherlock } from ".";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import Image from "next/image";

interface Props {
  img: HTMLImageElement;
}

const OS = ({ img }: Props) => {
  const [showScreen, setShowScreen] = useState(false);
  const {
    state: { showFinder, showMusic, showNotes, showSherlock, showVLC },
  } = useLaptopInfo();

  useEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 1600);
  }, []);

  return (
    <div
      className="relative flex h-full w-full animate-expand justify-center rounded-md"
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {showScreen && (
        <div className="flex h-full w-full flex-col justify-center">
          <MenuBar />
          <div className="icon-text-shadow text-3xl text-white">
            <div className="absolute right-4 top-14">
              <Image
                className="ml-auto mr-auto"
                src="https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/400b6a26-1a73-46b4-f348-9548b0c6ac00/128"
                alt="Install Disk"
                height={100}
                width={100}
              />
              <span>Mac OS X</span>
              <br />
              <span>Install CD</span>
            </div>
          </div>
          <div>
            {showFinder && <Finder />}
            {showMusic && <Music />}
            {showNotes && <Notes />}
            {showVLC && <VLC />}
            {showSherlock && <Sherlock />}
          </div>
          <IconBar />
        </div>
      )}
    </div>
  );
};

export default OS;
