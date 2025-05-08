import React from "react";

type Props = {
  callback: () => void;
  children?: React.ReactNode;
  className?: string;
};

const WindowBar = ({ callback, children, className = "" }: Props) => {
  return (
    <div
      className={`windowBar flex h-[5%] w-full border-b-2 border-[#383838] bg-macWindowBar text-black hover:cursor-grab active:cursor-grabbing ${className}`}
    >
      <button className="mb-auto mt-auto flex" onClick={callback}>
        <span className="ml-2 h-5 w-5 rounded-full bg-red-500"> </span>
        <span className="ml-2 h-5 w-5 rounded-full bg-yellow-400"> </span>
        <span className="ml-2 h-5 w-5 rounded-full bg-green-500"> </span>
      </button>
      {children}
    </div>
  );
};

export default WindowBar;
