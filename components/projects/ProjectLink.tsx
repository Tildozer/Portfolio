import Link from "next/link.js";
import { Descriptions } from ".";
import { Project } from "@/types/projectTypes.js";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function ProjectLink({
  project: { id, projectUrl, githubUrl, ProjectDescription, name, imageUrl },
}: Props) {
  return (
    <div className="embla__slide mr-4 min-w-96" key={id}>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <span>
          {githubUrl ? (
            <>
              <Link href={githubUrl} target="_blank">
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
            height={450}
            width={450}
            alt={`preview of ${name}`}
          />
          <Descriptions descriptions={ProjectDescription} />
        </span>
      </div>
    </div>
  );
}

// export default ProjectLink;
