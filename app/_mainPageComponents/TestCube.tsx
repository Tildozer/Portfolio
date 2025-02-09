import React, { RefObject } from "react";
import * as THREE from "three";
import { useDarkMode } from "../_providers/DarkModeProvider";
interface Props {
  reference: RefObject<THREE.Mesh> | undefined;
}
const TextCube = ({ reference }: Props) => {
  const { darkMode } = useDarkMode();

  return (
    <mesh
      ref={reference}
      rotation-y={Math.PI * 0.25}
      position={[0, 0, 10]}
      scale={10}
    >
      <boxGeometry />
      <meshStandardMaterial color={darkMode ? "orange" : "mediumpurple"} />
    </mesh>
  );
};

export default TextCube;
