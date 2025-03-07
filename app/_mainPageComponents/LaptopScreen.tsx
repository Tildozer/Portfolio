import { Html } from "@react-three/drei";

const LaptopScreen = () => {
  return (
    <Html
      transform
      wrapperClass="laptop-screen"
      distanceFactor={4.0}
      position={[0.02, 1.5, -1.4]}
      rotation-x={-0.256}
      style={{ userSelect: "none", zIndex: 10 }}
    >
      <iframe
        height={198}
        width={290}
        className="z-10 select-none rounded-md"
        src="https://marble-run-tawny.vercel.app/"
      />
    </Html>
  );
};

export default LaptopScreen;
