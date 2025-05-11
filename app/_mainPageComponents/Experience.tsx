import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Laptop, NodeIcon, ReactIcon } from "./";
import { Color, Group } from "three";
import { ContactShadows, Environment, Float } from "@react-three/drei";

const Experience = () => {
  const background = useRef<Color>(null);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const duration = 0.25;
  //     if (window.innerWidth > 1037) {
  //       if (reactIcon.current?.position.x === smallScreenSettings.x) {
  //         gsap.to(reactIcon.current!.position, {
  //           y: largeScreenSettings.y,
  //           duration,
  //         });
  //         gsap.to(reactIcon.current!.scale, {
  //           x: largeScreenSettings.scale,
  //           y: largeScreenSettings.scale,
  //           z: largeScreenSettings.scale,
  //           duration,
  //         });
  //       }
  //     } else if (window.innerWidth <= 1037) {
  //       if (reactIcon.current?.position.x === largeScreenSettings.x) {
  //         gsap.to(reactIcon.current!.position, {
  //           y: smallScreenSettings.y,
  //           duration,
  //         });
  //         gsap.to(reactIcon.current!.scale, {
  //           x: smallScreenSettings.scale,
  //           y: smallScreenSettings.scale,
  //           z: smallScreenSettings.scale,
  //           duration,
  //         });
  //       }
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <Environment preset="city" />
      <color ref={background} attach="background" args={["#1d1f2a"]} />
      {/* <OrbitControls /> */}
      <Float rotationIntensity={0.4}>
        <ReactIcon />
        <NodeIcon />
        <Laptop />
      </Float>
      <ContactShadows position-y={-3} opacity={0.4} scale={10} blur={1.6} />
    </>
  );
};

export default Experience;
