import { ProjectDescription } from "@prisma/client";
import { Recursive } from "next/font/google";

type Props = {
  descriptions: ProjectDescription[];
};

const recursive = Recursive({ subsets: ["latin"] });

export default function Descriptions({ descriptions }: Props) {
  return (
    <ul className="">
      {descriptions.map(({ description, id }) => {
        return (
          <li
            key={id}
            className={`max-w-2xl pb-4 pl-1 pt-2 sm:pl-0 ${recursive.className}`}
          >
            {description}
          </li>
        );
      })}
    </ul>
  );
}

// export default Descriptions;
