import {
  // useHelper,
  PerspectiveCamera,
  useGLTF,
  Center,
  // useHelper,
  // OrbitControls
} from "@react-three/drei";
// import { useControls, folder } from "leva";
// import * as THREE from "three";
// import { CameraUpdater } from "./";
// import { useRef } from "react";

const Experience = () => {
  const { scene, animations } = useGLTF("/models/letTildozerAnimations.glb");

  // const { camPosition, camRotation, fov } = useControls({
  //   camera: folder({
  //     camPosition: {
  //       value: { x: 1.9, y: 0, z: 0 },
  //       step: 0.1,
  //     },
  //     camRotation: {
  //       value: { x: 0, y: 90 * (Math.PI/180), z: 0 },
  //       step: 0.01,
  //     },
  //     fov: {
  //       value: 60,
  //       min: 10,
  //       max: 120,
  //       step: 1,
  //     },
  //   }),
  // });

  // const { lightPosition, lightIntensity, lightColor } = useControls({
  //   directPointLight: folder({
  //     // {"lightPosition":{"x":1.8999999999999957,"y":2.1999999999999944,"z":2.700000000000001}}
  //     lightPosition: {
  //       value: { x: 1.9, y: 2.2, z: 2.7 },
  //       step: 0.1,
  //     },
  //     lightIntensity: {
  //       value: 2.7,
  //       min: 0,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     lightColor: {
  //       value: "#fff6d6",
  //     },
  //   }),
  // });

  // const light = useRef<THREE.DirectionalLight>(null);
  // useHelper(light, THREE.DirectionalLightHelper, 2, "cyan");
  const y90DegRotation = 90 * (Math.PI / 180);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        fov={60}
        position-x={1.9}
        rotation-y={y90DegRotation}
        near={0.1}
        far={200}
      />
      {/* <CameraUpdater
        fov={fov}
        camPosition={camPosition}
        camRotation={camRotation}
      /> */}
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[1.9, 2.2, 2.7]}
        intensity={2.7}
        // ref={light}
        color={"#fff6d6"}
      />
      <Center>
        <primitive object={scene} rotation-y={y90DegRotation} />
      </Center>
    </>
  );
};

export default Experience;
