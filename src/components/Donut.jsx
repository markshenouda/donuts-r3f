import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import { MathUtils } from "three";

export default function Model() {
  const group = useRef();
  const group2 = useRef();
  const { nodes, materials } = useGLTF("/donut-v1.glb");
  useFrame(() => {
    group.current.rotation.y += 0.02;
    group2.current.rotation.z += 0.008;
  });
  materials.Donut.roughness = 0.5;
  return (
    <group position={[0, -0.1, 4]} ref={group} rotation={[0, -0.2, 0]}>
      <group rotation={[-Math.PI / 6, 0, 0]} ref={group2}>
        <mesh geometry={nodes.Donut_1.geometry} material={materials.Donut} />
      </group>
    </group>
  );
}

useGLTF.preload("/donut-v1.glb");
