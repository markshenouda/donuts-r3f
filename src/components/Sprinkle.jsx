import { useRef, useState, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export default function Model({ z, color }) {
  const { nodes } = useGLTF("/sprinkle-transformed.glb");
  const group = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
  const [data] = useState({
    x: Math.random() * width - width / 2,
    y: Math.random() * height - height / 2,
    rotation: [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI,
    ],
  });
  useFrame(() => {
    if (data.y > height / 1.5) {
      data.y = -height / 2;
    }

    group.current.position.set(data.x, (data.y += 0.1), z);
  });

  return (
    <group ref={group} dispose={null} scale={[0.5, 0.5, 0.5]}>
      <mesh geometry={nodes.Cylinder.geometry} rotation={data.rotation}>
        <meshStandardMaterial
          attach="material"
          color={color}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/sprinkle-transformed.glb");
