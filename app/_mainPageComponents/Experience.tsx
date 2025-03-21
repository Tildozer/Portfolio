import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Laptop, Controls, Text } from "./";
import { useThree } from "@react-three/fiber";
import { Color, PerspectiveCamera, Group } from "three";
import { ContactShadows, Environment } from "@react-three/drei";

const Experience = () => {
  const camera = useThree((state) => state.camera) as PerspectiveCamera;
  const background = useRef<Color>(null);
  const text = useRef<Group>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        if (camera.fov === 75) gsap.to(camera, { fov: 45, duration: 0.5 });
        if (text.current?.position.x === -2) {
          gsap.to(text.current!.position, { x: -3, duration: 0.5 });
        }
      } else if (window.innerWidth <= 768) {
        if (camera.fov === 45) gsap.to(camera, { fov: 75, duration: 0.5 });
        if (text.current?.position.x === -3) {
          gsap.to(text.current!.position, { x: -2, duration: 0.5 });
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

      <Controls>
        <Text ref={text} />
        <Laptop />
      </Controls>
      <ContactShadows position-y={-1.6} opacity={0.4} scale={10} blur={1.6} />
    </>
  );
};

export default Experience;
