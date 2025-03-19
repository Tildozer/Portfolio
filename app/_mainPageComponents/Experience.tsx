import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Laptop, Controls, Text } from "./";
import { useThree } from "@react-three/fiber";
import { Color, PerspectiveCamera, Group } from "three";
import { useDarkMode } from "../_providers/DarkModeProvider";
import { ContactShadows, Environment } from "@react-three/drei";

const Experience = () => {
  const { darkMode } = useDarkMode();
  const camera = useThree((state) => state.camera) as PerspectiveCamera;

  const darkBackground = new Color("#241a1a");
  const lightBackground = new Color("#f0f0f0");
  const backgroundColor = darkMode ? darkBackground : lightBackground;

  const background = useRef<Color>(null);
  const text = useRef<Group>(null);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && camera.fov === 75) {
        gsap.to(camera, { fov: 45, duration: 0.5 });
        gsap.to(text.current!.position, { x: -1, duration: 0.5 });
      } else if (window.innerWidth <= 768 && camera.fov === 45) {
        gsap.to(camera, { fov: 75, duration: 0.5 });
        gsap.to(text.current!.position, { x: -4, duration: 0.5 });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Environment preset="city" />
      <color ref={background} attach="background" args={["#241a1a"]} />

      <Controls>
        <Text ref={text} />
        <Laptop />
      </Controls>
      <ContactShadows position-y={-1.6} opacity={0.4} scale={10} blur={1.6} />
    </>
  );
};

export default Experience;
