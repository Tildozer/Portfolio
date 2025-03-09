import { useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";
import { useControls, folder } from "leva";
import { useHelper, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

type CameraLevaControls = {
  camPosition: { x: number; y: number; z: number };
  camRotation: { x: number; y: number; z: number };
  fov: number;
};

const CameraUpdater = ({
  camPosition,
  camRotation,
  fov,
}: CameraLevaControls) => {
  const { camera } = useThree();

  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.position.set(camPosition.x, camPosition.y, camPosition.z);
      camera.rotation.set(camRotation.x, camRotation.y, camRotation.z);
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }
  }, [camPosition, camRotation, fov, camera]);

  return null;
};

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
      <CameraUpdater
        fov={fov}
        camPosition={camPosition}
        camRotation={camRotation}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <primitive object={scene} position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]} />
    </>
  );
};

export default Experience;
