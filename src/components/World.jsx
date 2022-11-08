import Donut from "@/components/Donut";

function World() {
  return (
    <>
      {/* Lights */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {/* Objects */}
      <Donut />
    </>
  );
}

export default World;
