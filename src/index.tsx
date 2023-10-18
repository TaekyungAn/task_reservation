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
        vertical-align: baseline;
    }
    html{
      font-size: 62.5%;
    }
  *{
      box-sizing: border-box;
  }
  body{
    background-color: orange;
    margin: 0 auto;
    /* font-family: 'Nanum Gothic', sans-serif; */
    font-family: 'Lato', sans-serif;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
  button{
    outline: 0;
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 5px 0px;
    border-radius: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0, 0, 0, 0.05) 64%, rgba(0, 0, 0, 0.07) 98%);;
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
