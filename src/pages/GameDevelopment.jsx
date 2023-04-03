import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import UnityLogo from "./UnityLogo"
import React from "react";


const GameDevelopment = () => {
  return (
      <Canvas>
        <Stage environment="city" intensity={0.6}>
        <UnityLogo/>
          </Stage>
        <OrbitControls enableZoom = {false}/>
    </Canvas>
  )
};

export default GameDevelopment;
