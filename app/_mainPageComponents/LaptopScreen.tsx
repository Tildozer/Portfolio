import { Html } from "@react-three/drei";
import Image from "next/image";

const LaptopScreen = () => {
  return (
    <Html
      transform
      wrapperClass="laptop-screen"
      distanceFactor={4.0}
      position={[0, 1.51, -1.34]}
      rotation-x={-15 * (Math.PI / 180)}
      zIndexRange={[0, 1]}
      style={{
        userSelect: "none",
        height: "12.2rem",
        width: "18.2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 0,
      }}
      // occlude={true}
    >
      <div
        className={`flex h-full w-full animate-expand items-center justify-center overflow-hidden rounded-lg bg-white`}
      >
        <div className="relative flex h-full w-full items-center justify-center">
          <Image
            className="rounded-md object-cover"
            src={
              "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/09735855-eefe-46f9-6831-932a7decd600/public"
            }
            alt="Laptop Screen"
            height={195.2}
            width={291.2}
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%",
            }}
          />
        </div>
      </div>
    </Html>
  );
};

export default LaptopScreen;
