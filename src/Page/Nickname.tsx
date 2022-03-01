import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  margin-right: 5px;
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
}`;
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

const CinfirmWrap = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Nickname() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [tier, setTier] = useState("");
  const [rank, setRank] = useState("");
  const [check, setCheck] = useState(false);
  const history = useNavigate();
  const NICKNAME_URL = `/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`;
  const RANK_TIER_URL = `/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`;

  const fetchNickname = async () => {

    try {
      const res = await axios.get(NICKNAME_URL);

      if (res.status === 200) {
        setId(res.data.id);
        alert("인증에 성공하셨습니다.");
      }
    } catch (e) {
      alert("없는 소환사 닉네임입니다.");
      
    }
  };
  function convertTier(tiers: string) {
    if (tiers === "DIAMOND") {
      return 1;
    } else if (tiers === "PLATINUM") {
      return 2;
    } else if (tiers === "GOLD") {
      return 3;
    } else if (tiers === "SILVER") {
      return 4;
    } else if (tiers === "BRONZE") {
      return 5;
    } else if (tiers === "IRON") {
      return 6;
    }
  }
  function convertRank(ranks: string) {
    if (ranks === "I") {
      return 1;
    } else if (ranks === "II") {
      return 2;
    } else if (ranks === "III") {
      return 3;
    } else if (ranks === "IV") {
      return 4;
    }
  }

  const fetchRank = async () => {
    try {
      const res = await axios
        .get(RANK_TIER_URL)
        .then(function (response) {
          setTier(response.data[0].tier);
          setRank(response.data[0].rank);
          const body = {
            name: name,
            tier: convertTier(response.data[0].tier),
            rank: convertRank(response.data[0].rank),
          };
          return body;
        })
        .then(function (body) {
          postNicknameData(body);
        });
    } catch (e) {
      alert("오류가 발생했습니다.");
    }
  };

  const NICK_URL = "/myinfo/nickname";
  const postNicknameData = async (body: any) => {
    try {
      const res = await axios.post(NICK_URL, body, { withCredentials: true });
      history("/");
    } catch (e) {
      alert("오류가 발생했습니다.");
    }
  };

  const onChangeNick = (event: any) => {
    setName(event.target.value);
  };

  const onSubmitNick = () => {
    fetchNickname();
  };
  const onSubmit = () => {
    fetchRank();
  };

  // useEffect(() => {
  //
  // }, []);

  return (
    <Wrapper>
      <SubForm id="submitForm">
        <FormDiv>
          <Label>(필수)닉네임을 등록해주세요.</Label>
          <p>
            꼭 자신의 닉네임을 등록해주세요. <br />
            등록 후 변경하실 수 없습니다. <br />
            다른 사람의 닉네임을 등록하는 경우 제재될 수 있습니다.
          </p>
          <CinfirmWrap id="nickname">
            <Input onChange={onChangeNick} type="text" name="name" />
            <CinfirmBtn form="nickname" type="button" onClick={onSubmitNick}>
              닉네임 <br />
              확인하기
            </CinfirmBtn>
          </CinfirmWrap>
          <Link to={"/nickname"}>
            {id.length === 0 ? (
              <Btn form="submitForm" type="button" onClick={onSubmit} disabled>
                닉네임 확인을 해주세요.
              </Btn>
            ) : (
              <Btn form="submitForm" type="button" onClick={onSubmit}>
                등록하기
              </Btn>
            )}
          </Link>
        </FormDiv>
      </SubForm>
    </Wrapper>
  );
}

export default Nickname;
