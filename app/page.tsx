"use client";
import { Suspense, useEffect, useState } from "react";
import { Experience, TechStack } from "./_mainPageComponents";
import { Canvas } from "@react-three/fiber";
import Loading from "./_providers/Loading";
// import gsap from "gsap";

const Main = () => {
  const [fov, setFov] = useState(75);

  useEffect(() => {
    setFov(window.innerWidth > 768 ? 45 : 75);
  }, []);

  return (
    <div className="bg-color min-h-screen w-full overflow-x-hidden bg-slate-100 dark:bg-slate-900 dark:text-yellow-500">
      <div className="flex animate-fadeInOnce flex-col">
        <TechStack />
        <div className="h-[75vh] w-full md:h-[85vh]">
          <Suspense fallback={<Loading />}>
            <Canvas
              shadows
              camera={{
                fov: fov,
                near: 0.1,
                far: 200,
                position: [2.5, 4, 6],
              }}
              className="touch-none bg-slate-100 transition-all duration-500 dark:bg-black"
            >
              <Experience />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Main;
