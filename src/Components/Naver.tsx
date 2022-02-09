import styled from "styled-components";
import naverLogin from "../Static/Img/naver_login.png";

const Img = styled.img`
  width: 200px;
  padding: 5px 5px;
  border-radius: 15px;
  /* height: 50px; */
  
`;
function naver() {
  const CLIENT_ID = "8MVocxz758hUEVmuq0vc";
  const REDIRECT_URI = "http://localhost:3000/naver/callback";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=state`;

  return (
    <a href={NAVER_AUTH_URL}>
      <Img src={naverLogin} alt=""></Img>
    </a>
  );
}

export default naver;
