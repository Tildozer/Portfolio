import { Html } from "@react-three/drei";
// import React, { useEffect, useRef } from "react";

const LaptopScreen = () => {
  // const iframeRef = useRef<HTMLIFrameElement>(null);

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
        // ref={iframeRef}
        height={198}
        width={290}
        className="rounded-md"
        src="https://marble-run-tawny.vercel.app/"
      />
    </Html>
  );
};

export default LaptopScreen;
