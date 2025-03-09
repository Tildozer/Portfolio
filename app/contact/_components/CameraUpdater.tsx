import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

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

export default CameraUpdater;
