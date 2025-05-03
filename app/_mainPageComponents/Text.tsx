import * as THREE from "three";
import { forwardRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { useDarkMode } from "../_providers/DarkModeProvider";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import grechenFuemen from "../../public/fonts/Grechen Fuemen_Regular.json";
import vertexShader from "./_shaders/holographic/vertex.glsl";
import fragmentShader from "./_shaders/holographic/fragment.glsl";
import random2D from "./_shaders/includes/random2D.glsl";

extend({ TextGeometry });

const Text = forwardRef<THREE.Group>((props, ref) => {
  const { darkMode } = useDarkMode();
  const fontData = {
    ...grechenFuemen,
    original_font_information: {
      ...grechenFuemen.original_font_information,
      format: grechenFuemen.original_font_information.format.toString(),
    },
  };

  const font = new FontLoader().parse(fontData);

  const lightColor = new THREE.Color(0xea580c);
  const darkColor = new THREE.Color(0x6fc5fd);
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

  return (
    <group
      ref={ref}
      position={[-3, 1.5, 2]}
      rotation={[-0.1, 0.9, 15 * (Math.PI / 180)]}
    >
      <mesh material={holographicMaterial}>
        <textGeometry
          args={["Discover", { font, size: 0.75, height: 0.1, depth: 0.1 }]}
        />
      </mesh>
      <mesh position={[0, -0.5, 0]} material={holographicMaterial}>
        <textGeometry
          args={["my work", { font, size: 0.75, height: 0.1, depth: 0.15 }]}
        />
      </mesh>
    </group>
  );
});

Text.displayName = "Text";

export default Text;
