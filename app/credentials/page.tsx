import { Suspense } from "react";
import { CertContainer } from "./_components";
import Loading from "../_providers/Loading";

const Credentials = () => {
  const certificates = [
    {
      description:
        "FullstackAcademy: Certificate of completion for the FullstackAcademy bootcamp",
      src: "/fullStackAcademy.jpg",
      alt: "Certificate for completing FullstackAcademy",
    },
    {
      description:
        "Three.js Journey: Certificate of completion for the Three.js Journey course",
      src: "/ThreeJsJourney.png",
      alt: "Certificate for completing Three.js Journey",
      // link: "https://threejs-journey.com/certificate/view/30160"
    },
    {
      description:
        "AlgoExpert: Certificate of completion for 100 critical tech interview algorithms",
      src: "/algoExpert.jpg",
      alt: "Certificate for completing 100 of the top tech interview algorithms",
    },
  ];
  return (
    <div className="mt-4 flex animate-fadeInOnce flex-col items-center bg-slate-200 pb-32 text-black dark:bg-slate-900 dark:text-yellow-500">
      <span className="self-start text-3xl md:ml-6 lg:ml-24 xl:ml-0 xl:self-center">
        Certificates:{" "}
      </span>
      <Suspense fallback={<Loading />}>
        {certificates.map((certificate, idx) => (
          <CertContainer key={idx} {...certificate} />
        ))}
      </Suspense>
    </div>
  );
};

export default Credentials;
