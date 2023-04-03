import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Data from "./Data"
import React from "react";

const DatabaseManagement = () => {
  return (
  
    <Canvas onClick={() => {location.href = "https://github.com/denma98/DBMS_Project.git"}}>
        <Stage environment="city" intensity={0.6}>
        <Data/>
          </Stage>
        <OrbitControls enableZoom = {false}/>
    </Canvas>
    );
};

export default DatabaseManagement;
