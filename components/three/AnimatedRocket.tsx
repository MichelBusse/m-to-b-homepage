import React, { useRef } from "react";
import { Group, BufferGeometry, BufferAttribute } from "three";
import { useFrame } from "@react-three/fiber";
import Model from "./Model";

export default function AnimatedRocket() {
  // Eine Referenz für die Gruppe, damit diese animiert werden kann
  // null! ist ein kleiner TypeScript-Hack,
  // damit wir nicht immer auf null überprüfen müssen, da es garantiert ist,
  // dass die Referenz in useFrame nie null ist
  const group = useRef<Group>(null!);
  const rotation = useRef<Group>(null!);
  const ship = useRef<Group>(null!);

  let timeElapsed = 0;

  useFrame((state, delta) => {
    timeElapsed += delta;
    rotation.current.position.x = 2.8 * Math.sin(timeElapsed);
    rotation.current.position.z = 1 * Math.cos(timeElapsed);
    ship.current.rotation.y = Math.atan2(
      Math.sin(timeElapsed),
      Math.cos(timeElapsed)
    );
    ship.current.rotation.x =
      Math.PI * 0.1 * Math.sin(timeElapsed * 0.5 + Math.PI * 0.5);

    group.current.rotation.z = 0.5 * Math.sin(timeElapsed * 0.5);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      if(particlesGeometry.attributes.position.array[i3 + 1] > Math.random() * -2){
        particlesGeometry.attributes.position.array[i3 + 1] = particlesGeometry.attributes.position.array[i3 + 1] - 0.01
      }else{
        particlesGeometry.attributes.position.array[i3 + 1] = 0
      }
    }
    particlesGeometry.attributes.position.needsUpdate = true;
  });

  const particlesGeometry = new BufferGeometry();
  const count = 20;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i*3

    positions[i3] = (Math.random() - 0.5) * 0.2;
    positions[i3 + 1] = (Math.random()) * 1;
    positions[i3 + 2] = (Math.random() - 0.5) * 0.2;
  }

  particlesGeometry.setAttribute("position", new BufferAttribute(positions, 3));

  return (
    <group ref={group} position={[0, 1.5, 0]} rotation={[0, 0, 0]}>
      <group ref={rotation}>
        <group ref={ship} rotation={[0, Math.PI * 2, 0]}>
          <Model
            path="/models/Rocket.glb"
            rotation={[Math.PI * 0.5, Math.PI * 1, Math.PI * 0.5]}
          />
          <points geometry={particlesGeometry} rotation={[0,0,Math.PI * -0.5]}>
            <pointsMaterial attach="material" size={0.1} color={0xf13b74} sizeAttenuation={true}/>
          </points>
        </group>
      </group>
    </group>
  );
}
