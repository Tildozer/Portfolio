import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { useControls, folder } from "leva";
import {
  // useHelper,
  PerspectiveCamera,
} from "@react-three/drei";
import { CameraUpdater } from "./";
// import * as THREE from "three";

const Experience = () => {
  const { scene } = useGLTF("/models/letTildozer.glb");
  // console.log(model);
  const { camPosition, camRotation, fov } = useControls({
    camera: folder({
      camPosition: {
        value: { x: 0.5, y: 9, z: 20 },
        step: 0.1,
      },
      camRotation: {
        value: { x: 0, y: 0, z: 0 },
        step: 0.01,
      },
      fov: {
        value: 60,
        min: 10,
        max: 120,
        step: 1,
      },
    }),
  });

  const { lightPosition, lightIntensity, lightColor } = useControls({
    directPointLight: folder({
      lightPosition: {
        // {"lightPosition":{"x":-5.4,"y":9.999999999999982,"z":13.99999999999997}}
        value: { x: -5.4, y: 10, z: 14 },
        step: 0.1,
      },
      lightIntensity: {
        value: 1,
        min: 0,
        max: 10,
        step: 0.1,
      },
      lightColor: {
        value: "#fff6d6",
      },
    }),
  });

  // const light = useRef<THREE.DirectionalLight>(null);
  // useHelper(light, THREE.DirectionalLightHelper, 2, "cyan");

  return (
    <>
      <PerspectiveCamera
        makeDefault
        fov={fov}
        position={[camPosition.x, camPosition.y, camPosition.z]}
        rotation={[camRotation.x, camRotation.y, camRotation.z]}
        near={0.1}
        far={200}
      />
      <OrbitControls />
      <CameraUpdater
        fov={fov}
        camPosition={camPosition}
        camRotation={camRotation}
      />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[lightPosition.x, lightPosition.y, lightPosition.z]}
        intensity={lightIntensity}
        // ref={light}
        color={lightColor}
      />
      <Center>
        <primitive
          object={scene}
          position={[0, 0, 0]}
          scale={[0.1, 0.1, 0.1]}
        />
      </Center>
    </>
  );
};

export default Experience;
