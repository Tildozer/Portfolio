import { Html } from "@react-three/drei";
import { IconBar } from ".";
import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-source-serif",
});

type Props = {
  img: HTMLImageElement;
};

const LaptopScreen = ({ img }: Props) => {
  return (
    <Html
      transform
      wrapperClass={`laptop-screen ${sourceSerif.className}`}
      distanceFactor={4.0}
      position={[0, 1.51, -1.34]}
      rotation-x={-15 * (Math.PI / 180)}
      zIndexRange={[0, 1]}
      scale={0.2}
      style={{
        userSelect: "none",
        height: "60rem",
        width: "88rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 0,
      }}
    >
      <div
        className="relative flex h-full w-full animate-expand justify-center rounded-md"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <IconBar />
      </div>
    </Html>
  );
};

export default LaptopScreen;
