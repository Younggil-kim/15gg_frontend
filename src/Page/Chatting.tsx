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

const Container = styled.div`
  width: 850px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 2px rgba(100, 100, 100);
  background-color: rgb(236, 240, 241);
  border-radius: 10px;
`;

const Chat = styled.div`
  height: 90%;
  overflow-y: scroll;
`;

const Form = styled.form`
  height: 10%;
  border-top: 1px solid black;
  /* text-align: center; */
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Msg = styled.input`
  margin: 15px;
  width: 80%;
  height: 32px;
  border-radius: 8px;
`;
const Send = styled.input`
  width: 100px;
  /* padding : 15px;; */
  height: 34px;
  border-radius: 50px;
  background-color: rgb(209, 204, 192);
  color: black;
  font-size: 18px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgb(132, 129, 122);
    color: white;
  }
`;

function Chatting() {
  return (
    <Container>
      <Chat></Chat>
      <Form>
        <Msg type="text"></Msg>
        <Send type="submit" value="전송"></Send>
      </Form>
    </Container>
  );
}

export default Chatting;
