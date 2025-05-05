import React from "react";

type Props = {
  callback: () => void;
};

const WindowBar = ({ callback }: Props) => {
  return (
    <div className="flex h-[5%] w-full bg-macWindowBar">
      <button
        onClick={callback}
        className="mb-auto ml-2 mt-auto h-5 w-5 rounded-full bg-red-500"
      >
        {" "}
      </button>
      <button
        onClick={callback}
        className="mb-auto ml-2 mt-auto h-5 w-5 rounded-full bg-yellow-400"
      >
        {" "}
      </button>
      <button
        onClick={callback}
        className="mb-auto ml-2 mt-auto h-5 w-5 rounded-full bg-green-500"
      >
        {" "}
      </button>
    </div>
  );
};

export default WindowBar;
