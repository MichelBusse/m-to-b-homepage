import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Model from "./Model";
import { BufferAttribute, BufferGeometry, Group } from "three";

export default function AnimatedRocket() {
  const group = useRef<Group>(null);
  const rotation = useRef<Group>(null);
  const ship = useRef<Group>(null);

  let timeElapsed = 0;
  const particlesGeometry = new BufferGeometry();
  const count = 20;
  const positions = new Float32Array(count * 3);

  useFrame((state, delta) => {
    if (!rotation.current || !ship.current || !group.current) return;

    timeElapsed += delta;
    rotation.current.position.x = 1.3 * Math.sin(timeElapsed + 0.5);
    rotation.current.position.z = 1.3 * Math.cos(timeElapsed + 0.5);
    ship.current.rotation.y = Math.atan2(
      Math.sin(timeElapsed),
      Math.cos(timeElapsed)
    );
    ship.current.rotation.x =
      Math.PI * 0.1 * Math.sin(timeElapsed * 0.5 + Math.PI * 0.5);

    group.current.rotation.z = 0.5 * Math.sin(timeElapsed * 0.5);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      if (
        particlesGeometry.attributes.position.array[i3 + 1] >
        Math.random() * -2
      ) {
        positions[i3 + 1] = positions[i3 + 1] - 0.01;
      } else {
        positions[i3 + 1] = 0;
      }
    }
    particlesGeometry.attributes.position.needsUpdate = true;
  });

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    positions[i3] = (Math.random() - 0.5) * 0.2;
    positions[i3 + 1] = Math.random() * 1;
    positions[i3 + 2] = (Math.random() - 0.5) * 0.2;
  }

  return (
    <group ref={group} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <group ref={rotation}>
        <group ref={ship} rotation={[0, Math.PI * 2, 0]}>
          <Model
            path="/models/Rocket.glb"
            rotation={[Math.PI * 0.5, Math.PI * 1, Math.PI * 0.5]}
            scale={[0.7, 0.7, 0.7]}
          />
          <points
            geometry={particlesGeometry}
            rotation={[0, 0, Math.PI * -0.5]}
          >
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                array={positions}
                itemSize={3}
              />
            </bufferGeometry>
            <pointsMaterial
              attach="material"
              size={0.1}
              color={0xf13b74}
              sizeAttenuation={true}
            />
          </points>
        </group>
      </group>
    </group>
  );
}
