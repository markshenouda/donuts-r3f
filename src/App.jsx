import { Suspense } from "react";
// import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import World from "@/components/World";
// import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";

function App() {
  return (
    <>
      {/* <VRButton /> */}
      <Canvas style={{ position: "absolute" }}>
        <Suspense fallback={null}>
          {/* <OrbitControls /> */}
          {/* <XR>
            <Controllers />
            <Hands />
            <World />
          </XR> */}
          <World />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
