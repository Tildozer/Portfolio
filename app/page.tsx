"use client";
import { Suspense } from "react";
import { default as Experience } from "@/components/mainPageComponents/Experience";
import { Canvas } from "@react-three/fiber";
import Loading from "../components/providers/Loading";

const Main = () => {
  return (
    <div className="bg-color h-[75vh] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 dark:text-yellow-500 md:h-[90vh]">
      <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
      <div className="flex animate-fadeInOnce flex-col">
        <div className="h-[75vh] w-full md:h-[90vh]">
          <Suspense fallback={<Loading />}>
            <Canvas
              shadows
              camera={{
                fov: 45,
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
