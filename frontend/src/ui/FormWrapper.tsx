import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 5vh auto;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  div {
    width: 100%;
  }

  button {
    background-color: green;
  }
`;

function FormWrapper({ children }: React.PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}

export default FormWrapper;
