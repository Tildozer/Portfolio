import React from "react";
import { Description } from "../page";

type Props = {
  descriptions: Description[];
};

const Descriptions = ({ descriptions }: Props) => {
  return (
    <ul className="ml-2">
      {descriptions.map(({ description, id }) => {
        return (
          <li key={id} className="ml-4 mr-4 max-w-2xl list-disc pb-4 pt-2">
            {description}
          </li>
        );
      })}
    </ul>
  );
};

export default Descriptions;
