import React from "react";
import styled from "styled-components";
import Router from "./components/Router";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #a1c2e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const user = useSelector((state: RootState) => state.userState.user);

  return (
    <Container>
      <Router isUserAuthenticated={Boolean(user)} userType={user?.userType} />
    </Container>
  );
}

export default App;
