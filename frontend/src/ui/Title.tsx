import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 4rem;
`;

function Title({ children }: React.PropsWithChildren) {
  return <TitleWrapper>{children}</TitleWrapper>;
}

export default Title;
