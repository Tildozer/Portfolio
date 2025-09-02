"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { WaveExperience } from ".";

export default function Wave() {
  return (
    <Suspense fallback={null}>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5, 4, 6],
        }}
        className="fade-bottom touch-none bg-slate-900 dark:bg-black"
      >
        <WaveExperience />
      </Canvas>
    </Suspense>
  );
}
