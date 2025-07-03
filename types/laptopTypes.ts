import { TechStack } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export type LaptopScreenProps = {
  scale: number;
  iconInfo: {
    src: string;
    alt: string;
    callback: () => void;
    state: boolean;
  }[];
  state: {
    showFinder: boolean;
    showSherlock: boolean;
    showVLC: boolean;
    showMusic: boolean;
    showNotes: boolean;
    showAboutFinder: boolean;
    maxZIndex: number;
    tech: TechStack[];
  };
  setters: {
    setShowFinder: Dispatch<SetStateAction<boolean>>;
    setShowSherlock: Dispatch<SetStateAction<boolean>>;
    setShowVLC: Dispatch<SetStateAction<boolean>>;
    setShowMusic: Dispatch<SetStateAction<boolean>>;
    setShowNotes: Dispatch<SetStateAction<boolean>>;
    setShowAboutFinder: Dispatch<SetStateAction<boolean>>;
    setMaxZIndex: Dispatch<SetStateAction<number>>;
  };
};
