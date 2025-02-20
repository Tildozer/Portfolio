import { ContactShadows, Environment } from "@react-three/drei";
import { Laptop, Controls, Text } from "./";
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
        <Text />

        <Laptop />
      </Controls>
      <ContactShadows position-y={-1.6} opacity={0.4} scale={10} blur={1.6} />
    </>
  );
};

export default Experience;
