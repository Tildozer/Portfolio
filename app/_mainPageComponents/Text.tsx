import React from "react";
import { extend } from "@react-three/fiber";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import grechenFuemen from "../../public/fonts/Grechen Fuemen_Regular.json";

extend({ TextGeometry });

const Text = () => {
  const fontData = {
    ...grechenFuemen,
    original_font_information: {
      ...grechenFuemen.original_font_information,
      format: grechenFuemen.original_font_information.format.toString(),
    },
  };
  const font = new FontLoader().parse(fontData);

  return (
    <group position={[-4, 1.5, 0]} rotation={[0, 1, 0]}>
      <mesh>
        <textGeometry
          args={["Welcome to", { font, size: 0.5, height: 0.1, depth: 0.1 }]}
        />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <textGeometry
          args={[
            "my portfolio!",
            { font, size: 0.5, height: 0.1, depth: 0.15 },
          ]}
        />
      </mesh>
    </group>
  );
};

export default Text;
