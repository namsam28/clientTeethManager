"use client";
import {Canvas} from "@react-three/fiber";
import {Grid, OrbitControls} from "@react-three/drei";
import {Leva} from "leva";
import {Perf} from "r3f-perf";
import Light from "@app/scanView/Light";
import Experience from "@app/scanView/Experience";
import ScanTools from "@app/scanView/ScanTools";
import Config from "@config";

function Page() {
  const mode = Config().mode;
  return (
    <div className="relative w-full h-[100vh] bg-gray-100">
      <ScanTools />
      {mode !== "production" && <Leva />}

      <Canvas className="w-full h-full">
        {mode !== "production" && <Perf position="top-right" />}
        <Light />
        <OrbitControls maxZoom={6} minZoom={3} zoomSpeed={0.5} />
        <Experience />
        {mode !== "production" && <Grid cellSize={1} sectionSize={5} infiniteGrid={true} fadeDistance={50} />}
      </Canvas>
    </div>
  );
}

export default Page;
