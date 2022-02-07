

function Kakao(){
    const REST_API_KEY = "8baf17e62026afc0abab98d45ac8c200"
    const REDIRECT_URI = "https://localhost:3000/oauth"
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return(
        <h1>
            <a href={KAKAO_AUTH_URL}>Kakao Login</a>
        </h1>

    )

}

export default Kakao;