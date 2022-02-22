import { Link } from "react-router-dom";
// import "../static/font/font.css";
import sitelogo from "../Static/Img/sitelogo.png";
import styled from "styled-components";
import { useSelector } from "react-redux";

interface headerProps {
  login: boolean;
  nickname: string;
  tier: string;
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 8px 12px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: white;
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;
const Li = styled.li`
  padding: 8px 12px;
`;

function Header({ login, nickname, tier }: headerProps) {
  const isLogin = useSelector((state: any) => state.login);
  const nick = useSelector((state:any) => state.nickname);
  console.log(isLogin)
  return (
    <Nav>
      <Div>
        <Link to={"/"}>
          <img
            src={sitelogo}
            alt=""
            style={{ width: 36, height: 36, marginRight: 10 }}
          ></img>
        </Link>
        <Link to={"/"}>듀오&듀오</Link>
      </Div>

      <Ul>
        <Li>
          {isLogin ? (
            <Link to={"/myinfo"}>{nick}</Link>
          ) : (
            <Link to={"/login"}>로그인</Link>
          )}
        </Li>
        <Li>
          {isLogin ? (
            <Link to={"/myinfo"}>내 정보 수정</Link>
          ) : (
            null
          )}
        </Li>
        <Li>{isLogin ? <Link to={""}>로그아웃</Link> : <Link to={"/register"}>회원가입</Link>}</Li>
      </Ul>
    </Nav>
  );
}
export default Header;
