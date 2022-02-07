
import ShowName from './Page/showName';
import Regeister from './Page/Register'
import Main from './Page/Main';
import "./Static/Font/font.css";
import Login from './Page/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Chatting from './Page/Chatting';
import MyInfo from './Page/MyInfo';

function App() {
  return (
    <Router>
      <Header login={false} nickname="방패 주워주세요" tier="Gold 2"/>
      
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/chatting" element={<Chatting />}></Route>
        <Route path="/register" element={<Regeister />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/myinfo" element={<MyInfo />}></Route>
    
      </Routes>

    </Router>
  );
}

export default App;