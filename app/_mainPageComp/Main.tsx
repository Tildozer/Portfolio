// import React, { useEffect } from "react";
import { Experince, TechStack } from ".";
import { Canvas } from "@react-three/fiber";

const Main = () => {
  return (
    <div className="bg-color min-h-screen w-full overflow-x-hidden bg-slate-200 dark:bg-slate-900 dark:text-yellow-500">
      <div className="flex animate-fadeInOnce flex-col">
        <TechStack />
        <div className="mb-20 h-[85vh]">
          <Canvas
            shadows
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [2.5, 4, 6],
            }}
            className="bg-slate-400 dark:bg-black"
          >
            <Experince />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Main;
