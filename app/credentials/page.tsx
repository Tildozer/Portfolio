import { Suspense } from "react";
import { CertContainer } from "./_components";
import Loading from "../_providers/Loading";

const Credentials = () => {
  const certificates = [
    {
      description:
        "FullstackAcademy: Certificate of completion for the FullstackAcademy bootcamp",
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/dea8f8d4-5064-4af3-d81f-5bb72c6fa600/public",
      alt: "Certificate for completing FullstackAcademy",
    },
    {
      description:
        "Three.js Journey: Certificate of completion for the Three.js Journey course",
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/fecf772e-6628-4d56-5153-f14effc39f00/public",
      alt: "Certificate for completing Three.js Journey",
      // link: "https://threejs-journey.com/certificate/view/30160"
    },
    {
      description:
        "AlgoExpert: Certificate of completion for 100 critical tech interview algorithms",
      src: "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/d7dd8e53-fe5e-4da4-ffae-96772577ae00/public",
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
