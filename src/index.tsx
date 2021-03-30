import * as React from "react";
import { render } from "react-dom";
import CurrencyConverter from "./converter/converter";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body {
    background-color: #f0f0f0;
    font-family: Circular Pro, Arial, sans-serif !important;
    color: #4a4848;
}
`;

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <CurrencyConverter />
  </>
);

render(<App />, document.getElementById("app"));
