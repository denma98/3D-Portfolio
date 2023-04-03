import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PC from "./Pc"
import React from "react";


const Figma = () => {
  return (
  
    <Canvas onClick={() => {location.href = "https://www.figma.com/proto/5JAxuBNkHzQmbSAaDseGx7/Hearing-Impaired?node-id=5-47&starting-point-node-id=5%3A47"}} >
        <Stage environment="city" intensity={0.6}>
        <PC/>
          </Stage>
        <OrbitControls enableZoom = {false}/>
    </Canvas>
    );
};

export default Figma;
