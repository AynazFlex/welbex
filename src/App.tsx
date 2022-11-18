import styled from "styled-components";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";

const Wrapper = styled.div`
  max-width: 1140px;
  margin: auto;
`

function App() {
  return (
    <Wrapper>
      <Nav />
      <Header />
    </Wrapper>
  );
}

export default App;
