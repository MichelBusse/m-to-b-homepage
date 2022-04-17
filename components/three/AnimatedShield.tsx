import React, { useRef } from "react";
import { Group } from "three";
import Model from "./Model";

export default function AnimatedShield() {
  // Eine Referenz für die Gruppe, damit diese animiert werden kann
  // null! ist ein kleiner TypeScript-Hack,
  // damit wir nicht immer auf null überprüfen müssen, da es garantiert ist,
  // dass die Referenz in useFrame nie null ist
  const shield = useRef<Group>(null!);

  // Die Rotationsgeschwindigkeit, die in jedem Frame verringert wird
  let timeElapsed = 0;


  return (
    <group
      position={[1, 1, 0.25]}
      rotation={[0, Math.PI * -0.5, Math.PI * 0.05]}
    >
      <group ref={shield} rotation={[-0.1,0,0]}>
        <Model path="/models/Shield.glb" />
      </group>
    </group>
  );
}
