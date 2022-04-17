import React, { useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import Model from "./Model";

export default function AnimatedPencil() {
  // Eine Referenz für die Gruppe, damit diese animiert werden kann
  // null! ist ein kleiner TypeScript-Hack,
  // damit wir nicht immer auf null überprüfen müssen, da es garantiert ist,
  // dass die Referenz in useFrame nie null ist
  const shield = useRef<Group>(null!);

  // Die Rotationsgeschwindigkeit, die in jedem Frame verringert wird
  let timeElapsed = 0;

  // Jeden Frame wird die Gruppe animiert
  useFrame((state, delta) => {
    timeElapsed += delta;
    shield.current.position.x -= 0.005 * Math.sin(timeElapsed * 4);
    shield.current.position.z -= 0.005 * Math.cos(timeElapsed * 1.5);
    shield.current.rotation.x -= 0.005 * Math.sin(timeElapsed * 4);

  });

  return (
    <group
      position={[-1, 0.2, 1]}
      rotation={[0, Math.PI * 1.8, Math.PI * 0.1]}
    >
      <group ref={shield}>
        <Model path="/models/Pencil.glb"/>
      </group>
    </group>
  );
}
