import styled from "styled-components"
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Contact from "./pages/Contact";
import Who from "./pages/Who";
import Works from "./pages/Works";
import Hero from './pages/Hero'

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mand atory;
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
    <BrowserRouter>
      <Routes>
          <Route exact path="/" Component={Hero} />
          <Route path="/who" Component={Who} />
          <Route path="/works" Component={Works} />
          <Route path="/contact" Component={Contact} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
