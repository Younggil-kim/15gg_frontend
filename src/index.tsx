import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

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

function reducer(curState: any, action: any) {
 
  if (curState === undefined){
    return{
      login: false,
      nickname: '',
      tier:'',
      rank:'',

    }
  };

  const newState = {...curState};
  if(action.type === 'LOG_IN'){
    newState.login = true;
  }else if (action.type === 'NICKNAME'){
    newState.nickname = action.nickname;
  }
  return newState;
  
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
