import React, { useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useLoader } from "@react-three/fiber";

type Props = {
  path: string,
  position?:  number[],
  rotation?: number[],
  scale?: number[],
}

export default function Model(props: Props) {
  const logo = useLoader(GLTFLoader, props.path);
  
  return <primitive object={logo.scene} position={props.position} rotation={props.rotation} scale={props.scale}/>;
};