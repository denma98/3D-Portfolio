import React, { useState } from 'react'
import styled from 'styled-components'
import GameDevelopment from './GameDevelopment';
import Figma from './Figma';
import ComputerArchitecture from './ComputerArchitecture';
import DatabaseManagement from './DatabaseManagement';
const data = [
  "Game Development",
  "Figma",
  "Computer Architecture",
  "Database Management",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  gap: 20px;
  flex-direction: column;
  display: flex

`

const ListItem = styled.li`

  font-size: 67px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px white;
  cursor: pointer;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
    
  }

  &:hover {
    ::after {
      /* both is to keep the color forever */
      animation: moveText 0.5s linear both;  

      @keyframes moveText{
        to{
          width: 100%
        }
      }
    }
  }
`

const Right = styled.div`
  flex: 1;
  
`

export default function Works(){
  const [work, setWork] = useState("Game Development");
  return (
    <Section id = 'Works'>

    <Container>
    
      <Left>

      <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
      </Left>

      <Right>
      {work === "Game Development" ? (
            <GameDevelopment />
          ) : work === "Figma" ? (
            <Figma/>
          ) : work ==="Computer Architecture" ?(
            <ComputerArchitecture/>
          ) : (
            <DatabaseManagement/>
          )
        }
      </Right>
    </Container>

    </Section>
  )
}
