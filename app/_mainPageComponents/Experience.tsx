import { useRef } from "react";
import { Laptop, NodeIcon, ReactIcon } from "./";
import { Color } from "three";
import { ContactShadows, Environment, Float } from "@react-three/drei";

const Experience = () => {
  const background = useRef<Color>(null);

  return (
    <>
      <Environment preset="city" />
      <color ref={background} attach="background" args={["#1d1f2a"]} />
      <ReactIcon />
      <NodeIcon />
      <Float rotationIntensity={0.4}>
        <Laptop />
      </Float>
      <ContactShadows position-y={-3} opacity={0.4} scale={10} blur={1.6} />
    </>
  );
};

export default Experience;
