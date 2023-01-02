import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  background: #bf3978;
  width: 100%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;

  @keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }

  to {
    -webkit-filter: hue-rotate(360deg);
  }
}
}
`;

export default GlobalStyle;
