import styled from "styled-components";
import { PurpleBall, PurpleLightBall, RedBall, RedBall_2, RedBall_3 } from "./components/Background";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";

const Wrapper = styled.div`
  position: relative;
  max-width: 1140px;
  margin: 0 auto 0 auto;
`

function App() {
  return (
    <Wrapper>
      <Nav />
      <Header />
      <Footer />
      <PurpleBall />
      <RedBall />
      <RedBall_2 />
      <PurpleLightBall />
      <RedBall_3 />
    </Wrapper>
  );
}

export default App;
