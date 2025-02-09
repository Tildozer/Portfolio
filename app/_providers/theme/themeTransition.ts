import {
  lightModeSettings,
  darkModeSettings,
  ThemeSettings,
  ThemeTransitionItems,
  Background,
  // Logo
} from ".";
import { gsap } from "gsap";
import cookies from "js-cookie";

export const themeTransition = (items: ThemeTransitionItems) => {
  if (cookies.get("theme") === "dark") {
    transition(darkModeSettings, items);
  } else {
    transition(lightModeSettings, items);
  }
};

const transitionDuration = 0.5;

const transition = (settings: ThemeSettings, items: ThemeTransitionItems) => {
  // Slider
  gsap.to(items.slider.current, {
    left: settings.sliderPosition,
    duration: transitionDuration,
  });

  gsap.fromTo(items.slider.current, { rotateZ: 0 }, { rotateZ: 360 });

  if (items.techStackContainer.current) {
    techStackTransition(
      items.techStackContainer,
      settings.techStackChildrenBackgroundColor,
    );
  }
};

export const techStackTransition = (
  container: Background,
  childrenColor: string,
) => {
  gsap.to(container.current.children, {
    backgroundColor: childrenColor,
    duration: transitionDuration,
  });
};
