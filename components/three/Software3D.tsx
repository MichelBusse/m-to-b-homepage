import { Suspense, useRef } from "react";
import { Group } from "three";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import AnimatedRocket from "./AnimatedRocket";
import AnimatedShield from "./AnimatedShield";
import AnimatedMonitor from "./AnimatedMonitor";
import AnimatedPencil from "./AnimatedPencil";
import BackgroundParticles from "./BackgroundParticles";
import MouseMoveAnimation from "./MouseMoveAnimation";

export default function Software3D() {
  const rotationGroup = useRef<Group>(null!);

  return (
    <Canvas camera={{ fov: 45, position: [6, 1.5, 6] }}>
      <group ref={rotationGroup}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[-2, 3, 3]} intensity={0.5} />
        <Suspense fallback={null}>
          <MouseMoveAnimation groupRef={rotationGroup}>
            <group position={[0, -1.6, 0]}>
              <Model
                path="/models/Monitor.glb"
                position={[0, 0, 0]}
                rotation={[0, Math.PI * -0.5, 0]}
              />
              <Model
                path="/models/Tablet.glb"
                position={[-1.2, 0, 0.7]}
                rotation={[0, Math.PI * -0.3, 0]}
              />
              <AnimatedPencil />
              <AnimatedRocket />
              <AnimatedMonitor />
            </group>
          </MouseMoveAnimation>
        </Suspense>
      </group>
    </Canvas>
  );
}
