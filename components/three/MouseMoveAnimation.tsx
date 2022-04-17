import React, { useEffect, useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

export default function MouseMoveAnimation(props) {
  // Eine Referenz für die Gruppe, damit diese animiert werden kann
  // null! ist ein kleiner TypeScript-Hack,
  // damit wir nicht immer auf null überprüfen müssen, da es garantiert ist,
  // dass die Referenz in useFrame nie null ist

  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Die Rotationsgeschwindigkeit, die in jedem Frame verringert wird
  let timeElapsed = 0;

  useEffect(() => {
    const mousemove = (e) => {
      setPosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  });

  useFrame((state, delta) => {
    props.groupRef.current.rotation.order = "YXZ";

    state.camera.position.y +=
      (-(position.y * 2) + 2 - state.camera.position.y) * 0.05;
    state.camera.position.x +=
      ((position.x * 2) + 2 - state.camera.position.x) * 0.05;
    props.groupRef.current.rotation.z = 0;
    state.camera.lookAt(new Vector3(0, 0, 0));
  });

  return <>{props.children}</>;
}
