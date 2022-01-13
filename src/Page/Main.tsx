import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
  AnimatePresence,
} from "framer-motion";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import top from "../Static/Img/top.png";
import jug from "../Static/Img/jug.png";
import mid from "../Static/Img/mid.png";
import ad from "../Static/Img/ad.png";
import sup from "../Static/Img/sup.png";

const Wrapper = styled(motion.div)`
  height: 420px;
  margin-top: 40px;
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
  position: absolute;
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  border-radius: 45px;
  top: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100);
`;

const BoxRecent = styled(motion.div)`
  width: 300px;
  height: 400px;
  display: grid;
  position: absolute;
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  border-radius: 45px;
  display: flex;
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
    scale: 0,
    transition: { duration: 0.5 },
  }),
};

function Main() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const prev = () => {
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
    setBack(true);
  };
  const next = () => {
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
    setBack(false);
  };
  return (
    <div>
      <Wrapper>
        <AnimatePresence custom={back}>
          <Box
            custom={back}
            variants={boxVar}
            initial="entry"
            animate="center"
            exit="exit"
            key={visible}
          >
            <div>
              미래전략실수빈이
            </div>
          <div style={{marginTop: 10}}>
            <div style={{fontSize: 20}}>
              그랜드마스터
            </div>
            <div>
              <div style={{fontSize: 20}}>
              라인
              </div>
              <img src={ad} alt="" style={{ width: 30, height: 30, marginTop: 5}} />
              
              <br />
              <div style={{fontSize: 20}}>
              찾는 라인
              </div>
              <img src={sup} alt="" style={{ width: 30, height: 30, marginTop: 5 }} />
            </div>

            <div style={{fontSize: 20}}>
              플레이스타일 : 빡겜
            </div>
 
            <div style={{fontSize: 20}}>
              보이스: 가능
            </div>
              <br />
              전적확인 듀오신청
              <br />
            </div>
          </Box>
        </AnimatePresence>
      </Wrapper>
      <button onClick={next}>next</button>
      <button onClick={prev}>prev</button>
      <Wrapper>
        <AnimatePresence custom={back}>
          <BoxRecent
            custom={back}
            variants={boxVar}
            initial="entry"
            animate="center"
            exit="exit"
            key={visible}
          >
            수빈이민초당
            <br />
            다이아 I
            <br />
            <br />
            라인:
            <br />
            찾는 라인:
            <br />
            플레이스타일
            <br />
            보이스 : 가능
            <br />
            전적확인 듀오신청
            <br />
          </BoxRecent>
        </AnimatePresence>
      </Wrapper>
    </div>
  );
}

export default Main;
