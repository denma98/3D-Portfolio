import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { OrbitControls,MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

// const OContainer = styled.div`
//   height: 100vh;
//   background-color: rebeccapurple;
//   color: white;
//   background: url("./img/bg.jpeg");
//   &::-webkit-scrollbar{
//     display: none;
//   }
// `

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
  font-family: Cursive;
  /* gap : 10px; */
`;

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

const scrollToSection = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


export default function  Hero(){
  return (<>
    <Navbar/>
    
    <Section id='Hero'>
      <Container>
        <Left>
        <Title>Hi there! I'm Denma</Title>
        
        <WhatWeDo>
        <Line src = "./img/line.png"/>
        <Subtitle>What I do</Subtitle>
        </WhatWeDo>

        <Description> 
        I am a multi-disciplinary developer with experience in designing, web development, programming, and game development. I enjoy creating interactive and visually appealing projects that are both functional and aesthetically pleasing.
        </Description>
        <Button onClick={() => scrollToSection('#Who')}>Learn more</Button>

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
          
          src = "./img/astronaut1.png"/>
        </Right>

      </Container>
      </Section>
      </>
  )
}

