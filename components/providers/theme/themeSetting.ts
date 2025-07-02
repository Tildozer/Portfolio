import { MutableRefObject } from "react";

export interface ThemeSettings {
  sliderPosition: string;
  techStackChildrenBackgroundColor: string;
}

export type Slider = MutableRefObject<HTMLDivElement>;

export interface ThemeTransitionItems {
  slider: Slider;
}

export const lightModeSettings: ThemeSettings = {
  techStackChildrenBackgroundColor: "rgb(0 0 0 / var(--tw-bg-opacity)",
  sliderPosition: "0.75rem",
};

export const darkModeSettings: ThemeSettings = {
  techStackChildrenBackgroundColor: "rgb(100 116 139 / var(--tw-bg-opacity)",
  sliderPosition: "1.75rem",
};
