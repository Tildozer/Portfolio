import { ProjectDescription } from "@prisma/client";
import { Recursive } from "next/font/google";

type Props = {
  descriptions: ProjectDescription[];
};

const recursive = Recursive({ subsets: ["latin"] });

export default function Descriptions({ descriptions }: Props) {
  return (
    <ul className="relative left-0 -top-40 w-80 bg-slate-200 bg-opacity-30 dark:bg-slate-950 dark:bg-opacity-25">
      {descriptions.map(({ description, id }) => {
        return (
          <li key={id} className={`${recursive.className}`}>
            {description}
          </li>
        );
      })}
    </ul>
  );
}

// export default Descriptions;
