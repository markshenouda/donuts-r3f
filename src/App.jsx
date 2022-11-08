import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import World from "@/components/World";

function App() {
  return (
    <Canvas style={{ position: "absolute" }}>
      <Suspense fallback={null}>
        <OrbitControls />
        <World />
      </Suspense>
    </Canvas>
  );
}

export default App;
