import { Float } from "@react-three/drei";
import { SodaCan, sodaCanProps } from "./sodaCan";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";

type FloatingCanProps = {
  flavor?: sodaCanProps["flavor"];
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  floatSpeed?: number;
  children?: ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1,
      rotationIntensity = 4,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
            {children}
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  },
);

export default FloatingCan;
