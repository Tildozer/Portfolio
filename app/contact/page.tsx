"use client";
import { EmailForm, Toast, Experience } from "@/components/contact";
import { Canvas } from "@react-three/fiber";
import { Recursive } from "next/font/google";

const recursive = Recursive({ subsets: ["latin"] });

const Contact = () => {
  return (
    <>
      <div className="w-full overflow-x-hidden bg-slate-100 pb-6 text-black transition-all duration-500 dark:bg-slate-900 dark:text-slate-200">
        <div className="mt-24 flex animate-fadeInOnce flex-col items-center text-center text-black dark:text-yellow-500 sm:text-xl">
          <span className={recursive.className}>
            To get ahold of me please fill out the form below.
          </span>
          <br />
          <span className={recursive.className}>
            I will get back to you as soon as possible.
          </span>
          <EmailForm />
        </div>
        <div className="mb-24 h-[60vh] w-full">
          <Canvas>
            <Experience />
          </Canvas>
        </div>
        <Toast />
      </div>
    </>
  );
};

export default Contact;
