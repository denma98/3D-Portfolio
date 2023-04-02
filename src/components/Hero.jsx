import React from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar'
import { OrbitControls,MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  `

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  
  `
const Left = styled.div`
  flex: 2;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Title = styled.h1`
font-size: 74px;


`
const WhatWeDo = styled.div`
display: flex;
gap: 20px;
align-items: center;
`

const Line = styled.img`
height: 5px;

`

const Subtitle = styled.div`
 color: #da4ea2;
 
 `

const Description = styled.div`

`
const Right = styled.div`
  flex: 2;
  position: relative;
`
const Img = styled.img`
  width: 500px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  rigt: 100;
  margin: auto; 
  
  animation: animate 2s infinite ease alternate;

  @keyframes animate{
     to{
      transform: translateY(20px);
     }
  }
`;

const Button = styled.button`
  color: white;
  display: flex;
  width: 100px;
  background-color: #da4ea2;
  border: none;
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
`


export const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
        <Title>Think. Make . Solve</Title>
        
        <WhatWeDo>
        <Line src = "./img/line.png"/>
        <Subtitle>What we do</Subtitle>
        </WhatWeDo>

        <Description>We enjoy creating delightful, human-centered digital experiences.</Description>
        <Button>Learn more</Button>

        </Left>
        
        <Right>

          {/* 3d model here */}

          <Canvas>
            <OrbitControls enableZoom = {false} />
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            
            <Sphere args = {[1,100,200]} scale={2.7}>
            <MeshDistortMaterial

              color= "#220736"
              attach= "material"
              distort={0.5}
              speed={2}

            />
            </Sphere>
         </Canvas>

          <Img 
          
          src = "./img/astronaut.png"/>
        </Right>

      </Container>
      </Section>
  )
}

