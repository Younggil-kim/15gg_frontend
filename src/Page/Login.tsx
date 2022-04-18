import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Wrapper = styled.div`
  width: 500px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 2px rgba(100, 100, 100);
  background-color: rgb(236, 240, 241);
  border-radius: 10px;
`;
const SubForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 25px;
  margin-top: 5px;
`;
const Input = styled.input`
  height: 25px;
  width: 200px;
  border-radius: 15px;
`;
const Btn = styled.button`
    background-color: rgb(209, 204, 192);
    color:black;
    font-family: inherit;
    border: none;
    border-radius: 10px;
    padding: 5px 5px;
    margin: 5px;
    font-size: 24px;
    margin-top: 10px;
    cursor: pointer;
  &:hover {
    background-color: rgb(132, 129, 122);
    color: white;
  }
}`;

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useNavigate();
  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const dispatch = useDispatch();
  const LOGIN_URL = `https://www.15gg.xyz/auth/login`;

  const postLoginData = async () => {
    try {
      const body = {
        email: email,
        password: password,
      };
      const res = await axios
        .post(LOGIN_URL, body, { withCredentials: true })
        .then((res) => {
          dispatch({ type: "LOG_IN" });
          if (res.data.data.nickname) {
            history("/");
            dispatch({ type: "NICKNAME", nickname: res.data.data.nickname });
          } else {
            history("/nickname");
          }
        });
    } catch (e) {
      alert("오류가 발생했습니다.");
    }
  };
  const onSubmit = () => {
    postLoginData();
  };

  return (
    <div>
      <Wrapper>
        <SubForm id="loginForm">
          <FormDiv>
            <Label>이메일</Label>
            <div>
              <Input onChange={onChangeEmail} type="text" name="name" />
              {/* <select className={styles.email_select}>
                <option value="">--이메일 선택--</option>
                <option value="naver">naver.com</option>
                <option value="daum">daum.net</option>
                <option value="google">gmail.com</option>
              </select> */}
            </div>
            <Label>비밀번호</Label>
            <Input onChange={onChangePassword} type="password" name="name" />
            <Btn form="loginForm" type="button" onClick={onSubmit}>
              로그인
            </Btn>
          </FormDiv>
        </SubForm>
      </Wrapper>
    </div>
  );
}

export default Login;
