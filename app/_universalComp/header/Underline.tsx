import { MutableRefObject } from "react";

type Props = {
  underline: MutableRefObject<HTMLDivElement>;
};

const Underline = ({ underline }: Props) => {
  return (
    <div
      ref={underline}
      className="h-1 w-0 rounded-md bg-slate-800 dark:bg-slate-400"
    ></div>
  );
};

export default Underline;
