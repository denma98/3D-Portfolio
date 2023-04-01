import React from 'react'
import styled from 'styled-components'




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
  flex:1;
 
`
const Right = styled.div`
  flex: 1;
  display: flex;
  
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
 

const Button = styled.button`
  color: white;
  display: flex;
  width: 120px;
  background-color: #da4ea2;
  border: none;
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
`


export const Who = () => {
  return (
    <Section>
      
      <Container>
        <Left>
          {/* 3d model */}
        </Left>

        <Right>

        <Title>Think outside the square space</Title>
        
        <WhatWeDo>
        <Line src = "./img/line.png"/>
        <Subtitle>who we are</Subtitle>
        </WhatWeDo>

        <Description>a creative group of designers and developers with a passion for the arts.</Description>
        <Button>See our works</Button>

        </Right>

      </Container>
      </Section>
  )
}

