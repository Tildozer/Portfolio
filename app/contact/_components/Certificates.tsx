import React from "react";
import { CertContainer } from "./";

const Certificates = () => {
  const certificates = [
    {
      description:
        "FullstackAcademy: Achievement for completing the FullstackAcademy bootcamp",
      src: "/fullStackAcademy.jpg",
      alt: "Certificate for completing FullstackAcademy",
    },
    {
      description:
        "AlgoExpert: Achievement for completing 100 critical tech interview algorithms",
      src: "/algoExpert.jpg",
      alt: "Certificate for completing 100 of the top tech interview algorithms",
    },
  ];
  return (
    <div className="mb-10 mt-4 flex flex-col items-center">
      <span className="self-start text-3xl md:ml-6 lg:ml-24 xl:ml-0 xl:self-center">
        Certificates:{" "}
      </span>
      {certificates.map((certificate, idx) => (
        <CertContainer key={idx} {...certificate} />
      ))}
    </div>
  );
};

export default Certificates;
