import Donut from "@/components/Donut";
import Sprinkle from "@/components/Sprinkle";
const RANDOM_COLOR = ["red", "orange", "lightblue", "violet"];
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

const randomColor = () => {
  return RANDOM_COLOR[Math.floor(Math.random() * RANDOM_COLOR.length)];
};

function World() {
  return (
    <>
      {/* Lights */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <color attach="background" args={["rgb(249, 248, 185)"]} />

      {/* Objects */}
      <Donut />
      {/* <Sprinkle /> */}
      {Array.from({ length: 200 }).map((_, i) => {
        const color = randomColor();
        return <Sprinkle key={i} z={-i * 0.1 - 10} color={color} />;
      })}

      {/* Post Processing */}
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
      </EffectComposer>
    </>
  );
}

export default World;
