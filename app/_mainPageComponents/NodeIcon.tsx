import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useDarkMode } from "../_providers/DarkModeProvider";
import vertexShader from "./_shaders/holographic/vertex.glsl";
import fragmentShader from "./_shaders/holographic/fragment.glsl";
import random2D from "./_shaders/includes/random2D.glsl";

const NodeIcon = () => {
  const icon = React.useRef<THREE.Group>(null);
  const { darkMode } = useDarkMode();
  const { nodes } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/node/model.gltf",
  );

  const lightColor = new THREE.Color(0xea580c);
  const darkColor = new THREE.Color(0x22d3ee);
  const color = darkMode ? darkColor : lightColor;

  const processedVertexShader = vertexShader.replace(
    "#include ../includes/random2D",
    random2D,
  );

  const holographicMaterial = new THREE.ShaderMaterial({
    vertexShader: processedVertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
      uTime: new THREE.Uniform(0),
      uColor: new THREE.Uniform(color),
    },
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    holographicMaterial.uniforms.uTime.value = elapsedTime * 0.75;

    const amplitude = Math.PI / 5;
    const frequency = 0.5;
    icon.current!.rotation.y = Math.sin(elapsedTime * frequency) * amplitude;
  });
  return (
    <group
      ref={icon}
      dispose={null}
      scale={0.4}
      position={[1.4, 0.5, 1.75]}
      rotation={[-20 * (Math.PI / 180), 90 * (Math.PI / 180), 0]}
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
