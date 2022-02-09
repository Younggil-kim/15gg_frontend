import kakao from '../Static/Img/kakao_login_medium_narrow.png'

import styled from "styled-components";

const Img = styled.img`
    width: 100%;
    padding: 5px 5px;
    border-radius : 15px;
    /* height: 50px; */
`
function Kakao(){
    const REST_API_KEY = "8baf17e62026afc0abab98d45ac8c200"
    const REDIRECT_URI = "https://localhost:3000/oauth"
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return(
        <a href={KAKAO_AUTH_URL}>
            <Img src={kakao} alt=""></Img>
        </a>
       
    )

}

export default Kakao;