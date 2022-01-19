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

interface userInfo {
  nickname: string;
}

const Container = styled.div`
  max-width: 850px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100);
  background-color: rgb(236, 240, 241);
  border-radius: 10px;
`;
const Section = styled.div`
  
`;

function MyInfo() {
  return (
    <div>
      <Container>
        <h1>"방패주워주는수빈이"님의 듀오 모집 정보</h1>
        <form>
          <section>
            <h2>소개글</h2>
            <input type="text" placeholder=""></input>
          </section>
          <section>
            <h2>선호 포지션</h2>
            <input type="radio" name="radio1" id="top" value="top" />
            <label htmlFor="top">Top</label>
            <input type="radio" name="radio1" id="jug" value="jug" />
            <label htmlFor="jug">Jug</label>
            <input type="radio" name="radio1" id="mid" value="mid" />
            <label htmlFor="mid">Mid</label>
            <input type="radio" name="radio1" id="ad" value="ad" />
            <label htmlFor="ad">AD</label>
            <input type="radio" name="radio1" id="sup" value="sup" />
            <label htmlFor="sup">Sup</label>
          </section>
          <section>
            <h2>듀오 희망 포지션</h2>
            <input type="radio" name="radio2" id="top1" value="top" />
            <label htmlFor="top1">Top</label>
            <input type="radio" name="radio2" id="jug1" value="jug" />
            <label htmlFor="jug1">Jug</label>
            <input type="radio" name="radio2" id="mid1" value="mid" />
            <label htmlFor="mid1">Mid</label>
            <input type="radio" name="radio2" id="ad1" value="ad" />
            <label htmlFor="ad1">AD</label>
            <input type="radio" name="radio2" id="sup1" value="sup" />
            <label htmlFor="sup1">Sup</label>
          </section>
          <section>
            <h2>희망 플레이스타일</h2>
            <input type="radio" name="radio3" id="soft" value="즐겜" />
            <label htmlFor="soft">즐겜</label>
            <input type="radio" name="radio3" id="hard" value="빡겜" />
            <label htmlFor="hard">빡겜</label>
          </section>

          <section>
            <h2>보이스</h2>
            <input type="radio" name="radio4" id="voiceOn" value="on" />
            <label htmlFor="voiceOn">가능</label>
            <input type="radio" name="radio4" id="voiceOff" value="off" />
            <label htmlFor="voiceOff">불가능</label>
          </section>

          <section>
            <h2>듀오 모집 여부</h2>
            <input type="radio" name="radio5" id="on" value="on" />
            <label htmlFor="on">ON</label>
            <input type="radio" name="radio5" id="off" value="off" />
            <label htmlFor="off">OFF</label>
          </section>

          <input type="submit" value="Submit" />
        </form>
      </Container>
    </div>
  );
}

export default MyInfo;
