import styled from "styled-components";
import naverLogin from "../Static/Img/naver_login.png";

const Img = styled.img`
  width: 200px;
  padding: 5px 5px;
  border-radius: 15px;
  /* height: 50px; */
  
`;
function naver() {
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_API_ID}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URL}&state=state`;

  return (
    <a href={NAVER_AUTH_URL}>
      <Img src={naverLogin} alt=""></Img>
    </a>
  );
}

export default naver;
