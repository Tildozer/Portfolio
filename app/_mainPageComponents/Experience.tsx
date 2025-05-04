import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Laptop, Text } from "./";
import { useThree } from "@react-three/fiber";
import { Color, PerspectiveCamera, Group } from "three";
import {
  ContactShadows,
  Environment,
  Float,
  // OrbitControls
} from "@react-three/drei";

const Experience = () => {
  const camera = useThree((state) => state.camera) as PerspectiveCamera;
  const background = useRef<Color>(null);
  const text = useRef<Group>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1037) {
        if (camera.fov === 75) gsap.to(camera, { fov: 45, duration: 0.25 });
        if (text.current?.position.x === -2) {
          gsap.to(text.current!.position, { x: -2.4, y: 1.5, duration: 0.25 });
        }
      } else if (window.innerWidth <= 1037) {
        if (camera.fov === 45) gsap.to(camera, { fov: 75, duration: 0.25 });
        if (text.current?.position.x === -3) {
          gsap.to(text.current!.position, { x: -2, y: 2.5, duration: 0.25 });
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
      <Float rotationIntensity={0.8}>
        <Text ref={text} />
        <Laptop />
      </Float>
      <ContactShadows position-y={-3} opacity={0.4} scale={10} blur={1.6} />
    </>
  );
};

export default Experience;
