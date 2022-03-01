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
import Modal from "../Components/Modal";
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
import { isWhiteSpaceLike } from "typescript";

const Wrapper = styled(motion.div)`
  height: 420px;
  margin-top: 10px;
  width: 100%;
  display: flex;
  background-color: #ecf0f1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Box = styled(motion.div)`
  width: 300px;
  height: 350px;
  background-color: rgb(236, 240, 241);
  border-radius: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100);
  &:hover {
    height: 400px;
  }
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Matching = styled(motion.div)`
  width: 25px;
  height: 25px;
  background-color: rgb(234, 240, 241);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
  &:hover{
    background-color: rgb(132, 129, 122);
    color: white;
  }

`;

const TitleCon = styled.div`
  display: flex;
  align-items: center;
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
const LinkBtn = styled(Link)`
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
  width: 100vw;
`;
const BtnInfo = styled(motion.div)`
  padding: 10px;
  opacity: 0;
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* bottom: 0; */
`;
const infoVar = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.2,
      // type:"tween"
    },
  },
};
const BoxVar = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    transition: {
      delay: 0.3,
      duration: 0.2,
      // type:"tween"
    },
  },
};
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
    nickname: "test1",
    tier: "Master",
    rank: "240",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test2",
    tier: "Grand Master",
    rank: "460",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test3",
    tier: "Gold",
    rank: "2",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test4",
    tier: "Platinum",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test5",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test6",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test7",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test8",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test9",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test10",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test11",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test12",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
];
const datasRecent: Array<infoType> = [
  {
    nickname: "test13",
    tier: "Master",
    rank: "240",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test14",
    tier: "Grand Master",
    rank: "460",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test15",
    tier: "Gold",
    rank: "2",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test16",
    tier: "Platinum",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test17",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test18",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test19",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test20",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test21",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test22",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test23",
    tier: "Dia",
    rank: "1",
    line: "AD",
    duoLine: "Sup",
    playStyle: "즐겜",
    voice: "가능",
  },
  {
    nickname: "test24",
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
  const [idxRecent, setRecentIdx] = useState(0);
  const [recentLeaving, setRecentLeaving] = useState(false);
  const [windowSize, setWindowSize] = useState(window.outerWidth);
  const [back, setBack] = useState(false);
  const [backRecent, setBackRecent] = useState(false);

  const rowVarRecent = {
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
    setBack(false);
    if (datas) {
      if (leaving) return;
      toggleLeaving();
      const totalInfo = datas.length;
      const maxIdx = Math.floor(totalInfo / offset) - 1;
      setIdx((prev) => (prev === maxIdx ? 0 : prev + 1));
      setWindowSize(window.outerWidth);
    }
  };
  const decreaseIdx = () => {
    setBack(true);
    if (datas) {
      if (leaving) return;
      toggleLeaving();
      const totalInfo = datas.length;
      const maxIdx = Math.floor(totalInfo / offset) - 1;
      setIdx((prev) => (prev === 0 ? maxIdx : prev - 1));
      setWindowSize(window.outerWidth);
    }
  };

  const increaseIdxRecent = () => {
    setBackRecent(false);
    if (datasRecent) {
      if (recentLeaving) return;
      toggleLeavingRecent();
      const totalInfo = datas.length;
      const maxIdx = Math.floor(totalInfo / offset) - 1;
      setRecentIdx((prev) => (prev === maxIdx ? 0 : prev + 1));
      setWindowSize(window.outerWidth);
      setBackRecent(false);
    }
  };
  const decreaseIdxRecent = () => {
    setBackRecent(false);
    if (datasRecent) {
      if (recentLeaving) return;
      toggleLeavingRecent();
      const totalInfo = datas.length;

      const maxIdx = Math.floor(totalInfo / offset) - 1;
      setRecentIdx((prev) => (prev === 0 ? maxIdx : prev - 1));
      setWindowSize(window.outerWidth);
      setBackRecent(true);
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const toggleLeavingRecent = () => setRecentLeaving((prev) => !prev);

  const rowVar = {
    hidden: (back: boolean) => ({
      x: back ? -windowSize - 10 : windowSize + 10,
    }),
    visible: {
      x: 0,
    },
    exit: (back: boolean) => ({
      x: back ? +windowSize + 10 : -windowSize - 10,
    }),
  };

  const [modalVisibleRcm, setModalVisibleRcm] = useState(false);
  const openModalRcm = () => {
    setModalVisibleRcm(true);
  };
  const closeModalRcm = () => {
    setModalVisibleRcm(false);
  };

  const [modalVisibleRct, setModalVisibleRct] = useState(false);
  const openModalRct = () => {
    setModalVisibleRct(true);
  };
  const closeModalRct = () => {
    setModalVisibleRct(false);
  };
  return (
    <div>
      <div>
        <TitleCon>
          <Text>추천 매칭</Text>
          <Matching onClick={openModalRcm}>?</Matching>
          {modalVisibleRcm && (
            <Modal
              visible={modalVisibleRcm}
              closable={true}
              maskClosable={true}
              onClose={closeModalRcm}
            >
              <span>
              듀오를 추천해주는 시스템입니다.<br />
              정확한 매칭을 원하시면, 내 정보 수정 탭에서 정보를 입력해주세요.
              </span>
            </Modal>
          )}
        </TitleCon>
        <Wrapper>
          <AnimatePresence
            exitBeforeEnter={true}
            initial={false}
            onExitComplete={toggleLeaving}
            custom={back}
          >
            <Row
              // number={Math.floor(windowSize/300)}
              custom={back}
              variants={rowVar}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              key={idx}
            >
              {datas.slice(offset * idx, offset * idx + offset).map((data) => (
                <Box
                  variants={BoxVar}
                  whileHover="hover"
                  initial="noraml"
                  key={data.nickname}
                >
                  <div style={{ marginTop: 10 }}>{data.nickname}</div>

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
                    <BtnInfo variants={infoVar}>
                      <Btn
                        as="a"
                        href="https://www.op.gg/summoner/userName=미래전략실이호창"
                        target="_blank"
                      >
                        전적확인
                      </Btn>
                      <Btn type="button">
                        <LinkBtn to={"/Chatting"}>듀오신청</LinkBtn>
                      </Btn>
                    </BtnInfo>
                  </div>
                </Box>
              ))}
            </Row>
          </AnimatePresence>
        </Wrapper>
        <SlidBtnWrapper>
          <Btn onClick={decreaseIdx}>prev</Btn>
          <Btn onClick={increaseIdx}>next</Btn>
        </SlidBtnWrapper>
      </div>
      <div>
        <TitleCon>
        <Text>신규 매칭</Text>
        <Matching onClick={openModalRct}>?</Matching>
          {modalVisibleRct && (
            <Modal
              visible={modalVisibleRct}
              closable={true}
              maskClosable={true}
              onClose={closeModalRct}
            >
              <span>
              가장 최근에 등록된 소환사를 매칭해주는 시스템입니다.<br />
              설정된 라인에 관계없이 모든 라인을 보여줍니다.
              </span>
            </Modal>
          )}
        </TitleCon>
        <Wrapper>
          <AnimatePresence
            exitBeforeEnter={true}
            initial={false}
            onExitComplete={toggleLeavingRecent}
            custom={backRecent}
          >
            <Row
              // number={6}
              variants={rowVar}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              key={idxRecent}
              custom={backRecent}
            >
              {datasRecent
                .slice(offset * idxRecent, offset * idxRecent + offset)
                .map((data) => (
                  <Box
                    variants={BoxVar}
                    whileHover="hover"
                    initial="noraml"
                    key={data.nickname}
                  >
                    <div style={{ marginTop: 10 }}>{data.nickname}</div>

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
                      <BtnInfo variants={infoVar}>
                        <Btn
                          as="a"
                          href="https://www.op.gg/summoner/userName=미래전략실이호창"
                          target="_blank"
                        >
                          전적확인
                        </Btn>
                        <Btn type="button">
                          <LinkBtn to={"/Chatting"}>듀오신청</LinkBtn>
                        </Btn>
                      </BtnInfo>
                    </div>
                  </Box>
                ))}
            </Row>
          </AnimatePresence>
        </Wrapper>
        <SlidBtnWrapper>
          <Btn onClick={decreaseIdxRecent}>prev</Btn>
          <Btn onClick={increaseIdxRecent}>next</Btn>
        </SlidBtnWrapper>
      </div>
    </div>
  );
}

export default Main;
