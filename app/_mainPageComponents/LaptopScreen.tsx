import { Html } from "@react-three/drei";
import React from "react";

const LaptopScreen = () => {
  return (
    <Html
      transform
      wrapperClass="laptop-screen"
      distanceFactor={4.05}
      position={[0.02, 1.5, -1.4]}
      rotation-x={-0.256}
      style={{ userSelect: "none" }}
    >
      <iframe
        height={198}
        width={290}
        className="rounded-md"
        src="https://marble-run-tawny.vercel.app/"
      />
    </Html>
  );
};

export default LaptopScreen;
