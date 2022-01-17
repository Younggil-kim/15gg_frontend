import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import top from "../Static/Img/top.png";
import jug from "../Static/Img/jug.png";
import mid from "../Static/Img/mid.png";
import ad from "../Static/Img/ad.png";
import sup from "../Static/Img/sup.png";
import ch from "../Static/Img/ch.png";
import gm from "../Static/Img/gm.png";
import ma from "../Static/Img/ma.png";
import dia from "../Static/Img/dia.png";
import pt from "../Static/Img/pt.png";
import gold from "../Static/Img/gold.png";
import sil from "../Static/Img/sil.png";
import brz from "../Static/Img/brz.png";
import iron from "../Static/Img/iron.png";
import unrank from "../Static/Img/unrank.png";

const Wrapper = styled(motion.div)`
  height: 420px;
  margin-top: 10px;
  width: 100vw;
  display: flex;
  background-color: #ecf0f1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Box = styled(motion.div)`
  width: 300px;
  height: 400px;
  background-color: rgb(236, 240, 241);
  border-radius: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100);
`;
const BoxRecent = styled(motion.div)`
  /* width: 300px; */
  height: 400px;
  position: absolute;
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  border-radius: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100);
`;
const boxVar = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5 },
  }),
};
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
const Text = styled.div`
  font-size: 25px;
  margin-left: 25px;
`;
const SlidBtnWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Row = styled(motion.div)`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 5px;
  position: absolute;
  width: 100%;
`;

const offset = 6;

interface infoType {
  nickname: string;
  tier: string;
  rank: string;
  line: string;
  duoLine: string;
  playStyle: string;
  voice: string;
}

const datas: Array<infoType> = [
  {
    nickname: "민초전략실수빈이",
    tier: "Master",
    rank: "240",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "자야장인수빈이",
    tier: "Grand Master",
    rank: "460",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "수빈이닉네임은조",
    tier: "Gold",
    rank: "2",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "수빈오브레전드",
    tier: "Platinum",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "휴지키우기",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "테트리스장인수빈",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "수빈수빈수빈수빈",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "고양이수빈이",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "내로남불수빈이",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "수빈이선샤인",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "삼성직원수빈이",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "밥사주는수빈이",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
];

function Main() {
  const [idx, setIdx] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [windowSize, setWindowSize] = useState(window.outerWidth);
  const rowVar = {
    hidden: {
      x: windowSize + 10,
    },
    visible: {
      x: 0,
    },
    exit: {
      x: -windowSize - 10,
    },
  };
  const increaseIdx = () => {
    if (datas) {
      if (leaving) return;
      toggleLeaving();
      const totalInfo = datas.length ;
      const maxIdx = Math.floor(totalInfo / offset)-1;
      setIdx((prev) => (prev === maxIdx ? 0 : prev + 1));
      setWindowSize(window.outerWidth)
      console.log(idx)
      console.log(datas.length, maxIdx)
      console.log(window.outerWidth)
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);


  return (
    <div>
      <div>
        <Text>추천 매칭</Text>
        <Wrapper>
          <AnimatePresence exitBeforeEnter={true} initial={false} onExitComplete={toggleLeaving}>
            <Row
            
              variants={rowVar}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration:0.5 }}
              key={idx}
            >
              {datas.slice(offset * idx, offset * idx + offset).map((data) => (
                <Box

                  key={data.nickname}
                >
                  <div>{data.nickname}</div>

                  <br />
                  <div>
                    <div style={{ fontSize: 20 }}>티어</div>
                    <img
                      src={gm}
                      alt=""
                      style={{ width: 30, height: 30, marginTop: 5 }}
                    />

                    <div>
                      <div style={{ fontSize: 20 }}>라인</div>
                      <img
                        src={ad}
                        alt=""
                        style={{ width: 30, height: 30, marginTop: 5 }}
                      />

                      <br />
                      <div style={{ fontSize: 20 }}>찾는 라인</div>
                      <img
                        src={sup}
                        alt=""
                        style={{ width: 30, height: 30, marginTop: 5 }}
                      />
                    </div>

                    <div style={{ fontSize: 20 }}>플레이스타일 : 빡겜</div>

                    <div style={{ fontSize: 20 }}>보이스: 가능</div>
                    <br />
                    <Btn
                      as="a"
                      href="https://www.op.gg/summoner/userName=미래전략실이호창"
                      target="_blank"
                    >
                      전적확인
                    </Btn>
                    <Btn type="button">
                      <Link to={"/Chatting"}>듀오신청</Link>
                    </Btn>
                    <br />
                  </div>
                </Box>
              ))}
            </Row>
          </AnimatePresence>
        </Wrapper>
        <SlidBtnWrapper>
          <Btn onClick={increaseIdx}>prev</Btn>
          <Btn onClick={increaseIdx}>next</Btn>
        </SlidBtnWrapper>
      </div>
      <div>
        <Text>신규 매칭</Text>
        <Wrapper>
          {/* <AnimatePresence custom={back}>
            <BoxRecent
              custom={back}
              variants={boxVar}
              initial="entry"
              animate="center"
              exit="exit"
              key={visible}
            >
              <div>수빈이민초당</div>

              <br />
              <div>
                <div style={{ fontSize: 20 }}>다이아</div>
                <img
                  src={dia}
                  alt=""
                  style={{ width: 30, height: 30, marginTop: 5 }}
                />

                <div>
                  <div style={{ fontSize: 20 }}>라인</div>
                  <img
                    src={sup}
                    alt=""
                    style={{ width: 30, height: 30, marginTop: 5 }}
                  />

                  <br />
                  <div style={{ fontSize: 20 }}>찾는 라인</div>
                  <img
                    src={ad}
                    alt=""
                    style={{ width: 30, height: 30, marginTop: 5 }}
                  />
                </div>

                <div style={{ fontSize: 20 }}>플레이스타일 : 빡겜</div>

                <div style={{ fontSize: 20 }}>보이스: 가능</div>
                <br />

                <Btn type="button">전적확인</Btn>
                <Btn type="button">듀오신청</Btn>
                <br />
              </div>
            </BoxRecent>
          </AnimatePresence> */}
        </Wrapper>
      </div>
    </div>
  );
}

export default Main;
