import React, { MutableRefObject, PropsWithChildren, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

type Props = {
  groupRef : MutableRefObject<Group>
}

export default function MouseMoveAnimation(props : PropsWithChildren<Props>) {
  // Eine Referenz für die Gruppe, damit diese animiert werden kann
  // null! ist ein kleiner TypeScript-Hack,
  // damit wir nicht immer auf null überprüfen müssen, da es garantiert ist,
  // dass die Referenz in useFrame nie null ist

  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Die Rotationsgeschwindigkeit, die in jedem Frame verringert wird
  let timeElapsed = 0;

  useEffect(() => {
    const mousemove = (e : MouseEvent) => {
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

    props.groupRef.current.rotation.x = props.groupRef.current.rotation.x + (position.y + 0.7 - props.groupRef.current.rotation.x) * delta * 4;
    props.groupRef.current.rotation.y = props.groupRef.current.rotation.y + (position.x + 0.7 - props.groupRef.current.rotation.y) * delta * 4;
  });

  return <>{props.children}</>;
}
