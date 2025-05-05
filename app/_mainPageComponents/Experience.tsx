import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Laptop, Text } from "./";
import { Color, Group } from "three";
import {
  ContactShadows,
  Environment,
  Float,
  // OrbitControls
} from "@react-three/drei";

const Experience = () => {
  const background = useRef<Color>(null);
  const text = useRef<Group>(null);
  const smallScreenSettings = { x: -1, y: -1, scale: 1 };
  const largeScreenSettings = { x: 0, y: -1.5, scale: 0.5 };

  useEffect(() => {
    const handleResize = () => {
      const duration = 0.25;
      if (window.innerWidth > 1037) {
        if (text.current?.position.x === smallScreenSettings.x) {
          gsap.to(text.current!.position, {
            x: largeScreenSettings.x,
            y: largeScreenSettings.y,
            duration,
          });
          gsap.to(text.current!.scale, {
            x: largeScreenSettings.scale,
            y: largeScreenSettings.scale,
            z: largeScreenSettings.scale,
            duration,
          });
        }
      } else if (window.innerWidth <= 1037) {
        if (text.current?.position.x === largeScreenSettings.x) {
          gsap.to(text.current!.position, {
            x: smallScreenSettings.x,
            y: smallScreenSettings.y,
            duration,
          });
          gsap.to(text.current!.scale, {
            x: smallScreenSettings.scale,
            y: smallScreenSettings.scale,
            z: smallScreenSettings.scale,
            duration,
          });
        }
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
      <color ref={background} attach="background" args={["#1d1f2a"]} />
      {/* <OrbitControls /> */}
      {/* <Float rotationIntensity={0.4}> */}
      <Text
        ref={text}
        settings={
          window.innerWidth > 1037 ? largeScreenSettings : smallScreenSettings
        }
      />
      <Laptop />
      {/* </Float> */}
      <ContactShadows position-y={-3} opacity={0.4} scale={10} blur={1.6} />
    </>
  );
};

export default Experience;
