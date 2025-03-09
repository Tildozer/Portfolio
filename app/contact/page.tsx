"use client";
import React from "react";
import { EmailForm, Toast, Experience } from "./_components";
import { Canvas } from "@react-three/fiber";

const Contact = () => {
  return (
    <>
      <div className="min-h-[90vh] w-full overflow-x-hidden bg-slate-100 pb-24 text-black transition-all duration-500 dark:bg-slate-900 dark:text-slate-200">
        <div className="mt-24 flex animate-fadeInOnce flex-col items-center text-center text-black dark:text-yellow-500 sm:text-xl">
          <span>To get ahold of me please fill out the form below.</span>
          <br />
          <span>I will get back to you as soon as possible.</span>
          <EmailForm />
        </div>
        <Canvas>
          <Experience />
        </Canvas>
        <Toast />
      </div>
    </>
  );
};

export default Contact;
