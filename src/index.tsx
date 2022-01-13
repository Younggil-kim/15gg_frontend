import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from "styled-components";
import App from './App';
const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    
}

*{
    font-family: "maple";
    box-sizing: border-box;
}
a {
    text-decoration: none;
    color: black;
}

`
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
