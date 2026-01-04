"use client";

import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Float,
  Environment,
  Sparkles,
  useFBX,
  Center,
} from "@react-three/drei";
import * as THREE from "three";

function CrystalModel() {
  const fbx = useFBX("/cryptonit.fbx");
  const meshRef = useRef<THREE.Group>(null);

  useEffect(() => {
    fbx.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.userData.originalMaterial = mesh.material; // Store original if needed
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: "#80ffe5", // Pale cyan/teal for surface
          emissive: "#004030", // Deep green glow
          emissiveIntensity: 0.8,
          roughness: 0.15, // Smooth but not perfect
          metalness: 0.1,
          transmission: 0.95, // Highly transparent glass
          thickness: 3.5, // Volume thickness for absorption
          ior: 2.0, // High refraction (diamond-like)
          attenuationColor: "#00cc99", // Deep teal inside
          attenuationDistance: 1.2,
          clearcoat: 1,
          clearcoatRoughness: 0.1,
          side: THREE.DoubleSide,
        });
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
  }, [fbx]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.z = Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef}>
        <Center>
          {/* Model */}
          <primitive object={fbx} scale={0.01} />
        </Center>
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "400px" }}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={45} />

        <Suspense fallback={null}>
          <CrystalModel />
        </Suspense>

        {/* Floating Particles mimicking "magic dust" */}
        <Sparkles
          count={120}
          scale={8}
          size={3}
          speed={0.3}
          opacity={0.6}
          color="#aaffdd"
        />

        {/* Realistic Studio Environment Reflection */}
        <Environment preset="city" background={false} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
