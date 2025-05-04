import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";

const ScreenLight = () => {
  const screenLight = useRef<THREE.RectAreaLight>(null);

  useEffect(() => {
    gsap.to(screenLight.current, {
      intensity: 40,
      duration: 1.5,
    });
  }, []);

  return (
    <rectAreaLight
      ref={screenLight}
      width={2.5}
      height={1.65}
      intensity={0}
      color={"#5680b4"}
      rotation={[0.1, Math.PI, 0]}
      position={[0, 0.55, -1.15]}
    />
  );
};

export default ScreenLight;
