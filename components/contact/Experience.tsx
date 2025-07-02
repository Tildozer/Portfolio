import {
  PerspectiveCamera,
  useGLTF,
  Center,
  useAnimations,
} from "@react-three/drei";
import { useEffect } from "react";
import { useState } from "react";
import * as THREE from "three";

const Experience = () => {
  const { scene, animations } = useGLTF("/models/letTildozerAnimations.glb");
  const { actions, names } = useAnimations(animations, scene);
  const [hasTriggeredAnimation, setHasTriggeredAnimation] = useState(false);

  const y90DegRotation = 90 * (Math.PI / 180);

  useEffect(() => {
    const actionAnimation = actions[names[0]] as THREE.AnimationAction;

    if (!actionAnimation) return;

    const onAnimationFinished = () => {
      setTimeout(() => {
        setHasTriggeredAnimation(false);
      }, 2000);
    };

    if (!hasTriggeredAnimation) {
      actionAnimation.reset().fadeIn(0.5);
      actionAnimation.loop = THREE.LoopOnce;
      actionAnimation.clampWhenFinished = true;

      const mixer = actionAnimation.getMixer();
      const finishHandler = mixer.addEventListener(
        "finished",
        onAnimationFinished,
      ) as unknown as (event: THREE.Event) => void;

      setTimeout(() => {
        actionAnimation.play();
        setHasTriggeredAnimation(true);
      }, 1500);

      return () => {
        mixer.removeEventListener("finished", finishHandler);
      };
    }
  }, [actions, names, hasTriggeredAnimation]);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        fov={60}
        position-x={2.1}
        rotation-y={y90DegRotation}
        near={0.1}
        far={200}
      />
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
