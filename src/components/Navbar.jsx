import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`

    width: 1400px;
    background-color: purple;
`

// const Links = styled.div`

//     width: 1400px;
//     background-color: purple;
// `
// const Search = styled.div`

//     width: 1400px;
//     background-color: purple;
// `

const Links = styled.div``;
const Logo = styled.img``;
const List = styled.ul``;
const ListItem = styled.li``;
const Icons = styled.div``;
const Icon = styled.img``;
const Button = styled.button``;




export const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            
            <Logo src= "./img/log1.png"/>

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
