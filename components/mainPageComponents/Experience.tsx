import { useRef } from "react";
import { Laptop, NodeIcon, ReactIcon } from ".";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import vertexShader from "./shaders/holographic/vertex.glsl";
import fragmentShader from "./shaders/holographic/fragment.glsl";
import random2D from "./shaders/includes/random2D.glsl";
import { useDarkMode } from "../providers/DarkModeProvider";

const Experience = () => {
  const { darkMode } = useDarkMode();
  const iconContainer = useRef<THREE.Group>(null);

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
  });

  useGSAP(() => {
    gsap.to(iconContainer.current!.position, {
      y: 0,
      duration: 1,
      delay: 2,
      ease: "sine.out",
    });
  });

  return (
    <>
      <Environment preset="city" />
      <color attach="background" args={["#1d1f2a"]} />
      <group ref={iconContainer} position={[0, -10, 0]}>
        <ReactIcon holographicMaterial={holographicMaterial} />
        <NodeIcon holographicMaterial={holographicMaterial} />
      </group>
      <Float rotationIntensity={0.4}>
        <Laptop />
      </Float>
      <ContactShadows position-y={-3} opacity={0.4} scale={10} blur={1.6} />
    </>
  );
};

export default Experience;
