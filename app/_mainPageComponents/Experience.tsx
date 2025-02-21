import { ContactShadows, Environment } from "@react-three/drei";
import { Laptop, Controls, Text } from "./";
import { useDarkMode } from "../_providers/DarkModeProvider";
import { useEffect, useRef } from "react";
import { Color } from "three";
import gsap from "gsap";

const Experience = () => {
  const { darkMode } = useDarkMode();

  const darkBackground = new Color("#241a1a");
  const lightBackground = new Color("#f0f0f0");
  const backgroundColor = darkMode ? darkBackground : lightBackground;

  const background = useRef<Color>(null);

  useEffect(() => {
    if (background.current !== backgroundColor) {
      gsap.to(background.current, {
        r: backgroundColor.r,
        g: backgroundColor.g,
        b: backgroundColor.b,
        duration: 0.5,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode]);

  return (
    <>
      <Environment preset="city" />
      <color ref={background} attach="background" args={["#241a1a"]} />

      <Controls>
        <Text />
        <Laptop />
      </Controls>
      <ContactShadows position-y={-1.6} opacity={0.4} scale={10} blur={1.6} />
    </>
  );
};

export default Experience;
