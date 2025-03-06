import React, { useEffect } from "react";
import { extend } from "@react-three/fiber";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import grechenFuemen from "../../public/fonts/Grechen Fuemen_Regular.json";
import * as THREE from "three";
import { useDarkMode } from "../_providers/DarkModeProvider";
import gsap from "gsap";

extend({ TextGeometry });

const Text = () => {
  const { darkMode } = useDarkMode();
  const fontData = {
    ...grechenFuemen,
    original_font_information: {
      ...grechenFuemen.original_font_information,
      format: grechenFuemen.original_font_information.format.toString(),
    },
  };

  const materialRef = React.useRef<THREE.MeshBasicMaterial>();

  const font = new FontLoader().parse(fontData);

  const lightColor = new THREE.Color(0x000000);
  const darkColor = new THREE.Color(0xffff00);
  const color = darkMode ? darkColor : lightColor;
  const material = new THREE.MeshBasicMaterial({ color });
  materialRef.current = material;

  useEffect(() => {
    if (materialRef.current) {
      gsap.to(materialRef.current.color, {
        r: color.r,
        g: color.g,
        b: color.b,
        duration: 0.5,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode]);

  return (
    <group position={[-4, 1.5, 0]} rotation={[-0.1, 0.8, 0]}>
      <mesh material={material}>
        <textGeometry
          args={["Discover", { font, size: 0.5, height: 0.1, depth: 0.1 }]}
        />
      </mesh>
      <mesh position={[0, -0.5, 0]} material={material}>
        <textGeometry
          args={["my work", { font, size: 0.5, height: 0.1, depth: 0.15 }]}
        />
      </mesh>
    </group>
  );
};

export default Text;
