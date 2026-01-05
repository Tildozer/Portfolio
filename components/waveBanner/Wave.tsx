"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { WaveExperience } from ".";

export default function Wave() {
  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [2.5, 4, 6],
      }}
      className="touch-none bg-slate-900 dark:bg-black"
    >
      <Suspense fallback={null}>
        <WaveExperience />
      </Suspense>
    </Canvas>
  );
}
