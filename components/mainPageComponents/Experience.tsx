import { Laptop } from ".";
import { ContactShadows, Environment, Float } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <Environment preset="city" />
      <color attach="background" args={["#1d1f2a"]} />
      <Float rotationIntensity={0.4}>
        <Laptop />
      </Float>
      <ContactShadows position-y={-3} opacity={0.4} scale={10} blur={1.6} />
    </>
  );
};

export default Experience;
