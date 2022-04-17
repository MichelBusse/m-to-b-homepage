import React, { useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useLoader } from "@react-three/fiber";

export default function Model(props) {
    
  // Eine Referenz zum Logo, damit die Drehung animiert werden kann
  const primitiveRef = useRef<Mesh>(null!);
  
  
  // Ein React Hook, der das Logo aus einer Datei lädt
  const logo = useLoader(GLTFLoader, props.path);
  
  // Das eigentlich Objekt
  return <primitive ref={primitiveRef} object={logo.scene} position={props.position} rotation={props.rotation}/>;
};