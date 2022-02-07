import { useState } from "react";
import styled from "styled-components";
import Kakao from "./Kakao";


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
const Form = styled.form`
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
const Input = styled.input`
  height: 25px;
  width: 200px;
  
  border-radius: 15px;
`;
const Label = styled.label`
  font-size: 25px;
  margin-top: 5px;
`;
const Btn = styled.button`
  background-color: rgb(209, 204, 192);
  color: black;
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
`;

function Regeister() {
  type Information = {
    email: string;
    authNum: number;
    nickname: string;
    password: string;
    checkPw: string;
  };

  const [email, setEmail] = useState<string>("");
  const [authNum, setAuthNum] = useState<number>(0);
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");
  const [body, setBody] = useState<Information | null>(null);

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangeAuthNum = (event: any) => {
    setAuthNum(event.target.value);
  };
  const onChangeNickname = (event: any) => {
    setNickname(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onChangeCheckPw = (event: any) => {
    setCheckPw(event.target.value);
  };
  const onSubmit = () => {
    setBody({
      ...body,
      email: email,
      authNum: authNum,
      nickname: nickname,
      password: password,
      checkPw: checkPw,
    });
    console.log(body);
  };

  return (
    <div>
      {/* <Header /> */}
      <Wrapper>
        <Form id="regiForm">
          <FormDiv>
            <Label>이메일</Label>
            <Input onChange={onChangeEmail} type="text" name="name" />
            <Label>인증번호</Label>
            <Input onChange={onChangeAuthNum} type="number" name="name" />
            {/* <Label>닉네임</Label>
            <Input onChange={onChangeNickname} type="text" name="name" /> */}
            <Label>비밀번호</Label>
            <Input onChange={onChangePassword} type="text" name="name" />
            <Label>비밀번호 확인</Label>
            <Input onChange={onChangeCheckPw} type="text" name="name" />
            <Btn form="regiForm" type="button" onClick={onSubmit}>
              가입하기
            </Btn>
            <Kakao></Kakao>
          </FormDiv>
        </Form>

      </Wrapper>
    </div>
  );
}

export default Regeister;
