import React, { useEffect } from "react";
import Regeister from "./Page/Register";
import Main from "./Page/Main";
import "./Static/Font/font.css";
import Login from "./Page/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Chatting from "./Page/Chatting";
import MyInfo from "./Page/MyInfo";
import Nickname from "./Page/Nickname";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function App() {
  const nickname = useSelector((state: any) => state.nickname);
  const isLogin = useSelector((state: any) => state.login);
  const STATUS_URL = `/auth/status`;
  const dispatch = useDispatch();
  const setData = async () => {
    try {
      if (sessionStorage.getItem("nickname") !== null){
        dispatch({ type: "LOG_IN" });
        dispatch({ type: "NICKNAME", nickname: sessionStorage.getItem("nickname") });
      }else{
        
        const res = await axios
          .get(STATUS_URL, { withCredentials: true })
          .then((res) => {
            dispatch({ type: "LOG_IN" });
            dispatch({ type: "NICKNAME", nickname: res.data.data });
          });
      }
    } catch (e) {

      dispatch({type: "LOG_OUT"})
    }
  };

  useEffect(() => {
    // /auth/status
    setData();
    //
  }, []);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/chatting" element={<Chatting />}></Route>
        <Route path="/register" element={<Regeister />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/myinfo" element={<MyInfo />}></Route>
        <Route path="/nickName" element={<Nickname />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
