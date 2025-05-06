import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import { TechIcon } from ".";

const TechStack = () => {
  const {
    state: { tech },
  } = useLaptopInfo();

  return (
    <div className="mb-20">
      <h1 className="mb-4 text-4xl">Languages & libraries</h1>
      {tech.length ? (
        <div className="ml-auto mr-auto grid w-fit grid-flow-row grid-cols-5 justify-items-start gap-10">
          {tech.map((skill) => (
            <TechIcon key={skill.id} tech={skill} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TechStack;
