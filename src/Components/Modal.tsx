import React from "react";
import styled from "styled-components";
import CloseButton from "../Static/Img/gm.png";
interface ModalProps {
  visible?: boolean;
}

const ModalWrap = styled.div<ModalProps>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;
const ModalOverlay = styled.div<ModalProps>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
`;
const Btn = styled.button`
    background-color: rgb(234, 240, 241);
    color:black;
    font-family: inherit;
    border: none;
    border-radius: 10px;
    padding: 5px 5px;
    margin: 5px;
    font-size: 15px; 
    margin-top: 10px;
    cursor: pointer;
  &:hover {
    background-color: rgb(209, 204, 192);

  }
`

interface Props {
  visible?: boolean;
  children?: JSX.Element|JSX.Element[];
  onClose?: any;
  maskClosable?: boolean;
  closable?: boolean;
  onClick?: () => void;
}

function Modal({
  visible,
  children,
  onClose,
  maskClosable,
  closable,
  onClick,
}: Props) {
  const onMaskClick = (event: any) => {
    if (event.target === event.currentTarget) {
      onClose(event);
    }
  };

  const close = (event: any) => {
    if (onClose) {
      onClose(event);
    }
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrap
        onClick={() => (maskClosable ? onMaskClick : null)}
        tabIndex={-1}
        visible={visible}
      >
        <ModalInner tabIndex={0}>
          {children}
          {closable && <Btn onClick={close}>닫기</Btn>}
        </ModalInner>
      </ModalWrap>
    </>
  );
}

export default Modal;
