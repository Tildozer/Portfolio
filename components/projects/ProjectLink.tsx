import Link from "next/link.js";
import { Descriptions } from ".";
import { Project } from "@/types/projectTypes.js";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function ProjectLink({
  project: { projectUrl, githubUrl, ProjectDescription, name, imageUrl },
}: Props) {
  return (
    <li className="mr-4 min-w-96">
      <div className="">
        <h1 className="">{name}</h1>
      </div>
      <div className="">
        <span className="">
          {githubUrl ? (
            <>
              <Link href={githubUrl} target="_blank" className="">
                Repository
              </Link>
              <span> | </span>
            </>
          ) : null}
          <Link href={projectUrl} target="_blank" className="">
            Website
          </Link>
        </span>
        <span>
          <Image
            className="h-auto"
            src={imageUrl}
            height={350}
            width={250}
            alt={`preview of ${name}`}
          />
          <Descriptions descriptions={ProjectDescription} />
        </span>
      </div>
    </li>
  );
}

// export default ProjectLink;
