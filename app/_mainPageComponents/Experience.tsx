import { useEffect, useRef } from "react";
import { Laptop, NodeIcon, ReactIcon } from "./";
import { Color } from "three";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

const Experience = () => {
  const background = useRef<Color>(null);
  const iconContainer = useRef<THREE.Group>(null);

  useEffect(() => {
    gsap.to(iconContainer.current!.position, {
      y: 0,
      duration: 1,
      delay: 2,
      ease: "sine.out",
    });
  }, []);

  return (
    <>
      <Environment preset="city" />
      <color ref={background} attach="background" args={["#1d1f2a"]} />
      <group ref={iconContainer} position={[0, -10, 0]}>
        <ReactIcon />
        <NodeIcon />
      </group>
      <Float rotationIntensity={0.4}>
        <Laptop />
      </Float>
      <ContactShadows position-y={-3} opacity={0.4} scale={10} blur={1.6} />
    </>
  );
};

export default Experience;
