import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import UnityLogo from "./UnityLogo"
import React from "react";


const GameDevelopment = () => {
  return (
      <Canvas onClick={() => {location.href = "https://learn.unity.com/u/62ad75e1edbc2a4e10af695f?tab=profile"}}>
        <Stage environment="city" intensity={0.6}>
        <UnityLogo/>
          </Stage>
        <OrbitControls enableZoom = {false}/>
    </Canvas>
  )
};

export default GameDevelopment;
