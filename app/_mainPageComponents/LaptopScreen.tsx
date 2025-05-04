import { Html } from "@react-three/drei";
import {IconBar} from ".";

type Props = {
  img: HTMLImageElement;
};

const LaptopScreen = ({ img }: Props) => {
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
    >
        <div
          className="relative flex animate-expand h-full w-full justify-center rounded-md"
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
