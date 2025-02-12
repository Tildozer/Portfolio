"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
  FC,
  useMemo,
} from "react";
import cookie from "js-cookie";

import {
  themeTransition,
  Slider,
  Background,
  ThemeTransitionItems,
} from "./theme";
import { useIsLoadingInfo } from "./IsLoadingProvider";

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  slider: Slider;
  techStackContainer: Background | null;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined,
);

export const DarkModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoading, setIsLoading } = useIsLoadingInfo();
  const [darkMode, setDarkMode] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const slider: Slider = useRef(null!);
  const background: Background = useRef(null!);
  const techStackContainer: Background | null = useRef(null!);

  const toggleDarkMode = () => {
    setIsPressed(true);
    setDarkMode((prevMode) => !prevMode);
    cookie.set("theme", darkMode ? "light" : "dark", { expires: 365 });
  };

  const darkModeCheck = () => {
    const theme = cookie.get("theme");
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      if (!document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.add("dark");
      }
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const references: ThemeTransitionItems = useMemo(
    () => ({
      slider,
      background,
      techStackContainer,
    }),
    [slider, background, techStackContainer],
  );

  useEffect(() => {
    if (isPressed) {
      themeTransition(references);
      setTimeout(darkModeCheck, 100);
      setIsPressed(false);
    } else {
      darkModeCheck();
    }
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode]);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        slider,
        techStackContainer,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
