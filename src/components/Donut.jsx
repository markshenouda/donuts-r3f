import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/donut-v1.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0.71, 0.13, 1.07]}
            rotation={[-Math.PI / 2, 0, 2.7]}
          >
            <mesh
              geometry={nodes.Donut_1.geometry}
              material={materials.Donut}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/donut-v1.glb");
