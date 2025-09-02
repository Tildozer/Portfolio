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
    <div className="min-w-96 mr-4">
      <div className="">
        <h1 className="">{name}</h1>
      </div>
      <div className="">
        <Descriptions descriptions={ProjectDescription} />
        <Image
          className=""
          src={imageUrl}
          height={350}
          width={350}
          alt={`preview of ${name}`}
        />
      </div>
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
    </div>
  );
}

// export default ProjectLink;
