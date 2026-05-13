import { Canvas } from "@react-three/fiber";

export default function ViewCanvas() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </Canvas>
  );
}
