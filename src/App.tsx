import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto 0 auto;
`

function App() {
  return (
    <Wrapper>
      <Nav />
      <Header />
      <Footer />
    </Wrapper>
  );
}

export default App;
