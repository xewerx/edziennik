import React from "react";
import styled from "styled-components";
import Router from "./components/Router";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #a1c2e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Router isUserAuthenticated={false} />
    </Container>
  );
}

export default App;
