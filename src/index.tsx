import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import { Provider } from "react-redux";

import App from "./App";
import Reducers from "./Reducers";
import { createStore } from "redux";

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

`;
const store = createStore(Reducers)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
