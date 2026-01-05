import {
  PerspectiveCamera,
  useGLTF,
  Center,
  useAnimations,
} from "@react-three/drei";
import { useEffect, useState, useCallback, useRef } from "react";
import * as THREE from "three";

const Experience = () => {
  const { scene, animations } = useGLTF("/models/letTildozerAnimations.glb", false);
  const { actions, names } = useAnimations(animations, scene);
  const [hasTriggeredAnimation, setHasTriggeredAnimation] = useState(false);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const Y_90_DEG_ROTATION = Math.PI / 2; // More semantic constant

  const handleAnimationFinished = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setHasTriggeredAnimation(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!names.length || hasTriggeredAnimation) return;

    const actionAnimation = actions[names[0]] as THREE.AnimationAction;
    if (!actionAnimation) return;

    // Setup animation
    actionAnimation.reset().fadeIn(0.5);
    actionAnimation.loop = THREE.LoopOnce;
    actionAnimation.clampWhenFinished = true;

    const mixer = actionAnimation.getMixer();
    mixerRef.current = mixer;

    mixer.addEventListener("finished", handleAnimationFinished);

    // Start animation after delay
    timeoutRef.current = setTimeout(() => {
      actionAnimation.play();
      setHasTriggeredAnimation(true);
    }, 1500);

    // Cleanup function
    return () => {
      if (mixerRef.current) {
        mixerRef.current.removeEventListener("finished", handleAnimationFinished);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [actions, names, hasTriggeredAnimation, handleAnimationFinished]);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        fov={60}
        position={[1, 0.7, 0]}
        rotation-y={Y_90_DEG_ROTATION}
        near={0.1}
        far={200}
      />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[1.9, 2.2, 2.7]}
        intensity={2.7}
        color="#fff6d6"
      />
      <Center>
     
      <primitive
        object={scene}
        dispose={null}
        rotation-y={Y_90_DEG_ROTATION}
      />
      </Center>
    </>
  );
};

export default Experience;
