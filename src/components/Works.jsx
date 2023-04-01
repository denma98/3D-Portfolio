import React from 'react'
import styled from 'styled-components'

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Social Media",
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

  font-size: 90px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px white;
  cursor: pointer;
  position: relative;

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

export const Works = () => {
  return (
    <Section>

    <Container>
    
      <Left>

        <List>
        {data.map( (item) => {
         return <ListItem key = {item} text = {item}>{item}</ListItem>
        })}
        </List>
      </Left>

      <Right></Right>
    </Container>

    </Section>
  )
}
