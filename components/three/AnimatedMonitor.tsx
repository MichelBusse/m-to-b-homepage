import React, { useRef } from "react";
import { Group } from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { PlainAnimator } from "three-plain-animator";
import { TextureLoader } from 'three/src/loaders/TextureLoader'


export default function AnimatedMonitor() {
  const group = useRef<Group>(null!);


  const texturePath =  '/images/textures/monitorSprite.png'
  
  const spriteTexture = useLoader(TextureLoader, texturePath)

  const animator =  new PlainAnimator(spriteTexture, 5, 6, 26, 10);

  const texture = animator.init();

  useFrame((state, delta) => {
    animator.animate();
  });

  return (
    <group ref={group} rotation={[Math.PI * -0.055,0,0]} position={[0,1.97,0.01]}>
      <mesh>
        <planeGeometry args={[3.5,1.75]}/>
        <meshBasicMaterial map={texture} color={"#999999"}/>
      </mesh>
    </group>
  );
}
