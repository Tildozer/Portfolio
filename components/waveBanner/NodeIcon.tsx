import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type Props = {
  holographicMaterial: THREE.ShaderMaterial;
};

const NodeIcon = ({ holographicMaterial }: Props) => {
  const icon = React.useRef<THREE.Group>(null);

  const { nodes } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/node/model.gltf",
  );

  const y90DegRotation = 90 * (Math.PI / 180);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const amplitude = Math.PI / 5;
    const frequency = 0.5;
    icon.current!.rotation.y = Math.sin(elapsedTime * frequency) * amplitude;
    icon.current!.rotation.y += y90DegRotation;
  });
  return (
    <group
      ref={icon}
      dispose={null}
      scale={0.15}
      position={[-0.1, 0.8, 0.5]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Plane_1 as THREE.Mesh).geometry}
        material={holographicMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Plane_2 as THREE.Mesh).geometry}
        material={holographicMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Plane_3 as THREE.Mesh).geometry}
        material={holographicMaterial}
      />
    </group>
  );
};

useGLTF.preload("/nodeIcon.gltf");

export default NodeIcon;
