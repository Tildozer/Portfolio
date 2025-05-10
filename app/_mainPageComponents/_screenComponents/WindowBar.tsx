import React from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";

type Props = {
  callback: () => void;
  children?: React.ReactNode;
  className?: string;
};

const WindowBar = ({ callback, children, className = "" }: Props) => {
  const {
    state: { isMobile },
  } = useLaptopInfo();

  return (
    <>
      {isMobile ? (
        <div
          className={`flex h-[5%] w-full border-b-2 border-[#383838] bg-macWindowBar text-black hover:cursor-grab active:cursor-grabbing ${className}`}
        >
          <div className="windowBar absolute left-0 top-0 h-20 w-full opacity-0" />
          <button className="flex h-full" onClick={callback}>
            <div
              className="absolute left-0 top-0 z-20 h-10 w-24 opacity-0"
              onClick={callback}
            >
              {" "}
            </div>
            <span className="mb-auto ml-2 mt-auto h-5 w-5 rounded-full bg-red-500">
              {" "}
            </span>
            <span className="mb-auto ml-2 mt-auto h-5 w-5 rounded-full bg-yellow-400">
              {" "}
            </span>
            <span className="mb-auto ml-2 mt-auto h-5 w-5 rounded-full bg-green-500">
              {" "}
            </span>
          </button>
          {children}
        </div>
      ) : (
        <div
          className={`windowBar flex h-[5%] w-full border-b-2 border-[#383838] bg-macWindowBar text-black hover:cursor-grab active:cursor-grabbing ${className}`}
        >
          <button className="flex h-full" onClick={callback}>
            <span className="mb-auto ml-2 mt-auto h-5 w-5 rounded-full bg-red-500">
              {" "}
            </span>
            <span className="mb-auto ml-2 mt-auto h-5 w-5 rounded-full bg-yellow-400">
              {" "}
            </span>
            <span className="mb-auto ml-2 mt-auto h-5 w-5 rounded-full bg-green-500">
              {" "}
            </span>
          </button>
          {children}
        </div>
      )}
    </>
  );
};

export default WindowBar;
