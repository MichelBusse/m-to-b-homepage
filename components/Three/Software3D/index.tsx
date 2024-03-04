import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MouseMoveAnimation from "../MouseMoveAnimation";
import BackgroundParticles from "../BackgroundParticles";
import { Group } from "three";

export default function Software3D() {
  const rotationGroup = useRef<Group>(null);

  return (
    <Canvas camera={{ fov: 45, position: [4, 0, 4] }} style={{backgroundColor: 'transparent'}}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[-2, 3, 3]} intensity={0.5} />
      <Suspense fallback={null}>
        <MouseMoveAnimation groupRef={rotationGroup}>
          <group ref={rotationGroup}>
            <BackgroundParticles count={1400} />
          </group>
        </MouseMoveAnimation>
      </Suspense>
    </Canvas>
  );
}
