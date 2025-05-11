import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const NodeIcon = () => {
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/node/model.gltf",
  );
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Plane_1 as THREE.Mesh).geometry}
        material={materials["Material.010"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Plane_2 as THREE.Mesh).geometry}
        material={materials["Material.009"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Plane_3 as THREE.Mesh).geometry}
        material={materials["Material.008"]}
      />
    </group>
  );
};

useGLTF.preload("/nodeIcon.gltf");

export default NodeIcon;
