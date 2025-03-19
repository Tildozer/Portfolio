import gsap from "gsap";
import * as THREE from "three";
import { useEffect, useRef, forwardRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { useDarkMode } from "../_providers/DarkModeProvider";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import grechenFuemen from "../../public/fonts/Grechen Fuemen_Regular.json";
import vertexShader from "./_shaders/holographic/vertex.glsl";
import fragmentShader from "./_shaders/holographic/fragment.glsl";
import random2D from "./_shaders/includes/random2D.glsl";

extend({ TextGeometry });

// Remove the Props type that includes ref
// Add forwardRef wrapper
const Text = forwardRef<THREE.Group>((props, ref) => {
  const { darkMode } = useDarkMode();
  const fontData = {
    ...grechenFuemen,
    original_font_information: {
      ...grechenFuemen.original_font_information,
      format: grechenFuemen.original_font_information.format.toString(),
    },
  };

  const materialRef = useRef<THREE.MeshBasicMaterial>();

  const font = new FontLoader().parse(fontData);

  const lightColor = new THREE.Color(0xea580c);
  const darkColor = new THREE.Color(0x6fc5fd);
  const color = darkMode ? darkColor : lightColor;
  const material = new THREE.MeshBasicMaterial({ color });
  materialRef.current = material;

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

  useEffect(() => {
    if (materialRef.current) {
      gsap.to(materialRef.current.color, {
        r: color.r,
        g: color.g,
        b: color.b,
        duration: 0.5,
      });
    }

    console.log(holographicMaterial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    holographicMaterial.uniforms.uTime.value = elapsedTime * 0.5;
  });

  return (
    <group ref={ref} position={[-3, 2.2, 0]} rotation={[-0.1, 0.9, -0.1]}>
      <mesh material={holographicMaterial}>
        <textGeometry
          args={["Discover", { font, size: 0.5, height: 0.1, depth: 0.1 }]}
        />
      </mesh>
      <mesh position={[0, -0.5, 0]} material={holographicMaterial}>
        <textGeometry
          args={["my work", { font, size: 0.5, height: 0.1, depth: 0.15 }]}
        />
      </mesh>
    </group>
  );
});

// Add display name for better debugging
Text.displayName = "Text";

export default Text;
