import styled from "styled-components"
import Contact from "./pages/Contact";
import Who from "./pages/Who";
import Works from "./pages/Works";
import Hero from './pages/Hero'
import { Navbar } from "./components/Navbar";

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type:y mandatory;
  scroll-snap-align: start;

  scroll-behavior: smooth;
  overflow-y:auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
    <Hero/>
    <Who/>
    <Works/>
    <Contact/>
    </Container>
  
  )
}

export default App
