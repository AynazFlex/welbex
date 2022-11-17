import styled from "styled-components";
import Nav from "./components/Navbar/Nav";

const Wrapper = styled.div`
  max-width: 1140px;
  margin: auto;
`

function App() {
  return (
    <Wrapper>
      <Nav />
    </Wrapper>
  );
}

export default App;
