import { ContactShadows, Environment, Text } from "@react-three/drei";
import { Laptop, Controls } from "./";

const Experience = () => {
  return (
    <>
      <Environment preset="city" />
      <color attach="background" args={["#241a1a"]} />

      <Controls>
        <Laptop />
        {/* <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={0.75}
          position={[2, 0.75, 0.25]}
          rotation-y={-1.25}
          maxWidth={2}
        >
          Anthony Thibodeaux
        </Text> */}
      </Controls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default Experience;
