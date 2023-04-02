import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import Map from "./Map"
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px
  
`

const Left = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
`


const Title = styled.h1`
  font-weight: 200;
`

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Right = styled.div`
flex: 1;
`
const Input = styled.input`


padding: 20px;
background-color: #D3D3D3;
border: none;
border-radius: 5px;


`

const TextArea = styled.textarea`

padding: 20px;
background-color: #D3D3D3;
border: none;
border-radius: 5px;

`

const Button = styled.button`
background-color: #da4ea2;
border: none;
border-radius: 5px;
padding: 20px;
color: white;
cursor: pointer;
`



export const Contact = () => {

  const ref = useRef()

  const [success, setSuccess] = useState(null);

  const handleSubmit =e=> {
  e.preventDefault();


  emailjs.sendForm('service_emfb5zn', 'template_7lxu8t9', ref.current, 'RoFg8Jcz2FfDbW2tf')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });
};


  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Lets Connect</Title>
            <Input placeholder= "Name" name ="Uname" />
            <Input placeholder= "Email" name = "email"/>
            <TextArea placeholder= "Write your message here" name = "message" rows = {10}/>
            <Button type='submit'>Send</Button>
            {success && "Your message has been successfully sent. I'll get back to you soon ㋡"}
          </Form>
        </Left>

        <Right>
        <Map/>
        </Right>
      </Container>
    </Section>
  )
}
/* 53:00 */