import React, { useRef } from "react";
import { Group, BufferGeometry, BufferAttribute } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function BackgroundParticles() {
  // Eine Referenz für die Gruppe, damit diese animiert werden kann
  // null! ist ein kleiner TypeScript-Hack,
  // damit wir nicht immer auf null überprüfen müssen, da es garantiert ist,
  // dass die Referenz in useFrame nie null ist
  const group = useRef<Group>(null!);

  const texturePath =  '/images/textures/heightmap.png'
  
  const heightmap = useLoader(TextureLoader, texturePath)


  const particlesGeometry = new BufferGeometry();
  const count = 500;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    const randX = Math.random() - 0.5
    const randY = Math.random() * 0.5
    const randZ = Math.random() - 0.5

    const length = Math.sqrt(randX * randX + randY * randY + randZ * randZ)

    positions[i3] = randX / length * 12;
    positions[i3 + 1] = randY / length * 12;
    positions[i3 + 2] = randZ / length * 12;
  }

  particlesGeometry.setAttribute("position", new BufferAttribute(positions, 3));

  return (
    <>
      <group ref={group} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <mesh rotation={[Math.PI * 0.5, 0, 0]} position={[0, -1.65, 0]}>
          <planeGeometry args={[20, 20, 100, 100]} />
          <meshStandardMaterial wireframe={true} displacementMap={heightmap} displacementScale={1}/>
        </mesh>
        <points geometry={particlesGeometry} position={[0, -1.65, 0]}>
          <pointsMaterial
            attach="material"
            size={0.1}
            color={0xffffff}
            sizeAttenuation={true}
          />
        </points>
      </group>
    </>
  );
}

/*

<points geometry={particlesGeometry} rotation={[0, 0, Math.PI * -0.5]}>
          <pointsMaterial
            attach="material"
            size={0.05}
            color={0x020024}
            sizeAttenuation={true}
          />
        </points>
        */
