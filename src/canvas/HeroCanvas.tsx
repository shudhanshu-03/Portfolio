import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Animated particle field
function ParticleField() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 3000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.04;
      ref.current.rotation.y = state.clock.elapsedTime * 0.06;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7c3aed"
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

// Floating geometric shape
function FloatingMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const meshRef2 = useRef<THREE.Mesh>(null!);
  const meshRef3 = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3;
      meshRef.current.rotation.y = t * 0.4;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = -t * 0.2;
      meshRef2.current.rotation.z = t * 0.3;
      meshRef2.current.position.x = Math.sin(t * 0.4) * 0.2 + 2.5;
      meshRef2.current.position.y = Math.cos(t * 0.3) * 0.3 - 1;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.y = t * 0.5;
      meshRef3.current.rotation.z = t * 0.2;
      meshRef3.current.position.x = Math.cos(t * 0.3) * 0.2 - 2.5;
      meshRef3.current.position.y = Math.sin(t * 0.4) * 0.3 + 0.5;
    }
  });

  return (
    <>
      {/* Central icosahedron */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#7c3aed"
          wireframe
          transparent
          opacity={0.25}
          emissive="#7c3aed"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Right tetrahedron */}
      <mesh ref={meshRef2} position={[2.5, -1, -1]}>
        <tetrahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.35}
          emissive="#06b6d4"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Left octahedron */}
      <mesh ref={meshRef3} position={[-2.5, 0.5, -1]}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#a855f7"
          wireframe
          transparent
          opacity={0.35}
          emissive="#a855f7"
          emissiveIntensity={0.3}
        />
      </mesh>
    </>
  );
}

const HeroCanvas: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#7c3aed" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#06b6d4" />
      <ParticleField />
      <FloatingMesh />
    </Canvas>
  );
};

export default HeroCanvas;
