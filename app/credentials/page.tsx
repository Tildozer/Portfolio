import { CertContainer } from "./_components";
import { PrismaClient } from "@prisma/client";

const Credentials = async () => {
  const prisma = new PrismaClient();
  const certificates = await prisma.certification.findMany();

  return (
    <div className="mt-4 flex animate-fadeInOnce flex-col items-center bg-slate-200 pb-32 text-black transition-all duration-500 dark:bg-slate-900 dark:text-yellow-500">
      <span className="self-start text-3xl md:ml-6 lg:ml-24 xl:ml-0 xl:self-center">
        Certificates:{" "}
      </span>
      {certificates.map((certificate, idx) => (
        <CertContainer key={idx} {...certificate} />
      ))}
    </div>
  );
};

export default Credentials;
