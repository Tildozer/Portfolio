import React from "react";
import { EmailForm } from "./_components";

const Contact = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-slate-100 text-black transition-all duration-500 dark:bg-slate-900 dark:text-slate-200">
      <div className="m-6 text-center text-xl">
        <span>To get ahold of me please fill out the form below.</span>
        <br />
        <span>I will get back to you as soon as possible.</span>
      </div>
      <EmailForm />
    </div>
  );
};

export default Contact;
