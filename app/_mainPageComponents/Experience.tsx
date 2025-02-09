import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TestCube } from ".";

const Experience = () => {
  const { camera, gl } = useThree();
  const cubeRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  camera.position.z = 50;

  useFrame((state, delta) => {
    if (cubeRef.current) cubeRef.current.rotation.y += delta;
    // const angle = state.clock.elapsedTime ;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0)
    // groupRef.current.rotation.y += delta;
    // console.log("tick");
  });

  return (
    <>
      <OrbitControls enableZoom={false} args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} />
      <ambientLight intensity={0.3} />
      <group ref={groupRef}>
        <TestCube reference={cubeRef} />
      </group>
    </>
  );
};

export default Experience;
