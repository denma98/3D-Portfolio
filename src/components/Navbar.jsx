import React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  padding: 10px 0px;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  scroll-snap-align: start;

`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

const Logo = styled.img`
  width: 120px;
  height: 86px;
`

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`

const ListItem = styled.li`
  cursor: pointer;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Icon = styled.img`
  width: 20px;
`

const Button1 = styled.button`
  width: 100px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #171515;
  color: white;
`

const Button = styled.button`
  width: 100px;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  color: black;
  position: relative;
`;


const scrollToSection = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};



export const Navbar = () => {
  

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/log2.png" alt="Logo" />
          <List>
          <ListItem onClick={() => scrollToSection('#Hero')}>Home</ListItem>
          <ListItem onClick={() => scrollToSection('#Who')}>Studio</ListItem>
          <ListItem onClick={() => scrollToSection('#Works')}>Works</ListItem>
          <ListItem onClick={() => scrollToSection('#Contact')}>Contact</ListItem>

          </List>
        </Links>
        <Icons>
          <Button1>
            <Icon src="./img/git.png" alt="Github Logo" />
            Github
          </Button1>
          <Button>
            <Icon src="./img/twit.png" alt="Twitter Logo" />
            Twitter
          </Button>
        </Icons>
      </Container>
    </Section>
  )
}
