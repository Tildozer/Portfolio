import React from "react";
import { EmailForm, Toast, Certificates } from "./_components";

const Contact = () => {
  return (
    <>
      <div className="h-[90vh] w-full overflow-x-hidden bg-slate-100 text-black transition-all duration-500 dark:bg-slate-900 dark:text-slate-200">
        <div className="mt-24 flex animate-fadeInOnce flex-col items-center text-center text-xl text-black dark:text-yellow-500">
          <span>To get ahold of me please fill out the form below.</span>
          <br />
          <span>I will get back to you as soon as possible.</span>
          <EmailForm />
        </div>
        <Certificates />
        <Toast />
      </div>
    </>
  );
};

export default Contact;
