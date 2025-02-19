import { ContactShadows, Environment, Text } from "@react-three/drei";
import { Laptop, Controls } from "./";
import { useDarkMode } from "../_providers/DarkModeProvider";

const Experience = () => {
  const { darkMode } = useDarkMode();

  return (
    <>
      <Environment preset="city" />

      {darkMode ? (
        <color attach="background" args={["#241a1a"]} />
      ) : (
        <color attach="background" args={["#f0f0f0"]} />
      )}

      <Controls>
        <Text
          fontSize={0.25}
          position={[-2, 1.75, -0.5]}
          rotation-y={0.75}
          rotation-x={-0.25}
          maxWidth={2}
        >
          Welcome to my portfolio!
        </Text>
        <Laptop />
      </Controls>
      <ContactShadows position-y={-1.6} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default Experience;
