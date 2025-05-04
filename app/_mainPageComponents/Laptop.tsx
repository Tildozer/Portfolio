import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { LaptopScreen, ScreenLight } from "./";
import gsap from "gsap";


const preloadLaptopScreenImage = () => {
  const img = new Image();
  img.src =
    "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/09735855-eefe-46f9-6831-932a7decd600/public";
  return new Promise<HTMLImageElement>((resolve) => {
    if (img.complete) {
      resolve(img);
    } else {
      img.onload = () => resolve(img);
    }
  });
};

const Laptop = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const model: any = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf",
  );
  const { nodes, materials } = model;

  const topScreen = useRef<THREE.Group>(null);
  const [showScreen, setShowScreen] = useState(false);
  const [loadedImg, setLoadedImg] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    let isMounted = true;
    preloadLaptopScreenImage()
      .then((img) => {
        if (isMounted) {
          setLoadedImg(img);
        }
      })
      .catch((err) =>
        console.error("Failed to load laptop screen image:", err),
      );

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!loadedImg) return;

    const radian = (180 * Math.PI) / 180;
    topScreen.current?.rotation.set(radian, 0, 0);

    setTimeout(() => {
      const newRadian = (75 * Math.PI) / 180;
      gsap
        .to(topScreen.current!.rotation, {
          x: newRadian,
          duration: 1,
        })
        .then(() => {
          setShowScreen(true);
        });
    }, 1500);

    return () => setShowScreen(false);
  }, [loadedImg]);

  return (
    <group
      dispose={null}
      rotation={[-0.06, 0.42, 0]}
      position={[0, -3, -1]}
      scale={2}
    >
      <group position={[0, 0.52, 0]} scale={[0.1, 0.1, 0.1]}>
        <mesh
          geometry={nodes.Circle001.geometry}
          material={nodes.Circle001.material}
        />
        <mesh
          geometry={nodes.Circle001_1.geometry}
          material={nodes.Circle001_1.material}
        />
        <mesh
          geometry={nodes.Circle001_2.geometry}
          material={materials.HeadPhoneHole}
        />
        <mesh
          geometry={nodes.Circle001_3.geometry}
          material={nodes.Circle001_3.material}
        />
        <mesh
          geometry={nodes.Circle001_4.geometry}
          material={nodes.Circle001_4.material}
        />
        <mesh
          geometry={nodes.Circle001_5.geometry}
          material={materials.TouchbarBorder}
        />
        <mesh
          geometry={nodes.Circle001_6.geometry}
          material={materials.Keyboard}
        />
        <mesh
          geometry={nodes.KeyboardKeyHole.geometry}
          material={nodes.KeyboardKeyHole.material}
          position={[-11.79, -0.15, -8.3]}
          scale={5.8}
        />
        <mesh
          geometry={nodes.RubberFoot.geometry}
          material={materials.DarkRubber}
          position={[-11.95, -0.75, 7.86]}
          scale={5.8}
        />
        <group position={[0.01, -0.21, -10.56]} scale={5.8}>
          <mesh
            geometry={nodes.Circle012.geometry}
            material={materials.HingeBlack}
          />
          <mesh
            geometry={nodes.Circle012_1.geometry}
            material={materials.HingeMetal}
          />
        </group>
        <group position={[0, -0.51, 0]} scale={5.8}>
          <mesh
            geometry={nodes.Circle006.geometry}
            material={nodes.Circle006.material}
          />
          <mesh
            geometry={nodes.Circle006_1.geometry}
            material={nodes.Circle006_1.material}
          />
        </group>
        <group position={[-11.79, -0.15, -8.3]} scale={5.8}>
          <mesh
            geometry={nodes.Circle.geometry}
            material={nodes.Circle.material}
          />
          <mesh geometry={nodes.Circle_1.geometry} material={materials.Key} />
          <mesh
            geometry={nodes.Circle_2.geometry}
            material={materials.Touchbar}
          />
        </group>
        <group
          ref={topScreen}
          position={[0.01, -0.47, -10.41]}
          rotation={[1.31, 0, 0]}
          scale={5.8}
        >
          <mesh
            geometry={nodes.Circle002.geometry}
            material={nodes.Circle002.material}
          />
          <mesh
            geometry={nodes.Circle002_1.geometry}
            material={materials.Screen}
          />
          <mesh
            geometry={nodes.Circle002_2.geometry}
            material={materials.ScreenGlass}
          />
          <mesh
            geometry={nodes.Circle002_3.geometry}
            material={materials.Rubber}
          />
          <mesh
            geometry={nodes.Circle002_4.geometry}
            material={materials.DisplayGlass}
          />
          <mesh
            geometry={nodes.AppleLogo000.geometry}
            material={materials["AppleLogo.004"]}
            position={[0, -0.11, -1.8]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.58, 0.58, 0.58]}
          />
        </group>
        <group position={[-15.03, 0.03, 0.6]} scale={5.8}>
          <mesh
            geometry={nodes.Circle009.geometry}
            material={nodes.Circle009.material}
          />
          <mesh
            geometry={nodes.Circle009_1.geometry}
            material={nodes.Circle009_1.material}
          />
        </group>
        <group position={[12.2, 0.03, 0.6]} scale={5.8}>
          <mesh
            geometry={nodes.Circle003.geometry}
            material={nodes.Circle003.material}
          />
          <mesh
            geometry={nodes.Circle003_1.geometry}
            material={nodes.Circle003_1.material}
          />
        </group>
      </group>
      {showScreen && loadedImg && (
        <>
          <ScreenLight />
          <LaptopScreen img={loadedImg} />
        </>
      )}
    </group>
  );
};

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf",
);

export default Laptop;
