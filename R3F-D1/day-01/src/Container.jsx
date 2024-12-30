import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Environment, BakeShadows, useHelper, OrbitControls } from "@react-three/drei";
import * as THREE from "three";


const Container = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  }, []);
  const { performance } = useControls("performance of the system", {
    performance: true,
  });

  const { position, color, visible } = useControls("Sphere", {
    position: {
      value: { x: -2, y: 0 },
      step: { x: 0.1, y: 0.1 }, // Set steps for x and y individually
      label: "Position",
    },
    color: {
      value: "rgb(255,255,255)", // Default color
      label: "Color",
    },
    visible: {
      value: true,
      label: "Visible",
    },
  });

  const { scale, choice } = useControls("Cube", {
    scale: {
      value: { x: 1.5, y: 1.5, z: 1.5 },
      step: { x: 0.1, y: 0.1, z: 0.1 }, // Set steps for x, y, and z individually
      label: "Scale",
    },
    choice: {
      value: "mediumpurple",
      options: ["blue", "pink", "purple", "green"],
      label: "Choice",
    },
  });

  const cubeRef = useRef();
  const groupRef = useRef();

  return (
    <>
      <Environment
        // background
        preset='sunset'
        ground={{
          height: 7,
          radius: 28,
          scale:100
        }}
        // files={'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/goegap_road_1k.hdr'}
        >
        {/* <mesh position-z={-5} scale={10}>
        <planeGeometry/>
        <meshBasicMaterial color="red"/>
        </mesh> */}
      </Environment>
      

      <BakeShadows />
      <color args={["ivory"]} attach="background" />
      {performance ? <Perf position="top-left" /> : null}
      {/* Orbit Controls */}
      <OrbitControls makeDefault />

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight
        ref={directionalLightRef}
        position={[4, 2, 2]}
        castShadow
        intensity={1}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near = {1}
        shadow-camera-far = {20}
        shadow-camera-top = {5}
        shadow-camera-right = {5}
        shadow-camera-left = {-5}
        shadow-camera-bottom = {-5}

      />

      {/* Group of Sphere and Rotating Cube */}
      <group ref={groupRef}>
        {/* Static Sphere */}
        <mesh
          castShadow
          position-y={1}
          position={[position.x, position.y, 0] }
          visible={visible}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>

        {/* Rotating Cube */}
        <mesh
          castShadow
          ref={cubeRef}
          
          position={[2, 1, 0]}
          scale={[scale.x, scale.y, scale.z]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={choice} />
        </mesh>
      </group>

      {/* Ground Plane */}
      {/* <mesh
        receiveShadow
        rotation={[-Math.PI * 0.5, 0, 0]}
        position={[0, -1, 0]}
        scale={10}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="green" />
      </mesh> */}
    </>
  );
};

export default Container;
