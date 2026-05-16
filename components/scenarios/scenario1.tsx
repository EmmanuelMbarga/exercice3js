import React from "react";
import FloatingCan from "../floatingCan";
import { Environment } from "@react-three/drei";

type Props = {};

export default function Scenario1({}: Props) {
  return (
    <group>
      <FloatingCan />
      <Environment files={"/hdr/lobby.hdr"} environmentIntensity={1.5} />
    </group>
  );
}
