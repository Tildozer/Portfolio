import React from "react";
import { MdMarkEmailRead } from "react-icons/md";

const SuccessToast = () => {
  return (
    <>
      <MdMarkEmailRead className="mr-4 text-4xl text-green-500" />
      <span className="text-orange-600 dark:text-yellow-500">
        Email sent successfully!
      </span>
    </>
  );
};

export default SuccessToast;
