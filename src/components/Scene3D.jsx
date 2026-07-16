/* eslint-disable react/no-unknown-property -- react-three-fiber uses three.js props (args, position, intensity) */
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

/**
 * A distorted, slowly morphing gradient orb that gently follows the cursor,
 * wrapped in floating sparkles. Fully self-contained (no external assets).
 * Mouse tracking uses a window listener (not canvas pointer events) so the
 * canvas can stay pointer-events:none and never block clicks.
 */
function Orb() {
  const mesh = useRef();
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  useFrame(() => {
    if (!mesh.current) return;
    const { x, y } = pointer.current; // -1..1
    mesh.current.rotation.y += 0.0035;
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, y * 0.35, 0.04);
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, x * 0.6, 0.04);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, y * 0.3, 0.04);
  });

  return (
    <Float speed={1.6} rotationIntensity={0.9} floatIntensity={1.4}>
      <mesh ref={mesh} scale={1.35}>
        <icosahedronGeometry args={[1.4, 32]} />
        <MeshDistortMaterial
          color="#4f46e5"
          emissive="#0ea5e9"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.65}
          distort={0.45}
          speed={2.2}
        />
      </mesh>
    </Float>
  );
}

const Scene3D = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 4]} intensity={1.6} color="#a5b4fc" />
      <pointLight position={[-4, -2, 2]} intensity={2.2} color="#22d3ee" />
      <pointLight position={[3, -3, -2]} intensity={1.4} color="#34d399" />
      <Orb />
      <Sparkles count={70} scale={7} size={2.2} speed={0.4} opacity={0.7} color="#7dd3fc" />
    </Canvas>
  );
};

export default Scene3D;
