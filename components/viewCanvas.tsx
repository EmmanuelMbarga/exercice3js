"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";


export default function ViewCanvas() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
      shadows
      gl={{ antialias: true }} // ici on evite d'avoir des faux rapports de matériaux par rapport a l'angle de mon objet
      dpr={[1, 1.5]} // ici on utilise un rapport de pixel de l'appareil pour assurer une bonne visibilité de l'object sa valeur est comprise entre 0 et 1.5
      camera={{
        fov: 30, // ici permet de gerer la longueur focale de la camera
      }}
    >
      <View.Port/>
    </Canvas>
  );
}
