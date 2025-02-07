import { gsap } from "gsap";
import { MutableRefObject } from "react";

interface ScrollPosition {
  previous: number;
  current: number;
}

export const setFooterEventListeners = (
  footerContainer: React.MutableRefObject<HTMLDivElement>,
) => {
  const lastKnownScrollPosition: ScrollPosition = {
    previous: window.scrollY,
    current: window.scrollY,
  };

  const showFooter = () => {
    gsap.to(footerContainer.current, {
      bottom: "0",
      display: "flex",
      duration: 1.5,
    });
  };

  let timeoutId: null | NodeJS.Timeout;

  const handleScrollStop = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear the previous timeout if it exists
    }
    timeoutId = setTimeout(() => {
      showFooter();
      timeoutId = null;
    }, 2000);
  };

  let ticking: boolean = false;

  const findScrollDirection = (scrollPosition: ScrollPosition) => {
    if (
      !(
        window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight
      )
    ) {
      // you're not at the bottom of the page && not above the top
      if (scrollPosition.current >= scrollPosition.previous) {
        showFooter();
      } else if (window.scrollY > 0) {
        gsap.to(footerContainer.current, {
          bottom: "-5rem",
          display: "hidden",
          duration: 2.0,
        });
        handleScrollStop();
      }
      scrollPosition.previous = scrollPosition.current;
      scrollPosition.current = window.scrollY;
    }
  };

  const handleScroll = () => {
    lastKnownScrollPosition.current = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        findScrollDirection(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
};

export const setHeaderEventListeners = (
  container: MutableRefObject<HTMLDivElement>,
  underline: MutableRefObject<HTMLDivElement>,
  width: string,
) => {
  const containerElement = container.current;
  const underlineElement = underline.current;

  if (containerElement && underlineElement) {
    const mouseOverHandler = () => {
      gsap.fromTo(
        underlineElement,
        { width: "0rem" },
        { width: width, opacity: 1, duration: 0.5 },
      );
      containerElement.removeEventListener("mouseover", mouseOverHandler);
      containerElement.addEventListener("mouseleave", mouseLeaveEvent);
    };
    const mouseLeaveEvent = () => {
      gsap.to(underlineElement, { width: 0, opacity: 0 });
      setTimeout(
        () => containerElement.addEventListener("mouseover", mouseOverHandler),
        300,
      );
    };
    containerElement.addEventListener("mouseover", mouseOverHandler);
  }
};
