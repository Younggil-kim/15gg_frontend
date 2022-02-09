import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  height: 250px;
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
  width: 80%;
  border-radius: 15px;
  margin-right : 5px;
`;
const Btn = styled.button`
    width: 100%;
    background-color: rgb(209, 204, 192);
    color:black;
    font-family: inherit;
    border: none;
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 5px;
    font-size: 24px;
    margin-top: 10px;
    cursor: pointer;
  &:hover {
    background-color: rgb(132, 129, 122);
    color: white;
  }
}
`;
const CinfirmBtn = styled.button`
  background-color: rgb(209, 204, 192);
  color: black;
  font-family: inherit;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: rgb(132, 129, 122);
    color: white;
  }
`;

const CinfirmWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Nickname() {
  return (
    <Wrapper>
      <SubForm id="loginForm">
        <FormDiv>
          <Label>(필수)닉네임을 등록해주세요.</Label>
          <p>
            꼭 자신의 닉네임을 등록해주세요. <br />
            등록 후 변경하실 수 없습니다. <br />
            다른 사람의 닉네임을 등록하는 경우 제재될 수 있습니다.
          </p>
          <CinfirmWrap>
            <Input type="text" name="name" />
            <CinfirmBtn>
              닉네임 <br />
              확인하기
            </CinfirmBtn>
          </CinfirmWrap>
          <Btn form="loginForm" type="button">
            등록하기
          </Btn>
        </FormDiv>
      </SubForm>
    </Wrapper>
  );
}

export default Nickname;
