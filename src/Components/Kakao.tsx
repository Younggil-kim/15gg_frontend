import kakao from '../Static/Img/kakao_login_medium_narrow.png'

import styled from "styled-components";

const Img = styled.img`
    width: 100%;
    padding: 5px 5px;
    border-radius : 15px;
    /* height: 50px; */
`
function Kakao(){
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}&response_type=code`;

    return(
        <a href={KAKAO_AUTH_URL}>
            <Img src={kakao} alt=""></Img>
        </a>
       
    )

}

export default Kakao;