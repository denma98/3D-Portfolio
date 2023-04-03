import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cpu from "./Cpu"
import React from "react";

const ComputerArchitecture = () => {
  return (
    
    <Canvas onClick={() => {location.href = "https://github.com/Devank23/CO-Project-Assignment.git"}}>
    <Stage environment="city" intensity={0.6}>
    <Cpu/>
      </Stage>
    <OrbitControls enableZoom = {false}/>
    </Canvas>

    );
};

export default ComputerArchitecture;
