"use client";

import { Experience, TechStack } from "./_mainPageComponents";
import { Canvas } from "@react-three/fiber";

const Main = () => {
  return (
    <div className="bg-color min-h-screen w-full overflow-x-hidden bg-slate-100 dark:bg-slate-900 dark:text-yellow-500">
      <div className="flex animate-fadeInOnce flex-col">
        <TechStack />
        <div className="mb-20 h-[80vh] w-full">
          <Canvas
            shadows
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [2.5, 4, 6],
            }}
            className="bg-slate-100 transition-all duration-500 dark:bg-black"
          >
            <Experience />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Main;
