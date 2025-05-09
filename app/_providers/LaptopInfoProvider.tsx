"use client";
import {
  ReactNode,
  FC,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";
import { LaptopScreenProps } from "@/types";
import { TechStack } from "@prisma/client";
import axios from "axios";

const LaptopScreenContext = createContext<LaptopScreenProps | undefined>(
  undefined,
);

export const LaptopInfoProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showFinder, setShowFinder] = useState(false);
  const [showSherlock, setShowSherlock] = useState(false);
  const [showVLC, setShowVLC] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [maxZIndex, setMaxZIndex] = useState(0);

  const [tech, setTech] = useState<TechStack[] | []>([]);
  const [isMobile, setIsMobile] = useState(false);

  const iconInfo = [
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/0231d7e2-28c6-4709-4d00-af6b9da8c100/128",
      alt: "Finder",
      callback: () => setShowFinder(!showFinder),
      state: showFinder,
    },
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/ed60bb9b-cc07-431d-c72a-ab88c9b88100/128",
      alt: "Sherlock",
      callback: () => setShowSherlock(!showSherlock),
      state: showSherlock,
    },
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/16e58063-7c4a-4bed-99fa-80fd94911800/128",
      alt: "VLC",
      callback: () => setShowVLC(!showVLC),
      state: showVLC,
    },
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/379cffa3-1d23-4a5e-1b70-36f06c7f6500/128",
      alt: "Music",
      callback: () => setShowMusic(!showMusic),
      state: showMusic,
    },
    {
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/dbf2292c-b9af-4590-6d12-a3db8c568100/128",
      alt: "Notes",
      callback: () => setShowNotes(!showNotes),
      state: showNotes,
    },
  ];

  const scale = isMobile ? 0.4 : 0.8;

  const value = {
    scale,
    iconInfo,
    state: {
      showFinder,
      showSherlock,
      showVLC,
      showMusic,
      showNotes,
      maxZIndex,
      tech,
      isMobile,
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

  const getTechStack = async () => {
    try {
      const { data: skills } = await axios.get("/api/techstack");

      setTech(skills);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Detect if user is on mobile device
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    getTechStack();
  }, []);

  return (
    <LaptopScreenContext.Provider value={value}>
      {children}
    </LaptopScreenContext.Provider>
  );
};

export const useLaptopInfo = () => {
  const context = useContext(LaptopScreenContext);
  if (!context) {
    throw new Error("laptop screen info must be used within a Provider");
  }
  return context;
};
