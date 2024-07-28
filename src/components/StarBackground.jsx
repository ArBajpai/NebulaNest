// src/components/StarryBackground.js
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './StarBackground.css'; // Import CSS

function Stars() {
  const group = useRef();
  const [geo, mat, coords] = useMemo(() => {
    const geo = new THREE.SphereGeometry(0.25, 24, 24);
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color('white') });
    const coords = new Array(5000).fill().map(() => [
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
    ]);
    return [geo, mat, coords];
  }, []);

  useFrame(() => {
    group.current.rotation.x += 0.0005;
    group.current.rotation.y += 0.0005;
  });

  return (
    <group ref={group}>
      {coords.map((p, i) => (
        <mesh key={i} geometry={geo} material={mat} position={p} />
      ))}
    </group>
  );
}

function StarBackground() {
  return (
    <div className="starry-background">
      <Canvas>
        <Stars />
      </Canvas>
    </div>
  );
}

export default StarBackground;

