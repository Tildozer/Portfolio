import { useEffect, useState } from "react";
import {
  IconBar,
  MenuBar,
  Finder,
  Music,
  Notes,
  VLC,
  Sherlock,
  MainWindowIcons,
  AboutThisMac,
} from ".";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";

interface Props {
  img: HTMLImageElement;
}

const OS = ({ img }: Props) => {
  const [showScreen, setShowScreen] = useState(false);
  const {
    state: {
      showFinder,
      showMusic,
      showNotes,
      showSherlock,
      showVLC,
      showAboutFinder,
    },
  } = useLaptopInfo();

  useEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 1600);
  }, []);

  return (
    <div
      className="relative flex h-full w-full animate-expand justify-center rounded-md antialiased"
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
          <MainWindowIcons />
          <div>
            {showAboutFinder && <AboutThisMac />}
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
