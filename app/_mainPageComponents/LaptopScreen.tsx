import { Html } from "@react-three/drei";
import { IconBar, MenuBar } from ".";
import { Source_Serif_4 } from "next/font/google";
import { useEffect, useState } from "react";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-source-serif",
});

type Props = {
  img: HTMLImageElement;
};

const LaptopScreen = ({ img }: Props) => {
  const [showScreen, setShowScreen] = useState(false);
  // const [showFinder, setShowFinder] = useState(false);
  // const [showSherlock, setShowSherlock] = useState(false);
  // const [showVLC, setShowVLC] = useState(false);
  // const [showMusic, setShowMusic] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const iconInfo = [
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/c79c60e9-ef0b-47de-4d46-22931e476c00/128",
      alt: "Finder",
      callback: () => null,
    },
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/ed60bb9b-cc07-431d-c72a-ab88c9b88100/128",
      alt: "Sherlock",
      callback: () => null,
    },
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/16e58063-7c4a-4bed-99fa-80fd94911800/128",
      alt: "VLC",
      callback: () => null,
    },
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/379cffa3-1d23-4a5e-1b70-36f06c7f6500/128",
      alt: "Music",
      callback: () => null,
    },
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/5bbe86a1-b6d5-4ab5-c635-ace4a7d65400/48",
      alt: "Notes",
      callback: () => setShowNotes(!showNotes),
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 1600);
  }, []);

  return (
    <Html
      transform
      wrapperClass={`laptop-screen ${sourceSerif.className}`}
      distanceFactor={4.0}
      position={[0, 1.51, -1.34]}
      rotation-x={-15 * (Math.PI / 180)}
      scale={0.2}
      style={{
        userSelect: "none",
        height: "60rem",
        width: "88rem",
      }}
    >
      <div
        className="relative h-full w-full animate-expand rounded-lg"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {showScreen && (
          <div className="flex h-full w-full flex-col items-center">
            <MenuBar />
            <IconBar iconInfo={iconInfo} />
          </div>
        )}
      </div>
    </Html>
  );
};

export default LaptopScreen;
