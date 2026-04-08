import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function GlowOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.04;
      meshRef.current.scale.setScalar(s);
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]}>
      <MeshDistortMaterial
        color="#7c3aed"
        attach="material"
        distort={0.45}
        speed={2.5}
        roughness={0.1}
        metalness={0.2}
        transparent
        opacity={0.18}
        wireframe={false}
      />
    </Sphere>
  );
}

const ContactOrb: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#7c3aed" />
      <pointLight position={[-3, -3, 3]} intensity={1} color="#06b6d4" />
      <GlowOrb />
    </Canvas>
  );
};

export default ContactOrb;
