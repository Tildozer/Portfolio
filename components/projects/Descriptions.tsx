import { ProjectDescription } from "@prisma/client";
import { Recursive } from "next/font/google";

type Props = {
  descriptions: ProjectDescription[];
};

const recursive = Recursive({ subsets: ["latin"] });

export default function Descriptions({ descriptions }: Props) {
  return (
    <ul className="bg-opacity-30 dark:bg-opacity-25 w-xl self-center list-disc">
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
