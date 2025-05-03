import { Html } from "@react-three/drei";

const LaptopScreen = () => {
  return (
    <Html
      transform
      wrapperClass="laptop-screen"
      distanceFactor={4.0}
      position={[0, 1.47, -1.4]}
      rotation-x={-15 * (Math.PI / 180)}
      style={{
        userSelect: "none",
        height: "12.2rem",
        width: "18.2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <div className={`h-full w-full animate-expand rounded-md bg-white`}></div>
    </Html>
  );
};

export default LaptopScreen;
