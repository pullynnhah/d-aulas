import styled from "styled-components";
import ControlWrapper from "./ControlWrapper";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppStyled>
        <Header />
        <ControlWrapper />
      </AppStyled>
    </>
  );
}

const AppStyled = styled.div`
  text-align: center;
  font-family: monospace;
`;
