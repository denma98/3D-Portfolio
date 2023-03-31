import React from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar'



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

`
const Right = styled.div`

`
const Title = styled.h1`

`
const WhatWeDo = styled.div`

`
const Line = styled.div`

`

const Subtitle = styled.div`

`
const Description = styled.div`

`
const Button = styled.div`

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

          <img 
          width={750} height= {750}
          src = "./img/111.png"/>
        </Right>

      </Container>
      </Section>
  )
}

