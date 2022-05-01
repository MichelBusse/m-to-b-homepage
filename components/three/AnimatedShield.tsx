import React, { useRef } from "react";
import { Group } from "three";
import Model from "./Model";

export default function AnimatedShield() {

  return (
    <group
      position={[1, 1, 0.25]}
      rotation={[0, Math.PI * -0.5, Math.PI * 0.05]}
    >
      <group rotation={[-0.1,0,0]}>
        <Model path="/models/Shield.glb" />
      </group>
    </group>
  );
}
