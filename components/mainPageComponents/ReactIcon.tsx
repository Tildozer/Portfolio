import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type Props = {
  holographicMaterial: THREE.ShaderMaterial;
};

const ReactIcon = ({ holographicMaterial }: Props) => {
  const icon = useRef<THREE.Group>(null);
  const { nodes } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/react-logo/model.gltf",
  );

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const amplitude = Math.PI / 5;
    const frequency = 0.5;

    icon.current!.rotation.y = Math.sin(elapsedTime * frequency) * amplitude;
  });

  return (
    <group
      ref={icon}
      position={[0.4, -0.1, 2]}
      scale={0.35}
      rotation={[-20 * (Math.PI / 180), 90 * (Math.PI / 180), 0.1]}
      dispose={null}
    >
      <mesh
        material={holographicMaterial}
        castShadow
        receiveShadow
        geometry={(nodes.Cube as THREE.Mesh).geometry}
        position={[0, 1.311, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.266}
      >
        <mesh
          material={holographicMaterial}
          castShadow
          receiveShadow
          geometry={(nodes.Torus001 as THREE.Mesh).geometry}
          position={[0.336, -0.081, 0.024]}
          rotation={[-0.16, 0, -Math.PI / 2]}
          scale={[3.754, 1.468, 3.005]}
        />
        <mesh
          material={holographicMaterial}
          castShadow
          receiveShadow
          geometry={(nodes.Torus002 as THREE.Mesh).geometry}
          position={[-0.515, -0.104, 0.165]}
          rotation={[-1.179, 0, -Math.PI / 2]}
          scale={[3.754, 1.468, 3.005]}
        />
        <mesh
          material={holographicMaterial}
          castShadow
          receiveShadow
          geometry={(nodes.Torus003 as THREE.Mesh).geometry}
          position={[-0.035, -0.107, 0.004]}
          rotation={[0.89, 0, -Math.PI / 2]}
          scale={[3.754, 1.468, 3.005]}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/reactIcon.gltf");

export default ReactIcon;
