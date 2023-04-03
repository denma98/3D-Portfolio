import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PC from "./Pc"
import React from "react";


const Figma = () => {
  return (
  
    <Canvas >
        <Stage environment="city" intensity={0.6}>
        <PC/>
          </Stage>
        <OrbitControls enableZoom = {false}/>
    </Canvas>
    );
};

export default Figma;
