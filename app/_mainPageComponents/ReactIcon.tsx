import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useDarkMode } from "../_providers/DarkModeProvider";
import vertexShader from "./_shaders/holographic/vertex.glsl";
import fragmentShader from "./_shaders/holographic/fragment.glsl";
import random2D from "./_shaders/includes/random2D.glsl";

const ReactIcon = () => {
  const { darkMode } = useDarkMode();
  const { nodes } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/react-logo/model.gltf",
  );

  const processedVertexShader = vertexShader.replace(
    "#include ../includes/random2D",
    random2D,
  );

  const lightColor = new THREE.Color(0xea580c);
  const darkColor = new THREE.Color(0x22d3ee);
  const color = darkMode ? darkColor : lightColor;

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
  });

  return (
    <group
      position={[0.4, -0.1, 2]}
      scale={0.35}
      rotation={[-15 * (Math.PI / 180), 0.5, 0.1]}
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
