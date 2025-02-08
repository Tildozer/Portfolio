import { MutableRefObject } from "react";

export interface ThemeSettings {
  sliderPosition: string;
  techStackChildrenBackgroundColor: string;
}

export type Slider = MutableRefObject<HTMLDivElement>;
export type Background = MutableRefObject<HTMLDivElement>;
export type Links = React.RefObject<HTMLAnchorElement>;
// export type Logo = MutableRefObject<HTMLDivElement>;

export interface ThemeTransitionItems {
  slider: Slider;
  background: Background;
  techStackContainer: Background;
}

export const lightModeSettings: ThemeSettings = {
  techStackChildrenBackgroundColor: "rgb(0 0 0 / var(--tw-bg-opacity)",
  sliderPosition: "0.75rem",
};

export const darkModeSettings: ThemeSettings = {
  techStackChildrenBackgroundColor: "rgb(100 116 139 / var(--tw-bg-opacity)",
  sliderPosition: "1.75rem",
};
