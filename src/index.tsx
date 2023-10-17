import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 62.5%;
        vertical-align: baseline;
    }
  *{
      box-sizing: border-box;
  }
  body{
    background-color: orange;
    margin: 0 auto;
    font-family: 'Nanum Gothic', sans-serif;
    /* font-family: 'Lato', sans-serif; */
  }
  a {
    text-decoration:none;
    color:inherit;
  }
  button{
    cursor: pointer;
  }
  `;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
