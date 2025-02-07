import {
  lightModeSettings,
  darkModeSettings,
  ThemeSettings,
  ThemeTransitionItems,
  Background,
  // Logo
} from ".";
import { gsap } from "gsap";

export const themeTransition = (items: ThemeTransitionItems) => {
  if (localStorage.theme === "dark") {
    console.log("dark");
    transition(darkModeSettings, items);
  } else {
    console.log("light");
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
  // Background
  gsap.to(items.background.current, {
    backgroundColor: settings.backgroundColor,
    color: settings.textColor,
    duration: transitionDuration,
  });
  // Footer
  gsap.to(items.footerContainer.current, {
    backgroundColor: settings.backgroundColor,
    duration: transitionDuration,
  });

  gsap.to(items.githubContainer.current, {
    backgroundColor: settings.footerLinkBackgroundColor,
    color: settings.githubLogoColor,
    duration: transitionDuration,
  });

  gsap.to(items.linkedinContainer.current, {
    backgroundColor: settings.footerLinkBackgroundColor,
    color: settings.linkedinLogoColor,
    duration: transitionDuration,
  });
  if (items.techStackContainer.current) {
    techStackTransition(
      items.techStackContainer,
      settings.techStackContainerBackgroundColor,
      settings.techStackChildrenBackgroundColor,
    );
  }
};

export const techStackTransition = (
  container: Background,
  backgroundColor: string,
  childrenColor: string,
) => {
  gsap.to(container.current, { backgroundColor, duration: transitionDuration });
  gsap.to(container.current.children, {
    backgroundColor: childrenColor,
    duration: transitionDuration,
  });
};
