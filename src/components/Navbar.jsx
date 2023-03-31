import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    padding: 10px 0px;
    width: 1400px;
    /* background-color: purple; */
    display: flex;
    justify-content: space-between;
`



const Links = styled.div`
display: flex;
align-items: center;
gap: 40px;
`
const Logo = styled.img`
width: 100px;
height: 72px`;

const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;
`;
const ListItem = styled.li``;
const Icons = styled.div`
display: flex;
align-items: center;
gap: 20px;
`;
const Icon = styled.img`
width: 20px;
`;
const Button = styled.button`
width: 100px;
padding: 10px;
cursor: pointer;
border: none;
border-radius: 5px;
background-color: #da4ea2;
`;




export const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            
            <Logo src= "./img/log2.png"/>

            <List>
                <ListItem>Home</ListItem>
                <ListItem>Studio</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
            </List>         
            </Links>
            <Icons>
                <Icon src = "./img/search.png"/>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}
