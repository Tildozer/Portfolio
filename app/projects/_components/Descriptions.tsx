import { Description } from "../page";

type Props = {
  descriptions: Description[];
};

const Descriptions = ({ descriptions }: Props) => {
  return (
    <ul className="">
      {descriptions.map(({ description, id }) => {
        return (
          <li key={id} className="max-w-2xl pb-4 pl-1 pt-2 sm:pl-0">
            {description}
          </li>
        );
      })}
    </ul>
  );
};

export default Descriptions;
