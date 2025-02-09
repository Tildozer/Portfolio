import React, { RefObject } from "react";
import * as THREE from "three";
import { useDarkMode } from "../_providers/DarkModeProvider";
interface Props {
  refrence: RefObject<THREE.Mesh> | undefined;
}
const TextCube = ({ refrence }: Props) => {
  const { darkMode } = useDarkMode();

  return (
    <mesh
      ref={refrence}
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
