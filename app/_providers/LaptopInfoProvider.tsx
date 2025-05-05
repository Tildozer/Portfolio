"use client";
import {
  ReactNode,
  FC,
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type LaptopScreenProps = {
  iconInfo: {
    src: string;
    alt: string;
    callback: () => void;
  }[];
  state: {
    showFinder: boolean;
    showSherlock: boolean;
    showVLC: boolean;
    showMusic: boolean;
    showNotes: boolean;
    maxZIndex: number;
  };
  setters: {
    setShowFinder: Dispatch<SetStateAction<boolean>>;
    setShowSherlock: Dispatch<SetStateAction<boolean>>;
    setShowVLC: Dispatch<SetStateAction<boolean>>;
    setShowMusic: Dispatch<SetStateAction<boolean>>;
    setShowNotes: Dispatch<SetStateAction<boolean>>;
    setMaxZIndex: Dispatch<SetStateAction<number>>;
  };
};

const LaptopScreenContext = createContext<LaptopScreenProps | undefined>(
  undefined,
);

export const LaptopScreenProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showFinder, setShowFinder] = useState(false);
  const [showSherlock, setShowSherlock] = useState(false);
  const [showVLC, setShowVLC] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [maxZIndex, setMaxZIndex] = useState(0);

  const iconInfo = [
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/c79c60e9-ef0b-47de-4d46-22931e476c00/128",
      alt: "Finder",
      callback: () => setShowFinder(!showFinder),
    },
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/ed60bb9b-cc07-431d-c72a-ab88c9b88100/128",
      alt: "Sherlock",
      callback: () => setShowSherlock(!showSherlock),
    },
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/16e58063-7c4a-4bed-99fa-80fd94911800/128",
      alt: "VLC",
      callback: () => setShowVLC(!showVLC),
    },
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/379cffa3-1d23-4a5e-1b70-36f06c7f6500/128",
      alt: "Music",
      callback: () => setShowMusic(!showMusic),
    },
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/5bbe86a1-b6d5-4ab5-c635-ace4a7d65400/48",
      alt: "Notes",
      callback: () => setShowNotes(!showNotes),
    },
  ];

  const value = {
    iconInfo,
    state: {
      showFinder,
      showSherlock,
      showVLC,
      showMusic,
      showNotes,
      maxZIndex,
    },
    setters: {
      setShowFinder,
      setShowSherlock,
      setShowVLC,
      setShowMusic,
      setShowNotes,
      setMaxZIndex,
    },
  };

  return (
    <LaptopScreenContext.Provider value={value}>
      {children}
    </LaptopScreenContext.Provider>
  );
};

export const useLaptopScreenInfo = () => {
  const context = useContext(LaptopScreenContext);
  if (!context) {
    throw new Error("isLoading must be used within a Provider");
  }
  return context;
};
